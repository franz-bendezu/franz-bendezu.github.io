interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const { className, children } = props;
  return (
    <article
      data-testId="card"
      className={
        className +
        ` rounded-xl p-3 shadow-lg transition-all duration-100 ease-in-out hover:scale-105
        hover:transform hover:shadow-xl `
      }
    >
      {children}
    </article>
  );
};
export default Card;
