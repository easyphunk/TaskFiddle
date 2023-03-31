import { NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import SourceIcon from '@mui/icons-material/Source';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import AppRoutes from '../../../constants/appRoutes';

import styles from './DrawerItems.module.scss';

const DrawerItems = (): JSX.Element => {
    return (
        <>
            {/* TODO: get id for board from state and update NavLink paths*/}
            <NavLink
                className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink}
                to={AppRoutes.board.getPath('1')}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Board" />
                </ListItemButton>
            </NavLink>

            <NavLink
                className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink}

                to={AppRoutes.members.getPath('1')}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Members" />
                </ListItemButton>
            </NavLink>

            <NavLink
                className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink}

                to={AppRoutes.projectSettings.getPath('1')}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Project Settings" />
                </ListItemButton>
            </NavLink>

            <Divider sx={{ my: 1 }} />

            <NavLink
                className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink}

                to={AppRoutes.allProjects.pattern}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <SourceIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Projects" />
                </ListItemButton>
            </NavLink>

            <Divider sx={{ my: 1 }} />

            <NavLink
                className={({ isActive }) => isActive ? styles.drawerLinkActive : styles.drawerLink}

                to={AppRoutes.createProject.pattern}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create Project" />
                </ListItemButton>
            </NavLink>
        </>
    );
}

export default DrawerItems;