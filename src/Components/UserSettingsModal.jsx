import { BiPlus } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

export default function UserSettingsModal({ open, change }) {
  const changeModal = (e) => {
    e.target.classList.contains("overlay") ||
    e.target.classList.contains("btnClose")
      ? change()
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
            onClick={changeModal}
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
