import { Sidebar } from "@/app/(singles)/Sidebar";
import SingleKondoContent from "@/app/(singles)/SingleKondoContent";
import { Route } from "next";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";
import NcImage from "../NcImage/NcImage";


export const KondoLayout: FC<{
    children: React.ReactNode,
     kondo: any}> = ({
    children,
    kondo = {},
  }) => {

    console.log('--------- received KondoPage as', kondo);
    // const dispatch = useAppDispatch();
  
    // dispatch(_populateKondos({
    //     type: POPULATE_KONDOS,
    //     data: kondos,
    // }));
    
    
  
    return (
<>
    
    </>
    );
}