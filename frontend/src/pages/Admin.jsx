import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import ProjectList from "../components/dashboard/ui-ux/ProjectList";
import ProjectForm from "../components/dashboard/ui-ux/ProjectForm";
import DesignForm from "../components/dashboard/design/DesignForm";
import DesignList from "../components/dashboard/design/DesignList";
import CertificateForm from "../components/dashboard/certificate/CertificateForm";
import CertificateList from "../components/dashboard/certificate/CertificateList";
import Dashboard from "../components/dashboard/Dashboard";

const Admin = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center p-5">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        <div className="w-full h-full xl:h-screen">
          <Routes>
            <Route
              path="/atmin/"
              element={
                <div className="flex flex-col">
                  <ProjectForm onAdd={handleRefresh} />
                  <div className="divider"></div>
                  <ProjectList onDelete={handleRefresh} />
                </div>
              }
            />

            <Route
              path="/atmin/design"
              element={
                <div className="flex flex-col">
                  <DesignForm onAdd={handleRefresh} />
                  <div className="divider"></div>
                  <DesignList onDelete={handleRefresh} />
                </div>
              }
            />

            <Route
              path="/atmin/certificate"
              element={
                <div className="flex flex-col">
                  <CertificateForm onAdd={handleRefresh} />
                  <div className="divider"></div>
                  <CertificateList onDelete={handleRefresh} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
      <div className="drawer-side h-screen sticky right-0">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 leading-10">
          <li>
            <a className="font-bold text-xl disabled pointer-events-none">Dashboard Atmin</a>
          </li>
          <li>
            <Link to="/atmin/">UI/UX</Link>
          </li>
          <li>
            <Link to="/atmin/design">Design</Link>
          </li>
          <li>
            <Link to="/atmin/certificate ">Certificate</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
