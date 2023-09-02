import React from "react";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "./EmailCheck.css";

const EmailCheck = () => {
  const [emailinput, setEmailinput] = useState("");
  const [emailspam, setEmailspam] = useState("");

  const emailCheck = async (e) => {
    console.log(emailinput);
    const request = await fetch(
      `https://api.eva.pingutil.com/email?email=${emailinput}`
    );
    //console.log(request);
    console.log(emailinput);

    const data = await request.json();
    console.log(data);
    setEmailspam(data.data.spam);
    console.log("data", data);
    if (emailspam === true) {
      toast.error("BE CAREFULL , IT'S DANGROUS ! ", {
        position: "bottom-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    //{
    // toast.success("YOU ARE SAFE By API's", {
    //   position: "bottom-center",
    //   autoClose: 9000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,

    // });
    else {
      //console.log("hala");

      {
        ourdb();
      }
    }
  };

  const ourdb = async (e) => {
    console.log("befor fetch ");
    // e.preventDefault();
    const request = await fetch(`/api/v1/email `);
    const data = await request.json();
    console.log(data);

    let conunt = 0;
    for (let index = 0; index < data.length; index++) {
      if (data[index].emailAdress === emailinput) conunt++;
      console.log(conunt);
    }

    if (conunt > 3) {
      toast.error("PEOPLE REPORT THIS BE CAREFULL !, IT'S DANGROUS !", {
        position: "bottom-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("YOU ARE SAFE  ", {
        position: "bottom-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="input-group w-50 mx-auto mt-5 d-flex flex-column align-items-center"></div>

      <div className="p-20 bg-surface-secondary mt-5 ">
        <div className="row">
          <div className=" col-lg-7 mx-auto">
            <div className="shadow">
              <div className="card-body">
                <div className="Text text-center mt-6">
                  <h1 className="T">Enter email to check</h1>
                </div>

                <div className="input-group  w-20 mx-auto mt-6">
                  <input
                    value={emailinput}
                    onChange={(e) => setEmailinput(e.target.value)}
                    type="text"
                    className="form-control w-20 mx-auto mt-5"
                    placeholder="Enter the Sender Email "
                  />

                  <button
                    onClick={emailCheck}
                    className="btn btn-success mt-5"
                    type="button"
                  >
                    Serach{" "}
                  </button>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailCheck;
