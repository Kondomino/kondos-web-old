import { createSelector } from "@reduxjs/toolkit";
import { KondoModel } from "../models/kondo.model";
import { Route } from "next";
import { kondominoAuthor } from "../reducers/kondo/kondos.initial";
import avatarKondoA from "@/data/kondos/aaaa.jpg";
import avatarKondoB from "@/data/kondos/do-front.jpg";

export const selectAllKondos = (state: any) => state.kondos.allKondos;
export const selectedKondo = (state: any) => state.selectedKondo;
const selectKondoId = (state: any, ID: number) => ID;
const selectKondoSlug = (state: any, slug: string) => slug;

/**
 * selectKondoByID
 */
export const selectKondoByID = createSelector(
  [selectAllKondos, selectKondoId],
  (kondos, ID) => {
  return kondos.filter((kondo: { id: number; }) => kondo.id === ID);
});


/**
 * selectKondoBySlug
 */
export const selectKondoBySlug = createSelector(
  [selectAllKondos, selectKondoSlug],
  (kondos, slug) => {
    const found = kondos.filter((kondo: { slug: string; }) => kondo.slug === slug);

    console.log('inside reducer, found is ', found);
    return found? found[0] : false;
  }
);

export function normalizeKondos(kondos: any) {

  console.log('normalizing kondos to');
  return kondos.map((kondo: { id: number | undefined; active: boolean | undefined; name: string | undefined; slug: string | undefined; }) => {
    const normalized = new KondoModel();
    normalized.id = kondo.id;
    normalized.active = kondo.active;
    normalized.name = normalized.title = kondo.name;
    normalized.slug = kondo.slug;
    normalized.href = kondo.slug? '/single/' + kondo.slug : '/' as Route;
    normalized.categories = [];
    normalized.author = kondominoAuthor;
    normalized.featuredImage = avatarKondoB;
    normalized.galleryImgs = ['/public/img/kondos/do-front.jpg'];
    return normalized;
  });
}