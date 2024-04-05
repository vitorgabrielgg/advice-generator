import { ReactNode, createContext, useState } from "react";

type Advice = {
  children: ReactNode;
};

const initialValue = {
  adviceData: {
    id: 0,
    advice: "Click on the green button to receive advice.",
  },
  setAdviceData: () => {},
};

type AdviceType = {
  adviceData: {
    id: number;
    advice: string;
  };
  setAdviceData: (newState: { id: number; advice: string }) => void;
};

export const AdviceContext = createContext<AdviceType>(initialValue);

export const AdviceProvider = ({ children }: Advice) => {
  const [adviceData, setAdviceData] = useState(initialValue.adviceData);

  return (
    <AdviceContext.Provider value={{ adviceData, setAdviceData }}>
      {children}
    </AdviceContext.Provider>
  );
};
