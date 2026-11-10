import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { StudioProvider, useStudio } from './context/StudioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LiveChatWidget } from './components/LiveChatWidget';
import { ThemeCustomizerModal } from './components/ThemeCustomizerModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ApksPage } from './pages/ApksPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

const AppLayout: React.FC = () => {
  const { theme } = useStudio();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-[#05070c] text-zinc-300' : 'bg-[#fafafa] text-zinc-800'
    } font-sans selection:bg-cyan-500 selection:text-black flex flex-col justify-between`}>
      
      {/* Sticky Studio Navbar */}
      <Navbar />

      {/* Main Multi-Page Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/apks" element={<ApksPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Studio Global Footer */}
      <Footer />

      {/* Floating & Expanded Live Customer Sales Chat Widget */}
      <LiveChatWidget />

      {/* Theme Settings & Customizer Modal */}
      <ThemeCustomizerModal />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StudioProvider>
      <Router>
        <AppLayout />
      </Router>
    </StudioProvider>
  );
};

export default App;
