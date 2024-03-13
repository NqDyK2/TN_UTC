import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { Login } from "./features/auth/Login-UI"
import logo from "./logo.svg"

const App = () => {
  return (
    <div className="App">
      <Login checkLogin={(user: string, pass: string) => {
        return user === "user" && pass === "password"
      }} />
    </div>
  )
}

export default App
