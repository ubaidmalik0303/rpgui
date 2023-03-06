import Button from "../components/Button";
import ContainerSection from "../components/Sections/ContainerSection";
import ParagraphSection from "../components/Sections/ParagraphSection";
import ButtonSection from "../components/Sections/ButtonSection";
import RadioAndSelectSection from "../components/Sections/RadioAndSelectSection";
import IconSection from "../components/Sections/IconSection";
import SlidersSection from "../components/Sections/SlidersSection";
import ProgressSection from "../components/Sections/ProgressSection";
import DisbaledSection from "../components/Sections/DisbaledSection";
import CursorSection from "../components/Sections/CursorSection";
import FooterSection from "../components/Sections/FooterSection";
import DropdownAndListsSection from "../components/Sections/DropdownAndListsSection";

export default function Home() {
  
  return (
    <>
      <div className="rpgui-content" style={{ overflowY: "scroll" }}>
        <div id="container">
          <div id="main" />
          <div
            className="inner rpgui-container framed"
            style={{ position: "relative" }}
          >
            <header>
              <h1 style={{ fontSize: "250%" }}>RPGUI</h1>
              <hr className="golden" />
              <h2 style={{ fontSize: "175%" }}>
                CSS &amp; JavaScript lib to create old-school GUI in seconds!
              </h2>
            </header>
            <div className="rpgui-center">
              <Button
                link="https://github.com/RonenNess/RPGUI/zipball/master"
                style={{ width: "32%" }}
              >
                Download .zip
              </Button>
              <Button
                link="https://github.com/RonenNess/RPGUI/tarball/master"
                style={{ width: "32%" }}
              >
                Download .gz
              </Button>
              <Button
                link="https://github.com/RonenNess/RPGUI"
                style={{ width: "32%" }}
              >
                View on GitHub
              </Button>
            </div>
            <br />
            <br />
            <p>
              RPGUI is a framework of CSS and JavaScript that creates an awesome
              RPG-like GUI for HTML5 and Web games.
              <br />
              <br />
              It requires no dependencies and zero coding, just apply the right
              CSS classes to your elements and you're good to go!
              <br />
              <br />
              Want to see more?{" "}
              <a href="https://github.com/RonenNess/RPGUI/blob/master/README.md">
                Read the manual
              </a>
              , Or <br />
              look at the <a href="#examples">examples below</a>.
            </p>
            <br />
            <br />
            <br />
            <br />
            <img
              src="/skelly-rip.png"
              style={{
                display: "inline-block",
                marginTop: "-80px",
                width: "100px",
                float: "right",
                right: "0px",
              }}
            />
            <hr style={{ clear: "both" }} />
            <br />
            <br />
            <div id="examples">
              <h1 style={{ fontSize: "150%" }}>Examples</h1>
              <p>
                Below are examples of key elements in RPGUI. Scroll down or
                choose from the list to view an example:
              </p>
              <ul>
                <li>
                  <a href="#containers">Containers</a>
                </li>
                <li>
                  <a href="#paragraphs">Paragraphs &amp; Text Input</a>
                </li>
                <li>
                  <a href="#buttons">Buttons</a>
                </li>
                <li>
                  <a href="#radio-and-check">Radio &amp; Checkbox</a>
                </li>
                <li>
                  <a href="#drop-and-list">Dropdown &amp; Lists</a>
                </li>
                <li>
                  <a href="#icons">Icons</a>
                </li>
                <li>
                  <a href="#sliders">Sliders</a>
                </li>
                <li>
                  <a href="#progress">Progress bar</a>
                </li>
                <li>
                  <a href="#disabled">Disabled Elements</a>
                </li>
                <li>
                  <a href="#cursors">Cursors</a>
                </li>
              </ul>

              <ContainerSection />
              <ParagraphSection />
              <ButtonSection />
              <RadioAndSelectSection />
              <DropdownAndListsSection />
              <IconSection />
              <SlidersSection />
              <ProgressSection />
              <DisbaledSection />
              <CursorSection />
              <br />
              <br />
              <br />
              <br />
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
