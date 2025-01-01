import React from "react";
import BranchCard from "./BranchCard";

const BranchesSection = () => {
  const branchesData = [
    {
      coordinates: {
        lat: 31.9539, // Example coordinates for Ouargla
        lng: 5.3349,
      },
      description: "فرع حي النصر: شارع FNPOS حي النصر ورقلة",
      branchNumber: 2,
    },
    // {
    //   coordinates: {
    //     lat: 31.9539, // Example coordinates for Ouargla
    //     lng: 5.3349,
    //   },
    //   description: "فرع حي النصر: شارع FNPOS حي النصر ورقلة",
    //   branchNumber: 2,
    // },
    // You can add more branches here
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center py-12 bg-white">
      <h2 className="text-5xl text-emerald-700 text-center mb-6">فروعنا</h2>
      <div
        className="flex flex-wrap 
     
       gap-4 justify-center w-full max-w-[1200px]"
      >
        {branchesData.map((branch) => (
          <BranchCard
            key={branch.branchNumber}
            coordinates={branch.coordinates}
            description={branch.description}
            branchNumber={branch.branchNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default BranchesSection;
