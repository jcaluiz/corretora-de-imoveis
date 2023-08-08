"use client";
import RequestsProperty from "@/services/RequestsProperty";
import { Context } from "@/store/context/Context";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
// import { google } from 'googleapis';

// const GOOGLE_API_FOLDER_ID = '1vMwMzHIe4lWwduDqelVs4VHRS8v97dgg';

const FileUpload = () => {
  const { state, dispatch } = useContext(Context);
  const [file, setFile] = useState<FileList | null>(null);
  //     const [uploadResult, setUploadResult] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (file) {
      console.log(file[0].name);
      const formData = new FormData();
      for (let index = 0; index < file.length; index += 1) {
          formData.append("file", file[index]);
      }
      console.log(formData);
      const requests = new RequestsProperty();
      const imagesUrl = await requests.propertyUpload(formData);
      dispatch({type: 'ADDPROPERTY', payload: {
        ...state.addProperty,
        imovel: {
          ...state.addProperty.imovel,
          imagens: imagesUrl,
        }}});
    }
    //         if (file) {
    //             try {
    //                 const auth = new google.auth.GoogleAuth({
    //                     keyFile: './uploadGoogleDrive.json',
    //                     scopes: ['https://www.googleapis.com/auth/drive']
    //                 });

    //                 const driveService = google.drive({
    //                     version: 'v3',
    //                     auth,
    //                 });

    //                 const fileMetaData = {
    //                     'name': file.name,
    //                     'parents': [GOOGLE_API_FOLDER_ID],
    //                 };

    //                 const media = {
    //                     mimeType: file.type,
    //                     body: file,
    //                 }

    //                 const response = await driveService.files.create({
    //                     resource: fileMetaData,
    //                     media: media,
    //                     fields: 'id',
    //                 });

    //                 setUploadResult(`File uploaded with ID: ${response.data.id}`);
    //             } catch (err) {
    //                 console.log('Error uploading file', err);
    //                 setUploadResult('Error uploading file');
    //             }
    //         }
  };

  console.log(state.addProperty);

  return (
    <form method="post" encType="multipart/form-data">
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          name="file"
          accept=".jpg, .jpeg, .png"
          multiple
        />
        <button onClick={handleUpload}>Upload to Google Drive</button>
        {/* <div>{uploadResult}</div> */}
      </div>
    </form>
  );
};

export default FileUpload;
