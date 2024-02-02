import { ReactNode, createContext, useState } from "react";

export type QuestionRule = {
  id?: string;
  fieldNumber: number;
  content: string;
};

type QuestionListContextType = {
  questionList: QuestionRule[];
  setQuestionList: React.Dispatch<React.SetStateAction<QuestionRule[]>>;
};

const QuestionListContext = createContext<QuestionListContextType>({
  questionList: [],
  setQuestionList: () => {},
});

export function QuestionListProvider({ children }: { children: ReactNode }) {
  const [questionList, setQuestionList] = useState<QuestionRule[]>([]);

  return (
    <QuestionListContext.Provider value={{ questionList, setQuestionList }}>
      {children}
    </QuestionListContext.Provider>
  );
}

export default QuestionListContext;
