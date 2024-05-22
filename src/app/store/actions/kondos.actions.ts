"use server"
import KondosService from "@/services/kondos.service";
import { CREATE_KONDOS, RETRIEVE_KONDOS, DELETE_ALL_KONDOS, DELETE_KONDOS, UPDATE_KONDOS } from "./types";
import { KondoModel } from "../models/kondo.model";
  
  export const createKONDO = (kondoDTO: KondoModel) => async (dispatch: any) => {

    console.log('creating kondo action...');

    try {
      const res = await KondosService.create(kondoDTO);
  
      dispatch({
        type: CREATE_KONDOS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveKONDOs = () => async (dispatch: any) => {

    console.log('[ACTION] retrieveKONDOs');

    try {
      const res = await KondosService.getAll();
  
      console.log('fetch result is ', res)  ;
    /*
      dispatch({
        type: RETRIEVE_KONDOS,
        payload: res.data,
      });
      */

      return res.data;

    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateKONDO = (id: number, kondoDTO: KondoModel) => async (dispatch: any) => {
    try {
      const res = await KondosService.update(id, kondoDTO);
  
      dispatch({
        type: UPDATE_KONDOS,
        payload: kondoDTO,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteKONDO = (id: number) => async (dispatch: any) => {
    try {
      await KondosService.remove(id);
  
      dispatch({
        type: DELETE_KONDOS,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllKONDOS = () => async (dispatch: any) => {
    try {
      const res = await KondosService.removeAll();
  
      dispatch({
        type: DELETE_ALL_KONDOS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findKONDOSByID = (id: number) => async (dispatch: any) => {
    console.log('findKONDOSByID');
    try {
      const res = await KondosService.findByID(id);
  
      dispatch({
        type: RETRIEVE_KONDOS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  
  /*
  export const findKONDOSByTitle = (title: string) => async (dispatch: any) => {
    try {
      const res = await KondosService.findByTitle(title);
  
      dispatch({
        type: RETRIEVE_KONDOS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const findKONDOSBySLug = (slug: string) => async (dispatch: any) => {
    try {
      const res = await KondosService.findBySlug(slug);
  
      dispatch({
        type: RETRIEVE_KONDOS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  */

  export async function getData(endpoint: any) {
    try {
      const response = await fetch(endpoint, {
        cache: "no-store"
      });
      const data = await response.json();

      return data;

    } catch (error) {
      console.log('FETCH ERROR', error);
    }
  }