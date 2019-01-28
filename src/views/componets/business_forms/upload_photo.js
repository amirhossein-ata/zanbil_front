import React from 'react';
import ImageUploader from 'react-images-upload';
 
class UploadPhoto extends React.Component {
 
    onDrop=(picture,business_id,get_business_info,for_business,service_id) =>{
        console.log(picture , business_id)
        let formData;
        formData = new FormData();
        if(for_business){
            formData.append('picture', picture[0]);
            formData.append('for_service', '0');
            formData.append('business_id', business_id);
            console.log('for business')        
        }else{
            formData.append('picture', picture[0]);
            formData.append('for_service', '1');
            formData.append('service_id', service_id);       
            console.log('for service')      
        }
        
        const request = new Request("http://127.0.0.1:8000/api/file/picture/",{
            mode:'cors',
            method:'POST',
            headers:{
                'Authorization':  `Bearer ${sessionStorage.getItem('token')}`
            },
            body :formData
        })
        fetch(request)
            .then((response) => {
                if(!response.ok){ console.log('uploading image failed')}
                else{
                    console.log('image uploaded successfully ',response.json)
                    get_business_info(this.props.business_id)
                }
            }).catch( 
                (error) => {
                    console.log(error) 
                }
            )        
    
    }
    
    
    render() {
        const business_id = this.props.passed_through_props.business_id ? this.props.passed_through_props.business_id : 0 
        const service_id = this.props.passed_through_props.service_id ? this.props.passed_through_props.service_id : 0
        const for_business = this.props.passed_through_props.for_business
        const get_business_info = this.props.passed_through_props.get_business_info
        return (
            <ImageUploader
                withIcon={true}
                buttonText='انتخاب عکس'
                onChange={(picture)=>this.onDrop(picture,business_id,get_business_info,for_business, service_id)}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default UploadPhoto