import * as api_urls from './api_urls'
import { error } from 'util';

class search_api {
    static send_search_filters(search_filters){
        const request = new Request(`http://127.0.0.1:8000/api/service/search/`, {
            method: 'POST',
            body: JSON.stringify({
              service_name: search_filters.service_name,
              business_name: search_filters.business_name,
              min_price: search_filters.min_price,
              max_price:search_filters.max_price,
              category:search_filters.category
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
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