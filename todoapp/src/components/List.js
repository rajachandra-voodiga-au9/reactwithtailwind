import { IoClose } from "react-icons/io5";
const List = ({ items, setItems, deleteItem }) => {
  return (
    <>
      {items.length !== 0 && (
        <article>
          <ul className="bg-gray-700 mx-5  rounded-lg mt-10 sm:max-w-xl sm:mx-auto">
            {items.map(({ id, title }) => (
              <ul className="flex items-center justify-between border-b border-gray-600 px-5">
                <li
                  key={id}
                  className="text-white py-2 tracking-wider   todo-list"
                >
                  {title}
                </li>
                <button className="text-xl" onClick={() => deleteItem(id)}>
                  <IoClose className="text-red-400" />
                </button>
              </ul>
            ))}
            <ul className="px-5 py-3 flex items-center justify-between">
              <li>
                <p className="text-sm text-gray-400">
                  {items.length} items left
                </p>
              </li>
              <li>
                <button
                  className="text-sm text-gray-400"
                  onClick={() => setItems([])}
                >
                  Clear List
                </button>
              </li>
            </ul>
          </ul>
        </article>
      )}
    </>
  );
};

export default List;
