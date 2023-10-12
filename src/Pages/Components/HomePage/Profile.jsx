import ProfileOptions from "../Profile/ProfileOptions";
import ProfilePicture from "../Profile/ProfilePicture";
import ProfileName from "../Profile/ProfileName";

export default function Profile() {
  return (
    <div className="w-1/4 border-l-2 border-black flex flex-col items-center pt-20">
      <ProfilePicture />
      <ProfileName />
      <ProfileOptions />
    </div>
  );
}
