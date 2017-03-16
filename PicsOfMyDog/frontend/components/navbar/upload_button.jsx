import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error) {
        let newPhoto = {
          photo_url: results[0].url,
          owner_id: this.props.currentUser.id,
          title: "New Photo"
        };
        this.props.postPhoto({photo: newPhoto});
      }
    }.bind(this));
  }

  render() {
    return(
      <div>
        <button onClick={this.upload}>Upload</button>
      </div>
    );
  }
}

export default UploadButton;
