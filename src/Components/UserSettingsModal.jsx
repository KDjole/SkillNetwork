import { BiPlus } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../Features/OpenModal/ModalSlice";

export default function UserSettingsModal({}) {
  const open = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();
  const closeModal = (e) => {
    e.target.classList.contains("overlay") ||
    e.target.classList.contains("btnClose")
      ? dispatch(changeStatus(false, ""))
      : "";
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 text-myGray"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="overlay w-screen h-screen bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="w-1/3 h-3/4 bg-white rounded-lg p-5 relative">
              <BiPlus
                className="btnClose rotate-45 absolute right-5 hover:cursor-pointer"
                size={30}
              />
              <div>Hello</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
