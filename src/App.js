import Left from "./components/Left";
import Right from "./components/Right";
import { ContextProvider } from "./context/Context";

function App() {
  return (
      <ContextProvider>
        <div className="app">
          <Left />
          <Right />
        </div>
      </ContextProvider>
    
  );
}

export default App;
