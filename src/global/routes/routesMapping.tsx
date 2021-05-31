import { IRoutesMapping } from '../intefaces';
import Home  from '../../components/home/Home';
import Mail from '../../components/mail/Mail';
import Admin from '../../components/admin/Admin';
import Tasks from '../../components/tasks/Tasks';
import Shared from '../../components/shared/Shared';
import Setting from '../../components/setting/Setting';
import Error from '../../components/error/Error';
import Auth from '../../components/auth/Auth';
import Pipe from '../../components/pipe/Pipe';
import Client from '../../components/client/Client';

let key = 0;

export const routes : IRoutesMapping = {
    home : {
        path: "/",
        exact: true,
        content: () => <Home key={key++}/>,
    },
    mail: {
        path: "/mail",
        exact: true,
        content: () =>  <Mail key={key++}/>
    },
    error: {
        path: "/error",
        exact: true,
        content: () =>  <Error key={key++}/>
    },
    auth: {
        path: "/auth",
        exact: true,
        content: () =>  <Auth key={key++}/>
    },
    admin: {
        path: "/admin",
        exact: true,
        content: () =>  <Admin key={key++}/>
    },
    tasks: {
        path: "/tasks",
        exact: true,
        content: () =>  <Tasks key={key++}/>
    },
    shared: {
        path: "/shared",
        exact: true,
        content: () =>  <Shared key={key++}/>
    },
    pipe: {
        path: "/pipe",
        exact: true,
        content: () =>  <Pipe key={key++}/>
    },
    setting: {
        path: "/setting",
        exact: true,
        content: () =>  <Setting key={key++}/>
    },
    client: {
        path: "/client",
        exact: true,
        content: () =>  <Client key={key++}/>
    }
}
