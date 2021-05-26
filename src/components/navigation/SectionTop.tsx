import { INavLink} from '../../global/intefaces';
import RoutesMapping from '../routes/routesMapping';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';

const sectionTop : INavLink[] = [
    { name: 'Home', icon: <DashboardIcon />, link: RoutesMapping.home.path },
    { name: 'Mail', icon: <EmailIcon />, link: RoutesMapping.mail.path },
    { name: 'Tasks', icon: <AssignmentIcon />, link: RoutesMapping.mission.path},
]



export default sectionTop;