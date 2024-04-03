import PropTypes from 'prop-types';

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

function Square({ value }) {
  return (
    <button className="square">{ value }</button>
  )
}

Square.propTypes = {
   value: PropTypes.any,
};
export default Board;