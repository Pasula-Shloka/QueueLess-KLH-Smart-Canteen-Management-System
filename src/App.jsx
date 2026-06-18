import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";

const githubPagesBase = "/QueueLess-KLH-Smart-Canteen-Management-System";
const basename = window.location.hostname.endsWith("github.io")
  ? githubPagesBase
  : "/";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter basename={basename}>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
