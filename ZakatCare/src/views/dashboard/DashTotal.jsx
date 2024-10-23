import "./dashboard.css"

function DashTotal({head ,desc,img,}) {
    return (<  >
        <div className="dashtotal">
            <div className="totalMain flex items-center justify-evenly">
                <div className="tatalBdy">
                    <p className="mb-2">{head}</p>
                    <h5>{desc}</h5>
                </div>
                <div className="totalLogo ">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </>);
}

export default DashTotal;