import { PropsWithChildren } from "react";
import { useResizer } from "../hooks/use-resize";

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
  children
}: ResizerProps) => {
  const {
    parent: resizerWrapper,
    dragger,
    sidebar: resizer,
    hideContent
  } = useResizer();

  return (
    <div className="resizer" ref={resizerWrapper}>
      <div
        className="resizer_content"
        ref={resizer}
        style={{ display: hideContent ? "none" : "block" }}
      >
        {children}
      </div>
      <div className="resizer_dragger" ref={dragger} />
    </div>
  );
};

export { Resizer };
