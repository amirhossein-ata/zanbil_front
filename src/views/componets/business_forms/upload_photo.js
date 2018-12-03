import React from 'react';
import ImageUploader from 'react-images-upload';
 
class UploadPhoto extends React.Component {
 
    state={
        picture:''
    }

    onDrop=(picture) =>{
        this.setState(()=>({picture:picture}));

        console.log(this.state.picture)
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