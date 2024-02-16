import {AppShell} from "@mantine/core";
import {Outlet} from "react-router-dom";
import {Header} from "../components/Layout/Header.tsx";

function Layout() {
    return (
        <AppShell header={{height: 50}}>
            <AppShell.Header>
                <Header/>
            </AppShell.Header>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    )
}

export default Layout;