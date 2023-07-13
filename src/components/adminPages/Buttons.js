 import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import {useState} from 'react'
import { Slider } from '@mui/material';
import { Checkbox } from '@mui/material';
import React from 'react';
import { Button, Modal, Box } from '@mui/material';
import * as XLSX from 'xlsx';
import axios from 'axios';
// import './../../css/UserStyle.css'




const GenericHeader = () => {
  
  const [selectedFile, setSelectedFile] = useState(null);
  

  const convertArrayToExcel = (dataArray, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
    // Create a temporary anchor element to download the Excel file
    const anchor = document.createElement('a');
    const url = window.URL.createObjectURL(data);
    anchor.href = url;
    anchor.download = `${filename}.xlsx`;
    anchor.click();
    window.URL.revokeObjectURL(url);
  };
  
  const data = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' }
  ];
  
  const [formData,setFormData] = useState({})
  
  const [value1, setValue1] = useState([0, 100]);
  const handleChangeSLider = (event, newValue) => {
    setValue1(newValue);
  };
  
   const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  const handleExportClick = () => {
    convertArrayToExcel(data, 'data_export');
  };



  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
 

  const handleButtonClick = (modalType) => {
    setActiveModal(modalType);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setActiveModal(null);
  };
  
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://builder-floor-backend-n2ib.onrender.com/api/Users', formData);
      console.log(formData)
      // const jsondata =JSON.stringify(formData)
      // call the API to add the data

      // handle success (e.g., clear form, show success message)
    } catch (error) {
      console.log(error)
      // handle error (e.g., show error message)
    }
  };
  

  const renderModalContent = () => {
    // Customize the content for each modal type
    switch (activeModal) {
      case 'modal1':
        return (
          <div>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <TextField 
                    label="name"
                    type="text"
                    name="name"
                    fullWidth
                    value={formData?.name || ""}
                    onChange={handleChange}
                />
                <FormLabel>Email</FormLabel>
                <TextField 
                    label="email"
                    type="email"
                    name="email"
                    fullWidth
                    value={formData?.email || ""}
                    onChange={handleChange}
                />
                <FormLabel>Address</FormLabel>
                <TextField 
                    label="Address"
                    type="text"
                    name="Address"
                    fullWidth
                    value={formData?.Address || ""}
                    onChange={handleChange}
                />
                <FormLabel>Phone</FormLabel>
                <TextField 
                    label="contact"
                    type="number"
                    name="contact"
                    fullWidth
                    value={formData?.contact || ""}
                    onChange={handleChange}
                />
                <Button class="btnclass"onClick={handleSubmit} type="button" variant="contained"  >ADD</Button>
        
    </FormControl>
          </div>
        );
        case 'modal2':
          return (
            <div>
            <h2>You Can Upload Your Files over Here</h2>
            <input type="file" onChange={handleFileSelect} />
            <Button
             class="btnclass">
              Upload File
            </Button>
          </div>
        );
      case 'modal3':
        return (
           <div>
      <button onClick={handleExportClick}>Export to Excel</button>
    </div>
        );
      default:
        return null;
    }
  };

  return (


    <div  style={{ justifyContent: 'center', textAlign: 'center' ,display:"flex" , gap:"10px"}}>
      <Button class="btn" onClick={() => handleButtonClick('modal1')} >ADD</Button>
      <Button class="btn" onClick={() => handleButtonClick('modal2')}>UPLOAD</Button>
      <Button class="btn" onClick={() => handleButtonClick('modal3')}>EXPORT</Button>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <div style={{ display: 'flex', flexDirection:"column",
        justifyContent: 'center',gap:"10px",
         alignItems: 'center',
          minHeight: '100vh' }}>


          <div style={{
        justifyContent: 'center',
         alignItems: 'center'
        }}>
          {renderModalContent()}

          </div>
          <div>
         <Button class="btnclose"onClick={handleModalClose}>Close</Button>

          </div>

          </div>
      
      </Modal>
   
    </div>
   
  );
};

export default GenericHeader;














