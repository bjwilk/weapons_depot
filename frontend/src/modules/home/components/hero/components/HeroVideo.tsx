"use client";

import React from "react";

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="https://next-cozy.s3.us-east-2.amazonaws.com/backgrondImage_weapon_world.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
