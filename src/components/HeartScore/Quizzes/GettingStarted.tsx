import {Component} from "react";

type Props = {
    handler: any
}
export class GettingStarted extends Component<Props, any> {
    constructor(props: Props) {
        super(props);

        this.handleNextClick = this.handleNextClick.bind(this)
    }
    handleNextClick(){
        this.props.handler()
    }
    render() {
        return (
            <div className="mt-6 text-xl text-white font-semibold">
                <div className="mb-5">
                    <p className="mb-5">
                        When you take care of yourself and focus on self-care, you address those parts of your life that
                        you
                        can control and truly have an impact. The more you empower yourself to create wellness in those
                        areas of your life that you can, the more you will live with energy, vitality and overall
                        wellbeing.
                    </p>
                    <p className="mb-5">
                        We know that if you live this way, you will prevent the number one killer of all women, heart
                        disease. 1 in 3 women will die of heart disease, 70% of the time a woman doesn’t even know that
                        she
                        is sick and 80% of the time heart disease is preventable.
                    </p>
                    <p className="mb-5">
                        It takes decades to develop, so the sooner we figure out if you are at risk, the sooner we can
                        do
                        something about it.
                    </p>
                    <p>
                        The time is NOW.... Let’s do this!
                    </p>
                </div>
                <div className="text-center pb-10">
                    <button
                        onClick={this.handleNextClick}
                        className="btn w-fit px-14 h-button min-w-button bg-color-secondary-gray hover:bg-color-primary hover:text-white text-color-primary border-none rounded-full uppercase">Next
                    </button>
                </div>
            </div>
        );
    }
}