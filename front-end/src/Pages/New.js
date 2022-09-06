import SongNewForm from "../Components/SongNewForm";
import { useNavigate } from "react-router-dom";

function New() {
  return (
    <div className="New">
      <h1>New Songs</h1>
      <SongNewForm />
    </div>
  );
}

export default New;
