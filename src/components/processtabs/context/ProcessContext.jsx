import { createContext, useContext, useEffect, useState } from "react";

const ProcessContext = createContext();

const STORAGE_KEY = "process-flow";

export const ProcessProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [completedTabs, setCompletedTabs] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      setActiveTab(saved.activeTab);
      setCompletedTabs(saved.completedTabs);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ activeTab, completedTabs })
    );
  }, [activeTab, completedTabs]);

  const completeStep = (stepId) => {
    if (!completedTabs.includes(stepId)) {
      setCompletedTabs(prev => [...prev, stepId]);
    }
  };

  const nextStep = () => {
    completeStep(activeTab);
    setActiveTab(prev => prev + 1);
  };

  const goToStep = (stepId) => {
    setActiveTab(stepId);
  };

  return (
    <ProcessContext.Provider
      value={{
        activeTab,
        completedTabs,
        nextStep,
        goToStep
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
};

// Custom hook (BEST PRACTICE)
export const useProcess = () => useContext(ProcessContext);
