import {Component} from "react";

export class MyHeartScore extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="mt-5">
                <p className="text-[15px] font-semibold text-black uppercase">My Heart Score</p>
                <div className="mt-2">
                    <div className="flex items-center justify-between gap-3">
                        <div
                            className="h-24 w-24 rounded-full flex justify-center items-center border border-8 border-color-medium-risk">
                            <span
                                className="uppercase text-color-medium-risk text-[44px]">75</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-color-medium-risk text-3xl">Moderate</p>
                            <p>This score is calculated from your Responses to your most recent Adesso Heart Score
                                Questionaire</p>
                            <a href="#" className="mt-10 text-color-primary underline underline-offset-2">Take The Heart Score Again</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}