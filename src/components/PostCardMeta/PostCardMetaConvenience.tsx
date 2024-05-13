import React, { FC } from "react";
import { ConvenienceType } from "@/data/types";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

export interface PostCardMetaConvenienceProps {
  className?: string;
  meta: ConvenienceType,
  hiddenAvatar?: boolean;
  avatarSize?: string;
}

const PostCardMetaConvenience: FC<PostCardMetaConvenienceProps> = ({
  className = "leading-none text-xs",
  meta,
  hiddenAvatar = false,
  avatarSize = "h-7 w-7 text-sm",
}) => {
  const { title, featuredImage } = meta;

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`}
    >
      {!hiddenAvatar && (
        <GlobeAltIcon
          className="w-5 h-5 ms-2 m-2"
          aria-hidden="true"
        />
      )}
      {" "}
      <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
        {" "} {title}
      </span>
    </div>
  );
};

export default PostCardMetaConvenience;
