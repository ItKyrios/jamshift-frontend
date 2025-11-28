import Header from "../components/Header";
import payslips_banner from "../assets/payslips_banner.png";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import ShiftPreview from "../components/ShiftPreview";
import Posts from "../components/Posts";

export default function Dashboard() {
  return (
    <div>
        <Header currentPage="Home"/>
        <Navbar />
        <div className="stats">
            <StatsCard title="Acces your Payslips" value={payslips_banner} />
            <StatsCard title="Ideal Hours" value={idealhours_banner} />
            <StatsCard title="Availability" value={availability_banner} />
        </div>
        <ShiftPreview />
        <Posts />
    </div>
  );
}