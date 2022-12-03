import {Component} from "react";

export class MyHeartActions extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="relative h-fit">
                <p className="text-2xl font-['Butler'] text-black">My Heart Actions</p>
                <div className="bg-transparent mt-2">
                    <div className="grid grid-cols-1 gap-2 text-white">
                        <div className="w-full rounded-2xl bg-color-text-primary flex justify-start items-center p-4 gap-2">
                            <div className="w-6 h-6 rounded-full bg-white border border-white flex justify-center items-center">
                                <svg className="w-4 h-auto" viewBox="0 0 16 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.919 0.217597C15.4854 -0.43084 16.3864 0.514797 15.82 1.16372C12.6793 4.89222 9.51187 8.5667 6.3463 12.2677C6.19184 12.4568 6.03737 12.6189 5.88291 12.8081C5.65305 13.0782 5.21357 13.0493 4.98187 12.8081C3.38576 11.2159 1.78964 9.5929 0.193519 7.99883C-0.398589 7.40443 0.502445 6.43178 1.09455 7.05319C2.53621 8.48516 3.95212 9.91712 5.39378 11.3761C8.58601 7.64759 11.7525 3.9461 14.919 0.217597Z"
                                        fill="#ED2580"/>
                                </svg>
                            </div>
                            <span
                                className="uppercase font-bold text-[15px] leading-[17px]">commit to my heart</span>
                        </div>
                        <div className="w-full rounded-2xl bg-color-medium-risk flex justify-start items-center p-4 gap-2">
                            <div className="w-6 h-6 rounded-full bg-transparent border border-white flex justify-center items-center">
                            </div>
                            <span
                                className="uppercase font-bold text-[15px] leading-[17px]">move my heart</span>
                        </div>
                        <div className="w-full rounded-2xl bg-color-violet flex justify-start items-center p-4 gap-2">
                            <div className="w-6 h-6 rounded-full bg-transparent border border-white flex justify-center items-center">
                            </div>
                            <span
                                className="uppercase font-bold text-[15px] leading-[17px]">refresh my heart</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <a className="mt-3 underline underline-offset-3
                     text-color-primary decoration-color-primary float-right text-sm font-normal capitalize">See your
                        Heart Journal</a>
                </div>
            </div>
        );
    }
}