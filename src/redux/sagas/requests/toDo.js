import Axios from "axios";
export function requestGetToDo() {
  return Axios.request({
    method: "get",
    url: "http://localhost:7000/toDo",
  });
}
