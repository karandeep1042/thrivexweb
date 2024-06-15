import React from "react";
import "../../../css/Home Page/BlogSlider.css";
import img from "../../../Resources/cardimg1.webp";

export default function BlogsSlider() {
  var slidercounter = 0;

  const prevslide = () => {
    let elements = document.getElementsByClassName("blogsitem");
    console.log(slidercounter);
    if (slidercounter < 0) {
      slidercounter = slidercounter + 115;
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.translate = `${slidercounter}vw`;
      }
    }
  };

  const nextslide = () => {
    let elements = document.getElementsByClassName("blogsitem");
    if (slidercounter > -575) {
      slidercounter = slidercounter - 50;
      console.log(slidercounter);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.translate = `${slidercounter}vw`;
      }
    }
  };

  return (
    <>
      <div className="blogsslidermaincontainer">
        <div className="blogssliderheader">Explore Our Articles</div>
        <div className="blogsslidercontainer">
          <div className="blogssliderbtn">
            <i className="fa-solid fa-angle-left" onClick={prevslide}></i>
          </div>
          <div className="blogslides">
            <div className="blogslideschild">
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              <div className="blogsitem">
                <div className="blogssection1">
                  <div className="bloglogo">
                    <img src={img} alt="" />
                  </div>
                  <div className="bloginfo">
                    <div className="blogtitle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="blogpublishdate">Pulished on 7/5/24</div>
                  </div>
                </div>
                <div className="blogssection2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate ullam id, dolores in eos sit.
                </div>
                <div className="blogssection3">By Bernard Blackwood</div>
              </div>
              
            </div>
          </div>
          <div className="blogssliderbtn">
            <i className="fa-solid fa-angle-right" onClick={nextslide}></i>
          </div>
        </div>
      </div>
    </>
  );
}
