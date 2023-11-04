/* eslint-disable react/prop-types */
export default function Wave({ side }) {
  if (side == "left") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute left-0 bottom-0 h-72 z-minus"
      >
        <path
          fill="#fccf03"
          fillOpacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,229.3C384,192,480,128,576,112C672,96,768,128,864,165.3C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    );
  }
  if (side == "right") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 h-60 z-minus"
      >
        <path
          fill="#fccf03"
          fillOpacity="1"
          d="M0,224L60,186.7C120,149,240,75,360,69.3C480,64,600,128,720,154.7C840,181,960,171,1080,138.7C1200,107,1320,53,1380,26.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    );
  }
}
