import { BASE_URL } from "shared/constances";
import { article } from "entities/article";

 
const errorHandler = async (response: Response) => {
  if (response.status !== 200) {
    const responseData = await response.json();
    throw Error(responseData.message);
  }
};

export const API = {
  
  posts: {
      createPost: async (data: article) => {
        
        const response = await fetch(`${BASE_URL}/posts/createPost`, {
          method: "POST",
          credentials: "include",

          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(data)
        });
        await errorHandler(response);
      },
      getAllPosts: async  () => {
        const response = await fetch(`${BASE_URL}/posts/PostsList`, {
           method: "GET"
        });
        await errorHandler(response);
        return await response.json();
      },
    }
  };