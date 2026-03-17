import { processTabs } from "./processConfig";
import { useProcess } from "./context/ProcessContext";

const TabNavigation = () => {
  const { activeTab, completedTabs, goToStep } = useProcess();

  return (
    <div className="tab-nav">
      {processTabs.map(tab => {
        const disabled =
          tab.id > activeTab && !completedTabs.includes(tab.id - 1);

        return (
          <button
            key={tab.id}
            disabled={disabled}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => goToStep(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation;
