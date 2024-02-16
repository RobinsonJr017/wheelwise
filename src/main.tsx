import "@mantine/core/styles.css"

import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import {createClient} from "@supabase/supabase-js";

declare global {
    interface Window {
        supabase: ReturnType<typeof createClient>
    }
}

window.supabase = createClient("https://uzohlbwulhntkfkudquh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6b2hsYnd1bGhudGtma3VkcXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNDk3NjUsImV4cCI6MjAyMzYyNTc2NX0.K0H05E3lNjQVRCBjZrE1pi146sOfma_2QW8fSY6N1xI")

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <RouterProvider router={router}/>
        </MantineProvider>
    </React.StrictMode>,
)
