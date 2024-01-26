import * as React from "react";

const App = ({ link, icon, alt }: { link: string; icon: any; alt: string }) => {
  return (
    <div className="icoPosition">
      <a href={link}>
        <img src={icon} className="ico" alt={alt} />
      </a>
    </div>
  );
};

export default App;
