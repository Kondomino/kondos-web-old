'use client'
import { CustomLink } from "@/data/types";
import React, { FC } from "react";
import twFocusClass from "@/utils/twFocusClass";
import Link from "next/link";
import { Route } from "next";
import { useSearchParam } from "react-use";
import { useSearchParams } from "next/navigation";

const DEMO_PAGINATION: CustomLink[] = [
  {
    label: "1",
    href: "/?page=1" as Route,
  },
  {
    label: "2",
    href: "/?page=2" as Route,
  },
  {
    label: "3",
    href: "/?page=3" as Route,
  },
  {
    label: "4",
    href: "/?page=4" as Route,
  },
  {
    label: "5",
    href: "/?page=5" as Route,
  },
];

export interface PaginationProps {
  className?: string;
}

const Pagination: FC<PaginationProps> = ({ className = "" }) => {

  const searchParams = Object.fromEntries(useSearchParams());

  var pageNumber = 0;

  if (searchParams && searchParams.page)
    pageNumber = parseInt(searchParams?.page);

  const renderItem = (pag: CustomLink, index: number) => {
    if (index+1 === pageNumber) {
      // RETURN ACTIVE PAGINATION
      return (
        <span
          key={index}
          className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
        >
          {pag.label}
        </span>
      );
    }
    // RETURN UNACTIVE PAGINATION 
    return (
      <Link
        key={index}
        className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
        href={pag.href}
      >
        {pag.label}
      </Link>
    );
  };

  return (
    <nav
      className={`nc-Pagination inline-flex space-x-1 rtl:space-x-reverse text-base font-medium ${className}`}
    >
      {DEMO_PAGINATION.map(renderItem)}
    </nav>
  );
};

export default Pagination;
