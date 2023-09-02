import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Check from "./components/Chceck/Check";
import Email from "./components/Emailcheck/EmailCheck";
import { toast, ToastContainer } from "react-toastify";
import Login from "./components/Login/Login";
import RegisterUser from "./components/Register/RegisterUser";
import ReportEmail from "./components/Reportemail/ReportEmail";
import Report from "./components/Report/Report";
import EmailCheck from "./components/Emailcheck/EmailCheck";
import PhoneNumCheck from "./components/PhonNumbercheck/PhoneNumCheck";
import PhoneReport from "./components/PhonenumReport/PhoneReport";
import ReportURL from "./components/URLReport/ReportURL";
import Urlcheck from "./components/URLCheck/Urlcheck";
function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<RegisterUser />} />
        <Route path="/check" element={<Check />} />
        <Route path="/report" element={<Report />} />
        <Route path="/emailCheck" element={<EmailCheck />} />
        <Route path="/phonecheck" element={<PhoneNumCheck />} />
        <Route path="/reportEmail" element={<ReportEmail />} />
        <Route path="/ReportURL" element={<ReportURL />} />
        <Route path="/phoneReport" element={<PhoneReport />} />
        <Route path="/phoneReport" element={<PhoneReport />} />
        <Route path="/Urlcheck" element={<Urlcheck />} />

        {/* <Route path='/Login' element={<Login/>} /> */}
      </Routes>
    </>
  );
}

export default App;
