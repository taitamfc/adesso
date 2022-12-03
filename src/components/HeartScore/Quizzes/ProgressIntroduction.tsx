import {Component} from "react";
import {ProgressIntroductionType} from "../../../types/ProgressIntroductionType";
import {QuizzesProgressBar} from "./QuizzesProgressBar";

type Props = {
    totalStep: number
    currentStep: number,
    handleNextClick: any,
    handleBackClick: any,
    data: ProgressIntroductionType
}

export class ProgressIntroduction extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleBackClick = this.handleBackClick.bind(this)
    }

    handleNextClick() {
        this.props.handleNextClick()
    }

    handleBackClick() {
        this.props.handleBackClick()
    }

    render() {
        return (
            <div className="w-full h-full flex flex-col justify-between items-center">
                <div>
                    <div className="w-full min-w-[375px] overflow-hidden mt-[30px]">
                        <QuizzesProgressBar total={this.props.totalStep}
                                            current={this.props.currentStep}></QuizzesProgressBar>
                    </div>
                    <div className="mt-7 font-semibold px-4">
                        <p className="text-2xl font-semibold">
                            {this.props.data.header}
                        </p>
                        <p className="text-xl pt-7" dangerouslySetInnerHTML={{__html: this.props.data.content}}></p>
                    </div>
                </div>
                <div className="flex gap-2 justify-center">
                    <button onClick={this.handleBackClick}
                            className="btn bg-color-secondary-gray hover:bg-color-primary hover:text-white min-w-quiz-button px-9 h-quiz-button border-none rounded-full text-color-primary">Back
                    </button>
                    <button onClick={this.handleNextClick}
                            className="btn bg-color-secondary-gray hover:bg-color-primary hover:text-white min-w-quiz-button px-9 h-quiz-button border-none rounded-full text-color-primary">Next
                    </button>
                </div>
            </div>
        )
    }
}