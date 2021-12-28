import React, { useEffect } from "react";
import { useState } from "react";

const AddTask = ({ todos }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [message,setMessage]=useState('')
  const [alert,setAlert]=useState('')

  let id;

  const createPost = async () => {
    const date=new Date();
    id=todos.data[0].user_id;
    
    const req = await fetch(
      `https://gorest.co.in/public/v1/users/${id}/todos`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 0abfbc7ca0c4aae74b6c142ae498d4ab7bc755d9c8b6fee6fefa8d38e11af48b",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title:title,
          status:status,
          user_id:id,
          due_on:date
        }),
      }
    );

      if(req.status!=201){
        setMessage('TRY AGAİN')
        setAlert('alert alert-danger')
      }else{
        setAlert('alert alert-success')
        setMessage('Success,Redirect TO Tasks')
        alertDel()
      }
  };

  const alertDel = () => {
    setTimeout(() => {
      window.location.href = `http://localhost:3000/User/${id}`;
    }, 3000);
  };

  return (
    <>
      <div className="container">
      <div className={`${alert} text-center mt-3`}>{message}</div>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="my-3">
              <label className="form-label float-start">Task Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Write Task Name.."
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
              />
            </div>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value={pending}
                  onClick={() => {
                    setPending(true), setCompleted(false),setStatus('pending');
                  }}
                />
                <label className="form-check-label">Pending</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value={completed}
                  onClick={() => {
                    setPending(false), setCompleted(true),setStatus('Completed');
                  }}
                />
                <label className="form-check-label">Completed</label>
              </div>
            </div>
            <button
              onClick={() => createPost()}
              className="btn btn-success float-end"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://gorest.co.in/public/v1/users/${context.params.id}/todos`
  );
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
};
