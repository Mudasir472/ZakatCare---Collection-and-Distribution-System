import React from 'react'
const Support = ({ img, head, desc }) => {
    return (
        <div className='support container'>
            <div className="support_img">
                <img src={img} alt="" />
            </div>
            <div className="ques_content">
                <h2>{head}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Support