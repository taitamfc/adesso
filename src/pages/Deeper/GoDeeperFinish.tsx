import {Component} from "react";
import {Navigate} from "react-router-dom";

const REDIRECT_TO = '/dashboard';
type States = {
    redirect: boolean
}

export class GoDeeperFinish extends Component<any, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            redirect: false
        }
        this.handleConfirmClick = this.handleConfirmClick.bind(this)
    }

    handleConfirmClick() {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Navigate to={REDIRECT_TO} replace={true}/>
            )
        } else {
            return (
                <div
                    className="w-full h-full bg-go-deeper-finish bg-cover bg-no-repeat bg-center flex justify-center font-['Proxima_Nova']">
                    <div className="h-full w-full max-w-lg flex flex-col items-center">
                        <div className="mt-10 px-2 w-full">
                            <div className="h-full w-full px-3 pb-10">
                                <div className="text-white font-semibold text-[30px] leading-[34px] text-center px-6">
                                    <p>Congratulations! You finished all your Go Deeper tasks and earned 5 extra beats!
                                    </p>
                                    <p className="mt-10">Need a proper message here</p>
                                </div>
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={this.handleConfirmClick}
                                        className="w-1/2 btn min-w-quiz-button mt-4 px-7
                                        h-quiz-button rounded-full
                                        bg-color-secondary-gray text-color-text-primary border-none
                                        hover:border-color-primary hover:bg-color-primary hover:text-white
                                        active:border-color-primary active:bg-color-primary active:text-white">Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}