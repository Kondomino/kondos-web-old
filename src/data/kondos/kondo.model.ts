import { PostAuthorType } from "@/data/types";
import { Model } from "./model";
import { StaticImageData } from "next/image";
import { KondoDetailsModel } from "./kondo.details.model";
import { KondoConveniencesModel } from "./kondo.conveniences.model";
import { KondoAddressModel } from "./kondo.address.model";
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

export class KondoModel extends Model
{
    constructor(options: Partial<KondoModel>) {
        super();

        Object.assign(this, options);
    }

    id?: number;
    
    name?: string;
    title?: string;
    active?: boolean;
    slug?: string;

    /*
    * FRONT END PROPERTIES
    */
    href?: string | URL;
    author: PostAuthorType;
    date?: string = '01/06/2024';
    //categories: TaxonomyType[];
    categories?: any[] = [];
    featuredImage?: string | StaticImageData | undefined;
    description?: string;
    infraDescription?: string;
    like?: {
        count: number;
        isLiked: boolean;
    };
    bookmark?: {
        count: number;
        isBookmarked: boolean;
    };
    commentCount?: number;
    viewdCount?: number;
    readingTime?: number;
    postType?: "standard" | "video" | "gallery" | "audio" = "standard";
    videoUrl?: string;
    audioUrl?: string | string[];
    galleryImgs?: string[];

    /*
    * END OF FRONT END PROPERTIES
    */

    type?: string;
    details: KondoDetailsModel;
    conveniences: KondoConveniencesModel[];
    address: KondoAddressModel;
    url?: string; // Condominium Page
    phone?: string;
    email?: string;
    video?: string;
}


export function getFeaturedImage(slug: string, img: string) {
    var env = process.env.NODE_ENV

    // If local, lets get random image
    if (env == "development") {
      return getRandomImage();
    }
    else {
      return process.env.CDN + 'kondos/' + slug + '/' + img;
    }
  }

  export function getRandomImages(amount: number) {

    let images = [];

    for (let i= 0; i<amount; i++) {
      images[i] = getRandomImage();
    }

    return images;
  }

  export function getRandomImage(){

    var availableImages = [
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
    return availableImages[Math.floor(Math.random()*availableImages.length)];
  }

  export function prepareRealImages(slug: string, images: {id: string, filename:string}[]): (string | StaticImageData)[] {

    return images.map(item => {
      return process.env.CDN + 'kondos/' + slug + '/' + item.filename
    })
  }