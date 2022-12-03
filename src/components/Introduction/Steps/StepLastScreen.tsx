import {Component} from "react";
import {MyNow} from "../MyNow";
import {MyBeats} from "../MyBeats";
import {MyHeartActions} from "../MyHeartActions";
import {MyNextSession} from "../MyNextSession";
import {GoDeeper} from "../GoDeeper";
import MyActionServices from "../../../services/MyActionServices";

type Props = {
    handleNextClick: any
}

export class StepLastScreen extends Component<Props, any> {
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
                <MyNow handleNextClick={null} willShowPopup={false}/>
                <MyBeats handleNextClick={this.handleNextClick} willShowPopup={true} lastScreen={true}/>
                <MyHeartActions/>
                <MyNextSession/>
                <GoDeeper/>
                <div className="bg-color-overlay/50 h-full min-h-full w-full min-w-full fixed z-10 top-0 left-0">
                </div>
            </div>
        );
    }
}