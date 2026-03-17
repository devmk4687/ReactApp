import { useProcess } from "../context/ProcessContext";

const StepTwo = () => {
  const { nextStep } = useProcess();

  return (
    <div>
      <h2>Details</h2>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepTwo;
