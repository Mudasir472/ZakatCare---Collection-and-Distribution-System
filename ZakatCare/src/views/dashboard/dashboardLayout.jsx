import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./dashboard.css"
import Dashboard from "./dashboard";
import Headbar from "./Headbar";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";
import ContactLists from "./ContactLists";
import DonorList from "./donorList";
import Reciever from "./Reciever";
import Approved from "./Approved";
function DashboardLayout() {
  return (<>
    <div className="routes">
      <Headbar />
      <Sidebar />
      <div style={{overflow:"hidden"}} className="dashboard-content ">
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="donor-list" element={<DonorList />} />
          <Route path="contact-list" element={<ContactLists />} />
          <Route path="reciever-list" element={<Reciever />} />
          <Route path="approved-list" element={<Approved />} />
        </Routes>
      </div>
    </div>
  </>);
}
export default DashboardLayout;