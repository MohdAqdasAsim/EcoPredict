// src/App.tsx
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default App;
