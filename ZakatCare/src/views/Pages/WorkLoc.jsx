import React from 'react'

const WorkLoc = ({ head, desc }) => {
    return (
        <>
            <div className="work_loc ">
                <div className="work_loc_content ">
                    <h3>{head}

                    </h3>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default WorkLoc