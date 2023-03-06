import React from "react";
import Heading from "../Heading";
import TextInput from "../TextInput";

const ParagraphSection = () => {
  return (
    <div id="paragraphs" className="rpgui-container framed-grey">
      <h1>Paragraphs &amp; Text Input</h1>
      <p>This example shows the basic paragraphs and headers in RPGUI.</p>
      <hr />
      <Heading>Header 1</Heading>
      <Heading variant="h2">Header 2</Heading>
      <Heading variant="h3">Header 3</Heading>
      <Heading variant="h4">Header 4</Heading>
      <p>Regular paragraph (p)</p>
      <span>Span</span>
      <label>Label</label>
      <a>Link (a)</a>
      <br />
      <br />
      <TextInput label="Text Input:" placeholder="first name" />
      <br />
      <br />
      <TextInput
        textarea
        label="Textarea:"
        placeholder="write your story here..."
      />
    </div>
  );
};

export default ParagraphSection;
