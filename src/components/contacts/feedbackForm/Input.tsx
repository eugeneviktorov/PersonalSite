import * as React from "react";
import styled from "styled-components";
import InputMask from "react-input-mask";
import { GlobalColors, GlobalShadows } from "../../ColorTheme";

const Input = ({
  inputmode,
  named,
  className,
  placeholder,
  value,
  onChange,
  id,
  mask,
  maskChar,
  onMouseDown,
}: {
  inputmode: string;
  named: string;
  className?: any;
  placeholder: string;
  value?: any;
  onChange: any;
  id?: any;
  mask?: any;
  maskChar?: any;
  onMouseDown?: any;
}) => {
  return (
    <Container>
      {!mask && (
        <InputStandart
          inputmode={inputmode}
          name={named}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {mask && (
        <StyledInputMask
          inputmode={inputmode}
          name={named}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          mask={mask}
          maskChar={maskChar}
          onMouseDown={onMouseDown}
        />
      )}
    </Container>
  );
};

export default Input;

const Container = styled.div``;

const inputStyles = `
  /* Safari shadow */
  background-clip: padding-box;
  color:${GlobalColors.ColorDarkBlue};
  background-color: ${GlobalColors.ColorWhite};
  box-shadow: ${GlobalShadows.BoxShadow};
  border: none;
  outline: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin-bottom: 1em;
  border-radius: 1em;
  font-family: Nunito-Bold;

  @media (min-width: 280px) {
    font-size: 16px;
    padding: 1em;
    width: 100%;
  }

  &.isNotValid {
      border: 3px solid ${GlobalColors.ColorBlue};
    }
  }

  ::placeholder {
    color: ${GlobalColors.ColorGray};
  }
`;

const InputStandart = styled.input`
  ${inputStyles}
`;

const StyledInputMask = styled(InputMask)`
  ${inputStyles}
`;
