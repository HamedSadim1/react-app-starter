import { useParams, useSearchParams, useLocation } from "react-router-dom";
const UserDetail = () => {
  const params = useParams();
  console.log(params);
  // setSearchParams have sideEffect use it in useEffect
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  console.log(searchParams.toString());

  return <p>User {params.id} </p>;
};

export default UserDetail;
