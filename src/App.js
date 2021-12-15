import { Fragment } from "react/cjs/react.production.min";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button><br />
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>
        <div className="grid-container">
          <span className="grid-item">Shilpa</span>
          <span className="grid-item">999999999</span>
        </div>
        <div className="grid-container">
          <span className="grid-item">Sara</span>
          <span className="grid-item">888888888</span>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
