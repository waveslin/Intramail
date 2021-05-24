import { NavLinkType } from '../../global/types';
import RoutesMapping from '../../routes/RoutesMapping';
import BusinessIcon from '@material-ui/icons/Business';
import InboxIcon from '@material-ui/icons/Inbox';
import LaunchIcon from '@material-ui/icons/Launch';
import SettingsIcon from '@material-ui/icons/Settings';

const SectionMid : NavLinkType[] = [
    { name: 'Business', icon: <BusinessIcon />, link: RoutesMapping.business.path },
    { name: 'Bucket', icon: <InboxIcon/>, link: RoutesMapping.bucket.path },
    { name: 'Outlet', icon: <LaunchIcon />, link: RoutesMapping.outlet.path},
    { name: 'Setting', icon: <SettingsIcon />, link: RoutesMapping.setting.path}
]



export default SectionMid;