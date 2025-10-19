import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./store/store";
import { setSelectedPageID } from "./store/selectedPageSlice";

import PortalPage from './pages/PortalPage';
import NavSidebar from './components/NavSidebar/NavSidebar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import { PageID } from "./constants/pages";

// import {
//     Accordion,
//     AccordionItem,
//     AccordionTrigger,
//     AccordionContent,
// } from "@/components/ui/accordion";
import Footer from "./components/Footer";

export default function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    /* Use Redux store instead to prevent App from completely re-rendering. */
    // const [selectedPageID, setSelectedPageID] = useState<PageID>(pageIDs.home);
    const selectedPageID = useSelector((state: RootState) => state.selectedPage);
    const dispatch = useDispatch();

    /* Memoize the page selection handler to prevent unnecessary re-renders of memoized child components.
        Without useCallback, this function would be re-created on every render, causing props like onSelectPage
        to change and triggering re-renders in components like NavSidebarListItem (even when their visual state hasn't changed). */
    const handleSetSelectedPageID = useCallback((id: PageID) => {
        dispatch(setSelectedPageID(id));
    }, [dispatch]);

    function handleOpen() {
        setSidebarOpen(!sidebarOpen);
    }

    console.log("App component rendered");

    /* Main's left margin should change depending on if sidebar is open or not. */
    const mainMarginLeft = sidebarOpen ? "ml-[var(--open-nav-sidebar-width)]": "ml-[var(--closed-nav-sidebar-width)]";

    return (
        /*  App is one big vertical flex container that spans the entire viewport height. 
            
            Top navbar is positioned fixed to the top of the screen.
            
            Nav sidebar + main content is positioned static and a flex container itself. 
                Nav sidebar is positioned sticky on the left side of the screen.
                main content is positioned static.
                
            Footer is positioned static.    
        */
        <div className="app">
            <TopNavbar selectedPageID={selectedPageID} onSelectPage={handleSetSelectedPageID}/>

            {/* Nav sidebar + main content
                
                flex: Make it a flex container.
                flex-1:
                    flex-grow: 1; Allow it to grow to fill available space.
                    flex-shrink: 1; Allow it to shrink to avoid overflow.
                    flex-basis: 0%: Start it at 0% height, then grow based on available space. 
            */}
            <div className="flex min-h-screen flex-1 overflow-hidden">
                <NavSidebar selectedPageID={selectedPageID} onSelectPage={handleSetSelectedPageID} sidebarOpen={sidebarOpen} onOpenSidebar={handleOpen}/>

                <main className={`main ${mainMarginLeft}`}>
                    <PortalPage/>
                    <h1>Tea Tapestry</h1>
                    <h2>FAQs</h2>

                </main>
            </div>

            <Footer/>
        </div>

        // <>
        //     <div>
        //         <a href="https://vite.dev" target="_blank" rel="noreferrer">
        //             <img src={viteLogo} className="logo" alt="Vite logo" />
        //         </a>
            
        //         <a href="https://react.dev" target="_blank" rel="noreferrer">
        //             <img src={reactLogo} className="logo react" alt="React logo" />
        //         </a>
        //     </div>
        
        //     <h1>Vite + React</h1>
            
        //     <div className="card">
        //         <button onClick={() => setCount((count) => count + 1)}>
        //             count is {count}
        //         </button>
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to test HMR
        //         </p>
        //     </div>
        
        //     <p className="read-the-docs">
        //         Click on the Vite and React logos to learn more
        //     </p>
        // </>



    //     <Accordion type="single" collapsible className="w-full">
    //     <AccordionItem value="item-1">
    //         <AccordionTrigger className='font-bold'>What is Tea Tapestry?</AccordionTrigger>
    //         <AccordionContent>
    //             Tea Tapestry is my demo project — this accordion is powered by shadcn + Radix.
    //         </AccordionContent>
    //     </AccordionItem>

    //     <AccordionItem value="item-2">
    //         <AccordionTrigger>Does it work?</AccordionTrigger>
    //         <AccordionContent>
    //             Yes! If you can expand and collapse these sections, shadcn is set up correctly.
    //         </AccordionContent>
    //     </AccordionItem>
    // </Accordion>
    );
}
