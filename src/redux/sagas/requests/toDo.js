export function requestGetToDo() {
  return localStorage.getItem("toDo");
}
export function requestPostToDo(data) {
  const prevData = JSON.parse(localStorage.getItem("toDo"));
  const newData = [...prevData, data];
  return localStorage.setItem("toDo", JSON.stringify(newData));
}
