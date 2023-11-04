/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

export default function Button({ type, children, click }) {
  switch (type) {
    case "primary":
      return (
        <motion.button
          onClick={click}
          className="p-2 text-white rounded bg-myYellow w-28 border-solid border-2 border-myGray"
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
        >
          {children}
        </motion.button>
      );
    case "secondary":
      return (
        <motion.button
          onClick={click}
          className="p-2 text-myGray rounded w-28  border-solid border-2 border-myGray"
        >
          {children}
        </motion.button>
      );
    default:
      return (
        <motion.button
          onClick={click}
          className="p-2 text-myGray rounded w-28  border-solid border-2 border-myGray"
        >
          {children}
        </motion.button>
      );
  }
}
