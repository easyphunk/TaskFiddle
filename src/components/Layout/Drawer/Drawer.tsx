import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import DrawerItems from './DrawerItems';
import { IDrawerProps } from './IDrawerProps';

const DrawerStyled = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' && prop != 'drawerWidth' })
    <
        { drawerWidth: number; }
    >
    (
        ({ theme, open, drawerWidth }) => ({
            '& .MuiDrawer-paper': {
                position: 'relative',
                whiteSpace: 'nowrap',
                width: drawerWidth,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                boxSizing: 'border-box',
                ...(!open && {
                    overflowX: 'hidden',
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    width: theme.spacing(7),
                    [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(7),
                    },
                }),
            },
        }),
    );

const Drawer = ({ toggleDrawer, open, drawerWidth, children }: IDrawerProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <DrawerStyled variant="permanent" open={open} drawerWidth={drawerWidth}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>

                <Divider />

                <List component="nav" style={{ overflowX: 'hidden' }}>
                    <DrawerItems />
                </List>
            </DrawerStyled>
            <Box sx={{ m: '4.5rem 1rem', overflowX: 'auto'}}>
                {children}
            </Box>
        </Box>
    );
}

export default Drawer;