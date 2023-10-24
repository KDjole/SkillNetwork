import { useContext } from "react";
import { ModalContext } from "../../../App";

export default function ProfileOptions() {
  const { setUserSettingsModal } = useContext(ModalContext);
  const openModal = () => {
    setUserSettingsModal(true);
  };
  const options = [`Change E-mail`, `Change Username`, `Log out`];

  return (
    <ul className="mt-5">
      {options.map((e) => {
        return (
          <li
            key={e}
            onClick={openModal}
            className="hover:cursor-pointer"
          >{`${e}`}</li>
        );
      })}
    </ul>
  );
}
