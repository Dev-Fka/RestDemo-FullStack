import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const SearchUser = () => {
  const [val, setVal] = useState("");
  const [user, setUser] = useState("");
  const [todo, setTodo] = useState([]);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [info, setInfo] = useState("");

  const getUser = async (id) => {
    if (id == "") {
      setMessage("DONT BLANK");
      setAlert("alert alert-danger");
      alertDel()
    } else {
      const req = await fetch(`https://gorest.co.in/public/v1/users/${id}`);
      const req2 = await fetch(
        `https://gorest.co.in/public/v1/users/${id}/todos`
      );
      if (req.status != 200) {
        setMessage("USER DONT EXİSTS.");
        setAlert("alert alert-danger");
        alertDel()
      } else {
        const data = await req.json();
        const tasks = await req2.json();
        setUser(data.data);
        setTodo(tasks.data);
      }
    }
  };

  const deletePerson = async (id) => {
    const req = await fetch(`https://gorest.co.in/public/v1/users/${user.id}`, {
      method: `DELETE`,
      headers: {
        Authorization:
          "Bearer 0abfbc7ca0c4aae74b6c142ae498d4ab7bc755d9c8b6fee6fefa8d38e11af48b",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (req.status == 204) {
      setMessage("Success,Going HomePage");
      setAlert("alert alert-success");
    } else {
      setMessage("BAŞARISIZ!");
      setAlert("alert alert-danger");
    }
    redirectMain();
  };

  const redirectMain = () => {
    setTimeout(() => {
      window.location.href = "http://localhost:3000";
    }, 2000);
  };

  const alertDel= () => {
    setTimeout(() => {
     setAlert('visually-hidden')
    }, 2000);
  };

  return (
    <>
      <div className="container">
        <div className={`${alert} text-center mt-3`}>{message}</div>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="my-3">
              <label className="form-label float-start">User ID</label>
              <input
                onChange={(e) => setVal(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search by user id.."
              />
            </div>
            <button
              onClick={() => getUser(val)}
              className="btn btn-primary float-end"
            >
              SEARCH
            </button>
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="row text-center">
            <h2>USER</h2>
          </div>
          <div className="col-md-9 ">
            {user ? (
              <div>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">User Name:{user.name}</p>
                    <p className="card-text">Email: {user.name} </p>
                    <p className="card-text">Gender: {user.gender}</p>
                    <p className="card-text">Status: {user.status}</p>
                    <div className="">
                      <Link href={`/settings/${user.id}`}>
                        <a className="btn btn-primary me-5">Düzenle</a>
                      </Link>
                      <button
                        onClick={() => deletePerson(user.id)}
                        className="btn btn-danger me-5"
                      >
                        Sil
                      </button>
                      <Link href={`/addtask/${user.id}`}>
                        <a className="btn btn-danger me-5">ADD TASK</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="row text-center">
            <h2>TASKS</h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              {todo.map((task) => (
                <div key={task.id} className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">Task Name: {task.title}</p>
                      <p className="card-text">Due-On: {task.due_on}</p>
                      <p className="card-text">Status:{task.status}</p>
                      <div className="d-flex justify-content-around"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchUser;
