import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const UserDetails = ({ User, Todos }) => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [tasks,setTasks] =useState([])

  useEffect(()=>(
    setTasks(Todos.data)
  ),[])

  const deletePerson = async (id) => {
    const req = await fetch(
      `https://gorest.co.in/public/v1/users/${User.data.id}`,
      {
        method: `DELETE`,
        headers: {
          Authorization:
            "Bearer 0abfbc7ca0c4aae74b6c142ae498d4ab7bc755d9c8b6fee6fefa8d38e11af48b",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (req.status == 204) {
      setMessage("Success,Going HomePage");
      setAlert("alert alert-success");
    } else {
      setMessage("BAŞARISIZ!");
      setAlert("alert alert-danger");
    }
    alertDel();
  };

  const alertDel = () => {
    setTimeout(() => {
      window.location.href = "http://localhost:3000";
    }, 2000);
  };

  return (
    <div className="container py-5">
      <div className={`${alert} text-center`}>{message}</div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text">İsim: {User.data.name}</p>
              <p className="card-text">E-Mail : {User.data.email}</p>
              <p className="card-text">Actived :{User.data.status}</p>
              <p className="card-text">Gender : {User.data.gender}</p>
              <div className="d-flex justify-content-around">
                <Link href={`/settings/${User.data.id}`}>
                  <a className="btn btn-primary">Düzenle</a>
                </Link>
                <button
                  onClick={() => deletePerson(User.id)}
                  className="btn btn-danger"
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <Link href="/addTask">
            <a className="btn btn-danger">ADD TASK</a>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="container text-center">
          <h2>TASKS</h2>
        </div>
        <hr />
      </div>
      <div className="row justify-content-center">
        {tasks.map((task) => (
          <div key={task.id} className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">İsim: {task.title}</p>
                <p className="card-text">E-Mail : {User.data.email}</p>
                <p className="card-text">Actived :{User.data.status}</p>
                <p className="card-text">Gender : {User.data.gender}</p>
                <div className="d-flex justify-content-around">
                  <Link href={`/settings/${User.data.id}`}>
                    <a className="btn btn-primary">Düzenle</a>
                  </Link>
                  <button
                    onClick={() => deletePerson(User.id)}
                    className="btn btn-danger"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://gorest.co.in/public/v1/users/${context.params.id}`
  );
  const res2 = await fetch(
    `https://gorest.co.in/public/v1/users/${context.params.id}/todos`
  );
  const User = await res.json();
  const Todos = await res2.json();
  return {
    props: {
      User,
      Todos,
    },
  };
};
