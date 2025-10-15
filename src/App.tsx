import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "./store/store";
import { setSelectedPageID } from "./store/selectedPageSlice";

import './App.css';
import PortalPage from './pages/PortalPage';
import NavSidebar from './components/NavSidebar/NavSidebar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import { PageID } from "./constants/pages";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function App() {
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

    console.log("App component rendered");

    return (
        <>
            <TopNavbar selectedPageID={selectedPageID} onSelectPage={handleSetSelectedPageID}/>
            <NavSidebar selectedPageID={selectedPageID} onSelectPage={handleSetSelectedPageID}/>

            <main>
                <PortalPage/>
                <h1>Tea Tapestry</h1>
                <h2>FAQs</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='font-bold'>What is Tea Tapestry?</AccordionTrigger>
                        <AccordionContent>
                            Tea Tapestry is my demo project — this accordion is powered by shadcn + Radix.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Does it work?</AccordionTrigger>
                        <AccordionContent>
                            Yes! If you can expand and collapse these sections, shadcn is set up correctly.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </>

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
    );
}
