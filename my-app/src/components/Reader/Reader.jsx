import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Controls from './Controls/Controls';
import styles from './Reader.module.css';

class Reader extends Component {
  state = {
    value: 0,
  };

  handleClick = ({ target }) => {
    const { name } = target;
    if (name === 'decrement') {
      this.setState(state => ({
        value: state.value - 1,
      }));
    } else if (name === 'increment') {
      this.setState(state => ({
        value: state.value + 1,
      }));
    }
  };

  render() {
    const { items } = this.props;
    const { value } = this.state;

    return (
      <div className={styles.reader}>
        <Publication
          id={items[value].id}
          text={items[value].text}
          title={items[value].title}
        />
        <p className={styles.counter}>{value + 1}/12</p>;
        <Controls handleClick={this.handleClick} value={value} />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Reader;
