import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Tasks = ({ data, users }) => {
  const [todos, setTodos] = useState([]);
  const [userList, setUserList] = useState([]);
  const [num, setNum] = useState(2);

  useEffect(() => {
    setTodos(data.data);
    setUserList(users.data);
  }, []);

  const requestNextPage = async () => {
    if (num == 0) {
      setNum(num + 1);
      const res = await fetch(
        `https://gorest.co.in/public/v1/todos?page=${num}`
      );
      const data = await res.json();
      setTodos(data.data);
    } else {
      const res = await fetch(
        `https://gorest.co.in/public/v1/todos?page=${num}`
      );
      const data = await res.json();
      setTodos(data.data);
      setNum(num + 1);
    }
  };

  const requestPreviousPage = async () => {
    if (num == 0) {
    } else {
      const res = await fetch(
        `https://gorest.co.in/public/v1/todos?page=${num}`
      );
      const data = await res.json();
      setTodos(data.data);
      setNum(num - 1);
    }
  };

  return (
    <div>
      <main className="my-5">
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Todo Title</th>
                <th scope="col">User ID</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <th scope="row">{todo.id}</th>
                  <td>{todo.title}</td>
                  <td>{todo.user_id}</td>
                  <td>{todo.status}</td>
                  <td>{todo.due_on}</td>
                  <td>
                    <Link href={`/User/${todo.user_id}`}>
                      <a className="btn btn-primary">Details</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn btn-info float-start mb-3"
            onClick={() => requestPreviousPage()}
          >
            Previous
          </button>
          <button
            className="btn btn-danger float-end mb-3"
            onClick={() => requestNextPage()}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Tasks;

export async function getStaticProps() {
  const res = await fetch("https://gorest.co.in/public/v1/todos");
  const res2 = await fetch("https://gorest.co.in/public/v1/users");
  const data = await res.json();
  const users = await res2.json();
  return {
    props: {
      data,
      users,
    },
  };
}
