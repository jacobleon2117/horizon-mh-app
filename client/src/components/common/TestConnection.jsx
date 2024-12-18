import React, { useState, useEffect } from "react";
import { testConnection } from "@/services/api";

const TestConnection = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const checkConnection = async () => {
    try {
      setStatus("loading");
      const response = await testConnection();
      setMessage(response.data.message);
      setStatus("success");
    } catch (error) {
      setMessage(error.message);
      setStatus("error");
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 p-4 rounded-lg shadow-lg bg-white">
      <h3 className="font-semibold mb-2">API Connection Status</h3>
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            status === "loading"
              ? "bg-yellow-500"
              : status === "success"
              ? "bg-green-500"
              : status === "error"
              ? "bg-red-500"
              : "bg-gray-500"
          }`}
        />
        <span className="text-sm">
          {status === "loading"
            ? "Checking connection..."
            : status === "success"
            ? message
            : status === "error"
            ? `Error: ${message}`
            : "Idle"}
        </span>
      </div>
    </div>
  );
};

export default TestConnection;
