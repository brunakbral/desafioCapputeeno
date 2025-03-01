import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input `
    width: 352px;
    border-radius: 8px;
    border: none;
    opacity: 0px;
    padding: 10px 16px;
    background-color: var(--bg-secondary);

    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%)
    }
`
interface InputProps extends InputHTMLAttributes <HTMLInputElement> {
  value: string
  handleChange: (value: string) => void

}
export function PrimaryInputWithSearchIcon({ handleChange, ...rest }: Readonly<InputProps>) {
  return (
      <InputContainer>
          <PrimaryInput
              {...rest} 
              onChange={(event) => handleChange(event.target.value)}
          />
          <SearchIcon />
      </InputContainer>
  )  
}

