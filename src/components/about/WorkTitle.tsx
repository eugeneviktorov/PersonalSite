import * as React from "react";

function App({ TitleOne, TitleTwo }) {
  return (
    <div className="workTitle">
      <ul>
        <li>{TitleOne}</li>
      </ul>
      <ul>
        <li>{TitleTwo}</li>
      </ul>
    </div>
  );
}

export default App;
