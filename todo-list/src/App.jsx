import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Task from "./components/Task"
import About from "./components/About"

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Task />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </main>
      </div>
      </BrowserRouter>

  )
}

export default App