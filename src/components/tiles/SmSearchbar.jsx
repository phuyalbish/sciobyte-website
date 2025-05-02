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
      className="flex justify-between items-center  pl-2 bg-white border border-B200 rounded-md"
    >
      <FaSearch className="cursor-pointer fill-N500" />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="text-sm min-w-64 border-none p-2 bg-white rounded-md focus:outline-none text-default placeholder:text-secondary flex"
        placeholder={text}
      />
    </form>
  );
};

export default SmSearchbar;