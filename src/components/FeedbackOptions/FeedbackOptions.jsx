import styles from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const button = options.map((button) => (
    <button
      key={button}
      className={styles.button}
      typr="button"
      value={button}
      onClick={() => onLeaveFeedback(button)}
    >
      {button}
    </button>
  ));
  return <div className={styles.buttons}>{button}</div>;
}

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
//g
