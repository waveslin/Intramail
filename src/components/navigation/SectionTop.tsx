import { NavLinkType } from '../../global/intefaces';
import RoutesMapping from '../../routes/routesMapping';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIcon from '@material-ui/icons/Assignment';

const sectionTop : NavLinkType[] = [
    { name: 'Home', icon: <DashboardIcon />, link: RoutesMapping.home.path },
    { name: 'Email', icon: <EmailIcon />, link: RoutesMapping.email.path },
    { name: 'Mission', icon: <AssignmentIcon />, link: RoutesMapping.mission.path},
]



export default sectionTop;