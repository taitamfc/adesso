import {Component} from "react";
import MyActionServices from "../../services/MyActionServices";

type Props = {
    handleNextClick: any,
    willShowPopup: boolean
}

export class MyNow extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.handleNextClick = this.handleNextClick.bind(this)
    }

    handleNextClick() {
        MyActionServices.addMyAction('dashboard_introduction_animation').then(response => {
            console.log(response)
        });
        this.props.handleNextClick();
    }

    render() {
        return (
            <div className="relative">
                <p className="text-2xl font-['Butler'] text-black">My Now</p>
                <div className="bg-dashboard-my-now rounded bg-cover bg-center bg-no-repeat w-full p-6 mt-2">
                    <p className="font-bold text-[22px] text-white text-left">To be fit and vital and play with my son
                        until I’m 95!</p>
                </div>
                <div className="flex justify-end">
                    <a className="mt-3 underline underline-offset-3 text-color-primary decoration-color-primary float-right text-sm font-normal">Edit
                        My Now</a>
                </div>
                {this.props.willShowPopup && (
                    <div className="absolute -mt-14 z-20">
                        <div className="ml-4 -mb-2">
                            <svg className="w-10 h-auto" viewBox="0 0 41 49" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_115_1913)">
                                    <path
                                        d="M21.1873 0.649654C20.8017 0.285149 20.1985 0.285313 19.8131 0.650024L17.6164 2.72866L0.733157 18.6726C0.329243 19.0541 0.313673 19.6916 0.698487 20.0923L5.08038 24.6552C5.46066 25.0512 6.08908 25.0665 6.48824 24.6896L14.619 17.0111C15.2568 16.4088 16.3056 16.861 16.3056 17.7381L16.3056 48C16.3056 48.5523 16.7533 49 17.3056 49H23.6944C24.2467 49 24.6944 48.5523 24.6944 48L24.6944 17.7352C24.6944 16.858 25.7432 16.4059 26.381 17.0081L34.5118 24.6866C34.9109 25.0636 35.5393 25.0482 35.9196 24.6522L40.3015 20.0894C40.6863 19.6887 40.6708 19.0511 40.2668 18.6697L23.3836 2.72569L21.1873 0.649654Z"
                                        fill="#FF3399"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_115_1913" x="-3.58032" y="0.376343" width="48.1606"
                                            height="56.6237" filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                 result="effect1_dropShadow_115_1913"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_115_1913"
                                                 result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <p className="bg-white rounded-2xl shadow px-4 py-5">
                            Here is Your Now. Come back and refer to Your Now as the reason why you’re in this journey.
                            You
                            can modify or update your now at any time by clicking to edit it.
                        </p>
                        <div className="flex justify-center mt-[10px]">
                            <button
                                onClick={this.handleNextClick}
                                className="bg-color-text-primary text-white rounded-full px-10 h-quiz-button uppercase font-medium text-[15px]">Got
                                it! next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}