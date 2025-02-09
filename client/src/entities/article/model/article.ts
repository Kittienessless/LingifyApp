

import type {user} from 'entities/user'
//экспорт юзер
export interface article  {
  title: string;
  post_body : string;
  author : user;
  }