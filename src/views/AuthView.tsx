import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {Center} from "@mantine/core";

function AuthView() {
    return (
        <Center>
            <div style={{ width: "40%", marginTop: "8rem"}}>
            <Auth supabaseClient={window.supabase} appearance={{theme: ThemeSupa}} providers={[]}/>
            </div>
        </Center>
    )
}

export default AuthView;