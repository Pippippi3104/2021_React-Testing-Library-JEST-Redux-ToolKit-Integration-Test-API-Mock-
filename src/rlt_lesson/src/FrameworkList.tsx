import React from "react";

type Framework = {
  id: number;
  item: string;
};
type Props = {
  frameworks?: Framework[];
};

const FrameworkList = (props: Props) => {
  if (!props.frameworks || !props.frameworks.length) {
    return <h1>No data !</h1>;
  }

  return (
    <div>
      <ul>
        {props.frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
