import { Grupo } from "./grupo";

export interface Contato {
  id?: number;
  name: string;
  phone: string;
  email: string;
  adress: string;
  description: string;
  grupo?: Grupo;
}
