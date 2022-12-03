import {Component} from "react";
import MyGoalServices from "../../services/MyGoalServices";
type Props = {
    yourNow: string,
    handleConfirmClick: any
}

const COMMIT_TO_HEART = 'COMMIT TO MY HEART'

export class OnboardIntroduction extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.handleConfirmClick = this.handleConfirmClick.bind(this)
    }

    handleConfirmClick() {
        MyGoalServices.addMyGoal(COMMIT_TO_HEART).then(response => {
            this.props.handleConfirmClick()
        })
    }

    render() {
        return (
            <div className="w-full h-full bg-onboard-introduction bg-cover bg-no-repeat bg-center flex justify-center font-['Proxima_Nova']">
                <div className="h-full w-full max-w-lg flex flex-col items-center">
                    <div className="mt-7 px-2 w-full">
                        <div className="h-full w-full px-3 pb-10">
                            <div className="text-white font-semibold text-xl text-center">
                                <p>Congratulations! The time is now and you’re doing it. Welcome to this journey of
                                    living a heart-healthy life! Try it and let us be part of this journey with you.
                                </p>
                                <p className="mt-5">In this journey, you’ll have the chance to set some goals for yourself. You can
                                    choose and prioritize the goals that are most helpful to you along the way and focus
                                    on the things that will have the most impact on your health. When you enroll in
                                    these goals, they will appear on your dashboard and you can click into them to take
                                    daily actions.
                                </p>
                                <p className="mt-5">So, let’s commit to your first goal. Add it below!</p>
                                <div className="mt-5 font-bold text-2xl">
                                    <p>Add Goal:</p>
                                    <p> “Commit to a heart healthy life”</p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-10">
                                <button
                                    onClick={this.handleConfirmClick}
                                    className="w-1/2 btn min-w-quiz-button mt-4 px-7
                                        h-quiz-button rounded-full
                                        bg-color-secondary-gray text-color-primary border-none
                                        hover:border-color-primary hover:bg-color-primary hover:text-white
                                        active:border-color-primary active:bg-color-primary active:text-white">yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}