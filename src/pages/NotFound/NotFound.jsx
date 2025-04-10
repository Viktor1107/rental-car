import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div>
      <p>NotFound</p>
      <p>Redirecting to home in {timer} seconds...</p>
    </div>
  );
};

export default NotFound;
