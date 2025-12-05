import {useState} from "react";
import "./ShiftPreview.css";
import { LuCalendarClock } from "react-icons/lu"; 
import { CiLocationOn } from "react-icons/ci";

export default function ShiftPreview() {
    const [shift] = useState({
        startTime: "2025-12-06T13:30:00",
        endTime: "2025-12-06T21:30:00",
        location: "123 Main St, Springfield",
    });
    
    const calculateTimeUntilShift = (startTime) => {
        const now = new Date();
        const shiftStart = new Date(startTime);
        const diffInMs = shiftStart - now;
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        return diffInHours;
    }

    const toHourMinuteFormat = (dateTime) => {
        const date = new Date(dateTime);
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        const local12Hour = date.toLocaleTimeString([], options).toUpperCase();
        return `${local12Hour}`;
    }

    const shiftDurationInHours = (startTime, endTime) => {
        const start = new Date(startTime);
        const end = new Date(endTime);
        const diffInMs = end - start;
        return Math.floor(diffInMs / (1000 * 60 * 60));
    }
    
    return (
        <div className="shiftPreview-card-component">
            <div className="shiftPreview-card-header">
                Next Shift
            </div>
            <div className="shiftPreview-shift-details">
                In {calculateTimeUntilShift(shift.startTime)} hours <br />
                {toHourMinuteFormat(shift.startTime)} - {toHourMinuteFormat(shift.endTime)} ({shiftDurationInHours(shift.startTime, shift.endTime)} hrs)
            </div> 
            <div className="shiftPreview-shift-location">
               <CiLocationOn /> {shift.location}
            </div>
            <div className="shiftPreview-card-icon">
                <LuCalendarClock />
            </div> 
        </div>
    );
}