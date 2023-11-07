/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

export default function Button({ type, children, click }) {
  switch (type) {
    case "primary":
      return (
        <motion.button
          onClick={click}
          className="relative group p-2 text-myGray font-bold rounded w-28 border-solid border-2 border-myGray overflow-hidden"
        >
          <p className="relative z-10">{children}</p>
          {[...Array(4)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute scale-150 w-12 h-12 bg-myYellow rounded-full transform translate-y-10 group-hover:scale-y-250 group-hover:translate-y-minus transition-all overflow-none"
              style={{
                left: `${i * 25}%`,
                transitionDelay: `${i * 0.15}s`,
                transitionDuration: "0.75s",
              }}
            ></motion.span>
          ))}
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
