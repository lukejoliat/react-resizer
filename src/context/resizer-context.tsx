import React, {
  createContext,
  PropsWithChildren,
  Ref,
  useContext,
} from "react";

const ResizerContext = createContext<{
  draggerRef: Ref<HTMLDivElement> | undefined;
}>({
  draggerRef: undefined,
});

interface ResizerProviderProps extends PropsWithChildren {
  value: { draggerRef: Ref<HTMLDivElement> };
}

export const ResizerProvider = ({ value, children }: ResizerProviderProps) => {
  return (
    <ResizerContext.Provider value={value}>{children}</ResizerContext.Provider>
  );
};

export const useResizerContext = () => {
  const context = useContext(ResizerContext);
  if (context === undefined) {
    throw new Error("useResizerContext must be used within a ResizerProvider.");
  }
  return context;
};
