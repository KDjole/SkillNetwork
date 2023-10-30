import MenuLeftOptions from "./MenuLeft/MenuLeftOptions";

export default function MenuLeft() {
  return (
    <div className="relative min-h-screen w-1/4 flex-col items-center p-10 border-r-2 border-black overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute left-0 bottom-0 h-60 z-minus"
      >
        <path
          fill="#f7a100"
          fillOpacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,229.3C384,192,480,128,576,112C672,96,768,128,864,165.3C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <img src="..\..\..\..\src\Images\Logo.svg" alt="" width={"200px"} />
      {/*<Search />*/}
      <MenuLeftOptions />
    </div>
  );
}
