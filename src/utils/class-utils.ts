import { SidebarSettingType } from "@/constants/app";

export function getSidebarWidthOrMarginLeft(sidebarOpen: boolean, setting: SidebarSettingType) {
    if (setting === SidebarSettingType.Width) {
        return sidebarOpen ? "w-[var(--open-nav-sidebar-width)]": "w-[var(--closed-nav-sidebar-width)]";
    }
    else {
        return sidebarOpen ? "ml-[var(--open-nav-sidebar-width)]": "ml-[var(--closed-nav-sidebar-width)]";
    }
}
