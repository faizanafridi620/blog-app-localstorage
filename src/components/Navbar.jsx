import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useBlog } from "../context";

library.add(fas, far, fab);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const {setSearch} = useBlog();

  const handleSearch = () =>{
    setSearch(searchValue)
  }

  useEffect(() => {
    if(searchValue === ""){
      setSearch("")
    }
  },[searchValue])

  return (
    <>
      <nav className="bg-gray-100 px-6 py-4 flex items-center justify-between text-black">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-xl" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-3 py-2 rounded-md hover:bg-white/10">
              Profile
            </button>
            <button className="px-3 py-2 rounded-md hover:bg-white/10">
              All Blogs
            </button>
            <button className="px-3 py-2 rounded-md hover:bg-white/10">
              Create Blog
            </button>
          </div>
        </div>

        <div className="hidden md:block relative w-72">
          <input
            type="text"
            placeholder="Search Blogs..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-md bg-black/10 
                       placeholder-gray-400 text-black 
                       focus:bg-black/20 outline-none transition"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
          </span>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 
                 px-2 py-1 rounded-md hover:bg-white/20 transition"
                 onClick={handleSearch}
          >
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-black z-50 
        transform transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={["fas", "xmark"]} />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <button className="px-3 py-2 rounded-md hover:bg-white/10 text-left">
            Profile
          </button>
          <button className="px-3 py-2 rounded-md hover:bg-white/10 text-left">
            All Blogs
          </button>
          <button className="px-3 py-2 rounded-md hover:bg-white/10 text-left">
            Create Blog
          </button>
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Blogs..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-md bg-black/10 
                         placeholder-gray-400 text-black outline-none"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
            </span>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 
                 px-2 py-1 rounded-md hover:bg-white/20 transition"
                 onClick={handleSearch}
            >
              <FontAwesomeIcon icon={["fas", "arrow-right"]} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
