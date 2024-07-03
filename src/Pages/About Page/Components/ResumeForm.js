import { React, useState, useRef } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import { Link } from 'react-router-dom';
import { FileUpload } from 'primereact/fileupload';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ResumeForm() {
    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
        };
    }

    return (
        <>
            <div style={{ marginTop: '10vh' }} className="aboutcontactformmaincontainer">
                <div className="aboutcontactformheader">
                    Resume Application
                </div>
                <div className="aboutcontactformbody">
                    <div className="inputitem">
                        <label>Name*</label>
                        <input type="text" name="" id="firstname" max={20} required={true} />
                    </div>
                    <div className="inputitem">
                        <label>Job Position*</label>
                        <input type="text" name="" id="lastname" max={15} required={true} />
                    </div>
                    <div className="inputitem">
                        <label>Email*</label>
                        <input type="text" name="" id="email" max={40} required={true} />
                    </div>
                    <div className="inputitem phonenumberinput">
                        <label>Phone Number*</label>
                        <MuiPhoneNumber defaultCountry={'in'} style={{ color: 'white', width: '103%', border: '1px solid #' }} />,
                    </div>
                    <div className="inputitem">
                        <label>Select Experience</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{ backgroundColor: '#292929', width: '103%', height: '4.7vh', color: 'white' }}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={101}>10+</MenuItem>
                        </Select>
                    </div>
                    <div className="inputitem">
                        <label>Upload Resume*</label>
                        <FileUpload style={{ width: '103%', backgroundColor: '#2C2C2C', color: 'white', display: 'flex', justifyContent: 'center', padding: '1.4vh 0vw', borderRadius: '5px', cursor: 'pointer' }} mode="basic" name="demo[]" url="/api/upload" accept="file/*" customUpload uploadHandler={customBase64Uploader} />
                    </div>
                    <div className="aboutcontactformsubmitbtnparent">
                        <div className="aboutcontactformsubmitbtn">
                            <p> Submit</p>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                        <div className="aboutcontactformprivacytpolicy">
                            By Clicking submit button,you agree to our <Link to='/privacypolicy' style={{ color: '#0eaae3', textDecoration: 'none' }}>privacy policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
