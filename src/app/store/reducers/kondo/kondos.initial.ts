import { KondoModel } from "../../models/kondo.model";

  
const newKondo = new KondoModel();
newKondo.id = 0;
newKondo.active = true;
newKondo.name = 'aaa';

const newKondo2 = new KondoModel();
newKondo2.id = 1;
newKondo2.active = true;
newKondo2.name = 'bbbb';

export const initialState: KondoModel[] = [newKondo, newKondo2];