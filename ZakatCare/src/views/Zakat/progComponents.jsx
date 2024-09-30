import "./zakat.css"

function progComponents({ title, description,img }) {
    return (<>
        <div className="comp mb-4 flex justify-evenly items-start flex-column">
            <div className="compImgg">
                <img src={img} alt="" />
            </div>
            <div className="compHead">
                <h3 ><span >{title}</span></h3>
                <p>{description}</p>
                
            </div>

        </div>
    </>);
}

export default progComponents;