import {Component} from "react";

type Props = {
    total: number,
    current: number
}

export class QuizzesProgressBar extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        let progress = [...Array(this.props.total)].map((element, index) => {
            let currentStep = index + 1;
            if (currentStep <= this.props.current) {
                return (
                    <li key={index} className="step step-active before:!h-[2px] after:!bg-white after:!w-7 after:!h-7 after:!text-[#EF2E7D]" style={{minWidth: "auto"}}></li>
                );
            } else {
                return (
                    <li key={index} className="step before:!h-[2px] after:!bg-[#BFBFBE] after:!w-7 after:!h-7 after:!text-[#EF2E7D]" style={{minWidth: "auto"}}></li>
                );
            }
        })
        return (
            <ul className="steps w-full min-w-full">
                {progress}
            </ul>
        );
    }
}