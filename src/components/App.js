import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PakingList from "./PakingList";
import Stats from "./Stats";

export default function App() {
  const [item, setItem] = useState([]);

  function handelAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handelClearList(id) {
    setItem([]);
  }

  function handelToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handelAddItem} />
      <PakingList
        items={item}
        onDeleteItem={handelDeleteItem}
        handelToggleItem={handelToggleItem}
        onClearList={handelClearList}
      />
      <Stats items={item} />
    </div>
  );
}
