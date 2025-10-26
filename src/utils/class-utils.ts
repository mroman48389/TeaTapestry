import { SidebarSettingType } from "@/constants/app";

export function getSidebarWidthOrMarginLeft(sidebarOpen: boolean, setting: SidebarSettingType) {
    if (setting === SidebarSettingType.Width) {
        return sidebarOpen ? "md:w-[var(--open-nav-sidebar-width)]": "md:w-[var(--closed-nav-sidebar-width)]";
    }
    else {
        return sidebarOpen ? "md:ml-[var(--open-nav-sidebar-width)]": "md:ml-[var(--closed-nav-sidebar-width)]";
    }
}
