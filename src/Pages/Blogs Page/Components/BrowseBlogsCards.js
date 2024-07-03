import React from 'react'
import '../../../css/Blogs Page/BrowseBlogsCards.css'
import img from '../../../Resources/BI-Tool-Archive-Image.png'
import { Link } from 'react-router-dom'

export default function BrowseBlogsCards() {
    return (
        <>
            <div className="browseblogsfiltercontainer">
                <div className="browseblogsfilteritem browseblogsfilteritemtextinput">
                    <div className="browseblogsfilteritemlabel ">
                        <label>Search by keyword</label>
                    </div>
                    <div className="browseblogsfilteriteminput">
                        <input type="text" name="" placeholder='Search articles...' id="" />
                    </div>
                </div>
                <div className="browseblogsfilteritem browseblogsfilteritemselect">
                    <div className="browseblogsfilteritemlabel">
                        <label>Topics</label>
                    </div>
                    <div className="browseblogsfilteriteminput">
                        <select name="" id="">
                            <option value="">Select Topics</option>
                            <option value="">Analytics</option>
                            <option value="">Cloud</option>
                            <option value="">Data Architecture</option>
                        </select>
                    </div>
                </div>
                <div className="browseblogsfilteritem browseblogsfilteritemselect">
                    <div className="browseblogsfilteritemlabel">
                        <label>Techologies</label>
                    </div>
                    <div className="browseblogsfilteriteminput">
                        <select name="" id="">
                            <option value="">Select Technologies</option>
                            <option value="">Alteryx</option>
                            <option value="">AWS</option>
                            <option value="">BigQuery</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="browseblogscardsmaincontainer">
                <div className="browseblogscardcontainer">
                    <div className="browseblogscardimage">
                        <img src={img} alt="" />
                        <div className='browseblogscardtag'>Tag</div>
                    </div>
                    <div className="browseblogscardinformation">
                        <div className="browseblogscarddateandtitle">
                            <p>Apr 25, 2024</p>
                            <label>The Essential Guide to Sigma Health Checks </label>
                        </div>
                        <div className="browseblogscardrredirectbtnparentcontainer">
                            <Link className="browseblogscardrredirectbtn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="browseblogscardcontainer">
                    <div className="browseblogscardimage">
                        <img src={img} alt="" />
                        <div className='browseblogscardtag'>Tag</div>
                    </div>
                    <div className="browseblogscardinformation">
                        <div className="browseblogscarddateandtitle">
                            <p>Apr 25, 2024</p>
                            <label>The Essential Guide to Sigma Health Checks </label>
                        </div>
                        <div className="browseblogscardrredirectbtnparentcontainer">
                            <Link className="browseblogscardrredirectbtn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="browseblogscardcontainer">
                    <div className="browseblogscardimage">
                        <img src={img} alt="" />
                        <div className='browseblogscardtag'>Tag</div>
                    </div>
                    <div className="browseblogscardinformation">
                        <div className="browseblogscarddateandtitle">
                            <p>Apr 25, 2024</p>
                            <label>The Essential Guide to Sigma Health Checks </label>
                        </div>
                        <div className="browseblogscardrredirectbtnparentcontainer">
                            <Link className="browseblogscardrredirectbtn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="browseblogscardcontainer">
                    <div className="browseblogscardimage">
                        <img src={img} alt="" />
                        <div className='browseblogscardtag'>Tag</div>
                    </div>
                    <div className="browseblogscardinformation">
                        <div className="browseblogscarddateandtitle">
                            <p>Apr 25, 2024</p>
                            <label>The Essential Guide to Sigma Health Checks </label>
                        </div>
                        <div className="browseblogscardrredirectbtnparentcontainer">
                            <Link className="browseblogscardrredirectbtn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="browseblogscardcontainer">
                    <div className="browseblogscardimage">
                        <img src={img} alt="" />
                        <div className='browseblogscardtag'>Tag</div>
                    </div>
                    <div className="browseblogscardinformation">
                        <div className="browseblogscarddateandtitle">
                            <p>Apr 25, 2024</p>
                            <label>The Essential Guide to Sigma Health Checks </label>
                        </div>
                        <div className="browseblogscardrredirectbtnparentcontainer">
                            <Link className="browseblogscardrredirectbtn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="browseblogscardcontainer">
                    <div className="browseblogscardimage">
                        <img src={img} alt="" />
                        <div className='browseblogscardtag'>Tag</div>
                    </div>
                    <div className="browseblogscardinformation">
                        <div className="browseblogscarddateandtitle">
                            <p>Apr 25, 2024</p>
                            <label>The Essential Guide to Sigma Health Checks </label>
                        </div>
                        <div className="browseblogscardrredirectbtnparentcontainer">
                            <Link className="browseblogscardrredirectbtn">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
