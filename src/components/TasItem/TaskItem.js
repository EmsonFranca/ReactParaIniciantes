import React,{ useState } from "react";
import PropTypes from "prop-types";
import "./task-item.css";

export default function TasItem ({id,
    title,
    taskState,
    onTaskUpdate,
    onDeleteTask
} ) {
 
// isEdinting = está editando
    const[isEditing, setIsEditing] = useState(false);

// EdiTableTitle = Título Editável
    const [editableTitle,setEditableTitle] = useState(title);

//onTitleChange = alterar o titulo
    const onTitleChange = (event) => {

        const newTtle = event.target.value;
        setEditableTitle((newTtle))
        onTaskUpdate (id, newTtle, taskState )

    }

//onKeyPress = pressione o botão
    const onKeyPress = (event) => {
         if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
    };
// onTaskStateChange = Alterar Lista de status
    const onTaskStateChange = ( event ) => {
        onTaskUpdate(id, title, event.target.value)
    }

    if(isEditing) {
        return (
            <div className="task-item" >
                <input 
                    type="text" 
                    value = {editableTitle} 
                    //onChange monitoira as alterações no input e avisda ao componete React
                    onChange = {onTitleChange} 
                    //onKeyPress ao precionar "enter" vai editar o title
                    onKeyPress = {onKeyPress}
                />    
            </div>
        )
    }else {
        return (
            <div className="task-item">
            <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
            <select onChange={onTaskStateChange} value={taskState}>
              <option value="Pendente">Pendente</option>
              <option value="Fazendo">Fazendo</option>
              <option value="Completa">Completa</option>
            </select>
          </div>
        )
    }
   
}


TasItem.protoType = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired,
    onTaskUpdate: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
}