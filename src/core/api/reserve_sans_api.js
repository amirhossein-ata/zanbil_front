import * as api_url from './api_urls'

class Reserve_sans_api {

    static reserve_sans(sansID,description,service_id,date){
        console.log('daaate passed to api is : ',date)
        const request = new Request('http://127.0.0.1:8000/api/service/reserve/', {
            method: 'PUT',
            body: JSON.stringify({
              description: description,
              sans_id: sansID,
              service_id: service_id,
              date:date
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
           
            }
        })

        return fetch(request)
                    .then((response) => {
                        if(!response.ok){return false}
                        return response.json()
                    }).catch(
                        (error) => {
                            console.log(error)
                            return false
                        }
                    )
    }
}

export default Reserve_sans_api