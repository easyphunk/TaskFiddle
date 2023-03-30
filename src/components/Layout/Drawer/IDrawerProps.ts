export interface IDrawerProps {
    toggleDrawer: () => void,
    open: boolean,
    drawerWidth: number,
    children: React.ReactNode
}