import { useState, useEffect } from "react";
import SmSearchbar from "@/components/tiles/SmSearchbar";
import PaginationTile from "@/components/tiles/PaginationTile";
import NormalBlogTile from "@/components/tiles/blogs/NormalBlogTile.jsx";
import SingleBlogSection from "@/components/pages/blogs/SingleBlogSection.jsx";
import SectionGappingWithoutAnimation from '@/components/SectionGappingWithoutAnimation';
import {fetchData} from "@/apis/https";
import debounce from "lodash.debounce";
import { useCallback } from "react";



function BlogListPage(){
  const [filterOptions, setFilterOptions] = useState([]);
  // const [totalItems, setTotalItems] = useState(0);
  const [blogs, setBlogs] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
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

  const fetchBlog = async (text = "") => {
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

      const response = (queryParams != "all") ?  await fetchData(`/blogs/filter/category/?category=${queryParams}`) : fetchBlog();
      setBlogs(response.results);
      setTotalItems(response.count);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className="flex flex-col gap-5 mt-5 w-full md:px-[4rem] px-5 mb-20">
      <SingleBlogSection/>
        <div className="relative w-full flex gap-3 justify-start"> 
          <select
              value={selectedFilters[0] || "all"}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedFilters(value === "all" ? [] : [value]);
              }}
              className="w-fit p-2 border rounded-md outline-none"
            >
              <option value="all">All</option>
              {filterOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          <SmSearchbar text="Search Blogs" onAction={searchBlog} />
        </div>

        {totalItems > 0 && (
          <PaginationTile
            totalItems={totalItems}
            currentPage={currentPage}
            onAction={(page) => handlePageChange(page, fetchBlog)}
          />
        )}
       <SectionGappingWithoutAnimation>
          {blogs.map((blog, index) => (
            <NormalBlogTile key={index} blog={blog} />
          ))}
          </SectionGappingWithoutAnimation>
        {/* {totalItems > 0 && (
          <PaginationTile
            totalItems={totalItems}
            currentPage={currentPage}
            onAction={(page) => handlePageChange(page, fetchBlog)}
          />
        )} */}
      </div>
  );
};

export default BlogListPage;