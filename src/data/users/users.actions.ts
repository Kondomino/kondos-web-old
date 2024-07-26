"use server"

  export async function getCurrentUser(token: string) {
    try {

      console.log('getting current user');
      
      const response = await fetch(`http://localhost:3003/user/current`, {
        cache: "no-store",
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": `Bearer ${token}`
        },
      });
      return await response.json();

    } catch (error) {
      console.log('FETCH ERROR', error);
    }
  }
