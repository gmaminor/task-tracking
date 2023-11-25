import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tagName, cardData, handleDelete }) => {
    return (
            <div className=" col-4 ">
                {/* border border-2 min-vh-100 d-flex flex-column */}

                <h2>{title}</h2>

                {
                    cardData.map((card, index) => {
                        return (card.status === tagName)
                            && <TaskCard key={index} card={card} handleDelete={() => handleDelete(index)} />
                    })
                }

            </div>
        
    )
}

export default TaskColumn;