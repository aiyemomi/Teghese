import React, { useContext } from "react";
import "./CSS/Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Common/Button/Button";

const Profile = () => {
  const buttonStyle = {
    fontSize: "9px",
    height: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const { currentUser, userLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    console.log(currentUser);
    const res = await userLogout();
    if (res.status === 200) {
      navigate("/login");
    }
  };
  return (
    <div className="profile-section">
      <div className="profile-logout" onClick={handleLogOut}>
        LOGOUT
      </div>
      <div className="profile-account">
        <h1>MY ACCOUNT</h1>
        <p>Welcome back {currentUser.firstName}!</p>
      </div>
      <div className="orders-and-address">
        <div className="profile-orders">
          <p className="orders-address-title">MY ORDERS</p>
          <hr />
          <p>You haven't placed any orders yet?</p>
        </div>
        <div className="profile-address">
          <p className="orders-address-title">PRIMARY ADDRESS</p>
          <hr />
          <p>{currentUser.firstName + " " + currentUser.lastName}</p>
          <p>address</p>
          <Button styles={buttonStyle} text="EDIT ADDRESS" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
