import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { Login } from "./features/auth/Login-UI"
import { MainLayout } from "./layouts/MainLayout"
import logo from "./logo.svg"
import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./features/dashboard/Dashboard"
// import { PrivateRouter } from "./components/auth/PrivateRouter"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index path="" element={<Login checkLogin={(user: string, pass: string) => {
          return user === "user" && pass === "password"
        }} />} />
        <Route path="main" element={<MainLayout />} >
          <Route index path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App
