import Card3Small from "@/components/Card3Small/Card3Small";
import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1";
import { DEMO_CONVENIENCES, DEMO_POSTS } from "@/data/posts";
import { ConvenienceType, PostDataType } from "@/data/types";
import React, { FC } from "react";
import Card3SmallExtra from "../Card3Small/Card3SmallExtra";

//const widgetConveniencesDemo: ConvenienceType[] = DEMO_CONVENIENCES.filter(item => item.type = 'extra');

export interface WdigetConveniencesExtraProps {
  className?: string;
  posts: ConvenienceType[];
}

const WdigetConveniencesExtra: FC<WdigetConveniencesExtraProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  posts
}) => {
  const title = "Extras";

  return (
    <div className={`nc-WidgetPosts rounded-3xl overflow-hidden ${className}`}>
      <WidgetHeading1
        title={`✨ ${title}`}
      />
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {posts.map((post) => (
          <Card3SmallExtra
            className="p-4 xl:px-5 xl:py-3 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default WdigetConveniencesExtra;
