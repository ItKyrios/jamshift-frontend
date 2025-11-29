import React from "react";
import "./ShiftPreview.css";
import { LuCalendarClock } from "react-icons/lu"; 
import { CiLocationOn } from "react-icons/ci";

export default function ShiftPreview() {
    return (
        <div className="shiftPreview-card-component">
            <div className="shiftPreview-card-header">
                Next Shift
            </div>
            <div className="shiftPreview-shift-details">
                In 4 hours <br />
                1:30 PM - 9:30 PM (7 hrs)
            </div> 
            <div className="shiftPreview-shift-location">
               <CiLocationOn /> 123 Main St, Springfield
            </div>
            <div className="shiftPreview-card-icon">
                <LuCalendarClock />
            </div> 
        </div>
    );
}