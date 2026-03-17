import { useState } from "react";
import { useProcess } from "../context/ProcessContext";

const StepOne = () => {
  const { nextStep } = useProcess();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!email.includes("@")) {
      setError("Valid email required");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2>Basic Info</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={submit}>Next</button>
    </div>
  );
};

export default StepOne;
