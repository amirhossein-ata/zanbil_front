import * as api_urls from './api_urls'
class Edit_business_api{
    static edit_business(informations,business_id){
        console.log(sessionStorage.getItem("token"))

        const request = new Request(api_urls.BUIS,{
            mode:'cors',
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
           },
            body : JSON.stringify({
                        id:business_id,
                        name:informations.name,
                        phone_number:informations.phone_number,
                        email:informations.email,
                        address:informations.address,
                        description:informations.description,
                        category:informations.category


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

export default Edit_business_api