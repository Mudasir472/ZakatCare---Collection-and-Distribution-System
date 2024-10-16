import React from 'react'

const WorkLoc = ({ country, address, city, pin }) => {
    return (
        <>
            <div className="work_loc">
                <div className="work_loc_content flex flex-column items-start justify-between">
                    <h3>{country}</h3>
                    <p>{address}</p>
                    <p>{city}</p>
                    <p>{pin}</p>
                </div>
            </div>
        </>
    )
}

export default WorkLoc