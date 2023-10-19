import MenuLeft from "./HomePage/MenuLeft";
import Content from "./HomePage/Content";
import Profile from "./HomePage/Profile";
import ContentType from "./HomePage/Content/ContentType";

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
