import { ConvenienceType, PostAuthorType } from "@/data/types";
import { Route } from "next";
import { KondoModel, getFeaturedImage } from "./kondo.model";
import avatar11 from "@/data/avatars/14.jpg";
import { KondoDetailsModel } from "./kondo.details.model";
import { KondoAddressModel } from "./kondo.address.model";
import { KondoConveniencesBlockModel, KondoConveniencesModel, getConvenienceImage, getConvenienceTitle } from "./kondo.conveniences.model";
import { getRandomValues } from "crypto";
import { random } from "lodash";


export function serializeKondos(data: any) {

  return data.map((item: any) => {
    
    return normalizeKondo(item);
  })
}


export function normalizeKondos(kondos: any) {

    return kondos.map((kondo: { id: number | undefined; active: boolean | undefined; name: string | undefined; slug: string | undefined; }) => {
      return normalizeKondo(kondo);
    });
  }
  
  export function normalizeKondo(kondoRaw: any) {

    const { dataValues, isNewRecord, details, address, conveniences } = kondoRaw;

    const normalized = new KondoModel(dataValues);
      normalized.name = normalized.title = dataValues.name;
      normalized.href = dataValues.slug? '/single/' + dataValues.slug : '/' as Route;
      normalized.categories = [];
      normalized.author = kondominoAuthor;
      normalized.galleryImgs = ['/public/img/kondos/do-front.jpg'];
      normalized.featuredImage = getFeaturedImage(dataValues.featuredImage);

      normalized.details = normalizeKondoDetails(details);

      normalized.address = address;
      normalized.address.minutes_from_bh = normalized.address.minutes_from_bh? normalized.address.minutes_from_bh : '?' ;

      normalized.conveniences = normalizeKondoConveniencesBlock(conveniences);
      return {...normalized};
  }
  
  export function normalizeKondoDetails(kondoDetails: Partial<KondoDetailsModel>) {
    const details: KondoDetailsModel = {
      ...kondoDetails,
      condo_rent: formatKondoRent(kondoDetails),
      lot_avg_price: formatPrice(kondoDetails.lot_avg_price)
    }

    return details;
  }

  export function formatPrice(price: string | undefined) {

    return price? 'R$ ' + price : 'n/a'

  }
  export function normalizeKondoAddress(kondoAddress: Partial<KondoAddressModel>) {
    const address: Partial<KondoAddressModel> = {};

    return Object.assign(address, kondoAddress);
  }

  export function normalizeKondoConveniencesBlock(kondoConveniences: any): KondoConveniencesModel[] {

    const conveniences = kondoConveniences.map((item: any) => {
      const type = item.type;

      // For each convenience, we also normalize it to a ConvenienceType
      const conveniences = normalizeKondoConveniences(item.conveniences, type);

      return {
        type,
        conveniences
      }
    });

    return conveniences;
  }

  export function normalizeKondoConveniences(kondoConveniences: string[], type: string) {

    return kondoConveniences.map(convenience => {
      const convenienceType: ConvenienceType = {
        id: random(),
        //href: '/#' as Route,
        href: '/',
        title: getConvenienceTitle(convenience),
        slug: convenience,
        featuredImage: getConvenienceImage(convenience),
        type: type //"basic" | "convenience" | "extra"
      }
      return convenienceType
    });
  }

  export function filterConvenienceByType(data: KondoConveniencesModel[], type: string): any[] {
    const filtered = data.filter(item => {
      return item.type == type
    })

    const mapped = filtered.map(item => {
      return item.conveniences;
    })
    
    return mapped[0].length > 0? mapped[0] : []
  }
  

  function formatKondoRent(details: any)  {
    return details?.condo_rent ? 'R$ ' + details.condo_rent : 'n/a'
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