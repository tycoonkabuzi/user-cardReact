import styles from "../styles/components/Card.module.scss";
const Card = () => {
  return (
    <div className={styles.main}>
      <div className={styles.names}>
        <p>Name: Kabuzi </p>
        <p>Surname: Kabuzi </p>
      </div>

      <hr />
      <p>
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum perferendis modi, quibusdam expedita sequi sint natus, eius
        eveniet blanditiis dolor ad quia a corporis cupiditate vitae, tenetur
        quisquam pariatur ut.
      </p>
    </div>
  );
};
export default Card;
