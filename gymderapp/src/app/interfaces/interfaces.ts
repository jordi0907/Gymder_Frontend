
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

export interface Faq {
  pregunta?: string;
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  palabra1?: string
  palabra2?: string
  password?: string;
  role?: number;
  salas?: Sala[]
}

export interface Sala {
  name?: string;
  _id?: string;
  actividad?: string;
  admin?: string;
  horario?: string;
  maxInscritos?: number;
};

export interface MensajeContacto {
  subject?: string;
  bodyContent?: string;
  to?: string;

};
