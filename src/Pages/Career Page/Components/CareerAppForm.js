import React from 'react'
import { Link } from 'react-router-dom'
import { FileUpload } from 'primereact/fileupload';
import MuiPhoneNumber from 'material-ui-phone-number';

export default function CareerAppForm() {

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
                    <div className='sapbtpformbody'>
                        <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                            <label>Job Position<span>*</span></label>
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Upload Resume<span>*</span></label>
                            <FileUpload style={{ width: '100%', backgroundColor: '#f2f2f2', color: 'Black', display: 'flex', justifyContent: 'center', padding: '1.4vh 0vw', borderRadius: '5px', cursor: 'pointer' }} mode="basic" name="demo[]" url="/api/upload" accept="file/*" customUpload uploadHandler={customBase64Uploader} />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Name<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Email Address<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                            <label>Phone Number<span>*</span></label>
                            <MuiPhoneNumber defaultCountry={'in'} style={{ color: 'white', width: '100%', borderBottom: '1px solid transparent' }} />
                            {/* <select>

                            </select> */}
                        </div>
                        <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                            <label>Select Experience<span>*</span></label>
                            <select>

                            </select>
                        </div>
                        <div className='sapbtpinputbox sapbtptextarea'>
                            <label>Paste Resume<span>*</span></label>
                            <textarea type='text' rows={10} />
                        </div>
                        <div className='sapbtpprivacypolicy'>
                            Your data will be processed by THRIVEX in accordance with our <Link to='/privacypolicy'>privacy policy</Link>
                        </div>
                        <div className='sapbtpsendmsgbtn'>
                            Submit Application <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
                <div className='sapbtpinfosection'>
                    <div className='sapbtpmainheader'>
                        <p>CONNECT WITH US</p>
                    </div>
                    <div className="careerformcardcontainer">
                        <div className="careerformcardlogo">
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                        <div className="careerformcardinfo">
                            <label>Linkedin</label>
                            <p>Follow us for updates, industry insights and career opportunities.</p>
                        </div>
                    </div>
                    <div className="careerformcardcontainer">
                        <div className="careerformcardlogo">
                            <i className="fa-brands fa-youtube" style={{fontSize : '7rem'}}></i>
                        </div>
                        <div className="careerformcardinfo">
                            <label>YouTube</label>
                            <p>Subscribe to out channel for the latest videos, tutorials and Thirvex stories.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
