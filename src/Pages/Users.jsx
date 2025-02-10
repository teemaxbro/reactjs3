import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import UserDetail from "../Components/atoms/UserDetail";

const GITHUBTOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("all");
  console.log(GITHUBTOKEN, "token");
  const getUsers = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users`, {
        headers: {
          Authorization: `token ${GITHUBTOKEN}`,
        },
      });
      if (response.data.length > 0) {
        setUsers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(`this is my error ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className="px-5">
        <select
          onChange={(e) => {
            setGender(e.target.value);
          }}
          className="w-fit my-5 border p-3 rounded-lg"
        >
          <option value="all">All Users</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user, id) => (
          <UserDetail key={id} user={user} />
        ))}
      </div>
    </div>
  );
}
