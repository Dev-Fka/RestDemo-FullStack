import { useState } from "react";

const AddUser = () => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [status, setStatus] = useState(true);

  const sendUser=async ()=>{
    let gender;
    let stat="active";

    if(male==true){
      gender='male'
    }else{
      gender='female'
    }
    
    const req = await fetch(
      'https://gorest.co.in/public/v1/users',
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 0abfbc7ca0c4aae74b6c142ae498d4ab7bc755d9c8b6fee6fefa8d38e11af48b",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          gender:gender,
          status: stat,
        }),
      }
    );
      if(req.status==201){
        setAlert("alert alert-success");
        setMessage("BAŞARILI,YÖNLENDİRİLİYORSUNUZ..");
        alertDel()
      }else{
        setMessage("BAŞARISIZ,BİLGİLERİ KONTROL EDİNİZ.");
        setAlert("alert alert-danger");
      }
      setName('')
      setEmail('')
      
  }

  const alertDel = () => {
    setTimeout(() => {
      window.location.href = "http://localhost:3000";
    }, 3000);
  };

  return (
    <>
      <div className="container my-3">
        <div className="text-center">
          <h2 className="fw-bold">ADD USER PAGES</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="container">
            <div className={`mt-2 text-center fw-bold ${alert}`}>{message}</div>
              <div className="my-3">
                <label className="form-label float-start">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name LastName"
                  onChange={(e)=> setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="my-3">
                <label className="form-label float-start">Email Address</label>
                <input
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <div className="row">
                  <p className="col-form-label col-sm-2 pt-0">
                    Gender
                  </p>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value={male}
                        onClick={()=>{setFemale(false),setMale(true)}}
                      />
                      <label className="form-check-label">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value={female}
                        onClick={()=> {setFemale(true),setMale(false)}}
                      />
                      <label className="form-check-label">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={()=> sendUser()} className="btn btn-primary float-end">REGİSTER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
