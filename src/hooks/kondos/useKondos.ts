import { PostAuthorType } from "@/data/types";
import { createGlobalState } from "react-hooks-global-state";
import avatar11 from "@/data/avatars/14.jpg";
import { KondoModel } from "./kondo.model";
import { Route } from "next";
import avatarKondoAAA from "@/data/kondos/mocks/featured/aaa.jpg";
import avatarKondoBBB from "@/data/kondos/mocks/featured/bbb.jpg";
import avatarKondoCCC from "@/data/kondos/mocks/featured/ccc.jpg";
import avatarKondoDDD from "@/data/kondos/mocks/featured/ddd.jpg";
import avatarKondoEEE from "@/data/kondos/mocks/featured/eee.jpg";
import avatarKondoFFF from "@/data/kondos/mocks/featured/fff.jpg";
import avatarKondoGGG from "@/data/kondos/mocks/featured/ggg.jpg";
import avatarKondoHHH from "@/data/kondos/mocks/featured/hhh.jpg";
import avatarKondoIII from "@/data/kondos/mocks/featured/iii.jpg";
import avatarKondoJJJ from "@/data/kondos/mocks/featured/jjj.jpg";
import avatarKondoKKK from "@/data/kondos/mocks/featured/kkk.jpg";
import avatarKondoLLL from "@/data/kondos/mocks/featured/lll.jpg";
import avatarKondoMMM from "@/data/kondos/mocks/featured/mmm.jpg";
import avatarKondoNNN from "@/data/kondos/mocks/featured/nnn.jpg";
import avatarKondoOOO from "@/data/kondos/mocks/featured/ooo.jpg";
import avatarKondoPPP from "@/data/kondos/mocks/featured/ppp.jpg";
import avatarKondoQQQ from "@/data/kondos/mocks/featured/qqq.jpg";
import avatarKondoRRR from "@/data/kondos/mocks/featured/rrr.jpg";
import avatarKondoSSS from "@/data/kondos/mocks/featured/sss.jpg";
import avatarKondoTTT from "@/data/kondos/mocks/featured/ttt.jpg";
import avatarKondoUUU from "@/data/kondos/mocks/featured/uuu.jpg";
import avatarKondoVVV from "@/data/kondos/mocks/featured/vvv.jpg";
import avatarKondoWWW from "@/data/kondos/mocks/featured/www.jpg";
import avatarKondoXXX from "@/data/kondos/mocks/featured/xxx.jpg";
import avatarKondoYYY from "@/data/kondos/mocks/featured/yyy.jpg";
import avatarKondoZZZ from "@/data/kondos/mocks/featured/zzz.jpg";

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
  const normalized = new KondoModel(kondo);
    normalized.name = normalized.title = kondo.name;
    normalized.href = kondo.slug? '/single/' + kondo.slug : '/' as Route;
    normalized.categories = [];
    normalized.author = kondominoAuthor;
    normalized.galleryImgs = ['/public/img/kondos/do-front.jpg'];
    normalized.featuredImage = getFeaturedImage(kondo.featuredImage);
    return {...normalized};
}

function getFeaturedImage(img: string) {
  const env = process.env.NODE_ENV

  // If local, lets get random image
  if (env == "development") {
    var availableBackgrounds = [
      avatarKondoAAA,
      avatarKondoBBB,
      avatarKondoCCC,
      avatarKondoDDD,
      avatarKondoEEE,
      avatarKondoFFF,
      avatarKondoGGG,
      avatarKondoHHH,
      avatarKondoIII,
      avatarKondoJJJ,
      avatarKondoKKK,
      avatarKondoLLL,
      avatarKondoMMM,
      avatarKondoNNN,
      avatarKondoOOO,
      avatarKondoPPP,
      avatarKondoQQQ,
      avatarKondoRRR,
      avatarKondoSSS,
      avatarKondoTTT,
      avatarKondoUUU,
      avatarKondoVVV,
      avatarKondoWWW,
      avatarKondoXXX,
      avatarKondoYYY,
      avatarKondoZZZ,
    ]
    return availableBackgrounds[Math.floor(Math.random()*availableBackgrounds.length)];
  }
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

/*
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
*/
