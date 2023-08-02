import { AppContext } from "./context/contextapi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../src/components/Feed";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";
import Header from "./components/Header";

function App() {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchresults/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;
