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
  { name: "Science", key: "science" },
  { name: "Sports", key: "sport" },
  { name: "Technology", key: "technology" },
];

//basic URL
const baseURL: string = "https://inshorts.deta.dev/news";

export const Main: React.FC = () => {
  const [categoryKey, setCategoryKey] = useState<string>("all");
  const [news, setNews] = useState<any[]>([]);

  //filter news according to the on click event in the category button default is 'all'
  useEffect(() => {
    fetch(`${baseURL}?category=${categoryKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (categoryKey === data?.category) {
          setNews(data?.data);
        }
      })
      .catch((error) => console.log("Error:", error));
  }, [categoryKey]);

  return (
    <div className="mr-8 ml-8">
      <h5>Daily news</h5>
      {NEWS_CATEGORIES.map((category: news_category_type) => {
        return (
          <button
            className="m-4 bg-[#B9B7C6] pl-4 pr-4 rounded-lg hover:bg-[#7D6DE6] focus:bg-[#7D6DE6]"
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
      {news ? <NewsList data={news} /> : <p>Loading...!</p>}
    </div>
  );
};
