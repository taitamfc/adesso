import {Component} from "react";
import {HeartScoreResult} from "../../../types/HeartScoreResult";

type Props = {
    handler: any,
    data: HeartScoreResult
}

export class Result extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        console.log(props)
        this.handleNextClick = this.handleNextClick.bind(this)
    }

    handleNextClick() {
        this.props.handler()
    }

    render() {
        return (
            <div className="mt-7 text-xl font-semibold text-[17px]">
                <p>Your Adesso Whole Heart score is</p>
                <div className="mb-5">
                    {this.props.data.score > 75 && (
                        <span>{this.props.data.score}</span>
                    )}
                    {this.props.data.score >= 35 && this.props.data.score <= 75 && (
                        <div className="flex gap-2 items-center my-7">
                            <div className="flex justify-center items-center w-16 h-16 rounded-full border-2 border-color-medium-risk text-color-medium-risk">
                                <span className="text-[25px]">{this.props.data.score}</span>
                            </div>
                            <span className="uppercase text-color-medium-risk">medium risk</span>
                        </div>
                    )}
                    {this.props.data.score < 35 && (
                        <span>{this.props.data.score}</span>
                    )}
                    <p className="font-bold mb-5">Here were your scores for each section:</p>
                    <div className="w-full grid grid-cols-1">
                        {this.props.data.detail.map((element, index) => (
                            <div key={index} className="flex justify-between border-y py-3">
                                <span className="font-semibold">{element.category}</span>
                                <span
                                    className={element.score > 75 ? "text-color-high-risk" : (element.score >= 35 ? "text-color-medium-risk" : "text-color-low-risk")}>{element.score}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 flex justify-between">
                        <div className="flex gap-2 items-end my-7 text-xs">
                            <div className="flex justify-center items-center w-[18px] h-[18px] rounded-full bg-color-low-risk">
                            </div>
                            <span className="uppercase text-color-low-risk">low risk</span>
                        </div>
                        <div className="flex gap-2 items-end my-7 text-xs">
                            <div className="flex justify-center items-center w-[18px] h-[18px] rounded-full bg-color-medium-risk">
                            </div>
                            <span className="uppercase text-color-medium-risk">medium risk</span>
                        </div>
                        <div className="flex gap-2 items-end my-7 text-xs">
                            <div className="flex justify-center items-center w-[18px] h-[18px] rounded-full bg-color-high-risk">
                            </div>
                            <span className="uppercase text-color-high-risk">high risk</span>
                        </div>
                    </div>
                    <p className="font-normal text-[17px]" dangerouslySetInnerHTML={{__html: this.props.data.text}}></p>
                </div>
                <div className="text-center pb-10">
                    <button
                        onClick={this.handleNextClick}
                        className="btn w-fit px-14 h-button min-w-button hover:bg-color-secondary-gray bg-color-primary text-white hover:text-color-primary hover:border-color-primary rounded-full uppercase">Next
                    </button>
                </div>
            </div>
        );
    }
}