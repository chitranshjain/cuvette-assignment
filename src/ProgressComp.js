import React from "react";
import "./ProgressComp.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressComp = () => {
  return (
    <div>
      <div className="progress-div">
        <h6>Syllabus wise Analysis</h6>
        <div className="progress-item item-one">
          <p>HTML Tools, Forms, History</p>
          <div className="progress-bar-div">
            <ProgressBar now={80} />
            80%
          </div>
        </div>
        <div className="progress-item item-two">
          <p>Tags & References in HTML</p>
          <div className="progress-bar-div">
            <ProgressBar now={60} />
            60%
          </div>
        </div>
        <div className="progress-item item-three">
          <p>Tables & CSS Basics</p>
          <div className="progress-bar-div">
            <ProgressBar now={24} />
            24%
          </div>
        </div>
        <div className="progress-item item-four">
          <p>Tables & CSS Basics</p>
          <div className="progress-bar-div">
            <ProgressBar now={96} />
            96%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressComp;
