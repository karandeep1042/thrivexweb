import React from 'react'
import { Link } from 'react-router-dom'
import MuiPhoneNumber from 'material-ui-phone-number'

export default function DataAIContactForm() {
    return (
        <>
            <div className='careerappformheadercontainer' >
                <p >
                    Transform your <b>business</b> with <b>Data</b> and <b>AI</b>
                </p>
            </div>
            <div className='sapbtpappointmentmaincontainer' style={{ marginTop: '4vh' }}>
                <div className='sapbtpformsection'>
                    <div className='sapbtpformheader'>
                        Let's Connect: We would love to hear from you
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
                            <MuiPhoneNumber excludeCountries={['us', 'ca']} defaultCountry={'in'} style={{ color: '#f2f2f2', width: '100%', borderBottom: '1px solid transparent' }} />
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
            </div>
        </>
    )
}
