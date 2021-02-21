import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getRandomColor } from '../util';

const mapStateToProps = (state) => ({
  number: state.numberData.number,
  color: state.colorData.color
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  setColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

const CounterConatiner = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterConatiner;
