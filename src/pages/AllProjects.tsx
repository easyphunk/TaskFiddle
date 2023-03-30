import { useParams } from "react-router-dom";

const AllProjects = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
    </>
  );
};

export default AllProjects;