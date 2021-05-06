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

const UseEffectRender = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const fetchJSON = async () => {
    const res: Response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return res.data;
  };
  const fetchUser = async () => {
    const user = await fetchJSON();
    setUser(user);
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
