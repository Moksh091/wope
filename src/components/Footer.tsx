import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return <div className="flex justify-around items-center border-t border-blue-950 py-10 mx-20">
        <div>
            2025 Wope. All rights reserved
        </div>
        <div className="flex items-center space-x-4"> 
            <FaDiscord className="size-5 text-gray-300"/>
            <FaXTwitter className="size-5 text-gray-300"/>
        </div>
    </div>
}