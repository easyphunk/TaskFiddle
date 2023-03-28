import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import SourceIcon from '@mui/icons-material/Source';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const DrawerItems = (): JSX.Element => {
    return (
        <>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Board" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Members" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Project Settings" />
            </ListItemButton>

            <Divider sx={{ my: 1 }} />

            <ListItemButton>
                <ListItemIcon>
                    <SourceIcon />
                </ListItemIcon>
                <ListItemText primary="All Projects" />
            </ListItemButton>

            <Divider sx={{ my: 1 }} />

            <ListItemButton>
                <ListItemIcon>
                    <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Create Project" />
            </ListItemButton>
        </>
    );
}

export default DrawerItems;