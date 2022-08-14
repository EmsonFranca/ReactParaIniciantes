import React from "react";
import "./tasklist.css"
import PropTypes from "prop-types"
import plusIcon from "../../img/plus-icon.svg"

import TasItem from "../TasItem/TaskItem";

export default function TaskList ( {
    title,
    taskState,
    onAddTask,
    tasks,
    onTaskUpdate,
    onDeleteTask
} ) {
    //Adicionar tarefa
    const addTask = () => {
        onAddTask('Nova Tarefa', taskState);
    }

    return(

        <div className="tasklist">

            <div className="title">{title}</div>
            <div className="content"> {
                tasks.map((task) => {
                    return (
                        <TasItem 
                            key = {task.id}
                            id = { task.id} 
                            title = {task.title}
                            taskState = {task.state}
                            onTaskUpdate = {onTaskUpdate}
                            onDeleteTask = {onDeleteTask}
                        />
                    );
                })}
                { tasks.length === 0 && <div className="emty-list" >Lista Vazia</div> }
                 <button onClick={addTask} className = "btn">
                <img src={plusIcon} alt = "plus" />
                Adicionar Tarefa
            </button>

            </div>

        </div>

    );
}

TaskList.prototype = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    onTaskUpdate: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired
};