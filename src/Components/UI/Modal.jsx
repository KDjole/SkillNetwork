/* eslint-disable react/prop-types */
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Modal({ children, closeModal }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 text-myGray"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="overlay w-screen h-screen bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center"
        onClick={closeModal}
      >
        <div className="w-1/3 h-3/4 flex items-center justify-center bg-white rounded-lg p-5 relative">
          <BiPlus
            className="btnClose rotate-45 absolute top-5 right-5 hover:cursor-pointer"
            size={30}
          />
          {children}
        </div>
      </div>
    </motion.div>
  );
}
