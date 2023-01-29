import { PropsWithChildren, Ref } from "react";
import { ResizerProvider, useResizerContext } from "../context/resizer-context";
import { useResizer } from "../hooks/use-resize";
import "../styles.css";

interface ResizerProps extends PropsWithChildren {
  maxW?: string | number;
  maxH?: string | number;
  dir?: "vertical" | "horizontal";
}

/**
 * Resizable component with a dragger.
 * @param maxW maximum width of the resizeable area.
 * @param maxH maximum height of the resizeable area.
 * @param dir direction of resizing.
 */
const Resizer = ({
  maxW,
  maxH,
  dir = "horizontal",
  children,
}: ResizerProps) => {
  const {
    parent: resizerWrapper,
    dragger,
    sidebar: resizer,
    hideContent,
  } = useResizer();

  return (
    <ResizerProvider value={{ draggerRef: dragger }}>
      <div className="resizer" ref={resizerWrapper}>
        <div
          className="resizer_content"
          ref={resizer}
          style={{ display: hideContent ? "none" : "block" }}
        >
          {children}
        </div>
        {/* <div className="resizer_dragger" ref={dragger} /> */}
      </div>
    </ResizerProvider>
  );
};

interface DraggerProps {
  draggerRef: Ref<HTMLDivElement>;
}

/**
 * Dragger Element for resizeable area
 */
const Dragger = () => {
  const resizerContext = useResizerContext();
  return (
    <div className="resizer_dragger" ref={resizerContext.draggerRef}></div>
  );
};

Resizer.Dragger = Dragger;

export { Resizer };
