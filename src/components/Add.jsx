import React from "react";
import styled from "styled-components";

function Add({ values, setValues, actions, setActions, isEdit, setIsEdit, selected, setSelected }) {
  const handleChange = (type, event) => {
    setValues({ ...values, [type]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let updatedList;

    if (isEdit) {
      setIsEdit(false);
      actions[selected] = values;
      updatedList = actions;
      setSelected(undefined)
      
    } else {
      const date = new Date();
      values.date = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
      updatedList = [...actions, values];
      setActions(updatedList);
    }

    localStorage.setItem("actions", JSON.stringify(updatedList));
  };

  return (
    <AddContent>
      <div className="screen">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Título"
              onChange={e => handleChange("title", e)}
              value={values.title}
            />
          </div>
          <div>
            <select
              name="type"
              placeholder="Tipo"
              onChange={e => handleChange("type", e)}
              value={values.type}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="category"
              placeholder="Categoria"
              className="input-field"
              onChange={e => handleChange("category", e)}
              value={values.category}
            />
          </div>
          <div>
            <input
              type="value"
              name="value"
              placeholder="Valor"
              onChange={e => handleChange("value", e)}
              value={values.value}
            />
          </div>
          <button type="submit">{isEdit ? "Salvar" : "Adicionar"}</button>
        </form>
      </div>
    </AddContent>
  );
}
export default Add;

const AddContent = styled.section`
  .screen {
    display: flex;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: #247ed8;
    margin-right: 50px;
    padding: 20px;
    border: 1px solid black;

    & > div {
      margin-bottom: 10px;

      svg {
        position: absolute;
      }

      input {
        width: 260px;
      }

      select {
        width: 100%;
      }

      input,
      select {
        padding-left: 10px;
        height: 25px;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      }
    }
  }

  button {
    padding: 10px;
    color: black;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    cursor: pointer;
    align-self: flex-end;
  }
`;
