import MenuLeftOptions from "./MenuLeft/MenuLeftOptions";

export default function MenuLeft() {
  return (
    <div className="min-h-screen w-1/4 flex-col items-center p-10 border-r-2 border-black">
      <img src="..\..\..\..\src\Images\Logo.svg" alt="" width={"200px"} />
      {/*<Search />*/}
      <MenuLeftOptions />
    </div>
  );
}
