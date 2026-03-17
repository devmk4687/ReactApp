import { ProcessProvider } from "./context/ProcessContext";
import { processTabs } from "./processConfig";
import TabNavigation from "./TabNavigation";

const ProcessContent = () => {
  const { activeTab } = useProcess();
  const ActiveComponent = processTabs[activeTab].component;

  return <ActiveComponent />;
};

import { useProcess } from "./context/ProcessContext";

const ProcessTabs = () => {
  return (
    <ProcessProvider>
      <TabNavigation />
      <ProcessContent />
    </ProcessProvider>
  );
};

export default ProcessTabs;
 