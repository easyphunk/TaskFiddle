import { useParams } from "react-router-dom";

const Board = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
    </>
  );
};

export default Board;