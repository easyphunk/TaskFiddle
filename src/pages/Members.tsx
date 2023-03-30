import { useParams } from "react-router-dom";

const Members = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
    </>
  );
};

export default Members;