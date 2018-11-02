import * as api_urls from './api_urls'
class category_page_api {

    static get_category_businesses(category_id){
        const request = new Request(`http://127.0.0.1:8000/api/category/?category_id=${category_id}`,{
            mode:'cors',
            method:'GET',
            headers:{
                'Content-Type':'application/json',
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

export default category_page_api