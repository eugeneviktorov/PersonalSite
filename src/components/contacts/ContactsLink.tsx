import * as React from "react";

const App = ({ link, icon, alt }: { link: string; icon: any; alt: string }) => {
  return (
    <a href={link} className="icoLink">
      <div className="icoPosition">
        <img src={icon} className="ico" alt={alt} />
      </div>
    </a>
  );
};

export default App;
