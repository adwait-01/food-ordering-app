import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  console.log(err);
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h1>Something Went Wrong...</h1>
      <h3>
        {status}: {statusText}{" "}
      </h3>
    </div>
  );
};

export default Error;
