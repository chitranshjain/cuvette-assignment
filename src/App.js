import React from "react";
import "./App.css";
import ProgressComp from "./ProgressComp";
import MyVerticallyCenteredModal from "./Modal";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <button
        onClick={(e) => {
          e.preventDefault();
          setModalShow(true);
        }}
      >
        Update
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ProgressComp />
    </div>
  );
}

export default App;
