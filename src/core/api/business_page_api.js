class business_page_api {

    static get_business_services(){
        const request = new Request('http://jsonplaceholder.typicode.com/posts',{
            mode:'cors',
            method:'GET',
            headers:{
                'Content-Type':'application/json'
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

export default business_page_api