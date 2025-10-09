import TeaTapestryLogo from '../../assets/tea-tapestry-logo-xi-shi-teapot-200x200.svg';
import { APP_TITLE } from "@/constants/app";

export default function TopNavbar() {

    return (
        <>
            <div className="nav-top-bar">
                <div className='ml-3 flex items-center justify-between gap-1'>
                    <img src={TeaTapestryLogo} alt="Tea Tapestry logo" width={50} height={50}/>
                    <span className='app-title'>{APP_TITLE}</span>
                </div>
            </div>
        </>
    );
}