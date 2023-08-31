import { Navigate, Route, Routes } from "react-router-dom";
import Artists from "./pages/artists/view";
import ArtWorks from "./pages/art-works/view";


function App() {
  return (
    <>
      <Routes>
        <Route path="/artist" element={<Artists/>} />
        <Route path="/artwork" element={<ArtWorks/>} />
        <Route path="*" element={<Navigate to="/artist"/>}/>
      </Routes>
    </>
  );
}

export default App;
