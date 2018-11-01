import * as api_urls from './api_urls'
class business_page_api {

    static get_business_info(business_id){
        const request = new Request(`http://127.0.0.1:8000/api/business/?business_id=${business_id}`,{
            mode:'cors',
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`

            },
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

export default business_page_api