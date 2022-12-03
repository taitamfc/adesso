import {Component} from "react";
import MyActionServices from "../../services/MyActionServices";
import {Action} from "../../types/Action";

type States = {
    data: Action[]
}

export class ActionsToComplete extends Component<any, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getActions()
    }

    getActions() {
        MyActionServices.getInCompletedActions().then(response => {
            let rawData = response.data;
            this.setState({
                data: rawData
            })
        })
    }

    render() {
        return (
            <div className="mt-5">
                <p className="text-[15px] font-semibold text-black uppercase">Actions To Complete</p>
                <div className="mt-2">
                    {this.state.data.map(action => {
                        return (
                            <div className="flex justify-between">
                                <span className="text-color-primary underline underline-offset-2">{action.name}</span>
                                <span className="text-color-text-primary">{action.score}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}