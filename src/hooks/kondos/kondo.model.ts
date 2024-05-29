import { PostAuthorType } from "@/data/types";
import { Model } from "./model";
import { StaticImageData } from "next/image";
import { KondoDetailsModel } from "./kondo.details.model";
export class KondoModel extends Model
{
    constructor(options: Partial<KondoModel>) {
        super();

        Object.assign(this, options);
    }

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
    featuredImage: string | StaticImageData | undefined;
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

    details?: KondoDetailsModel;

    url?: string; // Condominium Page

    phone?: string;

    email?: string;
    
    video?: string;
}