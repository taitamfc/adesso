import {Component} from "react";
import MyActionServices from "../../services/MyActionServices";

type Props = {
    handleNextClick: any,
    willShowPopup: boolean,
    lastScreen: boolean
}

export class MyBeats extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.handleNextClick = this.handleNextClick.bind(this)
    }

    handleNextClick(event: any) {
        let action = event.currentTarget.getAttribute('data-action')
        MyActionServices.addMyAction(action).then(response => {
            console.log(response)
        });
        this.props.handleNextClick();
    }

    render() {
        return (
            <div className="relative">
                {this.props.willShowPopup && !this.props.lastScreen && (
                    <div className="absolute -mt-24 sm:-mt-20 z-20 w-full min-w-full">
                        <p className="bg-white rounded-2xl shadow px-4 py-5">
                            The Heart Chart is where you can track your progress.
                        </p>
                    </div>
                )}
                <p className="text-2xl font-['Butler'] text-black">My Beats</p>
                <div className="mt-2">
                    <div className="grid grid-cols-2 gap-3">
                        <div
                            className="w-full bg-color-beats py-2 flex flex-col justify-center items-center rounded-lg">
                            <div className="mask mask-heart">
                                <div className="w-16 h-16 bg-color-text-primary flex justify-center items-center">
                                    <span className="font-medium text-white text-xl">60</span>
                                </div>
                            </div>
                            <span
                                className="uppercase text-color-text-primary text-[15px] font-medium">Heart basics</span>
                        </div>
                        <div
                            className="w-full bg-color-violet py-2 flex flex-col gap-2 justify-center items-center rounded-lg">
                            <div className="flex justify-center items-center">
                                <svg className="w-7 h-auto" viewBox="0 0 27 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M4.62857 8.28C4.62857 6.08401 5.56324 3.97796 7.22696 2.42516C8.89067 0.872355 11.1472 0 13.5 0C15.8529 0 18.1093 0.872355 19.773 2.42516C21.4368 3.97796 22.3714 6.08401 22.3714 8.28V13.9021C24.4433 15.588 25.9145 17.824 26.5882 20.3112C27.2619 22.7984 27.1061 25.4183 26.1417 27.8207C25.1772 30.223 23.45 32.2934 21.191 33.7549C18.9319 35.2165 16.2487 35.9996 13.5 35.9996C10.7513 35.9996 8.06807 35.2165 5.80903 33.7549C3.55 32.2934 1.8228 30.223 0.858328 27.8207C-0.106141 25.4183 -0.261922 22.7984 0.411811 20.3112C1.08554 17.824 2.55669 15.588 4.62857 13.9021V8.28ZM18.5143 8.28V11.6979C15.2954 10.5012 11.7076 10.5012 8.48878 11.6979V8.28C8.47225 7.65587 8.58969 7.03497 8.83417 6.45384C9.07866 5.87272 9.44525 5.34313 9.91236 4.89625C10.3795 4.44937 10.9377 4.09424 11.5541 3.85176C12.1705 3.60929 12.8326 3.48437 13.5015 3.48437C14.1704 3.48437 14.8326 3.60929 15.449 3.85176C16.0654 4.09424 16.6236 4.44937 17.0907 4.89625C17.5578 5.34313 17.9244 5.87272 18.1689 6.45384C18.4134 7.03497 18.5308 7.65587 18.5143 8.28ZM16.2 21.6C16.2008 22.0068 16.0959 22.4078 15.8944 22.7685C15.6929 23.1293 15.4007 23.4391 15.0429 23.6714V25.9229C15.0429 26.3048 14.8803 26.671 14.591 26.9411C14.3016 27.2111 13.9092 27.3629 13.5 27.3629C13.0908 27.3629 12.6984 27.2111 12.409 26.9411C12.1197 26.671 11.9571 26.3048 11.9571 25.9229V23.6686C11.5763 23.421 11.2702 23.0861 11.0684 22.696C10.8667 22.3059 10.7761 21.8738 10.8054 21.4415C10.8347 21.0092 10.9829 20.5912 11.2357 20.228C11.4884 19.8647 11.8373 19.5683 12.2485 19.3676C12.6598 19.1668 13.1195 19.0683 13.5834 19.0817C14.0473 19.0951 14.4997 19.2199 14.8969 19.444C15.294 19.6681 15.6226 19.984 15.8509 20.3611C16.0791 20.7383 16.1994 21.164 16.2 21.5971V21.6Z"
                                          fill="white"/>
                                </svg>
                            </div>
                            <p className="uppercase text-white text-xs font-semibold text-center">40 points
                                more to UNLOCK Heart Alive 1</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <a className="mt-3 underline underline-offset-3 text-color-primary decoration-color-primary float-right text-sm font-normal">See
                        My Heart Chart</a>
                </div>
                {this.props.willShowPopup && !this.props.lastScreen && (
                    <div className="absolute -mt-14 z-20 w-full min-w-full">
                        <div className="flex justify-end">
                            <div className="mr-5 -mb-2">
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
                        </div>
                        <p className="bg-white rounded-2xl shadow px-4 py-5">
                            See how many beats you need to get to your next badge.
                        </p>
                        <div className="flex justify-center mt-[10px]">
                            <button
                                onClick={this.handleNextClick}
                                data-action="heart_chart_introduction"
                                className="bg-color-text-primary text-white rounded-full px-10 h-quiz-button uppercase font-medium text-[15px]">Got
                                it! next
                            </button>
                        </div>
                    </div>
                )}
                {this.props.willShowPopup && this.props.lastScreen && (
                    <div className="absolute top-0 z-20 w-full min-w-full">
                        <div className="bg-white rounded-2xl shadow px-4 py-5">
                            <p className="font-medium text-[17px]">You completed the Dashboard tour!</p>
                            <p className="text-2xl font-semibold text-color-text-primary">+ 5 beats</p>
                        </div>
                        <div className="flex justify-center mt-[10px]">
                            <button
                                onClick={this.handleNextClick}
                                data-action="last_screen_of_introduction"
                                className="bg-color-text-primary
                                text-white rounded-full px-16 h-quiz-button uppercase font-medium text-[15px]">Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}