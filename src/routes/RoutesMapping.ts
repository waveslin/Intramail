import { RoutesMapping } from '../global/types';
import Home from '../components/home/Home';

const routes : RoutesMapping = {
    home: {
        path: "/",
        exact: true,
        content: Home
    },
    email: {
        path: "/email",
        exact: true,
        content: Home
    },
    admin: {
        path: "/admin",
        exact: true,
        content: Home
    },
    search: {
        path: "/search",
        exact: true,
        content: Home
    },
    mission: {
        path: "/mission",
        exact: true,
        content: Home
    },
    schedule: {
        path: "/schedule",
        exact: true,
        content: Home
    },
    bucket: {
        path: "/bucket",
        exact: true,
        content: Home
    },
    outlet: {
        path: "/outlet",
        exact: true,
        content: Home
    },
    setting: {
        path: "/setting",
        exact: true,
        content: Home
    },
    business: {
        path: "/business",
        exact: true,
        content: Home
    }
}

export default routes;