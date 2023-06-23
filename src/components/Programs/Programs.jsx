import React from "react";
import "./Programs.css";
import {
  Barbell,
  PersonSimpleRun,
  Fire,
  Heartbeat,
} from "@phosphor-icons/react";

import RightArrow from "../../assets/rightArrow.png";

export function Programs() {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        <div className="category">
          <Barbell weight="fill" />
          <span>Strength Training</span>
          <span>
            In this program, you are trained to improve your strength through
            many exercises.
          </span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <div className="category">
          <PersonSimpleRun weight="fill" />
          <span>Cardio Training</span>
          <span>
            In this program, you are trained to do sequential moves in range of
            20 until 30 minutes.
          </span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <div className="category">
          <Fire weight="fill" />
          <span>Fat Burning</span>
          <span>
            This program is suitable for you who wants to get rid of your fat
            and lose their weight.
          </span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <div className="category">
          <Heartbeat weight="fill" />
          <span>Health Fitness</span>
          <span>
            This programs is designed for those who exercises only for their
            body fitness not body building.
          </span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
