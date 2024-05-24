import React, { useReducer, useState } from "react";
import { useRouter, usePathname, useSearchParams, useParams } from "next/navigation";
import { selectKondoBySlug } from "@/app/redux-store-bkp/selectors/kondos.selector";
import { connect } from "react-redux";
import { _setSelectedKondo } from "@/app/redux-store-bkp/reducers/kondo/kondos.reducer";
import { getKondoBySlug } from "@/app/redux-store-bkp/actions/kondos.actions";
import { KondoPage } from "@/components/KondoPage/KondoPage";


// KONDO INTERNAL PAGE CONTENT
const PageSingle = (props: any) => {

  //const { slug } = useParams();
  
  return (
    <KondoPage kondo={props.kondo}></KondoPage>
  );
};

export default PageSingle;
/*
const mapStateToProps = (state: any, options: any) => {
  
  const slug = options.params.slug[0];
 
  var kondoSelected = selectKondoBySlug(state, slug);

  return { kondo: kondoSelected? kondoSelected : false }
}
*/
// const mapState = ({state}) => ({
//   selectKondoBySlug(state, slug) {
//     return state.
//   },
//   getComments(post_id) {
//      return state.comments.find(cmts => cmts.post_id === post_id)
//   }
// })

//export default connect(mapStateToProps)(PageSingle);
