import React from "react";
import ReactDataGrid from "react-data-grid";
import "./styles.css";

const columns = [
  { key: "team", name: "소속팀", editable: true },
  { key: "rpg", name: "rpg", editable: true },
  { key: "apg", name: "apg", editable: true }
];

const rows = [
  { team: '부산kt', rpg: 2.9, apg: 20 },
  
];

class Grid extends React.Component {
  state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render() {
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={1}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}

export default Grid;