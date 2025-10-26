import { getSidebarWidthOrMarginLeft } from "./class-utils";
import { SidebarSettingType } from "@/constants/app";

describe("getSidebarWidthOrMarginLeft", () => {

    it("Returns width class when sidebar is open.", () => {
        expect(getSidebarWidthOrMarginLeft(true, SidebarSettingType.Width)).toBe("md:w-[var(--open-nav-sidebar-width)]");
    });
    
    it("Returns width class when sidebar is closed.", () => {
        expect(getSidebarWidthOrMarginLeft(false, SidebarSettingType.Width)).toBe("md:w-[var(--closed-nav-sidebar-width)]");
    });
    
    it("Returns margin-left class when sidebar is open.", () => {
        expect(getSidebarWidthOrMarginLeft(true, SidebarSettingType.MarginLeft)).toBe("md:ml-[var(--open-nav-sidebar-width)]");
    });
    
    it("Returns margin-right class when sidebar is closed.", () => {
        expect(getSidebarWidthOrMarginLeft(false, SidebarSettingType.MarginLeft)).toBe("md:ml-[var(--closed-nav-sidebar-width)]");
    });

});