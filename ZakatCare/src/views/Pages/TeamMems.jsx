

function TeamMembers({ head, desc, img }) {
    return (<>
        <div className="mems">
            <div className="memsMain">
                <img src={img} alt="" />
                <h4>{head}</h4>
                <p>{desc}</p>
            </div>
        </div>
    </>);
}

export default TeamMembers;