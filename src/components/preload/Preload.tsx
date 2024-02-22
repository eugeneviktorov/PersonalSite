import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "../ColorTheme";
import Logotype from "../../assets/icons/Preload.svg";

const Preload = () => {
  const [loading, setLoading] = React.useState(false);

  // Таймер на показ лого после полной загрузки страницы
  React.useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    };

    // Состояние загрузки страницы
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  });

  return (
    <Container className={`${loading ? "invisible" : "none"}`}>
      <Icon src={Logotype} />
    </Container>
  );
};

export default Preload;

const Container = styled.div`
  background: ${GlobalColors.ColorWhite};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  z-index: 999;

  &.invisible {
    opacity: 0;
    z-index: -1;
  }
`;

const Icon = styled.img`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
