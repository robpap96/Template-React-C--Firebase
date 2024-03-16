
import { Dashboard } from "./pages/Dashboard";
import { Entity1 } from "./pages/Entity1";

const AppRoutes = [
  {
    name: "Dashboard",
    index: true,
    element: <Dashboard />,
    path: "/"
  },
  {
    name: "Entity1",
    index: true,
    element: <Entity1 />,
    path: "/entity"

  },
];

export default AppRoutes;
