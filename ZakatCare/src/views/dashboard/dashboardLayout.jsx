import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./dashboard.css"
import Dashboard from "./dashboard";
import Headbar from "./Headbar";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";
import ContactLists from "./ContactLists";
import Messages from "./Messages";
import DonorList from "./donorList";
function DashboardLayout() {
  return (<>
    <div className="routes">
      <Headbar />
      <Sidebar />
      <div className="dashboard-content ">
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="donor-list" element={<DonorList />} />
          <Route path="contact-list" element={<ContactLists />} />
          <Route path="messages" element={<Messages />} />
        </Routes>
      </div>
    </div>
  </>);
}
export default DashboardLayout;