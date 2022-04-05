import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function LogoutPage() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    navigate("/");
  });
  return null;
}
