import {Component} from "react";
import {ProgressIntroductionType} from "../../../types/ProgressIntroductionType";
import {QuizzesProgressBar} from "./QuizzesProgressBar";
import {Field, Form, Formik} from "formik";

type Props = {
    handleNextClick: any,
    handleBackClick: any,
    handleSubmitData: any,
    data: any
}

export class ProgressQuestions extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }

    handleNextClick() {
        this.props.handleNextClick()
    }

    handleBackClick() {
        this.props.handleBackClick()
    }

    handleSubmitData() {

    }

    render() {
        return (
            <div className="w-full h-full flex flex-col justify-between items-center mt-[30px] bg-white text-black">
                <Formik initialValues={{}} onSubmit={this.handleSubmitData}>
                    <Form className="w-full h-full flex flex-col justify-between items-center">
                        <div className="px-4 w-full items-stretch mb-4 text-[17px]">
                            {this.props.data.hasOwnProperty('header') && this.props.data.header.length && (
                                <p className="w-full text-left mb-5 text-[27px] font-bold">{this.props.data.header}</p>
                            )}
                            {this.props.data.data.map((question: any, index: number) => (
                                <div key={index}>
                                    {question.hasOwnProperty('header') && (
                                        <p className="text-2xl font-bold mb-4">{question.header}</p>
                                    )}
                                    {question.hasOwnProperty('sub_header') && (
                                        <p className="text-xl font-semibold mb-4">{question.sub_header}</p>
                                    )}
                                    {['text', 'number', 'email'].includes(question.type) && (
                                        <div className="mb-6">
                                            <p className="flex-none font-bold w-full">{question.question}</p>
                                            <Field
                                                className="w-full min-h-[60px] bg-[#FFE1EE] mt-2 text-black input input-sm p-0 m-0 rounded-none font-semibold text-color-primary"
                                                required={question.required ?? false}
                                                type={question.type}
                                                name={question.value_name}></Field>
                                        </div>
                                    )} {question.type === 'radio' && (
                                    <div className="mb-6">
                                        <span className="font-bold">{question.question}</span>
                                        <div className="mt-2" role="group">
                                            {question.values.map((value: any, index: number) => (
                                                <label key={index} className="label cursor-pointer w-fit">
                                                    {index === 0 && (
                                                        <Field key={index}
                                                               className="checkbox checkbox-sm rounded border-2 border-black/60 hover:border-color-checkbox checked:border-none checked:bg-color-checkbox checked:bg-quiz-checked"
                                                               required={question.required ?? false}
                                                               type="radio"
                                                               checked="checked"
                                                               value={value.value}
                                                               name={question.value_name}
                                                        />
                                                    )} {index !== 0 && (
                                                    <Field key={index}
                                                           className="checkbox checkbox-sm rounded border-2 border-black/60 hover:border-color-checkbox checked:border-none checked:bg-color-checkbox checked:bg-quiz-checked"
                                                           required={question.required ?? false}
                                                           type="radio"
                                                           value={value.value}
                                                           name={question.value_name}
                                                    />
                                                )}
                                                    <span className="ml-2 ">{value.text}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}{question.type === 'yes-no' && (
                                    <div className="mb-6">
                                        <span className="font-bold">{question.question}</span>
                                        <div className="flex justify-start mt-2">
                                            <label className="label cursor-pointer w-fit">
                                                <Field
                                                    className="radio radio-sm border-2 border-black/60 checked:border-color-checkbox hover:border-color-checkbox checked:bg-color-checkbox"
                                                    required={question.required ?? false}
                                                    type="radio"
                                                    value="1"
                                                    checked="checked"
                                                    name={question.value_name}
                                                />
                                                <span className="ml-2 ">Yes</span>
                                            </label>
                                            <label className="ml-4 label cursor-pointer w-fit">
                                                <Field
                                                    className="radio radio-sm border-2 border-black/60 checked:border-color-checkbox hover:border-color-checkbox checked:bg-color-checkbox"
                                                    required={question.required ?? false}
                                                    type="radio"
                                                    value="0"
                                                    name={question.value_name}
                                                />
                                                <span className="ml-2 ">No</span>
                                            </label>
                                        </div>
                                    </div>
                                )} {question.type === 'checkbox' && (
                                    <div className="mb-6">
                                        <span className="font-bold">{question.question}</span>
                                        <div className="mt-2" role="group">
                                            {question.values.map((value: any, index: number) => (
                                                <label className="label cursor-pointer w-fit">
                                                    <Field key={index}
                                                           className="checkbox checkbox-sm rounded border-2 border-black/60 hover:border-color-checkbox checked:border-none checked:bg-color-checkbox checked:bg-quiz-checked"
                                                           required={question.required ?? false}
                                                           type="checkbox"
                                                           value={value.value}
                                                           name={question.value_name}
                                                    />
                                                    <span className="ml-2 ">{value.text}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                </div>

                            ))}
                        </div>
                        <div className="flex gap-2 justify-center uppercase">
                            <button onClick={this.handleBackClick}
                                    className="btn min-w-quiz-button px-9 h-quiz-button bg-color-primary text-white hover:bg-color-secondary-gray hover:text-color-primary hover:border-color-primary border-color-primary rounded-full ">Back
                            </button>
                            <button onClick={this.handleNextClick}
                                    className="btn min-w-quiz-button px-9 h-quiz-button bg-color-primary text-white hover:bg-color-secondary-gray hover:text-color-primary hover:border-color-primary border-color-primary rounded-full">Next
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}