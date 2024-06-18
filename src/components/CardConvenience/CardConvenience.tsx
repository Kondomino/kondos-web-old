import React, { FC } from "react";
import { ConvenienceType } from "@/data/types";
import Link from "next/link";
import PostCardMetaConvenience from "../PostCardMeta/PostCardMetaConvenience";

export interface CardConvenienceProps {
  className?: string;
  post: ConvenienceType;
}

const CardConvenience: FC<CardConvenienceProps> = ({ className = "h-full", post }) => {
  const { title, href, featuredImage } = post;

  //console.log('post is ', post);
  return (
    <div
      className={`nc-Card3Small relative flex flex-row justify-between items-center ${className}`}
    >
      {href && (
        <Link href={href} className="absolute inset-0" title={title}></Link>
      )}
      <div className="relative space-y-2">
        <PostCardMetaConvenience meta={{ ...post }} />
      </div>
    </div>
  );
};

export default CardConvenience;
