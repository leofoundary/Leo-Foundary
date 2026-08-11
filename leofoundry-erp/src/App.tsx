import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { AuthProvider } from "@/hooks/AuthContext"
import ProtectedRoute from "@/components/auth/ProtectedRoute"
import DashboardLayout from "@/components/layout/DashboardLayout"

import Login from "@/pages/auth/Login"

import Dashboard from "@/pages/Dashboard"
import Attendance from "@/pages/Attendance"
import Timetable from "@/pages/Timetable"
import Subjects from "@/pages/Subjects"
import Examinations from "@/pages/Examinations"
import Results from "@/pages/Results"
import Fees from "@/pages/Fees"
import Students from "@/pages/Students"
import Settings from "@/pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* ==================== PUBLIC ==================== */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* ================= AUTHENTICATED ================= */}

          <Route element={<ProtectedRoute />}>

            <Route element={<DashboardLayout />}>

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/attendance"
                element={<Attendance />}
              />

              <Route
                path="/timetable"
                element={<Timetable />}
              />

              <Route
                path="/subjects"
                element={<Subjects />}
              />

              <Route
                path="/examinations"
                element={<Examinations />}
              />

              <Route
                path="/results"
                element={<Results />}
              />

              <Route
                path="/fees"
                element={<Fees />}
              />

              <Route
                path="/students"
                element={<Students />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />

            </Route>

          </Route>

          {/* ==================== DEFAULT ==================== */}

          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App