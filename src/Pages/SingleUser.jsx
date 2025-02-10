import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const GITHUBTOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export default function SingleUser() {
  const { id } = useParams();
  const [user, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  const getUsers = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${id}`, {
        headers: {
          Authorization: `token ${GITHUBTOKEN}`,
        },
      });
      if (response.data.id) {
        setUsers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(`this is my error ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getUsers(id);
    }
  }, [id]);
  return (
    <div className="flex flex-col gap-5">
      <Navbar />

      {loading ? (
        <div className="h-[80vh] w-screen flex items-center justify-center">
          <img src="/lg.gif" alt="loading img" />
        </div>
      ) : (
        <div>
          <div className=" shadow-md rounded-lg p-2 font-semibold">
            {user?.name}
            {/* {user.gender} <br />
        {user.email} <br />
        {user.location.country} <br />
        {user.company} */}
            <img src={user?.avatar_url} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
