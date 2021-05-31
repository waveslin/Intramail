import { INavLink} from '../../global/intefaces';
import {routes} from '../../global/routes/routesMapping';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';

const sectionTop : INavLink[] = [
    { name: 'Home', icon: <DashboardIcon />, link: routes.home.path },
    { name: 'Mail', icon: <EmailIcon />, link: routes.mail.path },
    { name: 'Tasks', icon: <AssignmentIcon />, link: routes.tasks.path},
]



export default sectionTop;