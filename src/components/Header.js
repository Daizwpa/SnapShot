import React, { useRef } from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  const textEntry = useRef();

  return (
    <div >
      <h1>SnapShot</h1>
      <Form textEntry = {textEntry}  history={history} handleSubmit={handleSubmit} />
      <Navigation textEntry={textEntry} />
    </div>
  );
};

export default Header;
