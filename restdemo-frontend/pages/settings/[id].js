import React from "react";
import { useState } from "react";

const SettingsDetails = ({ User }) => {
  const [userObject, setuserObject] = useState({
    personName: "",
    identyNum: "",
    email: "",
    actived: false,
    gender: "",
  });

  console.log(userObject.personName);
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            value={userObject.personName}
            onChange={(e) => setuserObject({ personName: e.target.value })}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">İdentity Number</label>
          <input className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label className="form-label">EMail</label>
          <input className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Active</label>
        </div>
        <button type="submit" className="btn btn-primary float-end">
          Güncelle
        </button>
      </form>
    </div>
  );
};

export default SettingsDetails;

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
