import {Component} from "react";
import {Link} from "react-router-dom";
import MyGoalServices from "../../services/MyGoalServices";
import {Goal} from "../../types/Goal";

type Props = {
    current: Goal[]
}

export class YourGoal extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="mt-4">
                <p className="text-2xl font-['Butler'] text-black">My Goal</p>
                <div className="bg-transparent mt-2">
                    <div className="grid grid-cols-1 gap-2 text-white">
                        { this.props.current && this.props.current.map((goal, index) => {
                            return (
                                <div className="flex justify-between w-full gap-4" key={index + "-your-goal-" + goal.id}>
                                    <Link to="/heart-journal/action" className="w-3/4 rounded-2xl bg-color-text-primary text-white flex justify-start items-center p-4 gap-2">
                                <span
                                    className="uppercase font-bold text-[15px] leading-[17px]">{ goal.name }</span>
                                    </Link>
                                    <button className="w-1/4 bg-transparent flex items-center gap-1">
                                        <span className="text-color-text-secondary font-semibold text-sm">Remove</span>
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M14.5 0C6.51558 0 0 6.51558 0 14.5C0 22.4844 6.51558 29 14.5 29C22.4844 29 29 22.4844 29 14.5C29 6.51558 22.4844 0 14.5 0ZM19.3961 15.6299H9.6039C9.35418 15.6299 9.11469 15.5307 8.93811 15.3541C8.76154 15.1775 8.66234 14.938 8.66234 14.6883C8.66234 14.4386 8.76154 14.1991 8.93811 14.0225C9.11469 13.846 9.35418 13.7468 9.6039 13.7468H19.3961C19.6458 13.7468 19.8853 13.846 20.0619 14.0225C20.2385 14.1991 20.3377 14.4386 20.3377 14.6883C20.3377 14.938 20.2385 15.1775 20.0619 15.3541C19.8853 15.5307 19.6458 15.6299 19.3961 15.6299Z"
                                                fill="#7F8080"/>
                                        </svg>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}