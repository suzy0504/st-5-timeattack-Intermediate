import { useState } from "react";

export default function TodoForm() {
  const [todos, setTodos] = useState("");
  const [title, setTitle] = useState();
  // const [content, setContent] = useState();
  const onChange = () => {
    setTodos(title);
  };

  const addHandler = () => {
    todos(setTitle);
  };

  console.log(setTitle);

  return (
    <form>
      <label>제목: </label>
      <input type="text" value={title} name="title" onChange={onChange} />
      <label>내용: </label>
      {/* <input type="text" value={content} onChange={onChange} /> */}
      <button onClick={addHandler}>추가</button>
    </form>
  );
}
