import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TiTick, TiTimes } from "react-icons/ti";

export default function Home({ data }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    {
      setUsers(data);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>USER MANAGEMENT SYSTEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-5">
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Gender</th>
                <th scope="col">Actived</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.personName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    {user.actived ? <TiTick></TiTick> : <TiTimes></TiTimes>}
                  </td>
                  <td>
                    <Link href={`/User/${user.id}`}>
                      <a className="btn btn-primary">Details</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="/addUser" passHref>
            <button className="btn btn-info float-end">ADD USER</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8080/api/persons");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
