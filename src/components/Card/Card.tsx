import styled from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className={styled.card}>
      <div className={styled.divImg}>
        <img src={image} alt="" className={styled.img} />
      </div>
      <div className={styled.info}>
        <h3 className={styled.title}>{title}</h3>
        <p className={styled.description}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
