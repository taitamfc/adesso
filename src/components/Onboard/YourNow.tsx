import {Component} from "react";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";

type Props = {
    handleNextClick: any,
    yourNow: string
}

export class YourNow extends Component<Props, any> {
    constructor(props: Props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(values: any) {
        this.props.handleNextClick(values.yourNow)
    }

    signupSchema = Yup.object().shape({
        yourNow: Yup.string()
            .min(3, "Field is too Short! Minimum: 3 characters")
            .max(255, "Field is too Long! Maximum: 255 characters")
            .required("Field is required")
    });

    render() {
        const initialValues = {
            yourNow: this.props.yourNow
        }
        return (
            <Formik initialValues={initialValues} onSubmit={this.handleSubmit}
                    validationSchema={this.signupSchema}
            >
                {({errors, touched}) => (
                    <Form className="w-full h-full bg-onboard-page bg-cover bg-no-repeat bg-center flex justify-center">
                        <div className="h-full w-full max-w-lg flex flex-col items-center pb-10">
                            <div className="mt-5 w-full">
                                <div className="h-full w-full px-3">
                                    <div className="text-white font-semibold text-xl">
                                        <p>This journey is all about you making the decisions you need to make for
                                            yourself. So
                                            let’s start by defining why you’re here.
                                        </p>
                                        <p className="mt-6">What is your now? (Your reason for living a heart
                                            healthy life)</p>
                                    </div>
                                    <div className="mt-10">
                                        <div className="w-full text-lg">
                                            <Field as="textarea"
                                                   name="yourNow"
                                                   className="textarea textarea-bordered w-full p-4 rounded-2xl text-lg placeholder:text-black placeholder:text-lg"
                                                   placeholder="Type YOUR NOW" rows={2}/>
                                            {touched.yourNow && errors.yourNow &&
                                                <div className="alert alert-error shadow-lg my-3.5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="stroke-current flex-shrink-0 h-6 w-6"
                                                             fill="none"
                                                             viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                        </svg>
                                                        <span>{errors.yourNow}.</span>
                                                    </div>
                                                </div>
                                            }
                                            <div
                                                className="conversation mt-7 flex flex-col font-semibold font-['Proxima_Nova']">
                                                <div
                                                    className="w-3/4 p-4 bg-color-goal-primary text-color-goal-text-primary rounded-2xl self-start">
                                                    <p>"I want to run a marathon."</p>
                                                </div>
                                                <div
                                                    className="w-3/4 p-4 mt-3 bg-color-goal-secondary text-color-goal-text-secondary rounded-2xl self-end">
                                                    <p>"I want to blow out 100 candles."</p>
                                                </div>
                                                <div
                                                    className="w-3/4 p-4 mt-3 bg-color-goal-primary text-color-goal-text-primary rounded-2xl self-start">
                                                    <p>"I want to dance a tango at my 50th anniversary."</p>
                                                </div>
                                                <div
                                                    className="w-3/4 p-4 mt-3 bg-color-goal-secondary text-color-goal-text-secondary rounded-2xl self-end">
                                                    <p>"I want to look great and fall in love again."</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <button type="submit"
                                                        className="btn min-w-quiz-button mt-4 px-9 h-quiz-button bg-color-primary text-white hover:bg-color-secondary-gray hover:text-color-primary hover:border-color-primary border-color-primary rounded-full ">Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}