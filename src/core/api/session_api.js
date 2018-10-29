import * as api_urls from './api_urls'
class SessionApi{
    static login(credentials){
        const request = new Request(api_urls.AUTH,{
            mode:'cors',
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                        username:credentials.username ,
                        password:credentials.password,
                        email:credentials.email
            })
        });

        return fetch(request)
                    .then((response) => {
                        if(!response.ok){return false}
                        
                        return response.json();
                    }).catch( 
                        (error) => {
                            console.log(error)
                            return false 
                        }
                    )
    }

}

export default SessionApi