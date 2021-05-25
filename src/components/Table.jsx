import React, {useState} from "react";
import styled from "styled-components";

function Table(props) {
  const { setValues, actions, setActions, setIsEdit, setSelected } = props;
  const [filters, setFilters] = useState({ type: "Todas", category: ""});

  const handleChange = (type, event) => {
    setFilters({ ...filters, [type]: event.target.value });

    if (type === "type") {
        const actualList = JSON.parse(localStorage.getItem("actions"));
        if (event.target.value === "Todas") {
            setActions(actualList);
        } else {
            const updatedList = actualList.filter(action => action.type === event.target.value);
            setActions(updatedList);
        }
    }
  };

  const onEdit = (action, index) => {
    setValues(action);
    setIsEdit(true);
    setSelected(index);
  };

  const onDelete = (index) => {
    let updatedList = actions.splice(index, 0);
    setActions(updatedList)
    localStorage.setItem("actions", JSON.stringify(updatedList));
  };

  return (
    <TableContent>
        <div>
            <select
                name="type"
                placeholder="Tipo"
                onChange={e => handleChange("type", e)}
                value={filters.type}
                >
                <option value="Todas">Todas</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>
        </div>
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
                <td>
                    <span onClick={() => onEdit(action, index)}>Editar </span>
                    <span onClick={() => onDelete(index)}>| Excluir</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContent>
  );
}
export default Table;

const TableContent = styled.div`
  color: black;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > div {
    text-align: right;
    margin-bottom: 20px;
  }

  table {
    width: 850px;
    border: 1px solid black;
  }

  th {
    background-color: #247ed8;
    color: white;
    padding: 10px;
  }

  th:first-child {
    width: 30%;
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
