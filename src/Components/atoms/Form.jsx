import React from "react";

const Form = ({ user }) => {
  return (
    <div>
      <div className=" shadow-md rounded-lg p-2 font-semibold">
        {user.name.title} {user.name.first} {user.name.last}
        {user.gender} <br />
        {user.email} <br />
        {user.location.country} <br />
        {user.dob.age}
        <img src={user.picture.medium} alt="" />
      </div>
    </div>
  );
};

export default Form;
