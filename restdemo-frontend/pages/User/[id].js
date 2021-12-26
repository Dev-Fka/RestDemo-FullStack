import Link from "next/link";
import React, { useState } from "react";
import { TiTick, TiTimes } from "react-icons/ti";

const UserDetails = ({ User }) => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const deletePerson = async (id) => {
    const req = await fetch(`http://localhost:8080/api/persons/${id}`, {
      method: `DELETE`,
    });
    const data = await req.json();
    console.log(data);
    if (data) {
      setMessage("BAŞARILI")
      setAlert("alert alert-success")

    } else {
      setMessage("BAŞARISIZ!")
      setAlert("alert alert-danger")
    }
    alertDel()
    
  };

  const alertDel=()=>{
    setTimeout(()=>{
      //setAlert("visually-hidden")
      window.location.href = 'http://localhost:3000';
    },3000)
  }
  
  return (
    <div className="container py-5">
      <div className={`${alert}`}>{message}</div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Kimlik No: {User.identyNum}</h5>
              <p className="card-text">İsim: {User.personName}</p>
              <p className="card-text">E-Mail : {User.email}</p>
              <p className="card-text">
                Actived :
                {User.actived ? <TiTick></TiTick> : <TiTimes></TiTimes>}
              </p>
              <p className="card-text">Gender : {User.gender}</p>
              <div className="d-flex justify-content-around">
                <Link href={`/settings/${User.id}`}>
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
      </div>
    </div>
  );
};

export default UserDetails;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:8080/api/persons/${context.params.id}`
  );
  const User = await res.json();
  return {
    props: {
      User,
    },
  };
};
