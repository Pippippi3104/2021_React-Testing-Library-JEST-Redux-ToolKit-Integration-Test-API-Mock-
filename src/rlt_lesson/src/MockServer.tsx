import React from "react";
import axios from "axios";

type User = {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
type Response = {
  data: User;
};

const MockServer = () => {
  const [clicked, setClicked] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState("");

  const fetchUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users/11")
      .then((res: Response) => {
        const { username } = res.data;
        setUsername(username);
        setClicked(true);
      })
      .catch(() => {
        setError("Fetching Failed !");
      });
  };
  const buttonText = clicked ? "Loaded" : "Start Fetch";

  return (
    <div>
      <button onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>
      {username && <h3>{username}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  );
};

export default MockServer;
