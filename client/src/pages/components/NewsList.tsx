/**
 * created by: Anjula Madusanka
 * description: dispaly news list in a grid view
 */

import React from "react";

interface NewsListProps {
  data: any[];
}

export const NewsList: React.FC<NewsListProps> = (props) => {
  const { data } = props;
  return (
    <div className="m-2">
      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 m-2">
        {data.map((news) => {
          return (
            <div className="m-4 p-2 shadow-md">
              <img src={news?.imageUrl} alt="" className="h-48 w-full rounded-lg"/>
              <h4>{news?.title}</h4>
              <p className="text-sm text-[#21B8EA]">{news?.date}</p>
              <button>Read more</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
