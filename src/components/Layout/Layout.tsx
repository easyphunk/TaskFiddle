import { useState } from 'react';

import Header from "./Header/Header";
import Drawer from './Drawer/Drawer';
import { ILayoutProps } from "./ILayoutProps"
import { Box } from '@mui/material';

const Layout = ({ children, showDrawer }: ILayoutProps): JSX.Element => {
    const drawerWidth: number = 240;

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Header
                toggleDrawer={toggleDrawer}
                open={open}
                drawerWidth={drawerWidth}
                showDrawer={showDrawer}
            />

            {
                showDrawer ?
                    <Drawer
                        toggleDrawer={toggleDrawer}
                        open={open}
                        drawerWidth={drawerWidth}>
                        {children}
                    </Drawer>
                    :
                    <Box sx={{ m: '4.5rem 1rem' }}>
                        {children}
                    </Box>
            }
        </>
    );
}

export default Layout;