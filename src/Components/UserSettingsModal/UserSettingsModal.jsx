import Modal from "../UI/Modal";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../../Features/OpenModal/ModalSlice";
import UserSettings from "./UserSettings";

export default function UserSettingsModal() {
  const open = useSelector((state) => state.modal.open);
  const dataForChange = useSelector((state) => state.modal.dataForChange);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(changeStatus(false, ""));
  };

  return (
    <AnimatePresence>
      {open && (
        <Modal closeModal={closeModal}>
          <UserSettings>
            {dataForChange == "email" && (
              <>
                <UserSettings.OldEmail />
                <UserSettings.NewEmail />
              </>
            )}
            {dataForChange == "username" && (
              <>
                <UserSettings.OldUser />
                <UserSettings.NewUser />
              </>
            )}
          </UserSettings>
        </Modal>
      )}
    </AnimatePresence>
  );
}
