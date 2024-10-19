import logo from "/Logo.png"
import admin from "/admin.png"
import "./dashboard.css"
function Headbar() {
    return (<>
        <div className="headbar ">
            <div className="headbar-main container">
                <nav className=" flex items-center justify-between">
                    <img className="admin-logo" src={logo} alt="" />
                    <div className="admin flex items-center justify-between">
                        <img src={admin} alt="" />
                        <div className="adminBdy flex flex-column items-start justify-center">
                            <h4>Name</h4>
                            <p>admin</p>
                        </div>
                        <span className="flex items-center justify-center"><i class="bi bi-chevron-down"></i></span>
                    </div>
                </nav>
            </div>
        </div>
    </>);
}

export default Headbar;