import {Component} from "react";
import {Navigate} from "react-router-dom";

type States = {
    redirect: boolean
}

const REDIRECT_TO = '/onboard';

export class Welcome extends Component<any, States> {

    constructor(props: any) {
        super(props);
        this.state = {
            redirect: false
        }

        this.handleNextClick = this.handleNextClick.bind(this)
    }
    handleNextClick() {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Navigate to={REDIRECT_TO} replace={false}/>
            );
        } else {
            return (
                <div className="w-full h-full flex justify-center bg-welcome text-white">
                    <div className="h-full w-full max-w-lg flex flex-col items-center">
                        <div className="flex-1 h-full w-full px-4">
                            <p className="text-[28px] mt-20">Welcome to MyAdesso!</p>
                            <p className="uppercase font-semibold text-md mt-7">Click the video below to begin</p>
                            <div className="flex justify-center mt-4">
                                <div className="w-80 h-48 bg-color-gray flex justify-center items-center">
                                    <span className="text-black lowercase font-bold">Welcome Video</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pb-10">
                            <button
                                onClick={this.handleNextClick}
                                className="btn px-10
                                        h-quiz-button rounded-full
                                        border-color-primary bg-color-primary text-white
                                        hover:bg-color-secondary-gray hover:text-color-primary hover:border-color-primary
                                        active:bg-color-secondary-gray active:text-color-primary active:border-color-primary">next
                            </button>
                        </div>
                    </div>

                </div>
            );
        }
    }
}