import styled from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className={styled.container}>{children}</div>;
}

export default Container;
