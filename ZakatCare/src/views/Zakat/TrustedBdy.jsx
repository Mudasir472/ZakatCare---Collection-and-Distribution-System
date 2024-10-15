import "./zakat.css"

function TrustedBdy({head, desc , img}) {
    return ( <>
        <div className="Trusted-bdy mx-3">
            <div className="Trusted-bdyMain flex flex-column items-center justify-evenly">
                <img src={img} alt="" />
                <h3>{head}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </> );
}

export default TrustedBdy;