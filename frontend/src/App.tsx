import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
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
            <Route path="/" element={
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tighter mb-4">
                  Welcome to My League
                </h1>
                <p className="max-w-2xl mx-auto text-text-secondary">
                  Platform for creating and managing sports championships
                </p>
                <div className="mt-6">
                  <NavLink 
                    to="/demo" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
                  >
                    View Component Demo
                  </NavLink>
                </div>
              </div>
            } />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
