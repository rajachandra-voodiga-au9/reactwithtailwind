import Hero from "./components/Hero";
import Logo from "./components/Logo";
import List from "./components/List";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const getLocalstorage = () => {
    const items = localStorage.getItem("items");
    if (items) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  };
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalstorage());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: uuidv4(),
      title: text,
    };
    setItems([newItems, ...items]);
    setText("");
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <main>
        <Logo></Logo>
        <Hero></Hero>
        <form
          className="flex justify-center items-center mt-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="text"
            placeholder="Enter Todo Item"
            className="py-3 px-5 rounded-lg bg-gray-700 text-white tracking-wide"
            autocomplete="off"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </form>
        <List items={items} setItems={setItems} deleteItem={deleteItem}></List>
      </main>
    </>
  );
};

export default App;
