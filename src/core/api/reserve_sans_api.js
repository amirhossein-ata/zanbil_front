import * as api_url from './api_urls'

class Reserve_sans_api {

    static reserve_sans(sansID,description){
        const request = new Request('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: description,
              userId: sansID
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
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