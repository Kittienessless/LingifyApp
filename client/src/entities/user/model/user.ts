import { role } from "entities/roles" 
export interface user   {
  email: string,
  name: string,
  password: string,
  role: role
}