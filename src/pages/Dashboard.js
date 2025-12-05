import ShiftPreview from "../components/ShiftPreview";
import Post from "../components/Post";
import SimpleSlider from "../components/SimpleSlider";
import ClockPunchPreview from "../components/ClockPunchPreview";


export default function Dashboard() {
  const idealhours_banner = "https://placehold.co/300x200.png";
  const availability_banner = "https://placehold.co/300x200.png";
  const payslips_banner = "https://placehold.co/300x200.png";

  const statsData = [
    { title: "Acces your Payslips", value: payslips_banner },
    { title: "Ideal Hours", value: idealhours_banner },
    { title: "Availability", value: availability_banner },
  ];

  return (
    <div>
        <div className="stats">
            <SimpleSlider images={statsData.map(item => item.value)} titles={statsData.map(item => item.title)} />
        </div>
        <ShiftPreview />
        <ClockPunchPreview />
        <Post />
    </div>
  );
}