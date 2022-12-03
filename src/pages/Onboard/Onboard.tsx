import {Component} from "react";
import {YourNow} from "../../components/Onboard/YourNow";
import {ConfirmYourNow} from "../../components/Onboard/ConfirmYourNow";
import {Navigate} from "react-router-dom";
import {OnboardIntroduction} from "../../components/Onboard/OnboardIntroduction";

const REDIRECT_TO = '/explanation';
type Props = {}

type States = {
    yourNow: string,
    step: Step,
    redirect: boolean
}

enum Step {
    EnterYourNow = 1,
    ConfirmYourNow = 2,
    Introduction = 3,
    Done = 4
}

export class Onboard extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        let myNow = localStorage.getItem('myNow') ?? '';
        this.state = {
            yourNow: myNow,
            step: Step.EnterYourNow,
            redirect: myNow.length > 0
        }

        this.handleNextStepClick = this.handleNextStepClick.bind(this);
        this.handlePreviousStepClick = this.handlePreviousStepClick.bind(this);
        this.handleConfirmClick = this.handleConfirmClick.bind(this);
    }

    handleNextStepClick(yourNow: string) {
        this.setState({
            yourNow: yourNow,
            step: this.state.step + 1
        });
    }

    handlePreviousStepClick() {
        this.setState({
            step: this.state.step - 1
        });
    }

    handleConfirmClick() {
        this.setState({
            redirect: true,
            step: Step.Done
        });
    }

    render() {
        if (this.state.redirect || this.state.step == Step.Done) {
            return (
                <Navigate to={REDIRECT_TO} replace={true}/>
            );
        } else {
            switch (this.state.step) {
                case Step.EnterYourNow:
                    return (
                        <div>
                            <YourNow yourNow={this.state.yourNow} handleNextClick={this.handleNextStepClick}></YourNow>
                        </div>
                    );
                case Step.ConfirmYourNow:
                    return (
                        <div>
                            <ConfirmYourNow yourNow={this.state.yourNow} handleConfirmClick={this.handleNextStepClick}
                                            handleEditClick={this.handlePreviousStepClick}></ConfirmYourNow>
                        </div>
                    )
                case Step.Introduction:
                    return (
                        <div>
                            <OnboardIntroduction yourNow={this.state.yourNow}
                                                 handleConfirmClick={this.handleConfirmClick}></OnboardIntroduction>
                        </div>
                    );
                default:
                    return (
                        <div></div>
                    );
            }
        }
    }
}