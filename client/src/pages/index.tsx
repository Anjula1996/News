/**
 * created by: Anjula Madusanka
 * description: main layout of the news page
 */

import React, { useEffect, useState } from "react";
import { news_category_type } from "../types/index";
import { NewsList } from "./components/NewsList";

//news category list
const NEWS_CATEGORIES: news_category_type[] = [
  { name: "All", key: "all" },
  { name: "Automobile", key: "automobile" },
  { name: "Science", key: "science" },
  { name: "Sports", key: "sport" },
  { name: "Technology", key: "technology" },
  { name: "Politics", key: "politics" },
  { name: "World", key: "world" },
];

//basic URL
const baseURL: string = "https://inshorts.deta.dev/news";

export const Main: React.FC = () => {
  const [categoryKey, setCategoryKey] = useState<string>("all");
  const [news, setNews] = useState<any[]>([]);

  //filter news according to the on click event in the category button default category is 'all'
  useEffect(() => {
    fetch(`${baseURL}?category=${categoryKey}`)
      .then((response) => response.json())
      .then((data: any) => {
        if (categoryKey === data?.category) {
          setNews(data?.data);
        }
      })
      .catch((error) => console.log("Error:", error));
  }, [categoryKey]);

  return (
    <div className="sm:w-[400px] md:w-[780px] xl:w-full 2xl-w-full lg:w-full">
      <p
        className="
          text-[48px] 
          text-[#fff] 
          font-sans 
          bg-gradient-to-r from-cyan-700 via-sky-300 to-blue-100
          pl-3
          w-full"
      >
        Daily News
      </p>
      <div className="ml-4 mr-4 lg:flex-row md:flex-row">
        {NEWS_CATEGORIES.map((category: news_category_type) => {
          return (
            <button
              className={`
              m-4 p-1 pl-2 pr-2
              rounded-lg 
              bg-${
                categoryKey === category.key
                  ? "gradient-to-r from-cyan-700  to-blue-400"
                  : "[#ffffff]"
              }
              text-[${categoryKey === category.key ? "#ffffff" : "#000"}]
              hover:text-[#1E9FF7]
              focus:bg-[#2F8B97]
              focus:text-[#ffffff]`}
              key={category.key}
              onClick={() => {
                setCategoryKey(category.key);
                setNews([]);
              }}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      {news ? <NewsList data={news} /> : <p>Loading...!</p>}
    </div>
  );
};
