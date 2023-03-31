import "bootstrap/dist/css/bootstrap.min.css";
import './styles/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoInput from "./pages/TodoInput";
import TodoHome from "./pages/TodoHome";
import TodoList from "./component/TodoList";
// import TodoSearch from "./component/TodoSearch";

function App() {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<TodoHome />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/list/add" element={<TodoInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
