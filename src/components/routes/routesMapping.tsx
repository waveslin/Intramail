import { IRoutesMapping } from '../../global/intefaces';
import Home  from '../home/Home';
import Mail from '../mail/Mail';
import Admin from '../admin/Admin';
import Tasks from '../tasks/Tasks';
import Shared from '../shared/Shared';
import Setting from '../setting/Setting';
import Error from '../error/Error';
import Auth from '../auth/Auth';
import Pipe from '../pipe/Pipe';
import Client from '../client/Client';

const routes : IRoutesMapping = {
    Home : {
        path: "/",
        exact: true,
        content: <Home /> 
    },
    mail: {
        path: "/mail",
        exact: true,
        content: <Mail />
    },
    error: {
        path: "/error",
        exact: true,
        content: <Error />
    },
    auth: {
        path: "/auth",
        exact: true,
        content: <Auth />
    },
    admin: {
        path: "/admin",
        exact: true,
        content: <Admin />
    },
    tasks: {
        path: "/tasks",
        exact: true,
        content: <Tasks />
    },
    shared: {
        path: "/shared",
        exact: true,
        content: <Shared />
    },
    pipe: {
        path: "/pipe",
        exact: true,
        content: <Pipe />
    },
    setting: {
        path: "/setting",
        exact: true,
        content: <Setting />
    },
    client: {
        path: "/client",
        exact: true,
        content: <Client />
    }
}

export default routes;