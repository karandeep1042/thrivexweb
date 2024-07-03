import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileUpload } from 'primereact/fileupload';
import MuiPhoneNumber from 'material-ui-phone-number';
import Navbar from '../Home Page/Components/Navbar';
import Footer from '../Home Page/Components/Footer';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function ContactUsPage() {

    const [phoneNumber, setPhoneNumber] = useState();

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
            <Navbar />
            <div className='careerappformheadercontainer' style={{ marginTop: '17vh' }}>
                Let’s start a conversation.
            </div>
            <div className='sapbtpappointmentmaincontainer' style={{ marginTop: '4vh' }}>
                <div className='sapbtpformsection'>
                    <div className='sapbtpformheader'>
                        Tell us about your needs
                    </div>
                    <div className='sapbtpformbody'>
                        <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                            <label>First Name<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Last Name<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Email Address<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                            <label>Phone Number<span>*</span></label>
                            {/* <MuiPhoneNumber excludeCountries={['us', 'ca']} defaultCountry={'in'} style={{ color: '#f2f2f2', width: '100%', borderBottom: '1px solid transparent' }} /> */}
                            <PhoneInput
                                country={"eg"}
                                enableSearch={true}
                                value={phoneNumber}
                                onChange={(phone) => setPhoneNumber(phone)}
                            />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Your Role<span></span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox sapbtpselect sapbtpselect2'>
                            <label>Your Industry<span>*</span></label>
                            <select>
                                <option>Select...</option>
                                <option>Banking & Financial Services</option>
                                <option>Insurance</option>
                                <option>Retail & Consumer Packaged Goods</option>
                                <option>Manufacturing</option>
                                <option>Energy</option>
                                <option>Utilities</option>
                                <option>Hi-Tech</option>
                                <option>Communications, Media & Entertainment</option>
                                <option>Travel,Transport & Hospitality</option>
                                <option>Health</option>
                                <option>Life Sciences</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className='sapbtpinputbox sapbtpselect'>
                            <label>How did you hear about us<span>*</span></label>
                            <select>
                                <option>Select...</option>
                                <option>Search Engine</option>
                                <option>Sales Person</option>
                                <option>Trade Show / Conferences</option>
                                <option>Referred by Peer</option>
                                <option>Referred by Industry Analyst</option>
                            </select>
                        </div>
                        <div className='sapbtpinputbox sapbtptextarea'>
                            <label>Your Message<span>*</span></label>
                            <textarea type='text' rows={10} />
                        </div>
                        <div className='sapbtpprivacypolicy'>
                            Your data will be processed by THRIVEX in accordance with our <Link to='/privacypolicy'>privacy policy</Link>
                        </div>
                        <div className='sapbtpsendmsgbtn'>
                            Send Message <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
                {/* <div className='sapbtpinfosection'>
                    <div className='sapbtpsocialcontainer'>
                        <i class="fa-solid fa-envelope"></i>
                        connect@thethrivex.com
                    </div>
                    <div className='sapbtpsocialcontainer'>
                        <i class="fa-solid fa-phone"></i>
                        +91-70434 70009
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    )
}
