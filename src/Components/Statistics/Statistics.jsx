import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(itemData => (
          <StatisticsItem
            key={itemData.id}
            label={itemData.label}
            percentage={itemData.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
