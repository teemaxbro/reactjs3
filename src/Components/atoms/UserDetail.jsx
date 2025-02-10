
import { useNavigate } from "react-router-dom";


function UserDetail({user}) {
  const navigate = useNavigate()



  return (
    <div>
      <div className=" shadow-md rounded-lg p-2 font-semibold" onClick={()=>{navigate(  )}}>
        {user.login} 
        {/* {user.gender} <br />
        {user.email} <br />
        {user.location.country} <br />
        {user.company} */}
        <img src={user.avatar_url} alt="" />
      </div>
    </div>
  );
};

export default UserDetail;

