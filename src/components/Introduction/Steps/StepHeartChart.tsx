import {Component} from "react";
import {MyNow} from "../MyNow";
import {MyBeats} from "../MyBeats";
import {MyHeartActions} from "../MyHeartActions";
import {MyNextSession} from "../MyNextSession";
import {GoDeeper} from "../GoDeeper";

type Props = {
    handleNextClick: any
}
export class StepHeartChart extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.handleNextClick = this.handleNextClick.bind(this)
    }

    handleNextClick(){
        this.props.handleNextClick();
    }

    render() {
        return (
            <div className="w-full h-full bg-white px-4 sm:px-3 font-['Proxima_Nova'] pb-20">
                <div className="h-10"></div>
                <MyBeats handleNextClick={this.handleNextClick} willShowPopup={true} lastScreen={false}/>
                <MyHeartActions/>
                <MyNextSession/>
                <GoDeeper/>
                <div className="bg-color-overlay/50 h-full min-h-full w-full min-w-full fixed z-10 top-0 left-0">
                </div>
            </div>
        );
    }
}