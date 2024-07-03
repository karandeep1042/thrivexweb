import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FileUpload } from 'primereact/fileupload';
import MuiPhoneNumber from 'material-ui-phone-number';
import emailjs from '@emailjs/browser';
// import PhoneInput from 'react-phone-number-input'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function CareerAppForm() {
    const form = useRef();
    const [position, setPosition] = useState();
    const [name, setName] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [experience, setExperience] = useState();
    const [resumeText, setResumeText] = useState();
    const [resumeFile, setResumeFile] = useState();
    let emptyCounter;

    let emailMessage = `
    Full Name : ${name}
    Phone Number : ${phoneNumber}
    Position : ${position}
    Years Of Experience : ${experience}
    Email Address : ${emailAddress}

    Resume : 
    ${resumeText}
    `

    const emailTemplate = {
        from_name: name,
        from_email: emailAddress,
        to_name: 'THRIVEX',
        message: emailMessage,
        attachment: resumeFile
    };

    const sendEmail = (e) => {
        // e.preventDefault();
        emailjs
            .send('service_ihgl8x9', 'template_3hexz7p', emailTemplate, 'MBOoGx2dJN-fehq3E')
            .then((res) => {
                console.log('SUCCESS!', res);
            })
            .catch((error) => {
                console.error("Error", error);
            })
    }

    const checkEveryField = () => {
        console.log(document.getElementById("sapbtpfileinput").value);
        emptyCounter = 0;
        const elements = document.getElementsByClassName("sapbtpinputtext");
        console.log(elements);
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.value == "" || elements[0].value == "Select...") {
                element.style.border = "1px solid red"
                emptyCounter++;
            } else {
                element.style.border = "none"
            }
        }
        console.log(emptyCounter);
        if (emptyCounter == 0) {
            sendEmail();
        }
    }


    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.files[0];
        if (event.files && file) {
            const reader = new FileReader();
            // let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url
            reader.onloadend = function () {
                const base64data = reader.result;
                // console.log(base64data);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <>
            <div className='careerappformheadercontainer'>
                Ready to Join Us?
            </div>
            <div className='careerappformdesc'>
                If you believe you have what it takes to thrive at Thrivex, we want to hear from you.
            </div>
            <div className='sapbtpappointmentmaincontainer' style={{ marginTop: '4vh' }}>
                <div className='sapbtpformsection'>
                    <div className='sapbtpformheader'>
                        Application Form
                    </div>
                    <form ref={form}>
                        <div className='sapbtpformbody'>
                            <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                <label>Job Position<span>*</span></label>
                                <select value={position} onChange={(e) => { setPosition(e.target.value) }} className='sapbtpinputtext'>
                                    <option>Select... </option>
                                    <option>Senior Manager</option>
                                    <option>Project Manager</option>
                                    <option>Developer</option>
                                </select>
                            </div>
                            <div className='sapbtpinputbox'>
                                <label>Upload Resume<span>*</span></label>
                                {/* <FileUpload style={{ width: '100%', backgroundColor: '#f2f2f2', color: 'Black', display: 'flex', justifyContent: 'center', padding: '1.4vh 0vw', borderRadius: '5px', cursor: 'pointer' }} mode="basic" name="demo[]" url="/api/upload" accept="file/*" customUpload uploadHandler={(e) => { customBase64Uploader(e) }} /> */}
                                <input type="file" name="" value={resumeFile} id="sapbtpfileinput" className='sapbtpinputtext' />
                            </div>
                            <div className='sapbtpinputbox'>
                                <label>Name<span>*</span></label>
                                <input type='text' className='sapbtpinputtext' value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className='sapbtpinputbox'>
                                <label>Email Address<span>*</span></label>
                                <input type='text' className='sapbtpinputtext' value={emailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} />
                            </div>
                            <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                <label>Phone Number<span>*</span></label>
                                {/* <MuiPhoneNumber defaultCountry={'in'} value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} style={{ color: 'white', width: '100%', borderBottom: '1px solid transparent' }} /> */}
                                <PhoneInput
                                    country={"eg"}
                                    enableSearch={true}
                                    value={phoneNumber}
                                    onChange={(phone) => setPhoneNumber(phone)}
                                />
                            </div>
                            <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                                <label>Select Experience<span>*</span></label>
                                <select value={experience} onChange={(e) => { setExperience(e.target.value) }} className='sapbtpinputtext'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>10+</option>
                                </select>
                            </div>
                            <div className='sapbtpinputbox sapbtptextarea'>
                                <label>Paste Resume<span>*</span></label>
                                <textarea type='text' rows={10} value={resumeText} onChange={(e) => { setResumeText(e.target.value) }} className='sapbtpinputtext' />
                            </div>
                            <div className='sapbtpprivacypolicy'>
                                Your data will be processed by THRIVEX in accordance with our <Link to='/privacypolicy'>privacy policy</Link>
                            </div>
                            <div className='sapbtpsendmsgbtn' onClick={checkEveryField}>
                                Submit Application <i class="fa-solid fa-paper-plane"></i>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
