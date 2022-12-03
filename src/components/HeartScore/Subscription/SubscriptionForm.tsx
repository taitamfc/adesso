import {Component} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';
import {HeartScoreSubscription} from "../../../types/HeartScoreSubscription";
import {Navigate} from "react-router-dom";
import OnboardServices from "../../../services/OnboardServices";
import {render} from "react-dom";

type States = {
    subscribed: boolean,
    onboarded: boolean,
    loading: boolean,
    error: boolean,
    subscribeSuccess: boolean,
    message: string,
    data: HeartScoreSubscription
}

export class SubscriptionForm extends Component<any, States> {
    constructor(props: any) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        let result = await this.getSubscription();
        this.setState({
            subscribed: JSON.parse(localStorage.getItem('subscribed') ?? 'false'),
            onboarded: JSON.parse(localStorage.getItem('onboarded') ?? 'false'),
            loading: false,
            error: false,
            subscribeSuccess: false,
            message: "",
            data: result
        });
    }

    async getSubscription() {
        return await OnboardServices.getOnBoardData().then(
            success => {
                if (success.phone_number && success.email) {
                    localStorage.setItem('subscribed', JSON.stringify(true));
                    let data: HeartScoreSubscription = {
                        phoneNumber: success.phone_number,
                        textFrequency: success.text_frequency,
                        email: success.email,
                        emailFrequency: success.email_frequency,
                    }
                    return data;
                } else {
                    localStorage.removeItem('subscribed')
                    let data: HeartScoreSubscription = {
                        phoneNumber: "",
                        textFrequency: "daily",
                        email: "",
                        emailFrequency: "daily",
                    }
                    return data;
                }
            },
            error => {
                localStorage.removeItem('subscribed')
                let data: HeartScoreSubscription = {
                    phoneNumber: "",
                    textFrequency: "daily",
                    email: "",
                    emailFrequency: "daily",
                }
                return data;
            }
        )
    }

    SubscriptionSchema = Yup.object().shape({
        textFrequency: Yup.string()
            .oneOf(['daily', 'week', 'month'], 'Invalid text frequency')
            .required('Please select how often should we text you!'),
        phoneNumber: Yup.string()
            .min(9, 'Invalid Phone Number!')
            .max(12, 'Invalid Phone Number!')
            .required('Phone Number is required'),
        emailFrequency: Yup.string()
            .oneOf(['daily', 'week', 'month'], 'Invalid text frequency')
            .required('Please select how often should we send an email to you!'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });

    handleSubmit(values: HeartScoreSubscription) {
        this.setState(prevState => ({
            subscribed: !prevState.subscribed,
            loading: false,
            error: false
        }));

        OnboardServices.setOnBoardSubscription(values).then(
            success => {
                this.setState({
                    loading: false,
                    error: false,
                    message: ""
                });
                if (success.data && success.data.by_email && success.data.by_phone) {
                    this.setState({
                        error: false,
                        message: "Success!!!"
                    })
                    setTimeout(() => {
                        this.setState({
                            subscribeSuccess: true,
                        })
                    }, 1000)
                } else if (Array.isArray(success.errors)) {
                    let messages = "";
                    success.error.forEach(function (value: string) {
                        messages += `<span>${value}</span>`
                    })
                    this.setState({
                        error: true,
                        message: messages
                    });
                } else {
                    this.setState({
                        error: true,
                        message: success.message
                    });
                }
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        )
    }

    render() {
        if (this.state !== null) {
            const initialValues = this.state.data
            return (
                <div className="w-full">
                    {this.state.subscribeSuccess && (
                        <Navigate to="/heart-score/quizzes" replace={true}/>
                    )}
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        onSubmit={this.handleSubmit}
                        validationSchema={this.SubscriptionSchema}
                    >
                        {({values, errors, touched}) => (
                            <Form className="text-white">
                                <div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer justify-start p-0 mb-3">
                                            <input type="checkbox"
                                                   readOnly
                                                   className="checkbox checkbox-secondary w-5 h-5 rounded-none"
                                                   checked/>
                                            <span className="ml-2 text-[17px] uppercase font-semibold">Text</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-start p-0 mb-3">
                                                <Field type="radio" name="textFrequency" value="daily"
                                                       className="radio w-5 h-5 checked:bg-red-500"/>
                                                <span className="ml-2 text-[17px]">Daily</span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-start p-0 mb-3">
                                                <Field type="radio" name="textFrequency" value="week"
                                                       className="radio w-5 h-5 checked:bg-red-500"/>
                                                <span className="ml-2 text-[17px]">Weekly Digest</span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-start p-0">
                                                <Field type="radio" name="textFrequency" value="month"
                                                       className="radio w-5 h-5 checked:bg-red-500"/>
                                                <span className="ml-2 text-[17px]">Monthly Digest</span>
                                            </label>
                                        </div>
                                        {touched.textFrequency && errors.textFrequency &&
                                            <div className="alert alert-error shadow-lg my-3.5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                         viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span>{errors.textFrequency}.</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="form-control">
                                        <Field
                                            type="tel"
                                            minLength="9"
                                            maxLength="12"
                                            name="phoneNumber"
                                            className="input w-full h-input mt-6 rounded-none text-color-primary font-semibold placeholder:font-normal"
                                            placeholder="Phone Number"
                                        ></Field>
                                        {touched.phoneNumber && errors.phoneNumber &&
                                            <div className="alert alert-error shadow-lg my-3.5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                         viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span>{errors.phoneNumber}.</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="form-control">
                                        <label className="label cursor-pointer justify-start p-0 mb-3">
                                            <input type="checkbox"
                                                   readOnly
                                                   className="checkbox checkbox-secondary w-5 h-5 rounded-none"
                                                   checked/>
                                            <span className="ml-2 text-[17px] uppercase font-semibold">Email</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-start p-0 mb-3">
                                                <Field type="radio" name="emailFrequency" value="daily"
                                                       className="radio w-5 h-5 checked:bg-red-500"/>
                                                <span className="ml-2 text-[17px]">Daily</span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-start p-0 mb-3">
                                                <Field type="radio" name="emailFrequency" value="week"
                                                       className="radio w-5 h-5 checked:bg-red-500"/>
                                                <span className="ml-2 text-[17px]">Weekly Digest</span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label cursor-pointer justify-start p-0">
                                                <Field type="radio" name="emailFrequency" value="month"
                                                       className="radio w-5 h-5 checked:bg-red-500"/>
                                                <span className="ml-2 text-[17px]">Monthly Digest</span>
                                            </label>
                                        </div>
                                        {touched.emailFrequency && errors.emailFrequency &&
                                            <div className="alert alert-error shadow-lg my-3.5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                         viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span>{errors.emailFrequency}.</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="form-control">
                                        <Field
                                            type="email"
                                            name="email"
                                            maxLength="50"
                                            className="input w-full h-input mt-6 rounded-none text-color-primary font-semibold placeholder:font-normal"
                                            placeholder="Email Address"
                                        ></Field>
                                        {touched.email && errors.email &&
                                            <div className="alert alert-error shadow-lg my-3.5 justify-start">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                         viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span>{errors.email}.</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {this.state.message && this.state.error &&
                                    (
                                        < div className="alert alert-error shadow-lg mt-4">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <div className="inline w-full"
                                                 dangerouslySetInnerHTML={{__html: this.state.message}}>
                                            </div>
                                        </div>
                                    )
                                }{this.state.message && !this.state.error &&
                                (
                                    <div className="alert alert-success shadow-lg mt-4">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <div className="inline w-full"
                                                 dangerouslySetInnerHTML={{__html: this.state.message}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                                <div className="flex justify-center align-middle mt-4">
                                    <button
                                        className="w-fit px-14 h-button inline-flex items-center btn btn-block bg-color-primary border-none rounded-full text-white hover:text-color-primary active:text-color-primary hover:bg-white hover:text-color-primary active:bg-white active:text-color-primary"
                                        type="submit" disabled={this.state.loading}>
                                        {this.state.loading && (
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor"
                                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        )}
                                        Confirm
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            )
        }
    }
}