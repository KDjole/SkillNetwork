import ProfileOptions from "./Profile/ProfileOptions";
import ProfilePicture from "./Profile/ProfilePicture";
import ProfileName from "./Profile/ProfileName";
import Wave from "../../Components/UI/Wave";

export default function Profile() {
  return (
    <div className="relative w-1/4 border-l-2 border-black flex flex-col items-center pt-20 gap-2 overflow-hidden">
      <Wave side="right" />
      <ProfilePicture />
      <ProfileName />
      <ProfileOptions />
    </div>
  );
}
