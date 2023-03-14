import React from "react";
import { useEffect } from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
import Content from "../components/content/Content";
import Table from "../components/content/Table";
import MkdSDK from '../utils/MkdSDK'
const AdminDashboardPage = () => {

  const { dispatch } = React.useContext(AuthContext);
  // const { state, dispatch } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/admin/login");
  };
 const sdk = new MkdSDK();
 const payload = {
   payload:"",
   page:1,
   limit:10
 }
const data = sdk.callRestAPI();
console.log(data)
  useEffect(() => {
    dispatch({ type: "SNACKBAR" });
  }, []);

  return (
    <>
      <div className="navbar">
        <div>
          <p className="logo">APP</p>
        </div>
        <div className="logout">
          <i className="fa-regular fa-user text"></i>
          <span>
            <p className="texts" style={{marginLeft:'5px'}}>Logout</p>
          </span>
        </div>
      </div>

      <div className="content">
        <Content />
        <Table/>
      </div>
    </>
  );
};

export default AdminDashboardPage;
