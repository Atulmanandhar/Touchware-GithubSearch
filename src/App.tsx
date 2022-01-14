import "./styles/mystyles.css";
import MainRoute from "./Routes/MainRoute";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function App() {
  dayjs.extend(relativeTime);

  return <MainRoute />;
}

export default App;
