import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SmSearchbar = ({ text = "", onAction }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (onAction) {
      onAction(searchText);
    }
  }, [searchText, onAction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAction) {
      onAction(searchText);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center pl-2 border border-tertiary rounded-md"
    >
      <FaSearch className="cursor-pointer fill-slate-400" />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="text-sm border-none p-2 w-full bg-transparent focus:outline-none text-default placeholder:text-secondary flex"
        placeholder={text}
      />
    </form>
  );
};

export default SmSearchbar;