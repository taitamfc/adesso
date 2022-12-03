import {Header} from "../../parts/Header/Header";
import {Outlet} from "react-router-dom";
import {Component} from "react";
import {FooterNotLoginIn} from "../../parts/Footer/FooterNotLoginIn";

export class NoFooter extends Component{
    render(){
        return (
            <div className="min-h-screen h-full font-sans flex flex-col items-center">
                <Header/>
                <div className="w-full h-full bg-white text-black flex flex-1 justify-center">
                    <div className="w-full min-w-[375px] flex justify-center">
                        <Outlet/>
                    </div>
                </div>
                <FooterNotLoginIn/>
            </div>
        )
    }
}