import * as React from "react";

function App({ TitleOne, TitleTwo }: { TitleOne: string; TitleTwo: string }) {
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
