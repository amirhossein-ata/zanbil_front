import * as api_urls from './api_urls';
class Account_page_api {
    static get_account_page_info(){
        const request = new Request(api_urls.ACC,{
            mode:'cors',
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
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

};
export default Account_page_api