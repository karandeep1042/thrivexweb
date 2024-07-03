import React from 'react'
import '../../../css/Blogs Page/BrowseBlogsHero.css'
import img1 from '../../../Resources/blogsheader.jpeg'

export default function BrowseBlogsHero() {
    return (
        <>
            <div className="browseblogsemptyspace">

            </div>
            <div className="browseblogsheromaincontainer">
                <div className="browseblogsheroimgparentcontainer">
                    <div className="browseblogsheroimgcontainer">
                        <img src={img1} alt="" />
                        <div className="browseblogsimageoverlay">

                        </div>
                    </div>
                    <div className="browseblogsheroinfo">
                        <div className="browseblogsheroheader">
                            Insights Blog
                        </div>
                        <div className="browseblogsherodesc">
                            The latest insights, tips, advice, and all the resources you need to transform your business with data.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
