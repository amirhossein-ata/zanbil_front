import * as api_urls from './api_urls'

class Cancellation_api {
    static cancel_reserve(reserve_id){
        const request = new Request(api_urls.CANCEL, {
            method: 'PUT',
            body: JSON.stringify({
              reserve_id:reserve_id
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
           
            }
        })

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

export default Cancellation_api