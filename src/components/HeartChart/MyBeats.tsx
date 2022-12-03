import {Component} from "react";
import MyBeatsServices from "../../services/MyBeatsServices";

type States = {
    score: number
}

export class MyBeats extends Component<any, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            score: parseInt(localStorage.getItem('myBeats') ?? '0')
        }
    }


    componentDidMount() {
        this.getMyBeats();
    }

    getMyBeats() {
        MyBeatsServices.getMyBeats().then(response => {
            if (response.data && response.data.score !== null) {
                this.setState({
                    score: response.data.score
                })
            }
        })
    }

    render() {
        return (
            <div>
                <p className="text-[15px] font-semibold text-black uppercase">My Beats</p>
                <div className="mt-2">
                    <div className="grid grid-cols-2 gap-3">
                        <div
                            className="w-full bg-color-beats py-2 flex flex-col justify-center items-center rounded-lg">
                            <div className="mask mask-heart">
                                <div className="w-16 h-16 bg-color-text-primary flex justify-center items-center">
                                    <span className="font-medium text-white text-xl">{ this.state.score }</span>
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
            </div>
        );
    }
}