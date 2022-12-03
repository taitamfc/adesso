import {Component} from "react";
import {Link} from "react-router-dom";

export class FooterNotLoginIn extends Component<any, any> {
    render() {
        return (
            <div className="fixed bottom-0 w-full max-w-lg min-w-[375px]">
                <div className="flex gap-2">
                    <Link to="login">Login</Link>
                    <Link to="register">Register</Link>
                    <Link to="/heart-score/subscription">Subscription</Link>
                    <Link to="/heart-score/quizzes">Quizzes</Link>
                    <Link to="welcome">Welcome</Link>
                    <Link to="onboard">Onboard</Link>
                    <Link to="introduction">Introduction</Link>
                    <Link to="dashboard">Dashboard</Link>
                </div>
            </div>
        );
    }
}