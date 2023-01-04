
const ENDPOINT = "http://localhost:8000/api";

export default function loginService({email, password}){
    return fetch(`${ENDPOINT}/login`,{
      method: 'POST',
      headers: {
              'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    }).then(res => {
      if(!res.status === 200){
        throw new Error('Login failed');

      }
      return res.json();
    }).then(res => {
      const {token} = res;
    
     return token;
    }).catch(err => {
      console.log(err);
    })
}