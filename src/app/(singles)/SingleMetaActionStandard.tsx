"use client";

import React, { FC } from "react";
import PostActionDropdown from "@/components/PostActionDropdown/PostActionDropdown";
import PostCardLikeAndComment from "@/components/PostCardLikeAndComment/PostCardLikeAndComment";
import { SOCIALS_DATA } from "@/components/SocialsShare/SocialsShare";
import NcDropDown from "@/components/NcDropDown/NcDropDown";
import NcBookmark from "@/components/NcBookmark/NcBookmark";
import PostCardLikeAction from "@/components/PostCardLikeAction/PostCardLikeAction";
import StandardActionDropdown from "@/components/PostActionDropdown/StandardActionDropdown";

export interface SingleMetaActionStandardProps {
  className?: string;
}

const SingleMetaActionStandard: FC<SingleMetaActionStandardProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SingleMetaAction2 ${className}`}>
      <div className="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
        <PostCardLikeAction className={'px-3 h-8 text-xs'} />
        
        <div className="px-1">
          <div className="border-s border-neutral-200 dark:border-neutral-700 h-6" />
        </div>

        <NcDropDown
          className="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
          renderTrigger={() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          )}
          onClick={() => {}}
          data={SOCIALS_DATA}
        />
        <StandardActionDropdown
          containerClassName="h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          iconClass="h-5 w-5"
        />
      </div>
    </div>
  );
};

export default SingleMetaActionStandard;
