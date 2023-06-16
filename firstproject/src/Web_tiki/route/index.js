import { useRoutes } from "react-router-dom";
import { routes } from "./route";

const Routers = () => {
    const routing = useRoutes(routes());
    return routing;
};

export default Routers;