import { setSearchQuery } from "@/redux/slices/searchSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    };


  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <input
        type="text"
        value={query}
        placeholder="Search Product"
        onChange={handleChange}
        className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
      />
      <IoSearchOutline className="absolute top-3 right-3 w-5 h-5 font-bold text-gray-500" />
    </div>
  );
};

export default SearchBar;
