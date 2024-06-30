import Container from "../Container/Container";
import styled from "./Hero.module.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className={styled.hero}>
      <Container>
        <div className={styled.container}>
          <div className={styled.divImg}>
            <img src="/illustra.png" alt="Ilustração" className={styled.img} />
          </div>

          <div className={styled.divTitle}>
            <h1 className={styled.title}>
              Encontre os <span className={styled.brand}>melhores artigos</span>
              <br />
              de programação em um só lugar
            </h1>
            <p className={styled.subTitle}>
              Explore o topo da programação em um só lugar!
              <br />
              Seu destino único para dicas e tendências atuais.
            </p>

            <div className={styled.button}>
              <Button>Buscar Artigos</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
