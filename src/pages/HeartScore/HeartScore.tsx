import {Component} from "react";
import {Navigate, Outlet} from "react-router-dom";

export class HeartScore extends Component {
    render() {
        return (
            <div className="w-full h-full">
                <Outlet/>
            </div>
        );
    }
}