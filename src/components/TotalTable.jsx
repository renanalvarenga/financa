import React from "react";
import styled from "styled-components";

function Total(props) {
  const { actions } = props;

  const getTransactionCount = type => {
    let count = 0;
    let filter = actions.filter(action => action.type === type);
    filter.forEach(item => (count += Number(item.value)));
    return count;
  };

  const getTotal = () => {
    let count = 0;
    actions.forEach(item => (count += item.value));
    return getTransactionCount("Entrada") - getTransactionCount("Saída");
  };

  return (
    <TotalContent>
      <table>
        <thead>
          <tr>
            <th>Total de Entrada</th>
            <th>Total de Saída</th>
            <th>Saldo (R$)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getTransactionCount("Entrada")}</td>
            <td>{getTransactionCount("Saída")}</td>
            <td>{getTotal()}</td>
          </tr>
        </tbody>
      </table>
    </TotalContent>
  );
}
export default Total;

const TotalContent = styled.div`
  background-color: #ecebeb;
  color: black;
  font-size: 16px;
  text-align: center;
  display: flex;
  margin: 60px 30px 0 0;
  align-self: center;

  table {
    width: 400px;
    border: 1px solid black;
  }

  th {
    background-color: #247ed8;
    color: white;
    padding: 10px;
  }

  td {
    background-color: white;
    padding: 10px;
  }
`;
