import ProfileOptions from "./Profile/ProfileOptions";
import ProfilePicture from "./Profile/ProfilePicture";
import ProfileName from "./Profile/ProfileName";

export default function Profile() {
  return (
    <div className="relative w-1/4 border-l-2 border-black flex flex-col items-center pt-20 gap-2 overflow-hidden">
      <ProfilePicture />
      <ProfileName />
      <ProfileOptions />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 h-60 z-minus"
      >
        <path
          fill="#f7a100"
          fillOpacity="1"
          d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,154.7C840,181,960,171,1080,138.7C1200,107,1320,53,1380,26.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
