import React from "react";

const FooterSection = () => {
  return (
    <div className="rpgui-center">
      <h1 style={{ fontSize: "150%" }}>That's it, for now!</h1>
      <p>
        Check out the <a href="https://github.com/RonenNess/RPGUI">RPGUI git</a>{" "}
        for more info!
      </p>
      <br />
      <br />
      <a href="#main">- Back to Top -</a>
      <br />
      <br />
      <img
        src="/skelly-rip.png"
        style={{
          position: "absolute",
          display: "inline-block",
          width: "70px",
          right: "0px",
          bottom: "0px",
        }}
      />
      <img
        src="/skelly-rip.png"
        style={{
          position: "absolute",
          display: "inline-block",
          width: "70px",
          left: "0px",
          bottom: "0px",
          transform: "scaleX(-1)",
        }}
      />
    </div>
  );
};

export default FooterSection;
