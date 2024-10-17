import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
