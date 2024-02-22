import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GlobalColors, GlobalShadows } from "../ColorTheme";
import LogoSite from "../../assets/icons/Logotype-site.svg";
import ButtonNavigate from "./ButtonNavigate";

function Header({ main, back }: { main?: any; back?: any }) {
  // Скроллинг без таргетированных ссылок
  const scrollToNotLink = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();
  // Возвращение на предыдущую страницу
  const handleBack = () => {
    navigate(-1);
  };

  // Переход на главную страницу
  const handleMain = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Logotype href="/">
        <Logo src={LogoSite} />
      </Logotype>
      {main && (
        <ButtonContainer>
          <ButtonNavigate
            title={"работы"}
            onClick={(e) => scrollToNotLink(e, "portfolio")}
          />
          <ButtonNavigate
            title={"контакты"}
            onClick={(e) => scrollToNotLink(e, "feedback")}
          />
        </ButtonContainer>
      )}
      {back && (
        <ButtonContainer>
          <ButtonNavigate title={"назад"} onClick={handleBack} />
        </ButtonContainer>
      )}
      {!main && !back && (
        <ButtonContainer>
          <ButtonNavigate title={"главная"} onClick={handleMain} />
        </ButtonContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  background-color: ${GlobalColors.ColorWhite};
  box-shadow: ${GlobalShadows.BoxShadow};
  border-radius: 0 0 1.5em 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 425px) {
    border-radius: 0 0 2em 2em;
  }
`;

const Logotype = styled.a`
  display: inline-block;

  @media (min-width: 280px) {
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    margin-left: 0.7em;
  }

  @media (min-width: 425px) {
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    margin-left: 0.6em;
  }

  @media (min-width: 768px) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 2em;
  }
`;

const Logo = styled.img`
  pointer-events: none;

  @media (min-width: 280px) {
    width: 90px;
  }

  @media (min-width: 320px) {
    width: 100px;
  }

  @media (min-width: 375px) {
    width: 120px;
  }

  @media (min-width: 768px) {
    width: 140px;
  }

  @media (min-width: 1024px) {
    width: 150px;
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
`;
