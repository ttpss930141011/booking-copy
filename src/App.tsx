import "./App.scss";
import HotelsList from './pages/HotelsList';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hotelsList" element={<HotelsList />} />
                    {/* <Route path="/hotels/:id" element={<Hotel />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
