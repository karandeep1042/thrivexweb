import React from "react";
import "../../../css/Blogs Page/BrowseBlogsBody.css";
import img from '../../../Resources/ba-006.webp'

export default function BrowseBlogsBody() {
  return (
    <>
      <div className="browseblogsbodymaincontainer">
        <div className="browseblogsfiltercontainer">
          <div className="browseblogsfilter">All Categories</div>
          <div className="browseblogsfilter">Company News</div>
          <div className="browseblogsfilter">Industry News</div>
          <div className="browseblogsfilter">Useful articles</div>
        </div>
        <div className="browseblogscardcontainer">
            <div className="browseblogscard">
                <div className="browseblogssection1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, beatae!</p>
                    <span>Useful Articles</span>
                </div>
                <div className="browseblogssection2">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="browseblogscard">
                <div className="browseblogssection1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, beatae!</p>
                    <span>Useful Articles</span>
                </div>
                <div className="browseblogssection2">
                    <img src={img} alt="" />
                
                </div>
            </div>
            <div className="browseblogscard">
                <div className="browseblogssection1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, beatae!</p>
                    <span>Useful Articles</span>
                </div>
                <div className="browseblogssection2">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="browseblogscard">
                <div className="browseblogssection1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, beatae!</p>
                    <span>Useful Articles</span>
                </div>
                <div className="browseblogssection2">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="browseblogscard">
                <div className="browseblogssection1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, beatae!</p>
                    <span>Useful Articles</span>
                </div>
                <div className="browseblogssection2">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="browseblogscard">
                <div className="browseblogssection1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, beatae!</p>
                    <span>Useful Articles</span>
                </div>
                <div className="browseblogssection2">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
