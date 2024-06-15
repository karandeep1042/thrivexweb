import React from 'react'
import { Link } from 'react-router-dom'

export default function SapbptForm() {
    return (
        <>
            <div className='sapbtpappointmentmaincontainer'>
                <div className='sapbtpformsection'>
                    <div className='sapbtpformheader'>
                        Request appointment now
                    </div>
                    <div className='sapbtpformbody'>
                        <div className='sapbtpinputbox sapbtpselect'>
                            <label>Salutation<span>*</span></label>
                            <select>
                                <option></option>
                            </select>
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>First Name<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Last Name<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Email<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox'>
                            <label>Company Name<span>*</span></label>
                            <input type='text' />
                        </div>
                        <div className='sapbtpinputbox sapbtptextarea'>
                            <label>Your Message<span>*</span></label>
                            <textarea type='text' rows={10} />
                        </div>
                        <div className='sapbtpprivacypolicy'>
                            Your data will be processed by THRIVEX in accordance with our <Link to='/privacypolicy'>privacy policy</Link>
                        </div>
                        <div className='sapbtpsendmsgbtn'>
                            Send message <i class="fa-solid fa-paper-plane"></i>
                        </div>
                    </div>
                </div>
                <div className='sapbtpinfosection'>
                    <div className='sapbtpmainheader'>
                        Individual Coaching Session
                    </div>
                    <div className='sapbtpinfo'>
                        <div className='sapbtpsubheader'>
                            Online Consulting on the THRIVEX SAP BTP Factory
                        </div>
                        <div className='sapbtpdescription'>
                            Are you navigating the SAP S/4HANA transformation, integrating applications and business partners, or planning to decouple your SAP ERP system extensions from the core? The SAP Business Technology Platform (SAP BTP) can assist with these tasks and more. In a free online consultation, we will explain the platform's possibilities and benefits, demonstrating how you can leverage the THRIVEX SAP BTP Factory.
                        </div>
                    </div>
                    <div className='sapbtpinfo'>
                        <div className='sapbtpsubheader'>
                            Consultation Content:
                        </div>
                        <div className='sapbtpdescription'>
                            <ul>
                                <li>Introduction to the THRIVEX SAP BTP Factory and related SAP Business Technology Platform services</li>
                                <li>Overview of future SAP system environments and the role of SAP BTP</li>
                                <li>Discussion of your requirements for integration, extension, and innovation, with possible scenarios for SAP BTP</li>
                                <li>Approximately 45 minutes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
