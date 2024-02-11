import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Navbar />} >
            <Route path="signin" />
            <Route path="/signup" />
        </Route>
      </Routes>
    )
}

export default App;