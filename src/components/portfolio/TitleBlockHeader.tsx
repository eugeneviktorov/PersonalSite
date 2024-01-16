import * as React from "react";

function App({ text }: { text: string }) {
  return (
    <div>
      <div className="titleBlockHeader">{text}</div>
    </div>
  );
}

export default App;
