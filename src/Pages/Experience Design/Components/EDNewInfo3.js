import React from 'react'
import '../../../New css/Experience Design/EDNewInfo3.css'
export default function EDNewInfo3() {

    const activitiesdata = [
        {
            header: 'Research',
            description: "Conduct rigorous market analysis and UX audits. Perform secondary and primary research, including ethnographic studies and interviews."
        },
        {
            header: 'Model',
            description: "Map personas and their journeys through the system. Develop comprehensive blueprints for touchpoints and digital features."
        },
        {
            header: 'Identify',
            description: "Synthesizing research findings to identify problems and opportunities Generating ideations and potential solutions, progressing to prototypes"
        },
        {
            header: 'Prototype',
            description: "Developing visual representations such as sketches, wireframes, and prototypes Assessing effectiveness, usability, and impact through various formats"
        },
        {
            header: 'Test',
            description: "Conducting usability, heuristics, and preference testing Iteratively testing solutions with users, stakeholders, and the market"
        },
    ]

    return (
        <>
            <div className="ednewinfo3maincontainer">
                <div className="ednewinfo3childcontainer">
                    <div className="edinfo3header">
                        <p>
                            Key Activities
                        </p>
                    </div>
                    <div className="edinfo3lists">
                        {activitiesdata.map((item, index) => (
                            <div className="edinfo3list">
                                <div className="edinfo3listheader">
                                    <p>{item.header}</p>
                                </div>
                                <div className="edinfo3listdescription">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="edinfo3description">
                        <p>
                            Our iterative methodology enables us to translate innovative concepts into exceptional products and services, setting the standard for excellence in UX design
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
