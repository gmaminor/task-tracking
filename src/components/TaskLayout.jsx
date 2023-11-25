import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";
import React, { useState, useEffect } from 'react';

const oldCardData = localStorage.getItem("cardData");


const TaskLayout = () => {

    let [cardData, setCardData] = useState(JSON.parse(oldCardData) || []);


    useEffect(() =>
        localStorage.setItem('cardData', JSON.stringify(cardData)), [cardData]
    )

    const handleDelete = (index) => {
        setCardData(prev => {
            const newCardData = cardData.filter((card, ind) => ind !== index);
            return newCardData;
        })
    }

    return (
        <div className="container">

            <div className="d-flex justify-content-center">
                <TaskForm setCardData={setCardData} cardData={cardData} />
            </div>
            <div className="container">

                <div className="d-flex">
                    <TaskColumn title='To do' tagName='todo' cardData={cardData} handleDelete={handleDelete} />
                    <TaskColumn title='Doing' tagName='doing' cardData={cardData} handleDelete={handleDelete} />
                    <TaskColumn title='Done' tagName='done' cardData={cardData} handleDelete={handleDelete} />

                </div>
            </div>
        </div>
    )
}

export default TaskLayout;