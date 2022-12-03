import {Component} from "react";
import {Goal} from "../../types/Goal";

type Props = {
    current: Goal[],
    remaining: Goal[],
    handleAddNewGoal: any
}
type States = {
    current: Goal[],
    remaining: Goal[],
}

export class AllGoals extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            current: props.current,
            remaining: props.remaining
        }
        this.handleAddNewGoal = this.handleAddNewGoal.bind(this)
    }

    handleAddNewGoal(event: any) {
        let name = event.currentTarget.getAttribute('data-name')
        this.props.handleAddNewGoal(name.trim());
    }

    render() {
        return (
            <div className="mt-4">
                <p className="text-2xl font-['Butler'] text-black">All Goals</p>
                <div className="bg-transparent mt-2">
                    <div className="grid grid-cols-1 gap-2 text-white">
                        {this.props.remaining && this.props.remaining.map(goal => {
                            return (
                                <div key={goal.id} className="w-full flex items-center">
                                    <div
                                        className="w-3/4 rounded-2xl bg-color-add-goal-secondary flex justify-start items-center p-4 gap-2">
                                <span
                                    className="uppercase font-bold text-[15px] leading-[17px]">{goal.name}</span>
                                    </div>
                                    <button onClick={this.handleAddNewGoal} data-name={goal.name} className="w-1/4 bg-transparent flex justify-end items-center gap-2">
                                        <span className="text-color-text-primary font-semibold text-sm">Add</span>
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M14.5 0C6.4971 0 0 6.4971 0 14.5C0 22.5029 6.4971 29 14.5 29C22.5029 29 29 22.5029 29 14.5C29 6.4971 22.5029 0 14.5 0ZM13.5333 13.5333H6.76667C6.51029 13.5333 6.26441 13.6352 6.08313 13.8165C5.90184 13.9977 5.8 14.2436 5.8 14.5C5.8 14.7564 5.90184 15.0023 6.08313 15.1835C6.26441 15.3648 6.51029 15.4667 6.76667 15.4667H13.5333V22.2333C13.5333 22.4897 13.6352 22.7356 13.8165 22.9169C13.9977 23.0982 14.2436 23.2 14.5 23.2C14.7564 23.2 15.0023 23.0982 15.1835 22.9169C15.3648 22.7356 15.4667 22.4897 15.4667 22.2333V15.4667H22.2333C22.4897 15.4667 22.7356 15.3648 22.9169 15.1835C23.0982 15.0023 23.2 14.7564 23.2 14.5C23.2 14.2436 23.0982 13.9977 22.9169 13.8165C22.7356 13.6352 22.4897 13.5333 22.2333 13.5333H15.4667V6.76667C15.4667 6.51029 15.3648 6.26442 15.1835 6.08313C15.0023 5.90184 14.7564 5.8 14.5 5.8C14.2436 5.8 13.9977 5.90184 13.8165 6.08313C13.6352 6.26442 13.5333 6.51029 13.5333 6.76667V13.5333Z"
                                                  fill="#ED2580"/>
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