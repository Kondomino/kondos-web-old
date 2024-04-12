import React, { FC } from "react";
import Avatar from "@/components/Avatar/Avatar";
import { ConvenienceType, PostDataType } from "@/data/types";
import Link from "next/link";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

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
        /*<Avatar
          radius="rounded-full"
          sizeClass={avatarSize}
          imgUrl={featuredImage}
          userName={'something'}
        />*/
        <GlobeAltIcon
        className="w-4 h-4 ms-2 -me-1"
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
