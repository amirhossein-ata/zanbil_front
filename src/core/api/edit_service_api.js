import * as api_urls from './api_urls'

class edit_service_api {
    static edit_service(service_name,description, fee,sanses,service_id){
        console.log(description, fee,sanses,service_id)
        const request = new Request(api_urls.ESERV,{
            mode:"cors",
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
            },
            body:JSON.stringify({
                service_name:service_name,
                description:description,
                fee:fee,
                sanses:sanses,
                service_id:service_id


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
    static get_service_info(service_id){
        console.log(service_id);
        const request = new Request(api_urls.SERV,{
            mode:"cors",
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
            },
            body:JSON.stringify({
                service_id:service_id,
                date:"2018/01/01"


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

export default edit_service_api