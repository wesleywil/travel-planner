import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import type { AppDispatch } from "@/redux/store";
import { filterPlans } from "@/redux/plans/plans";

const TravelsControlFilter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [option, setOption] = useState<string>("country");
  const [search, setSearch] = useState<string | number | undefined>();

  const handleSearch = () => {
    dispatch(filterPlans({ [option]: search }));
  };
  return (
    <div className="flex self-center font-semibold text-[#2c2d35]">
      <select
        onChange={(e) => setOption(e.target.value)}
        className="rounded-l text-[#97c34f] bg-[#2c2d35] border border-[#97c34f] outline-0"
      >
        <option value="country">Country</option>
        <option value="place">Place</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
      <input
        type={option === "year" || option === "month" ? "number" : "text"}
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Travels Plan"
        className="px-2 py-1 bg-[#f7fbf9] outline-0"
      />
      <button
        onClick={handleSearch}
        className="px-2 bg-[#97c34f] hover:bg-[#97c34f]/70 rounded-r transform duration-500 ease-in-out"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default TravelsControlFilter;
