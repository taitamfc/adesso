import {Component} from "react";
import {Navigate} from "react-router-dom";

type States = {
    finished: boolean
}

export class QuizzesCompleted extends Component<any, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            finished: false
        }
        this.handleNextClick = this.handleNextClick.bind(this);
    }

    handleNextClick() {
        this.setState({
            finished: true
        })
    }

    render() {
        if (this.state.finished) {
            return (
                <Navigate to="/heart-score/result" replace={true}/>
            )
        } else {
            return (
                <div
                    className="w-full h-full flex flex-col justify-between items-center pb-9">
                    <div className="mt-16 font-semibold px-4 text-center text-white">
                        <p className="text-[30px] font-semibold leading-[34px]">
                            That’s it!<br/>
                            You’ve finished.
                        </p>
                        <p className="text-xl pt-7">
                            Check your email for your results and the action steps you can take next. Be sure to check
                            spam.
                        </p>
                        <p className="text-xl pt-7">
                            If you have any problems contact healthteam@heart-tech.health.
                        </p>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <button onClick={this.handleNextClick}
                                className="btn bg-color-secondary-gray hover:bg-color-primary hover:text-white w-[147px]
                        h-[53px] text-color-primary border-none rounded-full uppercase">Next
                        </button>
                    </div>
                </div>
            )
        }

    }
}