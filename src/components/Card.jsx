import styles from "../styles/components/Card.module.scss";
const Card = ({ userData }) => {
  return (
    <div className={styles.main}>
      {userData.map((user, index) => (
        <div className={styles.card} key={index}>
          <div
            className={styles.names}
            style={{ backgroundColor: user.isHighlight ? "red" : "" }}
          >
            <p>Name: {user.name}</p>
            <p>Surname:{user.surname} </p>
          </div>

          <hr />
          <p>Description:{user.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Card;
