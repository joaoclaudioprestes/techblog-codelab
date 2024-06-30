import styled from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button className={styled.button}>{children}</button>;
}

export default Button;
