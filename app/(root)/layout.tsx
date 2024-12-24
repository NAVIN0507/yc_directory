import React from "react";
import NavBar from "../../components/NavBar";

export default function({children} : Readonly<{children:React.ReactNode}>){
    return(
        <main className="font-work-sans">
            <NavBar/>
            {children}
        </main>
    )
}