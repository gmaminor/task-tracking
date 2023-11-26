import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tagName, cardData, handleDelete }) => {
    return (
        
                <div className="shadow " style={{minWidth:'50vh'}}>
                    {/* border border-2 min-vh-100 d-flex flex-column */}

                    <div className=" border border-2 m-2 p-2 bg-dark text-light shadow display-6 d-flex justify-content-center rounded">{title}</div>

                        {
                            cardData.map(
                                (card, index) => {
                                    return (card.status === tagName)
                                        && <TaskCard key={index} card={card} handleDelete={() => handleDelete(index)} />
                                })
                        }
                    </div>
              
    )
}

export default TaskColumn;