import * as React from "react";
import { useLocation } from "react-router-dom";
import Logotype from "../../assets/icons/Preload.svg";
import "./Preload.css";

const Preload = () => {
  const [loaded, setLoaded] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [location.pathname]);

  React.useEffect(() => {
    const preloadElement = document.querySelector(".preload");

    if (preloadElement) {
      preloadElement.classList.toggle("invisible", loaded);
    }
  }, [loaded]);

  return (
    <div className={`preload ${loaded ? "invisible" : ""}`}>
      <img src={Logotype} className="preLogo" width="300" alt="preload" />
    </div>
  );
};

export default Preload;
