import PropTypes from 'prop-types';
import styles from './Friend.module.css';

function Friend({ avatar, name, isOnline }) {
  const status = isOnline ? styles.isOnline : styles.isOffline;
  return (
    <li className={styles.item}>
      <span className={status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
