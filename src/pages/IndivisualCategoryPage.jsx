import React from "react";

import { useParams } from "react-router-dom";
import { fetchIndivisualCategories } from "@/apis/categories.js";
function IndivisualCategoryPage() {
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetchIndivisualCategories(id);
        setCategory(response);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    getCategory();
  }, [id]);

  return <div>IndivisualCategoryPage</div>;
}

export default IndivisualCategoryPage;
