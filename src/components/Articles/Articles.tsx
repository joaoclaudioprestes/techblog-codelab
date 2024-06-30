import Card from "../Card/Card";
import Container from "../Container/Container";
import styled from "./Articles.module.css";

import data from "../../data.json";

function Articles() {
  const articles = Object.entries(data.articles).map(([id, article]) => ({
    id,
    ...article,
  }));

  return (
    <section className={styled.articles}>
      <Container>
        <h2 className={styled.title}>Artigos recomendados</h2>

        <div className={styled.box}>
          {articles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Articles;
