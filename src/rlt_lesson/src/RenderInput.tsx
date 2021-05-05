import React from "react";

type InputValue = {
  target: { value: string };
};
type Props = {
  outputConsole: (input: string) => void;
};

const RenderInput = (props: Props) => {
  const [input, setInput] = React.useState("");

  const outputValue = () => {
    if (input) {
      props.outputConsole(input);
    }
  };
  const updateValue = (e: InputValue) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default RenderInput;
