'use client'
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FC, FormEvent } from "react";
import ButtonCircle from "../Button/ButtonCircle";
import Input from "../Input/Input";
import { useRouter } from "next/navigation";

const KondoSearchForm: FC<{}> = ({}) => {
    
  const router = useRouter();
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget);
    const search = formData.get('search');

    router.push(`/?search=${search}`);
  }

  let searchDefault = "Região de Nova Lima";

    return (
        <>
    <form
        className="relative w-full mt-8 sm:mt-11 text-left"
        method="post"
        action="/"
        onSubmit={onSubmit}
        >
        <label
            htmlFor="search-input"
            className="text-neutral-500 dark:text-neutral-300"
        >
            <span className="sr-only">Search all icons</span>
            <Input
                id="search"
                name="search"
                type="search"
                placeholder="Type and press enter"
                sizeClass="pl-14 py-5 pe-5 md:ps-16"
                defaultValue={searchDefault}
            />
            <ButtonCircle
                className="absolute end-2.5 top-1/2 transform -translate-y-1/2"
                size=" w-11 h-11"
                type="submit"
            >
                <ArrowRightIcon className="w-5 h-5 rtl:rotate-180" />
            </ButtonCircle>
            <span className="absolute start-5 top-1/2 transform -translate-y-1/2 text-2xl md:start-6">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                ></path>
            </svg>
            </span>
        </label>
    </form>
    </>
    )
}

export default KondoSearchForm;