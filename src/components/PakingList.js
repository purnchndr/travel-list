import { useState } from "react";
import Action from "./Action";
import List from "./List";

const PakingList = ({ items, onDeleteItem, handelToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedArray = [];

  switch (sortBy) {
    case "input": {
      sortedArray = items;
      break;
    }
    case "description": {
      sortedArray = [...items].sort((a, b) => a.description.localeCompare(b));
      break;
    }
    case "packed": {
      sortedArray = [...items].sort(
        (a, b) => Number(a.packed) - Number(b.packed)
      );
      break;
    }
    case "quantity": {
      sortedArray = [...items].sort((a, b) => a.quantity - b.quantity);
      break;
    }

    default:
      break;
  }
  return (
    <div className="list">
      <ul>
        {sortedArray.map((item, i) => (
          <List
            item={item}
            onDeleteItem={onDeleteItem}
            key={i}
            handelToggleItem={handelToggleItem}
          />
        ))}
      </ul>
      <Action sortBy={sortBy} setSortBy={setSortBy} onClearList={onClearList} />
    </div>
  );
};

export default PakingList;
