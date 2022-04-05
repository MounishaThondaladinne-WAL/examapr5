import { useEffect, useState } from "react";
import axios from "axios";
const Menu = () => {
  const [details, setDeatails] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`/userlogin/loggeduser`)
      .then((res) => {
        console.log(res.data);
        if (!details.status) {
          setError(details.data);
        } else {
          setError("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>Menu Component</h1>
      <p>{error}</p>
    </div>
  );
};
export default Menu;
