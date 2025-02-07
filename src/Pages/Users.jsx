import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Form from "../Components/atoms/Form";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('all')

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=10${gender === 'all' ? '' : `&gender=${gender}`}`
        );

      setUsers(response.data.results);
      setLoading(false)
    } catch (error) {
      console.log(`this is my error ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [gender]);

  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <div className="px-5">
        <select
            onChange={(e) =>
            {setGender(e.target.value);
            }}
            className='w-fit my-5 border p-3 rounded-lg'>
                <option value="all">All Users</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
        </select>
      </div>
     

      {loading ? (
        <div className="h-[80vh] w-screen flex items-center justify-center">
          <img src="/lg.gif" alt="loading img" />
        </div>
      ) : (
        <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {users.map((user, index) => {
            return <Form key={index} user={user} />;
          })}
        </div>
      )}
    </div>
  );
}
