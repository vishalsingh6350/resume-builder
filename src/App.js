import { useState, useEffect } from "react";
import { BrowserRouter as router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Resume from "./Components/Resume";
import Homepage from "./Components/Homepage";
function App() {
  const [editing, setediting] = useState(true);
  const [mobileView, setmobileView] = useState(false);
  const [showSideBar, setshowSideBar] = useState(true);
  const resizeFunc = () => {
    if (window.innerWidth < 600) {
      setmobileView(true);
    } else {
      setmobileView(false);
    }
  };
  console.log(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth < 600) {
      setmobileView(true);
    }
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);
  return (
    <div className="App">
      <Header
        mobileView={mobileView}
        setshowSideBar={setshowSideBar}
        showSideBar={showSideBar}
      />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route
          path="/resume"
          element={
            <div className="resumeContents">
              {showSideBar ? (
                <Sidebar editing={editing} setediting={setediting} />
              ) : (
                ""
              )}
              <Resume editing={editing} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
