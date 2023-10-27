/* eslint-disable react/prop-types */

export default function Button({ type, children, click }) {
  switch (type) {
    case "primary":
      return (
        <button
          onClick={click}
          className="p-2 text-white rounded bg-myYellow w-28 border-solid border-2 border-myGray"
        >
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          onClick={click}
          className="p-2 text-myGray rounded w-28  border-solid border-2 border-myGray"
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          onClick={click}
          className="p-2 text-myGray rounded w-28  border-solid border-2 border-myGray"
        >
          {children}
        </button>
      );
  }
}
