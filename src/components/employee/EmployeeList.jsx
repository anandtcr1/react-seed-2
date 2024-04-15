import React, { useEffect, useState, useRef } from 'react'
import useFetch from '../../hooks/useFetch';
import useHttp from '../../hooks/useHttp';
import useHttpAxios from '../../hooks/useHttpAxios';
import useGetData from '../../hooks/useGetData';

function EmployeeList() {
  //   const {data, loading, error} = useFetch("https://localhost:7289/api/Employees/GetEmployees");

  //   if(loading) return <h1>Loading</h1>
  //   if(error) console.log(error);

  // return (
  //   <div>
  //     {console.log(data)}
  //   </div>
  // )

  let taskRef = useRef();
  let [errorMessage, setErrorMessage] = useState(null);
  let [allTasks, setAllTasks] = useState([]);

  let [errorGet, sendGetRequest] = useHttp();
  let {data, loading, error, getHttpRequestData} = useGetData();

  let [errors, getHttpRequest] = useHttpAxios();

  const empV = {
    "employeeId": 0,
    "employeeName": "string",
    "employeeDescription": "string"
  }

  function getAllTasks(data){
    data.then((tasks) => {
      let taskList = [];
      for(let key in tasks){
        taskList.push({id: key, value:tasks[key]});
      }

      setAllTasks(taskList);
    })

    setErrorMessage(errorGet);
  }

  useEffect(() => {
    sendGetRequest("https://localhost:7289/api/Employees/GetEmployees", 'GET', null, getAllTasks);
  }, []);

  function createTask() {
    // sendPostRequest("https://localhost:7289/api/Employees", 'POST', empV, onCreateTask);
    getHttpRequest("https://localhost:7289/api/Employees", 'POST', empV, onCreateTask);
    // console.log("data added");
    // let {data, loading, error} = useFetch("https://localhost:7289/api/Employees/GetEmployees");
    //   console.log(data);

    let d = getHttpRequestData("https://localhost:7289/api/Employees/GetEmployees");
    console.log(data);
  }

  function passData(data){
    console.log(data);
  }

  function onCreateTask(data) {
    console.log("data added");
    // Do nothing
    data.then((d) => {
      console.log(d);

      // let {data, loading, error} = useFetch("https://localhost:7289/api/Employees/GetEmployees");
      // console.log(data);
    })
  }

  return (
    <div>
      <div className='main'>
        <input type="text" ref={taskRef} />
        <button onClick={createTask}>Create</button>

        <div>
          {data?.map((dat) => (
            <div>
              <div>{dat.employeeName}</div>
              <div>{dat.employeeId}</div>
            </div>
            
          ))}
        </div>

      </div>
      {errorMessage && <div>{errorMessage}</div>}

    </div>
  )
}

export default EmployeeList
