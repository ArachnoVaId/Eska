import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/registration/Presale", { replace: true });
  }, [navigate]);

  return null;
};

export default Home;