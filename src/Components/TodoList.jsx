import React, { useState } from "react"

//Bài tập xây dựng chức năng xóa todo 
function TodoList(){
    const [job, setJob] = useState('')
    //if have data return storage jobs or return empty array
    const [jobs, setJobs] = useState(() => {
         //get data from storage
        const storageJobs = JSON.parse(localStorage.getItem('jobs')) ?? [];
        return storageJobs;
    });

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job];
            
            //save to local storage
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs);

            return newJobs;
        })
        setJob('')
    }

    return (
        <div style={{ padding: 32 }}>
            <input 
                value={job}
                onChange={e => setJob(e.target.value)}
            />

            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>

                ))}
            </ul>
        </div>
    )
}

export default TodoList;