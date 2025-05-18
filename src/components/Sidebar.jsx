import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMountainSun } from "react-icons/fa6";

function Sidebar() {
  const location = useLocation(); // Get current path
  const currentPath = location.pathname;

  const items = [
    {
      name: "Treks",
      link: "/dashboard/trek",
      icon: FaMountainSun,
    },
    {
      name: "Region",
      link: "/dashboard/region",
      icon: FaMountainSun,
    },
    {
      name: "Category",
      link: "/dashboard/category",
      icon: FaMountainSun,
    },
    {
      name: "District",
      link: "/dashboard/district",
      icon: FaMountainSun,
    },
  ];

  return (
    <div className="p-2 flex flex-col">
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-B200 transition-colors duration-500 ${
                    currentPath === item.link ? "bg-B500 text-white" : "bg-B100 text-black"
                  }`}
                >
                  {item.icon &&
                    React.createElement(item.icon, {
                      className: `size-6 transition-colors duration-500  ${
                        currentPath === item.link ? "text-white" : "text-N900"
                      }`,
                    })}
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;