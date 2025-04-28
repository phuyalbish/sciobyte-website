import { useState, useEffect } from "react";
import SmSearchbar from "@/components/tiles/SmSearchbar";
import PaginationTile from "@/components/tiles/PaginationTile";
import NormalBlogTile from "@/components/tiles/blogs/NormalBlogTile.jsx";
import SingleBlogSection from "@/components/pages/blogs/SingleBlogSection.jsx";
import { MdFilterList } from "react-icons/md";
import {fetchData} from "@/apis/https";
import debounce from "lodash.debounce";
import { useCallback } from "react";



function BlogListPage(){
  const [filterOptions, setFilterOptions] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);


const searchBlog = useCallback(
  debounce((text) => {
    if(text != 0)  fetchBlog(1, text);
    else fetchBlog()
  }, 500), 
  []
);

  const handlePageChange = (page, func) => {
    setCurrentPage(page);
    func(page);
  };

  const fetchBlog = async (page = 1, text = "") => {
    setIsLoading(true);
    try {
      const response = await fetchData(`/blogs/?search=${text}`, page);
      setBlogs(response?.results);
      setTotalItems(response?.count);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchFilterOptions = async () => {
    try {
      const response = await fetchData("/categories/");
      setFilterOptions(response);
    } catch (error) {
      console.error("Error fetching filter options:", error);
    }
  };

  const toggleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const fetchFilteredBlogs = async (queryParams) => {
    setBlogs([]);
    try {
      const response = await fetchData(`/blogs/filter/category/?category=${queryParams}`);
        console.log(response)
      setBlogs(response.results);
      setTotalItems(response.count);
    } catch (error) {
      console.error("Error fetching filtered blogs:", error);
    }
  };

  useEffect(() => {
    if (selectedFilters.length) {
      fetchFilteredBlogs(selectedFilters.join(","));
    } else {
      fetchBlog();
    }
  }, [selectedFilters]);

  useEffect(() => {
    fetchBlog();
    fetchFilterOptions();
  }, []);

  return (
      <div className="flex flex-col gap-10 mt-5 w-full md:px-[4rem] px-5 mb-20">
      <SingleBlogSection/>
        <div className="relative w-full flex gap-3 justify-end">
          <SmSearchbar text="Search Blogs" onAction={searchBlog} />
          <div
            className={`cursor-pointer p-2 flex justify-center items-center rounded hover:bg-gray-100 ${isFilterOpen ? "bg-gray-100" : ""}`}
            onClick={toggleFilterOpen}
          >
            <MdFilterList size={24} />
          </div>

          {isFilterOpen && (
            <div className="p-4 z-10 absolute right-0 top-10 bg-white border border-gray-300 rounded shadow-lg z-20">
             <ul className="space-y-3">
                {filterOptions.map((option) => (
                  <label
                    htmlFor={option.name}
                    key={option.id}
                    className={`cursor-pointer flex items-center gap-2 p-2 rounded-md transition-all ${
                      selectedFilters.includes(option.id)
                        ? "bg-B500 text-white"
                        : "hover:bg-B200"
                    }`}
                  >
                    <input
                      id={option.name}
                      type="checkbox"
                      value={option.id}
                      checked={selectedFilters.includes(option.id)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSelectedFilters((prev) =>
                          prev.includes(value)
                            ? prev.filter((id) => id !== value)
                            : [...prev, value]
                        );
                      }}
                      className={`form-checkbox h-4 w-4 text-B500 outline-B900 rounded focus:outline-B600 ${
                        selectedFilters.includes(option.id) ? "bg-B500 outline-B500" : ""
                      }`}
                    />
                    <span className="text-sm">{option.name}</span>
                  </label>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, index) => (
            <NormalBlogTile key={index} blog={blog} />
          ))}
        </div>

        {totalItems > 0 && (
          <PaginationTile
            totalItems={totalItems}
            currentPage={currentPage}
            onAction={(page) => handlePageChange(page, fetchBlog)}
          />
        )}
      </div>
  );
};

export default BlogListPage;