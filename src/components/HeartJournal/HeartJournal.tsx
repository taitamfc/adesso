import {Component} from "react";

export class HeartJournal extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="w-full mt-4">
                <p className="text-2xl font-['Butler'] text-black capitalize">Heart Journal</p>
                <div className="text-[17px] mt-2">
                    Introduction copy about goals. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    gravida nunc in leo eleifend, sit amet tempus ligula semper. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </div>
            </div>
        );
    }
}