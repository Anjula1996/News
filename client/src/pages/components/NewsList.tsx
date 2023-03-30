/**
 * created by: Anjula Madusanka
 * description: dispaly news list in a grid view
 */

import React, { useState } from "react";
import { ReadMoreModal } from "./ReadMore";

interface NewsListProps {
  data: any[];
}

export const NewsList: React.FC<NewsListProps> = (props) => {
  const { data } = props;
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<any>({});
  return (
    <div className="m-2">
      <div
        className="
        grid 
        grid-flow-row-dense 
        grid-cols-4 
        grid-rows-3 
        m-2"
      >
        {data.map((news) => {
          return (
            <div className="m-4 p-2 shadow-md">
              <img
                src={news?.imageUrl}
                alt=""
                className="h-48 w-full rounded-lg"
              />
              <h4>{news?.title}</h4>
              <p className="text-[14px] text-[#A8A8A8] mb-4">{news?.date}</p>
              <button
                className="
                  text-sm 
                  text-[#6797E1]
                  hover:text-[#0D5CD5]
                  rounded-lg 
                  border 
                  border-[#97BCF4] 
                  border-2 
                  hover:border-[#0D5CD5] 
                  p-1 ml-1"
                onClick={() => {
                  setIsReadMore(true);
                  setSelectedNews(news);
                }}
              >
                Read more
              </button>
            </div>
          );
        })}
      </div>
      {isReadMore && (
        <ReadMoreModal
          isReadMore={isReadMore}
          data={selectedNews}
          handleClose={() => {
            setIsReadMore(false);
          }}
        />
      )}
    </div>
  );
};
