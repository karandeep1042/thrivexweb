import React from 'react'
import img1 from '../../../../Resources/Product Engineering/swhead.jpg'
import '../../../../css/SW dev/SWdevhead.css'
import { Link } from 'react-router-dom'

export default function SWdevhead() {

    const devprac = ['Microservices',
        'API-first Architecture',
        'Mobile-first & Responsive Design',
        'Automated Testing with CI/CD',
        'Enterprise Security'
    ]

    const trendtech = ['Agular.JS',
        'React.JS',
        'Node.JS',
        'Java',
        'Python',
        'TypeScript',
        'JavaScript',
        'Clojure',
        'NoSQL',
        'Cloud Services'
    ]

    return (
        <>
            <div className='swdevheadmaincontainer'>
                <div className='swdevheadlist'>
                    <div className='swdevlistheader'>
                        Trending Technologies
                    </div>
                    <ul>
                        {trendtech.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='swdevheadlist'>
                    <div className='swdevlistheader'>
                        Top Development Practices
                    </div>
                    <ul>
                        {devprac.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
