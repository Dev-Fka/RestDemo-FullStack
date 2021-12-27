import React from "react";
import { useState } from "react";

const SettingsDetails = ({ User }) => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passive, setPassive] = useState(false);

  const updatePerson = async () => {
    let val;
    if (passive == false) {
      val = "active";
    } else {
      val = "inactive";
    }
    if (name == "") {
      setMessage("BAŞARISIZ,BİLGİLERİ KONTROL EDİNİZ.");
      setAlert("alert alert-danger");
      alertDel();
    } else {
      const req = await fetch(
        `https://gorest.co.in/public/v1/users/${User.data.id}`,
        {
          method: "PUT",
          headers: {
            Authorization:
              "Bearer 0abfbc7ca0c4aae74b6c142ae498d4ab7bc755d9c8b6fee6fefa8d38e11af48b",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            status: val,
          }),
        }
      );
      if (req.status == 200) {
        setAlert("alert alert-success");
        setMessage("BAŞARILI");
      } else {
        setMessage("BAŞARISIZ,BİLGİLERİ KONTROL EDİNİZ.");
        setAlert("alert alert-danger");
      }
      setName("");
      setEmail("");
      setPassive(false);
      alertDel();
    }
  };

  const alertDel = () => {
    setTimeout(() => {
      setAlert("visually-hidden");
    }, 3000);
  };

  return (
    <div className="container">
      <div className={`mt-2 text-center fw-bold ${alert}`}>{message}</div>
      <div className="mb-3 mt-5">
        <label className="form-label">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">EMail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={passive}
          onClick={() => setPassive(true)}
        />
        <label className="form-check-label">Passive</label>
      </div>
      <button
        onClick={() => updatePerson()}
        className="btn btn-primary float-end"
      >
        Güncelle
      </button>
    </div>
  );
};

export default SettingsDetails;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://gorest.co.in/public/v1/users/${context.params.id}`
  );
  const User = await res.json();
  return {
    props: {
      User,
    },
  };
};
