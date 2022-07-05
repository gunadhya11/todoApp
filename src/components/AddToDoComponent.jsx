import React from "react";

const AddToDoComponent = ({ handleAddButtonClick }) => {
  const [inputValue, setInputValue] = React.useState("");
  React.useEffect(() => {
    setInputValue("")
  }, [])
  return (
    <>
      <div className="md:flex md:items-center mb-6 p-10">
        <div className="md:w-1/3">
          <label>Text</label>
        </div>
        <div className="md:w-2/3">
          <input
            className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </div>
      </div>
      <div className="flex align-items-end">
        <button
          onClick={() => handleAddButtonClick(inputValue)}
          className="rounded-lg bg-orange-500 p-3  text-white"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddToDoComponent;
