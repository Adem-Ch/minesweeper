import React from "react";

class Field extends React.Component {
  activateField = (event) => {
    console.log(
      "Click on r-",
      event.target.dataset.row,
      ", c-",
      event.target.dataset.column
    );
  };
  markField = (event) => {
    event.preventDefault();
    event.target.className = "cell marked";
    console.log(
      "Marked r-",
      event.target.dataset.row,
      ", c-",
      event.target.dataset.column
    );
  };

  render() {
    const { props } = this;
    let cells = [];
    let rows = [];

    for (let i = 0; i < props.rows; i++) {
      cells = [];
      for (let j = 0; j < props.columns; j++) {
        cells.push(
          <div
            className="cell"
            data-row={i}
            data-column={j}
            onClick={this.activateField}
            onContextMenu={this.markField}
          ></div>
        );
      }
      rows.push(<div className="fieldRow">{cells}</div>);
    }

    console.log(props);

    return (
      <div>
        <p>Rows {props.rows}</p>
        <p>Columns {props.columns}</p>
        <div className="fields">{rows}</div>
      </div>
    );
  }
}

// class Log extends React.Component {
//   render() {
//     return (
//       <div>
//         Click on r- {event.target.dataset.row}, c- {event.target.dataset.column}
//       </div>
//     );
//   }
// }

export default Field;

//как менять
