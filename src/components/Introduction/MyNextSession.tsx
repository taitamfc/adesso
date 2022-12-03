import {Component} from "react";

export class MyNextSession extends Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="w-full">
                <p className="text-2xl font-['Butler'] text-black capitalize">My next session</p>
                <div className="bg-dashboard-my-next-session rounded bg-cover bg-center bg-no-repeat w-full px-4 pt-7 pb-4 mt-2 rounded-[5px]">
                    <div className="flex flex-col justify-center items-center gap-2 text-white text-center">
                        <span className="font-bold text-[22px]">Know Your Heart</span>
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6 h-6 border border-white rounded-full flex justify-center items-center">
                                <svg className="w-2.5 h-2.5" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.789967 1.51732C0.780497 0.721259 1.65979 0.23386 2.32987 0.663737L9.39736 5.19777C10.0344 5.60643 10.0041 6.54717 9.3422 6.91408L2.37458 10.7763C1.71266 11.1432 0.898848 10.6703 0.889846 9.91357L0.789967 1.51732Z" fill="white"/>
                                </svg>
                            </div>
                            <span className="font-semibold text-sm">14 mins</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}