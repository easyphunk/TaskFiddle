import { useState } from 'react';

import Header from "./Header/Header";
import Drawer from './Drawer/Drawer';
import { ILayoutProps } from "./ILayoutProps"

const Layout = ({ children, showDrawer }: ILayoutProps): JSX.Element => {
    const drawerWidth: number = 240;

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Header toggleDrawer={toggleDrawer} open={open} drawerWidth={drawerWidth}/>
            {showDrawer && <Drawer toggleDrawer={toggleDrawer} open={open} drawerWidth={drawerWidth}/>}
            {children}
        </>
    );
}

export default Layout;