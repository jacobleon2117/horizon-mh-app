import React, { useState } from "react";
import {
  User,
  Lock,
  Bell,
  Shield,
  Settings as SettingsIcon,
} from "lucide-react";

const SettingsPage = () => {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1 (555) 123-4567",
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log("Profile updated", profileData);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password change", passwordData);
  };

  const handleSecuritySettingsToggle = (setting) => {
    setSecuritySettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <SettingsIcon className="mr-3 text-[rgb(26,55,91)]" size={24} />
          Account Settings
        </h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-[rgb(26,55,91)] mb-4 flex items-center">
          <User className="mr-3" size={20} />
          Profile Information
        </h2>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={profileData.fullName}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={profileData.phoneNumber}
              onChange={(e) =>
                setProfileData((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
            />
          </div>
          <button
            type="submit"
            className="bg-[rgb(26,55,91)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Update Profile
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-[rgb(26,55,91)] mb-4 flex items-center">
          <Lock className="mr-3" size={20} />
          Change Password
        </h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Current Password
            </label>
            <input
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({
                  ...prev,
                  currentPassword: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(26,55,91)]"
            />
          </div>
          <button
            type="submit"
            className="bg-[rgb(26,55,91)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Change Password
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-[rgb(26,55,91)] mb-4 flex items-center">
          <Shield className="mr-3" size={20} />
          Security Preferences
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Bell className="mr-3 text-gray-600" size={20} />
              <span className="text-gray-700">Email Notifications</span>
            </div>
            <button
              onClick={() => handleSecuritySettingsToggle("emailNotifications")}
              className={`w-12 h-6 rounded-full transition-colors ${
                securitySettings.emailNotifications
                  ? "bg-[rgb(26,55,91)]"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  securitySettings.emailNotifications
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Bell className="mr-3 text-gray-600" size={20} />
              <span className="text-gray-700">Push Notifications</span>
            </div>
            <button
              onClick={() => handleSecuritySettingsToggle("pushNotifications")}
              className={`w-12 h-6 rounded-full transition-colors ${
                securitySettings.pushNotifications
                  ? "bg-[rgb(26,55,91)]"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  securitySettings.pushNotifications
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="mr-3 text-gray-600" size={20} />
              <span className="text-gray-700">Two-Factor Authentication</span>
            </div>
            <button
              onClick={() => handleSecuritySettingsToggle("twoFactorAuth")}
              className={`w-12 h-6 rounded-full transition-colors ${
                securitySettings.twoFactorAuth
                  ? "bg-[rgb(26,55,91)]"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  securitySettings.twoFactorAuth
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
