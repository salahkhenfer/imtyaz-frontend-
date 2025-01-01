import * as React from "react";

export default function BranchCard({ coordinates, description, branchNumber }) {
  return (
    <div
      className="w-96    p-4
      bg-emerald-700
       rounded-lg shadow-lg overflow-hidden "
    >
      <div className="h-64 w-full">
        <iframe
          title={`Branch ${branchNumber} Location`}
          className="w-full h-full border-none"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2s!4v1635774!5m2!1sen!2s`}
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="p-4 text-right text-white">
        <h3 className="text-xl font-bold mb-2">{`فرع ${branchNumber}`}</h3>
        <p className=" text-right">{description}</p>
      </div>
    </div>
  );
}
