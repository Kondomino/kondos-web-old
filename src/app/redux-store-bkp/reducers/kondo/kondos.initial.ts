import { PostAuthorType } from "@/data/types";
import { KondoModel } from "../../models/kondo.model";
import { Route } from "next";
import avatar12 from "@/data/avatars/9.jpg";
import avatar11 from "@/data/avatars/14.jpg";
import avatarKondoA from "@/data/kondos/aaaa.jpg";
import avatarKondoB from "@/data/kondos/do-front.jpg";

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

const newKondo3 = new KondoModel();
newKondo3.id = 1;
newKondo3.active = true;
newKondo3.name = newKondo3.title = 'Esse é do FRONT MESMO';
newKondo3.slug = 'do-front';
newKondo3.href = newKondo3.slug as Route;
newKondo3.categories = [];
newKondo3.author = kondominoAuthor;
newKondo3.featuredImage = avatarKondoB;
newKondo3.galleryImgs = ['/public/img/kondos/do-front.jpg'];

export const initialState: {
    allKondos: KondoModel[],
    selectedKondo?: KondoModel | null,
} = { allKondos: []};