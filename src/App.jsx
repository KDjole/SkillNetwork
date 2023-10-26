import { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import UserSettingsModal from "./Components/UserSettingsModal/UserSettingsModal";

function App() {
  const [userSettingsModal, setUserSettingsModal] = useState(true);
  const closeModal = () => {
    setUserSettingsModal(!userSettingsModal);
  };

  return (
    <>
      <LandingPage></LandingPage>
      <UserSettingsModal open={userSettingsModal} change={closeModal} />
    </>
  );
}

export default App;
