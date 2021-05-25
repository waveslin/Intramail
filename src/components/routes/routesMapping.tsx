import { IRoutesMapping } from '../../global/intefaces';
import Home  from '../home/Home';
import Email from '../email/Email';
import Admin from '../admin/Admin';
import Tasks from '../tasks/Tasks';
import Shared from '../shared/Shared';
import Setting from '../setting/Setting'

const routes : IRoutesMapping = {
    Home : {
        path: "/",
        exact: true,
        content: <Home /> 
    },
    email: {
        path: "/email",
        exact: true,
        content: <Email />
    },
    admin: {
        path: "/admin",
        exact: true,
        content: <Admin />
    },
    search: {
        path: "/search",
        exact: true,
        content: <Home />
    },
    tasks: {
        path: "/tasks",
        exact: true,
        content: <Tasks />
    },
    schedule: {
        path: "/schedule",
        exact: true,
        content: <Home />
    },
    shared: {
        path: "/shared",
        exact: true,
        content: <Shared />
    },
    outlet: {
        path: "/outlet",
        exact: true,
        content: <Home />
    },
    setting: {
        path: "/setting",
        exact: true,
        content: <Setting />
    },
    business: {
        path: "/business",
        exact: true,
        content: <Home />
    }
}

export default routes;