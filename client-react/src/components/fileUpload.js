import React, { Fragment, useState } from 'react';
import Message from './Message';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const FileUpload = () => {

const [file, setFile] = useState('');
const [fileName, setFileName] = useState('Choose File');
const [uploadedFile, setUploadFile] = useState({});
const [message, setMessage] = useState('');
    
const onChange = (e) => {
    console.log('filez: ', e.target.files)
   setFile(e.target.files[0]);
   setFileName(e.target.files[0].name);
}

// const onSubmit = async (e) => {
   const send = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try{
      const res = await axios.post('/api/items', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      });
      const { fileName, filePath } = res.data;
      setUploadFile({ fileName, filePath });
      setMessage('File successfully uploaded!.');
    }catch(err){
       if(err.response.status === 500){
          setMessage('There was a problem in server');
       }else{
          setMessage(err.response.data.msg);
       }
    }

}

    return(
        <Fragment>
            {message ? <Message msg={message} /> : null}
            <form noValidate autoComplete="off" >
            {/* onSubmit={onSubmit} */}
                <div>
                   <input type="file" className="" id="customFile" onChange={onChange}/>
                   <label className="" htmlFor="customFile">{fileName}</label>
                </div>
                <div>
                    {/* <input type="submit" value="Upload" /> */}
                    <Button variant="outlined" color="primary" onClick={send}>Upload</Button>
                </div>
                
            </form>
            {
              uploadedFile ? 
              <div>
                  <h3>{uploadedFile.fileName}</h3>
                  <img style={{width: '40%'}} src={uploadedFile.filePath} alt='wait lang' />
              </div>
              : null
            }
        </Fragment>
    );
}

export default FileUpload;