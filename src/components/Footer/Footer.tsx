import styled from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styled.footer}>
      <p>
        © 2024 - {" "}
        <a
          href="https://github.com/iuricode/desafios-frontend"
          className={styled.link}
          target="_blank"
        >
          CodeLab 
        </a> {" "}
        Challenges - Solved by
      </p>
      <a href="https://jprestes.vercel.app" target="_blank">
        {" "}
        <img
          src="/logo.svg"
          alt="Logo - João Prestes"
          className={styled.logo}
        />
      </a>
    </footer>
  );
}

export default Footer;
