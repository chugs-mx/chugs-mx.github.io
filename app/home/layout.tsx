import React from 'react';
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

function Layout(props: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen bg-[url(/home/background.webp)] bg-cover bg-no-repeat bg-center'>
            <Topbar/>
            {/* main content */}
            <div className="grid mt-18 md:mt-0 md:py-4 md:ml-[100px] md:px-10">
                {props.children}
            </div>
            <Navbar/>
        </div>
    );
}

export default Layout;