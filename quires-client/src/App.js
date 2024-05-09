import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CreateAccount from "./Components/Login/CreateAccount";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import ShowAllQueries from "./Components/Pages/Dashboard/ShowAllQueries/ShowAllQueries";
import Home from "./Components/Pages/Home/Home";
import Quiz from "./Components/Pages/Quiz/Quiz";
import Navbar from "./Components/Share/Navbar";
import NotFound from "./Components/Share/NotFound";

function App() {
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
       const handleScroll = () => {
         const scrollTop =
           window.pageYOffset || document.documentElement.scrollTop;
         setIsScrolled(scrollTop > 0);
       };

       window.addEventListener('scroll', handleScroll);

       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
     }, []);
  return (
    <div>
      {/* <CreateAccount /> */}
      <div
        className={`fixed  bg-white w-full shadow-md top-0 ${
          isScrolled ? ' fixed top-0 z-50 duration-1000' : ''
        }`}
      >
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ShowAllQueries />} />
          {/* <Route path="bookings" element={<Bookings />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          <Route path="manageDoctor" element={<ManageDoctors />} />
          <Route path="editDoctor/:id" element={<EditDoctor />} />
          <Route path="manageContact" element={<ManageContacts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
