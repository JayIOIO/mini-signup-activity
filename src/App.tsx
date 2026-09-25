import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import SignUpPage from "./pages/SignUpPage";
import WelcomePage from "./pages/WelcomePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>

      </BrowserRouter>
    </UserProvider>
  );
}

export default App
