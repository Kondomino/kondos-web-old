"use server"

import { StaticImageData } from "next/image";
import { getRandomImage, getRandomImages, prepareRealImages } from "./kondo.model";

  
  export async function getData(endpoint: any) {
    try {

      const response = await fetch(endpoint, {
        cache: "no-store",
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return await response.json();

    } catch (error) {
      console.log('FETCH ERROR', error);
    }
  }

  export async function getKondoBySlug(slug: string) {
    try {
      const body = { slug: slug };
      const response = await fetch('http://localhost:3003/kondo/findBy', {
        method: "POST",
        cache: "no-store",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body)
      });
      return await response.json();

    } catch (error) {
      console.log('FETCH ERROR', error);
    }
  }

  export async function getKondoMedias(slug: string, id: string) {
    
    console.log('env is ', process.env.NODE_ENV);
    
    if (process.env.NODE_ENV == 'development')
      return getRandomImages(6);

    try {

      const response = await fetch(`http://localhost:3003/media/${id}`, {
        method: "get",
        cache: "no-store",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!data || data.length <= 0 )
        return [];
      
      return prepareRealImages(slug, data);

    } catch (error) {
      console.log('FETCH ERROR', error);
    }
  }