import Logo from "../src/assets/Logo.png";

function MainLoading() {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <div className="relative  flex justify-center items-center">
        <div className="absolute animate-spin  rounded-full h-56 w-56 border-t-4 border-b-4 border-emerald-700"></div>
        <img src={Logo} alt="Logo" className=" w-44 mb-1 animate-pulse " />
      </div>
      <div className="text-xl font-bold mt-10 text-emerald-700"> مرحبا بك </div>
    </div>
  );
}

export default MainLoading;
