import { useState } from 'react';
import Tag from './Tag';

const TaskForm = ({ setCardData, cardData }) => {
    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    })

    const [selectedTag, setSelectedTag] = useState({
        HTML: false,
        CSS: false,
        JavaScript: false,
        React: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prev => {
            return { ...prev, [name]: value }
        })

    }

    const clicked = (tagName) => {
        if (taskData.tags.some(tag => tag === tagName)) {
            const newTag = taskData.tags.filter(tag => tag !== tagName);
            setTaskData(prev => {
                return { ...prev, tags: newTag }
            });
            setSelectedTag(prev => {
                return { ...prev, [tagName]: false };
            })
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tagName] }
            })
            setSelectedTag(prev => {
                return { ...prev, [tagName]: true };
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskData.status === '' || taskData.tags.length === 0 || taskData.task === '') {
            alert('Incomplete filled form');
            return;
        }
        setCardData(prev => {
            return [...prev, taskData];
        })


        setTaskData({
            status: 'todo',
            task: '',
            tags: [],
        })
        setSelectedTag({
            HTML: false,
            CSS: false,
            JavaScript: false,
            React: false
        })

    }


    return (
        <div className='container'>
            <div className='row'>
                <h1 className='d-flex flex-wrap justify-content-center display-5 shadow bg-dark text-white'>TASK TRACKER</h1>
                <div className=" ">
                    <form onSubmit={handleSubmit}>
                        <div className='d-flex flex-wrap justify-content-center mt-2  '>
                            <input type="text" name='task' value={taskData.task} placeholder="Enter task title "
                                style={{ width: '80vh' }} onChange={handleChange} />
                        </div>
                        <div className="d-flex flex-wrap  justify-content-center align-items-center mb-5">
                            <Tag tagName='CSS' clicked={clicked} selected={selectedTag.CSS} />
                            <Tag tagName='JavaScript' clicked={clicked} selected={selectedTag.JavaScript} />
                            <Tag tagName='HTML' clicked={clicked} selected={selectedTag.HTML} />
                            <Tag tagName='React' clicked={clicked} selected={selectedTag.React} />

                            <select className='m-2' style={{ height: '30px' }} name="status" value={taskData.status} onChange={handleChange}>
                                <option value="todo">To do</option>
                                <option value="doing">Doing</option>
                                <option value="done">Done</option>
                            </select>
                            <button type='submit' className="btn btn-primary m-2">+Add Task</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskForm;