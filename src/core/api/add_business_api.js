import * as api_urls from './api_urls'
class Add_business_api{
    static add_business(informations){
        const request = new Request(api_urls.BUIS,{
            mode:'cors',
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                        name:informations.name,
                        phone_number:informations.phone_number,
                        email:informations.email,
                        address:informations.address,
                        description:informations.description


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

export default Add_business_api