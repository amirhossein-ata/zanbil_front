import * as api_urls from './api_urls';
class Review_api{
    static add_review(description, rating,service_id){
        console.log(description, rating,service_id)
        const request = new Request(api_urls.REVIEW,{
            mode:"cors",
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
            },
            body:JSON.stringify({
                description:description,
                point:rating,
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
    static get_review(business_id){
        const u = api_urls.REVIEW+ `?business_id=${business_id}`
        console.log('iiiiiiiiiiiiiiim in api ' , business_id , u)
        const request = new Request(u,{
            mode:"cors",
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                //  'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
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

export default Review_api;