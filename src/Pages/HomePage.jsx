import MenuLeft from "./Components/HomePage/MenuLeft";
import Content from "./Components/HomePage/Content";
import Profile from "./Components/HomePage/Profile";
import ContentType from "./Components/HomePage/ContentType";

export default function HomePage() {
  return (
    <div className="min-h-full flex relative ">
      <MenuLeft />
      <Content />
      <Profile />
      <ContentType />
    </div>
  );
}
