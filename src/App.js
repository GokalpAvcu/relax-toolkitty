import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";
import ThemeComponent from "./components/ThemeComponent";
import ToDoComponent from "./components/ToDoComponent";

function App() {
  return (
    <div className="App">
    <ThemeComponent/>
    <hr/>
    <LoginComponent/>
    <hr/>
    <ProfileComponent/>
    <hr/>
    <ToDoComponent/>
    </div>
  );
}

export default App;
