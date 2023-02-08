import { FC } from "react"
import Saviera from "../assets/logo/saviera.svg"
export default function Navbar(){
    return(
        <nav>
            <div className="grid grid-cols-12 gap-[74px] m-auto">
                <div className="col-span-12">
                    <div>
                        <a href="/">VOL 01. ARCHETYPES</a>
                        <a href="/shop">SHOP</a>
                        <a href="/aboutus">ABOUT US</a>
                    </div>
                    <div>
                        <img src={Saviera} alt="Store Logo" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}