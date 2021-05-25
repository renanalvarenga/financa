import React from "react";
import styled from "styled-components";

function Table(props) {
  const { setValues, actions, setIsEdit, setSelected } = props;

  const onEdit = (action, index) => {
    setValues(action);
    setIsEdit(true);
    setSelected(index);
  };

  return (
    <TableContent>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Valor (R$)</th>
            <th>Data de transação</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {actions &&
            actions.map((action, index) => (
              <tr key={index}>
                <td>{action.title}</td>
                <td>{action.type}</td>
                <td>{action.category}</td>
                <td>{action.value}</td>
                <td>{action.date}</td>
                <td onClick={() => onEdit(action, index)}>Editar</td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContent>
  );
}
export default Table;

const TableContent = styled.div`
  background-color: #ecebeb;
  color: black;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;

  table {
    width: 850px;
  }

  th {
    background-color: #247ed8;
    color: white;
    padding: 10px;
  }

  th:first-child {
    width: 40%;
  }

  td {
    background-color: white;
    padding: 10px;
  }

  td:last-child {
    cursor: pointer;
    color: #247ed8;
  }
`;
