import { createContext, useState, useEffect } from "react";
import { loadData, saveData } from "../utils/storage";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await loadData();
        if (data) {
          setIncomes(data.incomes || []);
          setExpenses(data.expenses || []);
          calculateBalance(data.incomes || [], data.expenses || []);
        }
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const addIncome = (income) => {
    const newIncomes = [...incomes, income];
    setIncomes(newIncomes);
    calculateBalance(newIncomes, expenses);
    saveData({ incomes: newIncomes, expenses });
  };

  const addExpense = (expense) => {
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
    calculateBalance(incomes, newExpenses);
    saveData({ incomes, expenses: newExpenses });
  };

  const calculateBalance = (incs, exps) => {
    const totalIncome = incs.reduce((sum, inc) => sum + inc.amount, 0);
    const totalExpense = exps.reduce((sum, exp) => sum + exp.amount, 0);
    setBalance(totalIncome - totalExpense);
  };

  return (
    <AppContext.Provider
      value={{ incomes, expenses, balance, addIncome, addExpense, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
