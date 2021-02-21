import './Counter.css';
import PropTypes from 'prop-type';

const Counter = ({ number, color, onIncrement, onDecrement, setColor }) => {
  debugger;
  return (
    <div
      className='Counter'
      onClick={onIncrement}
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={setColor}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  setColor: PropTypes.func
};

Counter.defaultProps = {
  color: 'black',
  number: 0,
  onIncrement: () => {
    console.warn('onIncement is not defined');
  },
  onDecrement: () => {
    console.warn('onDecrement is not defined');
  },
  setColor: () => {
    console.warn('setColor is not defined');
  }
};

export default Counter;
