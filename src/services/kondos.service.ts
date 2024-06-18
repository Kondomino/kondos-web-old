import { KondoModel } from "@/data/kondos/kondo.model";
import http from "./http-common";

const getAll = () => {
  return http.get("/kondo");
};

const get = (id: Number) => {
  return http.get(`/kondo/${id}`);
};

const create = (data: KondoModel) => {
  return http.post("/kondo", data);
};

const update = (id: Number, data: any) => {
  return http.put(`/kondo/${id}`, data);
};

const remove = (id: Number) => {
  return http.delete(`/kondo/${id}`);
};

const removeAll = () => {
  return http.delete(`/kondo`);
};

const findByID = (id: number) => {
  return http.get(`/kondo/${id}`);
};
const findByTitle = (title: string) => {
  return http.get(`/kondo?title=${title}`);
};
const findBySlug = (slug: string) => {
  return http.get(`/kondo?slug=${slug}`);
};

const kondoService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByID
};

export default kondoService;