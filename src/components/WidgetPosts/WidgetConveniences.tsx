import Card3Small from "@/components/Card3Small/Card3Small";
import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1";
import { DEMO_CONVENIENCES } from "@/data/posts";
import { ConvenienceType, PostDataType } from "@/data/types";
import React, { FC } from "react";
import CardConvenience from "../CardConvenience/CardConvenience";

export interface WidgetConveniencesProps {
  className?: string;
  posts: ConvenienceType[];
  title: string;
}

const WidgetConveniences: FC<WidgetConveniencesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  posts,
  title = "Básicos"
}) => {
  return (
    <div className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}>
      <WidgetHeading1
        title={`${title}`}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {posts.map((post) => (
          <CardConvenience
            className="p-4 xl:px-5 xl:py-3 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetConveniences;
