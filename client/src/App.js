import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import routes from "./routes";

function App() {
  const getRoutes = (routes) =>
    routes.map((items) => {
      if (items.route) {
        return <Route exact path={items.route} element={items.component} />;
      }
      return null;
    })

  return (
    <>
      <Router>
        <Routes>
        {getRoutes(routes)}
        </Routes>
      </Router>
    </>
  );
}

export default App;
