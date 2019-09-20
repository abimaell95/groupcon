import React, { useEffect, useState } from "react";

import CardUserInfo from "../../components/Dashboard/CardUserInfo";
import { getCurrentUser } from "../../Helpers/auth-helper";
import GroupList from "../../components/Group/GroupList/GroupList";
import { Link } from "react-router-dom";
const Dashboard = ({ location }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [getGroups, setGroups] = useState({
    groups: []
  });
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getCurrentUserAsync = async () => {
      let user = await getCurrentUser();
      setCurrentUser(user ? user : false);
      await getAllGroups(user ? user.id : null);
    };

    getCurrentUserAsync();
    setMessage(location.state ? location.state.message : "");
  }, []);

  const getAllGroups = async currentUserId => {
    if (currentUserId === null) return;
    let response = await fetch(
      `http://localhost:3000/api/v1/${currentUserId}/groups`
    );
    let groups = await response.json();
    console.log(groups);
    setGroups({ groups });
  };

  return (
    <main>
      <div className="row mt-2">
        {message !== "" ? (
          <span
            style={{ width: "100%" }}
            className="alert alert-success text-bold"
          >
            {message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="row mt-2">
        <div className="col-md-2 col-lg-2 col-sm-2  ">
          <CardUserInfo user={currentUser} />
        </div>
        <div className="col-md-10">
          <Link to="/dashboard/create" className="btn btn-primary mb-2">
            {" "}
            <i className="fa fa-plus"></i> New
          </Link>

          <div className="alert bg-primary">
            <h3>Your groups!</h3>
          </div>
          <GroupList groups={getGroups.groups} />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
