import MenuLeftOptions from "./MenuLeft/MenuLeftOptions";

export default function MenuLeft() {
  return (
    <div className="min-h-screen flex-col items-center p-10">
      <img src="..\..\..\..\src\Images\Logo.svg" alt="" width={"200px"} />
      {/*<Search />*/}
      <MenuLeftOptions />
    </div>
  );
}
