import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text-primary">
        <nav className="bg-background border-b border-border">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <NavLink
                to="/"
                className="flex items-center space-x-3 font-semibold text-xl"
                end
                aria-label="My League"
              >
                <span className="text-primary">My</span><span className="text-secondary">League</span>
              </NavLink>
              <div className="hidden md:flex space-x-4">
                <NavLink
                  to="/demo"
                  className="px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-muted"
                  end
                >
                  Demo
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;