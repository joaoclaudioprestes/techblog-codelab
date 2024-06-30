import Button from "../Button/Button";
import Container from "../Container/Container";
import styled from "./Form.module.css";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: unknown) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Preencha todos os campos!");
      return;
    } else {
      alert(
        `Nome: ${name} \nEmail: ${email} \nMensagem: ${message} \n\nEntraremos em contato em breve!`
      );
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className={styled.sectionForm}>
      <Container>
        <h2 className={styled.title}>Entre em contato</h2>
        <form action="#" onSubmit={handleSubmit} className={styled.form}>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Nome"
              className={styled.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email"
              className={styled.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            <textarea
              placeholder="Assunto da mensagem"
              className={styled.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <button type="submit" className={styled.btnSubmit}>
            <Button>Entrar em contato</Button>
          </button>
        </form>
      </Container>
    </section>
  );
}

export default Form;
