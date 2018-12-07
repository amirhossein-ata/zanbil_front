class dashboard_api {

    static get_reports(business_id){
        const request = new Request(`http://127.0.0.1:8000/api/dashboard/?id=${business_id}`,{
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
}

export default dashboard_api