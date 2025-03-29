import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/sidebar";
import Home from "./Home";
import Task from "./components/pages/tasks";
import Project from "./components/pages/projects";
import Inbox from "./components/pages/inbox";
import Meeting from "./components/pages/meetings";
import Calendar from "./components/pages/calendar";
import Masters from "./components/pages/masters";
import LoginForm from "./Auth/login";
import RegistrationForm from "./Auth/ragister";
import ForgotPassword from "./Auth/ForgotPassword";
import OTPVerification from "./Auth/OTPVerification";
import CreatePassword from "./Auth/CreatePassword";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/meetings" element={<Meeting />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/ragister" element={<RegistrationForm />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/OTPVerification" element={<OTPVerification />} />
          <Route path="/CreatePassword" element={<CreatePassword />} />
        </Routes>

      </div>

    </Router>
  );
};

export default App;

