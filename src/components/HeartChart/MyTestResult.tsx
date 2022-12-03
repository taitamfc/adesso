import {Component} from "react";

export class MyTestResult extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="mt-5">
                <p className="text-[15px] font-semibold text-black uppercase">My Test Results</p>
                <div className="mt-2">
                    <div className="flex items-center justify-center">
                        <div
                            className="w-1/2 h-24 bg-color-beats py-2 flex flex-col justify-center items-center rounded-lg">
                            <span
                                className="uppercase text-color-text-primary text-[15px] font-medium">enter test results</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}