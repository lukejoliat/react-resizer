import { PropsWithChildren } from 'react';

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
declare const Resizer: {
    ({ maxW, maxH, dir, children, }: ResizerProps): JSX.Element;
    Dragger: () => JSX.Element;
};

export { Resizer };
