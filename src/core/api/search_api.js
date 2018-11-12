import * as api_urls from './api_urls'
import { error } from 'util';

class search_api {
    static send_search_filters(search_filters){
        const request = new Request('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: search_filters.service_name,
              body: search_filters.business_name,
              userId: search_filters.min_price
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })

        return fetch(request)
                    .then((response) => {
                        if(!response){return false}
                        return response.json();
                    }).catch(
                        (error) => {
                            console.log(error)
                            return false
                        }
                    )

    }
}

export default search_api