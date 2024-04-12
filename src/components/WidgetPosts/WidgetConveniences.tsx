import Card3Small from "@/components/Card3Small/Card3Small";
import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1";
import { DEMO_CONVENIENCES } from "@/data/posts";
import { ConvenienceType, PostDataType } from "@/data/types";
import React, { FC } from "react";
import CardConvenience from "../CardConvenience/CardConvenience";

const widgetConveniencesDemo: ConvenienceType[] = DEMO_CONVENIENCES.filter(
  (_, i) => i > 2 && i < 7
);

export interface WidgetConveniencesProps {
  className?: string;
  posts?: ConvenienceType[];
}

const WidgetConveniences: FC<WidgetConveniencesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  posts = widgetConveniencesDemo,
}) => {
  return (
    <div className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}>
      <WidgetHeading1
        title="✨ Conveniences"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {posts.map((post) => (
          <CardConvenience
            className="p-4 xl:px-5 xl:py-6 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetConveniences;
