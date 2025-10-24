import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { FeedbackProvider } from "./context/FeedbackContext";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  return (
    <FeedbackProvider>
      <GlobalStyle />
      <Layout />
    </FeedbackProvider>
  );
};

export default App;
