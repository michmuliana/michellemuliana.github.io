import { TypeAnimation } from "react-type-animation";

const changeTextComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        1000, 
        "Athlete",
        1000,
        "Digital Artist",
        1000,
        "Indoor Gardener",
        1000,
        "Tea Connoisseur",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "1.25em",
        display: "inline-block",
        fontFamily: "Montserrat, sans-serif",
        padding: "21px",
        textAlign: "center"
      }}
      repeat={Infinity}
    />
  );
};

export default changeTextComponent;