import React from 'react'
const Helpdesk = ({ img, head, desc }) => {
    return (
        <>
            <div className="docs container d-flex flex-column">
                <div className="docs_img ">
                    <img src={img} alt="" />
                </div>
                <div className="docs_content mt-6">
                    <h2>
                        {head}
                    </h2>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Helpdesk