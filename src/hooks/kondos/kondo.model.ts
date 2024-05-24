import { PostAuthorType } from "@/data/types";
import { Model } from "./model";
import { StaticImageData } from "next/image";
import avatarKondoA from "@/data/kondos/aaaa.jpg";
import avatarKondoB from "@/data/kondos/bbb.jpg";
import avatarKondoC from "@/data/kondos/ccc.jpg";
import avatarKondoD from "@/data/kondos/ddd.jpg";
import avatarKondoE from "@/data/kondos/eee.jpg";
import avatarKondoF from "@/data/kondos/fff.jpg";
import avatarKondoG from "@/data/kondos/ggg.jpg";
import avatarKondoH from "@/data/kondos/hhh.jpg";
import avatarKondoI from "@/data/kondos/iii.jpg";
import avatarKondoJ from "@/data/kondos/jjj.jpg";
import avatarKondoK from "@/data/kondos/kkk.jpg";
import avatarKondoL from "@/data/kondos/lll.jpg";
import avatarKondoM from "@/data/kondos/mmm.jpg";
import avatarKondoN from "@/data/kondos/nnn.jpg";
import avatarKondoO from "@/data/kondos/ooo.jpg";
import avatarKondoP from "@/data/kondos/ppp.jpg";
import avatarKondoQ from "@/data/kondos/qqq.jpg";
import avatarKondoR from "@/data/kondos/rrr.jpg";
import avatarKondoS from "@/data/kondos/sss.jpg";
import avatarKondoT from "@/data/kondos/ttt.jpg";
import avatarKondoU from "@/data/kondos/uuu.jpg";
import avatarKondoV from "@/data/kondos/vvv.jpg";
export class KondoModel extends Model
{
    id?: number;
    
    name?: string;

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
    title?: string;
    featuredImage: string | StaticImageData = this.generateRandomKondoAvatar();
    desc?: string;
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
    
    description?: string;

    lot_avg_price?: string;

    condo_rent?: string;

    lots_available?: boolean;

    lots_min_size?: string;

    cep?: string;

    address?: string;

    neighborhood?: string; // Bairro

    city?: string;
    
    finance?: boolean; // Financiamento?
    
    finance_tranches?: string; // Financiamento parcelas
    
    finance_fees?: boolean; // Parcelamento com juros? 

    entry_value_percentage?: string; // Valor inicial de entrada minimo?
    
    infra_description?: string; // Descrição da Infraestrutura

    infra_lobby_24h?: boolean; // Portaria 24h

    infra_security_team?: boolean; // Equipe de segurança?
    
    infra_wall?: boolean; // Muro de segurança?

    infra_sports_court?: boolean; // Quadra de esportes

    infra_barbecue_zone?: boolean; // Churrasqueira

    infra_pool?: boolean;

    infra_living_space?: boolean; // Espaço de Convivencia

    infra_pet_area?: boolean; // Espaço Pet
    
    infra_kids_area?: boolean; // Espaço Kids

    infra_lagoon?: boolean; // Lagoa

    infra_eletricity?: boolean;

    infra_water?: boolean;

    infra_sidewalks?: boolean; // Calçadas

    infra_internet?: boolean; // Banda larga
    
    infra_generates_power?: boolean; // Gera sua propria energia?
    
    infra_grass_area?: boolean; // Area gramada
        
    infra_woods?: boolean; // Bosque

    infra_vegetable_garden?: boolean; // Horta

    infra_nature_trail?: boolean; // Trilha

    immediate_delivery?: boolean; // Entrega imediata do lote

    url?: string; // Condominium Page

    phone?: string;

    email?: string;
    
    video?: string;


    generateRandomKondoAvatar() {
        const availableAvatars = [
            avatarKondoA,
            avatarKondoB,
            avatarKondoC,
            avatarKondoD,
            avatarKondoE,
            avatarKondoF,
            avatarKondoG,
            avatarKondoH,
            avatarKondoI,
            avatarKondoJ,
            avatarKondoK,
            avatarKondoL,
            avatarKondoM,
            avatarKondoN,
            avatarKondoO,
            avatarKondoP,
            avatarKondoQ,
            avatarKondoR,
            avatarKondoS,
            avatarKondoT,
            avatarKondoU,
            avatarKondoV
        ]
        return availableAvatars[Math.floor(Math.random()*availableAvatars.length)];
    }
}