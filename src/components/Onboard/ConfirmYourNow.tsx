import {ChangeEventHandler, Component} from "react";
import {SubmitButton} from "../Form-Elements/SubmitButton";
import MyNowServices from "../../services/MyNowServices";

type Props = {
    yourNow: string,
    handleEditClick: any,
    handleConfirmClick: any
}

export class ConfirmYourNow extends Component<Props, any> {
    constructor(props: Props) {
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleConfirmClick = this.handleConfirmClick.bind(this)
    }

    handleEditClick() {
        this.props.handleEditClick()
    }

    handleConfirmClick() {
        MyNowServices.updateMyNow(this.props.yourNow).then(response => {
            if (response.data.content) {
                let content = response.data.content
                localStorage.setItem('myNow', content)
            }
            this.props.handleConfirmClick()
        })
    }

    render() {
        return (
            <div className="w-full h-full bg-white flex justify-center">
                <div className="h-full w-full max-w-lg flex flex-col items-center">
                    <div className="mt-5 w-full">
                        <div className="h-full w-full px-3 pb-10">
                            <div className="font-semibold text-xl">
                                <p>Your Now will be your mantra to keep you focused throughout the MyAdesso journey.</p>
                                <p className="mt-6">Envision yourself at the healthiest you can be. Below is your now. Take a look and make sure it's the best it can be:</p>
                            </div>
                            <div className="mt-10">
                                <div className="h-80 w-full bg-my-now bg-cover bg-no-repeat bg-center rounded">
                                    <div className="w-full h-full p-10 flex justify-center items-center">
                                        <p className="text-white break-all text-3xl font-bold font-['Proxima_Nova]">{this.props.yourNow}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-xl text-center mt-10 mb-8">Do you confirm this is your now?</p>
                                <div className="flex justify-center gap-3 text-[15px]">
                                    <button
                                        onClick={this.handleEditClick}
                                        className="w-1/2 btn min-w-quiz-button h-quiz-button bg-color-primary text-white hover:bg-color-secondary-gray hover:text-color-primary hover:border-color-primary border-color-primary rounded-full ">edit my now
                                    </button>
                                    <button
                                        onClick={this.handleConfirmClick}
                                        className="w-1/2 btn min-w-quiz-button h-quiz-button bg-color-primary text-white hover:bg-color-secondary-gray hover:text-color-primary hover:border-color-primary border-color-primary rounded-full ">confirm my now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}