import React from 'react'
import img1 from '../../../Resources/ba-006.webp'

export default function CareerInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3',fontWeight:'600' }}>
                        Are you our Ideal Candidate ?
                    </div>
                    <div className='careerherohead2'>
                    </div>
                    <div className="careerdesc" style={{ margin: '1vh 0vw' }}>
                        <p>
                            We seek corporate athletes who can excel in various settings. While no two Thrivex consultants are alike—our diversity is crucial to our success—there are key attributes we look for in each team member.
                        </p>
                    </div>
                    <div className='careerherohead2' style={{fontSize:'1.6rem'}}>
                        Thrivex Athlete Attributes:
                    </div>
                    <div className="careerdesc" style={{ margin: '1vh 0vw' }}>
                        <ul>
                            <li>Humbly accepts their status as a top performer in all professional settings</li>
                            <li>Acknowledges their strong academic background and prides themselves on being a quick learner</li>
                            <li>Seeks a better model and believes in improving the way we work in this field</li>
                            <li>Values the success of the team and team effort over individual accoladesSeeks a better model and believes in improving the way we work in this field</li>
                        </ul>
                    </div>
                    <div className='careerherohead2' style={{fontSize:'1.6rem'}}>
                        Requisite Skills :
                    </div>
                    <div className="careerdesc" style={{ margin: '1vh 0vw' }}>
                        <ul>
                            <li>Proactive communicator</li>
                            <li>Critical thinker</li>
                            <li>Collaborative team player</li>
                            <li>Analytical powerhouse</li>
                            <li>Change agent</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
