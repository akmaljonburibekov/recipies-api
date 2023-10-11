import { useParams } from "react-router-dom"

function Recipie() {
  const {id} = useParams()
  const url = 'http://localhost:5173/' + id;
  return (
<div>id: {id}</div>
  );
}

export default Recipie