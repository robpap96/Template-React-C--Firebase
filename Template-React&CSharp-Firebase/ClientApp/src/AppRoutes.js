
import { Dashboard } from "./Pages/Dashboard";
import { Entity1 } from "./Pages/Entity1";

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
