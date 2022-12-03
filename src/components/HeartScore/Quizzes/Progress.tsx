import {Component} from "react";
import {ProgressIntroduction} from "./ProgressIntroduction";
import {ProgressIntroductionType} from "../../../types/ProgressIntroductionType";
import {ProgressQuestions} from "./ProgressQuestions";

type Props = {
    introduction: ProgressIntroductionType,
    questions: any,
    totalStep: number,
    currentStep: number,
    handleNextClick: any,
    handleBackClick: any,
    handleSubmitData: any,
}

export class Progress extends Component <Props, any> {
    constructor(props: any) {
        super(props);
        if (null !== this.props.introduction) {
            this.state = {
                showIntroduction: true
            }
        }
        this.handleShowIntroduction = this.handleShowIntroduction.bind(this)
        this.handleBackClick = this.handleBackClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }

    handleNextClick() {
        this.props.handleNextClick();
    }

    handleBackClick() {
        this.props.handleBackClick();
    }

    handleSubmitData(values: any) {
        this.props.handleSubmitData(values)
    }

    handleShowIntroduction() {
        let currentStatus = this.state.showIntroduction;
        this.setState({
            showIntroduction: !currentStatus
        })
    }

    render() {
        if (this.state.showIntroduction) {
            return (
                <div className="w-full h-full flex justify-center bg-default text-white pb-10">
                    <div className="h-full w-full max-w-lg flex flex-col items-center">
                        <ProgressIntroduction
                            handleBackClick={this.handleBackClick}
                            handleNextClick={this.handleShowIntroduction}
                            data={this.props.introduction}
                            currentStep={this.props.currentStep}
                            totalStep={this.props.totalStep}
                        ></ProgressIntroduction>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="w-full h-full flex justify-center bg-white text-black pb-10">
                    <div className="h-full w-full max-w-lg flex flex-col items-center">
                        <ProgressQuestions
                            handleBackClick={this.handleShowIntroduction}
                            handleNextClick={this.handleNextClick}
                            handleSubmitData={this.handleSubmitData}
                            data={this.props.questions}></ProgressQuestions>
                    </div>
                </div>

            )
        }
    }
}