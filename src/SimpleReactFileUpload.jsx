import React from 'react'
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    console.log('on Change Executed')
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = '/uploadreact';
    const formData = new FormData();
    formData.append('file1',file)
    console.log(file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    console.log(formData)
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} method="post">
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} name="photo" />
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default SimpleReactFileUpload