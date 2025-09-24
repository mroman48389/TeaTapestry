// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import PortalPage from './pages/PortalPage';
import PageNavSideBar from './components/PageNavSideBar';
import TopNavBar from './components/TopNavBar';

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export default function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <TopNavBar/>
            <PageNavSideBar/>
            <PortalPage/>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='font-bold'>What is Teaverse?</AccordionTrigger>
                    <AccordionContent>
                        Teaverse is my demo project — this accordion is powered by shadcn + Radix.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Does it work?</AccordionTrigger>
                    <AccordionContent>
                        Yes! If you can expand and collapse these sections, shadcn is set up correctly.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
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
