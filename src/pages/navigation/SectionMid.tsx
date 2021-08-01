import { INavLink } from '../../global/intefaces';
import {routes} from '../../global/routes/routesMapping';
import BusinessIcon from '@material-ui/icons/Business';
import InboxIcon from '@material-ui/icons/Inbox';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SettingsIcon from '@material-ui/icons/Settings';

const SectionMid : INavLink[] = [
    { name: 'Client', icon: <BusinessIcon />, link: routes.client.path },
    { name: 'Shared', icon: <InboxIcon/>, link: routes.shared.path },
    { name: 'Pipe', icon: <AccountTreeIcon />, link: routes.pipe.path},
    { name: 'Setting', icon: <SettingsIcon />, link: routes.setting.path}
]



export default SectionMid;