/**
 * created by: Anjula Madusanka
 * description: dispaly news list in a grid view
 */

import React from "react";

interface NewsListProps {
  data: any[];
  categoryName: string;
}

export const NewsList: React.FC<NewsListProps> = (props) => {
  const { categoryName, data } = props;
  return (
    <div className="m-2">
      {categoryName}
      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 m-2">
        {data.map((news) => {
          return (
            <div className="m-4">
              <img src={news?.imageUrl} alt="" className="h-48 w-full"/>
              <h4>{news?.title}</h4>
              <p>{news?.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
