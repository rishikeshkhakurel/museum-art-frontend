import { Provider } from "react-redux";
import GlobalStyle from "./common/style/global-style";
import CustomRoutes from "./pages/routes";
import store from "./redux";


function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <CustomRoutes />
      </Provider>
    </>
  );
}

export default App;
