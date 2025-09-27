import { cn } from "../../lib/utils";
import { ComponentPropsWithoutRef } from "react";

type NavSidebarToggleProps = {
    open: boolean;
    onToggleClick: React.MouseEventHandler<HTMLButtonElement>;
} & ComponentPropsWithoutRef<"button">;

export default function NavSidebarToggle(props: NavSidebarToggleProps) {

    const {open, onToggleClick, ...rest} = props;

    /* Note that we use cn to avoid a linting error around the order of the Tailwind classes. */
    return (
        <div className="flex w-full justify-end">
            <button className="btn" onClick={onToggleClick} {...rest}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className={cn(
                        "size-6 text-wood-bowl-brown transform transition-transform duration-300",
                        open ? "rotate-180" : "rotate-0"
                    )}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    data-testid="nav-sidebar-toggle-icon"
                >   
                    <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    />
                </svg>

            </button>
        </div>
    );
    
}