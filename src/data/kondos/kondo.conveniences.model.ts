
import infra_barbecue_zone from "@/data/conveniences/barbecue.png";
import infra_generates_power from "@/data/conveniences/good-energy.png";
import infra_grass_area from "@/data/conveniences/grass.png";
import gym from "@/data/conveniences/gym.png";
import home_office from "@/data/conveniences/home-office.png";
import infra_kids_area from "@/data/conveniences/kids-play.png";
import infra_lagoon from "@/data/conveniences/lagoon.png";
import lounge_bar from "@/data/conveniences/lounge-bar.png";
import market from "@/data/conveniences/market.png";
import party_saloon from "@/data/conveniences/party-saloon.png";
import infra_security_team from "@/data/conveniences/security.png";
import infra_sports_court from "@/data/conveniences/sports-field.png";
import infra_wall from "@/data/conveniences/wall.png";
import infra_water from "@/data/conveniences/water.png";
import infra_nature_trail from "@/data/conveniences/woods-trail.png";
import infra_woods from "@/data/conveniences/woods.png";
import infra_vegetable_garden from "@/data/conveniences/vegetable_garden.png";
import infra_internet from "@/data/conveniences/internet.png";
import infra_sidewalks from "@/data/conveniences/sidewalks.png";
import infra_eletricity from "@/data/conveniences/eletricity.png";
import infra_pet_area from "@/data/conveniences/pets.png";
import infra_living_space from "@/data/conveniences/living_space.png";
import infra_pool from "@/data/conveniences/pool.png";
import infra_lobby_24h from "@/data/conveniences/lobby-24h.png";
import { StaticImageData } from "next/image";
import { ConvenienceType } from "../types";

export function getConvenienceImage(convenience: string) {
    const env = process.env.NODE_ENV
  
    // If local, lets get random image
      var availableImages: {} = {
        infra_barbecue_zone,
        infra_generates_power,
        infra_grass_area,
        gym,
        home_office,
        infra_kids_area,
        infra_lagoon,
        lounge_bar,
        market,
        party_saloon,
        infra_security_team,
        infra_sports_court,
        infra_wall,
        infra_water,
        infra_nature_trail,
        infra_woods,
        // faltando
        infra_vegetable_garden,
        infra_internet,
        infra_sidewalks,
        infra_eletricity,
        infra_pet_area,
        infra_living_space,
        infra_pool,
        infra_lobby_24h
      }
      //return availableImages[Math.floor(Math.random()*availableImages.length)];
      return (availableImages as any)[convenience];
  }

export interface KondoConveniencesModel {

    type: string,
    conveniences: ConvenienceType[]
    
    /*
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
    */
}

export function getConvenienceTitle(convenience_slug: string) {
 
    // If local, lets get random image
    var convenienceTitles = [
      { convenience: 'infra_barbecue_zone', title: 'Churrasqueira'},
      { convenience: 'infra_generates_power', title: 'Gera Própria Energia'},
      { convenience: 'infra_grass_area', title: 'Área gramada'},
      { convenience: 'gym, title', title: 'Academia'},
      { convenience: 'home_office', title: 'Escritório / Home Office'},
      { convenience: 'infra_kids_area', title: 'Area Kids'},
      { convenience: 'infra_lagoon', title: 'Lagoa'},
      { convenience: 'lounge_bar', title: 'Lounge Bar'},
      { convenience: 'market', title: 'Mercado Próximo'},
      { convenience: 'party_saloon', title: 'Salão de Festas'},
      { convenience: 'infra_security_team', title: 'Equipe de Segurança'},
      { convenience: 'infra_sports_court', title: 'Quadra de Esportes'},
      { convenience: 'infra_wall', title: 'Muros'},
      { convenience: 'infra_water', title: 'Água potável'},
      { convenience: 'infra_nature_trail', title: 'Trilha'},
      { convenience: 'infra_woods', title: 'Bosque'},
      { convenience: 'infra_vegetable_garden', title: 'Horta'},
      { convenience: 'infra_internet', title: 'Internet'},
      { convenience: 'infra_sidewalks', title: 'Calçadas'},
      { convenience: 'infra_eletricity', title: 'Eletricidade'},
      { convenience: 'infra_pet_area', title: 'Área Pet'},
      { convenience: 'infra_living_space', title: 'Área de Convivência'},
      { convenience: 'infra_pool', title: 'Piscina'},
      { convenience: 'infra_lobby_24h', title: 'Portaria 24h'},
      { convenience: 'infra_home_office', title: 'Escritório Home Office'},
      { convenience: 'infra_lounge_bar', title: 'Lounge Bar'},
      { convenience: 'infra_party_saloon', title: 'Salão de Festas'},
      { convenience: 'infra_market_nearby', title: 'Mercado Próximo'},
      { convenience: 'infra_gardens', title: 'Jardins'},
      { convenience: 'infra_heliport', title: 'Heliporto'},
      { convenience: 'infra_gym', title: 'Academia'},
      { convenience: 'infra_interactive_lobby', title: 'Portaria Interativa'},
    ]
    const find = convenienceTitles.filter(item => {
      return item.convenience == convenience_slug;
    }).map(item => item.title);

    return find? find[0] : '';
}