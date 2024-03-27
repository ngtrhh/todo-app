import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskWrapper from "./components/TaskWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskWrapper type="all" />} />
          <Route path="active" element={<TaskWrapper type="active" />} />
          <Route path="completed" element={<TaskWrapper type="completed" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
