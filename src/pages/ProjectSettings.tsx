import { useParams } from "react-router-dom";

const ProjectSettings = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
    </>
  );
};

export default ProjectSettings;