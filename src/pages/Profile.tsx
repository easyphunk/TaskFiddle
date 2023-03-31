import { useParams } from "react-router-dom";

const Profile = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
    </>
  );
};

export default Profile;