import { BASE_URL } from "shared/constances";
import {user} from 'entities/user'
const errorHandler = async (response: Response) => {
  if (response.status !== 200) {
    const responseData = await response.json();
    throw Error(responseData.message);
  }
};

export const userAPI = {
  auth: {
    login: async (data: user) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
         method: "POST",
         credentials: "include",
       headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify(data)
      });
      await errorHandler(response);
    },
    logout: async () => {
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: "DELETE",
        credentials: "include",
      });
      await errorHandler(response);
    },
  },
  
  user: {
    register: async (data: user) => {
      const response = await fetch(`${BASE_URL}/auth/registration`, {
         method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data)
      });
      await errorHandler(response);
    },
    getCurrentUser: async () => {
        const response = await fetch(`${BASE_URL}/auth/getOneUserByPK`, {
          credentials: "include",
          method: "GET"
        });
        await errorHandler(response);
        return await response.json();
      },
  },
}