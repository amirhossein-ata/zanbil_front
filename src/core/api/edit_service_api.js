import * as api_urls from './api_urls'

class edit_service_api {
    static edit_service(service_name,description, fee,sanses,service_id){
        console.log("in api",service_name,description, fee,sanses,service_id)
        const request = new Request(api_urls.SERV,{
            mode:"cors",
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
            },
            body:JSON.stringify({
                description:description,
                fee:fee,
                name:service_name,
                id:service_id,
                sanses:sanses,
                


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