import * as api_urls from './api_urls'
class Add_service_api{
    static add_service(informations, days,business_id){
        console.log(days)
        const request = new Request(api_urls.SERV,{
            mode:'cors',
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                 'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
           },
            body : JSON.stringify({
                        name:informations.service_name,
                        is_protected:informations.is_protected,
                        capacity:informations.capacity,
                        password:informations.password,
                        price:informations.price,
                        description:informations.description,
                        business_id:business_id,
                        days: days


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

export default Add_service_api