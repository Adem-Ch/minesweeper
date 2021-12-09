import React from "react";

class ConfigArea extends React.Component {
  render() {
    const { props } = this;
    let levels = [
      { caption: "Guest", column: 5, row: 5, complexity: 0.1 },
      { caption: "Beginner", column: 10, row: 10, complexity: 0.3 },
      { caption: "Profy", column: 205, row: 15, complexity: 0.5 },
    ];

    let configForm;

    configForm.push(
      <form>
        <div className="fields">
          <label>Choose level:</label>
          <select>
            const options = levels.map(element =>
            {
              <option
                data-row={element.row}
                data-column={element.column}
                data-complexity={element.complexity}
              >
                {element.caption}
              </option>
            }
            );
          </select>
        </div>
      </form>
    );

    return configForm;
  }
}
// php sila 
export default ConfigArea;
