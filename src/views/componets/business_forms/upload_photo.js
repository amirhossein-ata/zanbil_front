import React from 'react';
import ImageUploader from 'react-images-upload';
 
class UploadPhoto extends React.Component {
 
    onDrop=(picture) =>{
        console.log(picture)
        let formData;
        formData = new FormData();
        formData.append('picture', picture[0]);
        formData.append('for_service', '0');
        formData.append('business_id', 1);

        
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
                if(!response.ok){console.log('uploading image failed')}
                console.log('image uploaded successfully ',response.json)
                return response.json();
            }).catch( 
                (error) => {
                    console.log(error)
                    return false 
                }
            )        
    
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='انتخاب عکس'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default UploadPhoto