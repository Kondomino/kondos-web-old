import React, { FC } from "react";
import { ConvenienceType } from "@/data/types";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import NcImage from "../NcImage/NcImage";
import { getCDN } from "@/utils/getCDN";

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
      {/* <GlobeAltIcon
        className="w-5 h-5 ms-2 m-2"
        aria-hidden="true"
      /> */}
      <NcImage
        alt=""
        containerClassName={`relative flex-shrink-0 ${
          //size === "large" ? "w-20 h-20" : "w-12 h-12"
          "w-12 h-12"
        } rounded-lg me-4 overflow-hidden`}
        src={featuredImage}
        fill
        className="object-cover"
        sizes="80px"
      />
      {/* <NcImage
          alt="archive"
          fill
          className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
          sizes="(max-width: 1280px) 100vw, 1536px"
        /> */}
      {" "}
      <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
        {" "} {title}
      </span>
    </div>
  );
};

export default PostCardMetaConvenience;
