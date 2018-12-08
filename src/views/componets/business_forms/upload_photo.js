import React from 'react';
import ImageUploader from 'react-images-upload';
 
class UploadPhoto extends React.Component {
 
    onDrop=(picture,business_id,get_business_info) =>{
        console.log(picture , business_id)
        let formData;
        formData = new FormData();
        formData.append('picture', picture[0]);
        formData.append('for_service', '0');
        formData.append('business_id', business_id);

        
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
        const business_id = this.props.passed_through_props.business_id

        return (
            <ImageUploader
                withIcon={true}
                buttonText='انتخاب عکس'
                onChange={(picture)=>this.onDrop(picture,business_id,this.props.passed_through_props.get_business_info)}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default UploadPhoto