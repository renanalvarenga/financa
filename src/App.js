import React, {useState, useEffect, useCallback} from 'react';
import styled from "styled-components";

import Logo from "./components/assets/images/logoSenseData.png";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Add from "./components/Add";
import Total from "./components/TotalTable";

function App() {
  const [actions, setActions] = useState([]);
  const [values, setValues] = useState({title: "", type: "Entrada", category: "", value: 0, date: ""});
  const [isEdit, setIsEdit] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const props = {actions, setActions, values, setValues, isEdit, setIsEdit, selected, setSelected};

  const callBackSaved = useCallback(() => {
    const actions = localStorage.getItem("actions");
    setActions(!!actions ? JSON.parse(actions) : [{title: "Salário", type: "Entrada", category: "Trabalho", value: 2500, date: "5/6/2021"}])
  }, []);

  useEffect(() => {
    callBackSaved()
  }, [callBackSaved]);

  return (
    <>
    <AppContent>
      <img src={Logo} alt="logo" />
      <h1>SenFinança - Controle Financeiro Pessoal</h1>
      <div className="screen">
        <Add {...props}/>
        <Table {...props} />
      </div>
      <Total {...props}/>
    </AppContent>
    <Footer />
    </>
  );
}

export default App;

const AppContent = styled.section`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

h1 {
    margin-bottom: 40px;
    font-size: 20px;
}

.screen {
  display: flex;

}
`