import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { Crown, Barbell, Heartbeat } from "@phosphor-icons/react";

export function Plans() {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOUNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="plans">
        <div className="plan" key={1}>
          <Heartbeat />
          <span>BASIC PLAN</span>
          <span>$ 25</span>

          <div className="features">
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>2 hours of excercises</span>
            </div>
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>Free consultaion to coaches</span>
            </div>
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>Access to The Community</span>
            </div>
          </div>

          <div>
            <span>See more benefits -></span>
          </div>
          <button className="btn">Join Now</button>
        </div>

        <div className="plan" key={1}>
          <Crown weight="fill" />
          <span>PREMIUM PLAN</span>
          <span>$ 30</span>

          <div className="features">
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>5 hour of excercises</span>
            </div>
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>Free consultaion of Coaches</span>
            </div>
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>Accessto minibar</span>
            </div>
          </div>

          <div>
            <span>See more benefits -></span>
          </div>
          <button className="btn">Join Now</button>
        </div>

        <div className="plan" key={1}>
          <Barbell />
          <span>PRO PLAN</span>
          <span>$ 45</span>

          <div className="features">
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>8 hours of excercises</span>
            </div>
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>Consultation of Private Coach</span>
            </div>
            <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={1}>Free Fitness Merchandises</span>
            </div>
          </div>

          <div>
            <span>See more benefits -></span>
          </div>
          <button className="btn">Join Now</button>
        </div>
      </div>
    </div>
  );
}
