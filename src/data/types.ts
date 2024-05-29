import { Route } from "@/routers/types";
import { StaticImageData } from "next/image";

//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string;
  href: Route;
  targetBlank?: boolean;
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  id: string | number;
  name: string;
  href: Route;
  count?: number;
  thumbnail?: string | StaticImageData;
  desc?: string;
  color?: TwMainColor | string;
  taxonomy: "category" | "tag";
}

export interface PostAuthorType {
  id: string | number;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string | StaticImageData;
  bgImage?: string | StaticImageData;
  email?: string;
  count: number;
  desc: string;
  jobName: string;
  href: Route;
}

export interface PostDataType {
  id: string | number;
  slug: string;
  author: PostAuthorType;
  date: string;
  href: Route;
  categories: TaxonomyType[];
  title: string;
  featuredImage: string | StaticImageData;
  desc?: string;
  like: {
    count: number;
    isLiked: boolean;
  };
  bookmark: {
    count: number;
    isBookmarked: boolean;
  };
  commentCount: number;
  viewdCount: number;
  readingTime: number;
  postType: "standard" | "video" | "gallery" | "audio";
  videoUrl?: string;
  audioUrl?: string | string[];
  galleryImgs?: string[];
  kondoDetails?: KondoDetails;
}
export interface KondoDetails {
  active: boolean;
  slug: string;
  type: string;  
  description: string;
  lot_avg_price: string;
  condo_rent: string;
  lots_available: boolean;
  lots_min_size: string;
  minutes_from_bh: string;
  cep: string;
  address: string;
  neighborhood: string; // Bairro 
  city: string; 
  finance: boolean; // Financiamento? 
  finance_tranches: string; // Financiamento parcelas  
  finance_fees: boolean; // Parcelamento com juros? 
  entry_value_percentage: string; // Valor inicial de entrada minimo?
  infra_description: string; // Descrição da Infraestrutura 
  infra_lobby_24h: boolean; // Portaria 24h
  infra_security_team: boolean; // Equipe de segurança?
  infra_wall: boolean; // Muro de segurança?
  infra_sports_court: boolean; // Quadra de esportes
  infra_barbecue_zone: boolean; // Churrasqueira
  infra_pool: boolean;
  infra_living_space: boolean; // Espaço de Convivencia
  infra_pet_area: boolean; // Espaço Pet 
  infra_kids_area: boolean; // Espaço Kids
  infra_lagoon: boolean; // Lagoa
  infra_eletricity: boolean;
  infra_water: boolean;
  infra_sidewalks: boolean; // Calçadas
  infra_internet: boolean; // Banda larga
  infra_generates_power: boolean; // Gera sua propria energia?  
  infra_grass_area: boolean; // Area gramada
  infra_woods: boolean; // Bosque
  infra_vegetable_garden: boolean; // Horta
  infra_nature_trail: boolean; // Trilha
  immediate_delivery: boolean; // Entrega imediata do lote
  url: string; // Condominium Page
  phone: string;
  email: string;  
  video: string;
}


export interface ConvenienceType {
  id: string | number;
  href: Route;
  title: string;
  featuredImage: string | StaticImageData;
  type: "basic" | "convenience" | "extra"
}

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";
