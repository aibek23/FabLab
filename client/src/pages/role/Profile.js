import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { Link } from "react-router-dom";
import { setRole } from "../../redux/action";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";


import AddReviews from "../../components/AddReviews";
import "react-toastify/dist/ReactToastify.css";
const Profile = ({ role, setRole, auth }) => {
  const [addBtn, setAddBtn] = useState(false)
  const logoutHandler = () => {
    // auth.logout();
    localStorage.removeItem("localST");
    window.location.reload();
  };
  return (
    <div className="container">

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
            <AddReviews />     
      <div className="row">   
        <div className="mt-4 col-md-8">

          
          
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Предмет</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <div className="border border-2 rounded p-2">spa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  role: state.role,
  auth: state.auth,
});

const mapDispatchToProps = {
  setRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
