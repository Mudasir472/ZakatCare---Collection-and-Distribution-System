function TransComps({head,title,desc}) {
    return ( <>
        <div className="transcomps flex flex-column items-center justify-between">
            <div className="transCompsHead">
                <p >{head}</p>
            </div>
            <div className="transTitle">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    </> );
}

export default TransComps;