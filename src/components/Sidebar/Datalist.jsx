import React from "react";

const Datalist = ({ listId, list }) => {
  return (
    <datalist id={listId}>
      {list.map((listVal) => (
        <option
          key={listVal}
          value={listVal}
        >
          {listVal}
        </option>
      ))}
    </datalist>
  );
};

export default Datalist;
