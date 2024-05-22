"use client";

import React, { FC, Key, useState } from "react";
import { useDispatch } from "react-redux";
import { POPULATE_KONDOS, RETRIEVE_KONDOS } from "@/app/store/actions/types";
import { _populateKondos } from "@/app/store/reducers/kondo/kondos.reducer";
import Card11 from "../Card11/Card11";
import { normalizeKondos } from "@/app/store/selectors/kondos.selector";

const CardHomeKondos: FC<{kondos:[]}> = ({
  kondos = [],
}) => {
  console.log('kondos received as props', kondos);

  const dispatch = useDispatch();

  dispatch(_populateKondos({
    type: POPULATE_KONDOS,
    payload: kondos,
  }));

  //const [isHover, setIsHover] = useState(false);
  const kondosNormalized = normalizeKondos(kondos);

  console.log('kondosNormalized', kondosNormalized);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10">
      {kondosNormalized?.map((kondo: { name: string, id: Key }, key: Number) => (
        <Card11 key={kondo.id} post={kondo} />
      ))}
    </div>
  );
};

export default CardHomeKondos;


/*
<div
      className={`nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      //
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 ${ratio}`}
      >
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>
      </div>
      <Link href={href} className="absolute inset-0"></Link>
      <span className="absolute top-3 inset-x-3 z-10">
        {categories.length > 0 &&
          <CategoryBadgeList categories={categories} />
        }
      </span>

      <div className="p-4 flex flex-col space-y-3">
        {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date}</span>
        )}
        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <span className="line-clamp-2" title={title}>
            {title}
          </span>
        </h3>
        <div className="flex items-end justify-between mt-auto">
          <PostCardLikeAndComment className="relative" />
          <PostCardSaveAction className="relative" />
        </div>
      </div>
    </div>
    */