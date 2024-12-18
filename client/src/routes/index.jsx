import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "@/components/PrivateRoute";

import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import Resources from "@/pages/public/Resources";
import Support from "@/pages/public/Support";

import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import EVisitPage from "@/pages/dashboard/EVisitPage";
import JournalsPage from "@/pages/dashboard/JournalsPage";
import ReportsPage from "@/pages/dashboard/ReportsPage";
import SchedulePage from "@/pages/dashboard/SchedulePage";
import SettingsPage from "@/pages/dashboard/SettingsPage";
import FindTherapists from "@/pages/dashboard/FindTherapists";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/support" element={<Support />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="e-visit" element={<EVisitPage />} />
          <Route path="journals" element={<JournalsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="find-therapists" element={<FindTherapists />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
