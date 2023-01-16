import Button from '@mui/material/Button';
import React from 'react';


class ImageConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
    this.convert = this.convert.bind(this);
  }

  convert(e) {
    // check max. file size is not exceeded
    // size is in bytes
    if (e.target.files[0].size > 2000000) {
      console.log("File too large");
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      console.log(reader.result); //base64encoded string
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  }
  render() {
    return (
      <div>
        <input
          accept="image/*"
          style={{
            display: "none"
          }}
          id="button-file"
          type="file"
          onChange={this.convert}
        />
        <label htmlFor="button-file">
          <Button
            variant="contained"
            color="primary"
            component="span"
          >
            Add Additional Images
          </Button>
        </label>
      </div>
    );
  }
}

export default ImageConverter;
