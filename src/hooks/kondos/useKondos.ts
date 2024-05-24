import { PostAuthorType } from "@/data/types";
import { createGlobalState } from "react-hooks-global-state";
import avatar11 from "@/data/avatars/14.jpg";
import { KondoModel } from "./kondo.model";
import { Route } from "next";
import avatarKondoA from "@/data/kondos/aaaa.jpg";

export const initialState: {
  kondos: KondoModel[]
} = { kondos: []};

const { useGlobalState } = createGlobalState(initialState);

export const useKondos = () => {
  const [kondos, setKondos] = useGlobalState("kondos");
  //const [duration, setDuration] = useGlobalState("selectedKondo");

  
  const filterKondoBySlug = (slug: string) => {
    return kondos.filter(item => item.slug == slug)
  }

  return  {
    kondos,
    setKondos,
    filterKondoBySlug
  }
}


export function normalizeKondos(kondos: any) {

  console.log('normalizing kondos to');
  return kondos.map((kondo: { id: number | undefined; active: boolean | undefined; name: string | undefined; slug: string | undefined; }) => {
    return normalizeKondo(kondo);
  });
}

export function normalizeKondo(kondo: any) {
  const normalized = new KondoModel();
    normalized.id = kondo.id;
    normalized.active = kondo.active;
    normalized.name = normalized.title = kondo.name;
    normalized.slug = kondo.slug;
    normalized.href = kondo.slug? '/single/' + kondo.slug : '/' as Route;
    normalized.categories = [];
    normalized.author = kondominoAuthor;
    normalized.galleryImgs = ['/public/img/kondos/do-front.jpg'];

    
    return {...normalized};
}

export var kondominoAuthor: PostAuthorType = {
  id: 1,
  firstName: "Victor V.",
  lastName: "Souto",
  displayName: "Victor V. Souto",
  avatar: avatar11,
  bgImage: "/public/img/maps.png",
  count: 40,
  href: "/something" as Route,
  desc: "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
  jobName: "Founder, CEO",
};


const newKondo = new KondoModel();
newKondo.id = 0;
newKondo.active = true;
newKondo.name = newKondo.title = 'Maravilhaa';
newKondo.slug = 'aaaa';
newKondo.href = '/single/' + newKondo.slug as Route;
newKondo.categories = [];
newKondo.author = kondominoAuthor;
newKondo.featuredImage = avatarKondoA;
newKondo.galleryImgs = ['/public/img/kondos/aaaa.jpg'];

