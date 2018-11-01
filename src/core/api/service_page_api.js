import * as api_urls from './api_urls'
class service_page_api {

    static get_service_page_info(service_id){
        const request = new Request(api_urls.SERVICEPAGE+`?service_id=${service_id}` ,{
            mode:'cors',
            method:'GET',
            headers:{
                'Content-Type':'application/json'
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

export default service_page_api