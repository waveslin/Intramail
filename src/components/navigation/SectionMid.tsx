import { INavLink } from '../../global/intefaces';
import RoutesMapping from '../routes/routesMapping';
import BusinessIcon from '@material-ui/icons/Business';
import InboxIcon from '@material-ui/icons/Inbox';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SettingsIcon from '@material-ui/icons/Settings';

const SectionMid : INavLink[] = [
    { name: 'Client', icon: <BusinessIcon />, link: RoutesMapping.client.path },
    { name: 'Shared', icon: <InboxIcon/>, link: RoutesMapping.shared.path },
    { name: 'Pipe', icon: <AccountTreeIcon />, link: RoutesMapping.pipe.path},
    { name: 'Setting', icon: <SettingsIcon />, link: RoutesMapping.setting.path}
]



export default SectionMid;