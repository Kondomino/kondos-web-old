import React, { FC } from "react";
import PostCardCommentBtn from "@/components/PostCardCommentBtn/PostCardCommentBtn";
import PostCardLikeAction from "@/components/PostCardLikeAction/PostCardLikeAction";
import { PostDataType } from "../../data/types";
import { random } from "lodash";

export interface PostCardLikeAndCommentProps {
  className?: string;
  itemClass?: string;
  hiddenCommentOnMobile?: boolean;
  useOnSinglePage?: boolean;
  kondo: PostDataType
}

const PostCardLikeAndComment: FC<PostCardLikeAndCommentProps> = ({
  className = "",
  itemClass = "px-3 h-8 text-xs",
  hiddenCommentOnMobile = true,
  useOnSinglePage = false,
  kondo
}) => {

  const randomBoolean = Math.random() < 0.6;

  const count = kondo?.like?.count | 0;

  return (
    <div
      className={`nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse ${className}`}
    >
      <PostCardLikeAction className={itemClass} likeCount={count} liked={randomBoolean}/>
      <PostCardCommentBtn
        className={`${
          hiddenCommentOnMobile ? "hidden sm:flex" : "flex"
        }  ${itemClass}`}
        isATagOnSingle={useOnSinglePage}
      />
    </div>
  );
};

export default PostCardLikeAndComment;
