import * as api_urls from './api_urls'
class service_page_api {

    static get_service_page_info(service_id,date){
        console.log({
            service_id:service_id,
            date:date
        })
        const request = new Request(api_urls.SERV ,{
            mode:'cors',
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                service_id:service_id,
                date:date
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

export default service_page_api