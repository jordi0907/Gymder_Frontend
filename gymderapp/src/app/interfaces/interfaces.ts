
export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}

export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface Sala {
  name: string;
  actividad: string;
  horario: string;
  maxInscritos: number;
  //numInscritos: number; numero actual de inscritos
};
