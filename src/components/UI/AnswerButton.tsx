import styled from "styled-components";
import { AnswerButtonProps } from "../../interfaces";

const StyledAnswerButton = styled.button`
  font-family: "Karla", sans-serif;
  background-color: white;
  padding: 0.5em 2em;
  margin: 1em 0.5em;
  border-radius: 10px;
  border: 1px solid #293264;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background-color: #d6dbf5;
  }

  @media (min-width: 700px) {
    .answerbutton {
      margin-right: 3em;
    }
  }

  .selected {
    background-color: #d6dbf5;
  }
`;

export default function AnswerButton(props: AnswerButtonProps) {
  return (
    <StyledAnswerButton
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
      name={props.name}
      disabled={props.disabled}
    >
      {props.children}
    </StyledAnswerButton>
  );
}
