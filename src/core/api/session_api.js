import * as api_urls from './api_urls'
class SessionApi{
    static signup(credentials){
        const request = new Request(api_urls.AUTH,{
            mode:'cors',
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                        username:credentials.username ,
                        password:credentials.password,
                        email:credentials.email,
                        phone_number:credentials.phone_number
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

    static login(credentials){
        const request = new Request(api_urls.AUTH ,{
            mode:'cors',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                username:credentials.username,
                password:credentials.password
            })
        })

        return fetch(request)
                    .then((response) => {
                        if(!response.ok) return false

                        return response.json()
                    }).catch((error) => {
                        console.log(error)
                        return false
                    })
    }

}

export default SessionApi