import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function RandomGithubUser() {
  const { username } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="flex items-center justify-center text-center m-4 text-black p-4 text-3xl font-mono">
      {data.login}
      <br />
      Followers: {data.followers}
      <br />
      Following: {data.following}
      <br />
      Bio: {data.bio}
      <br />
      <img
        src={data.avatar_url}
        alt="avatar"
        className="rounded-full w-32 h-32 m-4"
      />
    </div>
  );
}

export default RandomGithubUser;
