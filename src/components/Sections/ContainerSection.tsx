import React from "react";
import Container from "../Container";

const ContainerSection = () => {
  return (
    <div id="containers" className="rpgui-container framed-grey">
      <h1>Containers</h1>
      <p>
        This example shows the built-in containers and frames. Containers are
        just fancy divs used for rpgui elements.
      </p>
      <hr />
      <Container
        framed
        style={{
          position: "relative",
          width: "32%",
          height: "300px",
          display: "inline-block",
        }}
      >
        <p>
          class:
          <br />
          rpgui-container framed
        </p>
      </Container>
      <Container
        golden
        style={{
          position: "relative",
          width: "32%",
          height: "300px",
          display: "inline-block",
        }}
      >
        <p>
          class:
          <br />
          rpgui-container framed-golden
        </p>
      </Container>
      <Container
        golden2
        style={{
          position: "relative",
          width: "32%",
          height: "300px",
          display: "inline-block",
        }}
      >
        <p>
          class:
          <br />
          rpgui-container framed-golden-2
        </p>
      </Container>
      <br />
      <br />
      <Container
        grey
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          display: "inline-block",
        }}
      >
        <p>
          class:
          <br />
          rpgui-container framed-grey
        </p>
      </Container>
    </div>
  );
};

export default ContainerSection;
