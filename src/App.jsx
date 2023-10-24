import { createContext, useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import UserSettingsModal from "./components/UserSettingsModal";
export const ModalContext = createContext();

function App() {
  const [userSettingsModal, setUserSettingsModal] = useState(false);
  const closeModal = () => {
    setUserSettingsModal(!userSettingsModal);
  };

  return (
    <>
      <ModalContext.Provider value={{ setUserSettingsModal }}>
        <LandingPage></LandingPage>
      </ModalContext.Provider>
      <UserSettingsModal open={userSettingsModal} change={closeModal} />
    </>
  );
}

export default App;
