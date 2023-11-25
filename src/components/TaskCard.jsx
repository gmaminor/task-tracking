
const TaskCard = ({index,card,handleDelete}) => {
    const btnStyle={
        HTML :'btn btn-primary m-2 rounded',
        CSS :'btn btn-secondary m-2 rounded',
        JavaScript : 'btn btn-info m-2 rounded',
        React : 'btn btn-danger m-2 rounded',
        default : 'btn btn-muted m-2 rounded border border-2'
    }

    return (
        <div className="border border-2 m-2 p-2 rounded">
            <h4>{card.task}</h4>
            <div className="d-flex justify-content-between">
                <div>{card.tags.map( c=>{
                    return <span className={btnStyle[c]}>{c}</span>
                })}</div>
                <button type='button'className="btn" onClick={()=>handleDelete(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-x-fill" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M6.854 8.146 8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 1 1 .708-.708z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default TaskCard;