import * as api_urls from './api_urls'

class edit_service_api {
    static edit_service(description,fee,sanses,service_name,service_id,capacity,is_protected,old_password,new_password,cancellation_range,capacity_changed){
        console.log("in api",service_name,description, fee,sanses,service_id,capacity,is_protected,old_password,new_password,cancellation_range,capacity_changed)
        const request = new Request(api_urls.SERV,{
            mode:"cors",
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
            },
            body:JSON.stringify({
                description:description,
                capacity:capacity,
                fee:fee,
                name:service_name,
                id:service_id,
                sanses:sanses,
                is_protected : is_protected,
                old_password : old_password,
                new_password : new_password,
                cancellation_range: cancellation_range,
                capacity_changed :capacity_changed


            })




        });
        console.log("request is///////////////////////////////////////////////:",request)

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