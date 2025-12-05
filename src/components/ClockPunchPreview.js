import "./ClockPunchPreview.css";
import { LuAlarmClock } from "react-icons/lu";

export default function ClockPunchPreview() {
    return (
        <div className="ClockPunchPreview-card-component">
            <div className="ClockPunchPreview-card-header">
                Punch clock
            </div>
            <div className="ClockPunchPreview-punch-details">
                Clock in and out of your shifts.
            </div>
            <div className="ClockPunchPreview-card-icon">
                <LuAlarmClock />
            </div> 
        </div>
    );
}