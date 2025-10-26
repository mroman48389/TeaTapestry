import { MotionConfig, motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

import CloseIcon from '@mui/icons-material/Close';

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    const hamburgerTopLine = {
        closed: { rotate: 0, y: -6 },
        open: { rotate: 45, y: 0 },
    };
    const hamburgerMiddleLine = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    };
    const hamburgerBottomLine = {
        closed: { rotate: 0, y: 6 },
        open: { rotate: -45, y: 0 },
    };

    return (
        <div className="md:hidden">
            {/* shadcn's Sheet will manage the opening and closing of the menu, but we need both SheetTrigger to open the menu and 
                SheetClose to close the menu.  */}
            <Sheet open={open} onOpenChange={setOpen} >
                {/* asChild is needed on SheetTrigger to use the implementation of <Button> we have below. 
                    Without it, <Button> would get wrapped in <button>. All shadcn components ending in Trigger need asChild.*/}
                <SheetTrigger asChild>
                    {/* ghost = no visible border or background */}
                    <Button className="text-dark-mahogany-brown" variant="ghost" size="icon">
                        <span className="sr-only">Hamburger menu</span>

                        <MotionConfig transition={{ duration: 0.2, ease: 'easeInOut' }}>
                            <motion.div
                                animate={open ? 'open' : 'closed'}
                                className="relative h-10 w-10"
                                style={{ pointerEvents: 'none' }}
                            >
                                <motion.span
                                    variants={hamburgerTopLine}
                                    className="absolute top-1/2 left-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
                                />
                                <motion.span
                                    variants={hamburgerMiddleLine}
                                    className="absolute top-1/2 left-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
                                />
                                <motion.span
                                    variants={hamburgerBottomLine}
                                    className="absolute top-1/2 left-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
                                />
                            </motion.div>
                        </MotionConfig>
                    </Button>
                </SheetTrigger>

                {/* border-l-0 and shadow-none will get rid of the vertical line on the left side of the sheet that goes 
                    down the page.  */}
                <SheetContent side="right" className="border-l-0 shadow-none sm:w-[250px]">
                    {/* AnimatePresence allows Framer Motion to perform an exit animation when the sheet is unmounted so it
                        doesn't just disappear instantly. When the sheet is no longer rendered, it triggers the exit
                        animation before the unmount. Note that the key is important for this to work. The "open && () pattern
                        conditionally renders the the sheet, which triggers the exit animation when "open" is false. */}
                    <AnimatePresence>
                        {/* Tried doing a slide-in using pure Tailwind, but couldn't seem to override defaults, so I switched to
                            Framer Motion. */}
                        {open && (
                            <motion.div
                                key="sheet-content"
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '100%', opacity: 0 }}
                                transition={{ duration: 0.8, ease: 'easeInOut' }}
                                className="absolute top-0 right-0 w-[600px] bg-white p-6 pt-16 sm:w-[250px]"
                            >
                                <SheetClose asChild>
                                    <Button className="text-dark-mahogany-brown absolute top-4 right-4" variant="ghost" size="icon">
                                        <span className="sr-only">Close menu</span>
                                        <CloseIcon />
                                    </Button>
                                </SheetClose>

                                <div className="bg-tea-steam-green mt-10 h-40 w-20">
                                    Hi
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </SheetContent>
            </Sheet>
        </div>
    );
}