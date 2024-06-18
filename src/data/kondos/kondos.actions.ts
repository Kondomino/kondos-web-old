"use server"
import KondosService from "@/services/kondos.service";
  
  export async function getData(endpoint: any) {
    try {

      const response = await fetch(endpoint, {
        cache: "no-store"
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