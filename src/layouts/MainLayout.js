import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // top header
import Navbar from '../components/Navbar';   // bottom navigation

export default function MainLayout() {
  return (
    <div className="main-container">
        {/* Top header */}
        <Header currentPage="Home" />

        {/* Bottom navigation */}
        <Navbar />

        <div className="layout-body">

            {/* Main content area */}
            <main className="content">
                {/* Outlet renders the current page (Dashboard, Shifts, Users, etc.) */}
                <Outlet />
            </main>
        </div>
    </div>
  );
}