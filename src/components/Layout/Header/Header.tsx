import { useState } from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import SearchBar from '../../SearchBar/SearchBar';
import { IHeaderProps } from './IHeaderProps';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
    width: number
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, width }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: width,
        width: `calc(100% - ${width}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Header = ({ toggleDrawer, open, drawerWidth, showDrawer }: IHeaderProps): JSX.Element => {
    const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setProfileAnchorEl(null);
    };

    const isMenuOpen = Boolean(profileAnchorEl);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} width={drawerWidth}>
                <Toolbar
                    sx={{
                        pr: '24px'
                    }}
                >
                    {showDrawer && <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>}
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, display: { md: 'block', xs: 'none' } }}
                    >
                        TaskFiddle
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <SearchBar />

                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={'primary-search-account-menu-mobile'}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={profileAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={'primary-search-account-menu'}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}

export default Header;