import {Component} from "react";
import {Link} from "react-router-dom";
import {Goal} from "../../types/Goal";
import MyGoalServices from "../../services/MyGoalServices";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

type States = {
    data: {
        date: Goal[]
    }[]
}

export class YourData extends Component<any, States> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getMonthData()
    }

    getMonthData() {
        MyGoalServices.getMonthData().then(response => {
            if (response.data) {
                this.setState({
                    data: response.data
                })
            }
        })
    }

    render() {
        var monthData: number[][] = [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1]
        ];
        const today = new Date();
        const monthIndex = today.getMonth()
        let currentMonth = monthNames[monthIndex] + ' ' + today.getFullYear()
        const date = new Date(today.getFullYear(), monthIndex, 1);
        monthData[0][date.getDay()] = 1;
        for (let j = 0; j < date.getDay(); j++) {
            if (monthData[0][j] === -1) {
                monthData[0][j] = 0
            }
        }
        date.setDate(date.getDate() + 1);
        const result = [];
        while (date.getMonth() == monthIndex) {
            result.push(`${date.getDate()}-${date.getDay()}`);
            let dayOfWeek = date.getDay();
            for (let i = 0; i < 7; i++) {
                if ((monthData[i] || [])[dayOfWeek] === -1) {
                    monthData[i][dayOfWeek] = date.getDate();
                    break
                }
            }
            date.setDate(date.getDate() + 1);
        }
        return (
            <div className="mt-4">
                <p className="text-2xl font-['Butler'] text-black">My Data</p>
                <div className="mt-4 font-['Proxima_Nova']">
                    <p className="font-semibold text-[13px] uppercase mb-1">{currentMonth}</p>
                    <div className="rounded-md bg-color-gray flex justify-around py-1">
                        <span className="font-semibold text-sm">Mon</span>
                        <span className="font-semibold text-sm">Tue</span>
                        <span className="font-semibold text-sm">Wed</span>
                        <span className="font-semibold text-sm">Thu</span>
                        <span className="font-semibold text-sm">Fri</span>
                        <span className="font-semibold text-sm">Sat</span>
                        <span className="font-semibold text-sm">Sun</span>
                    </div>
                    <div className="mt-2 grid grid-cols-7 gap-2 justify-around align-middle items-center">
                        {monthData.map((items, index) => {
                            return items.map((day) => {
                                if (day > 0) {
                                    let thisMonth = today.getMonth() + 1;
                                    let fullDateText: string = today.getFullYear() + '-' + (thisMonth < 10 ? '0' + thisMonth : thisMonth) + '-' + (day < 10 ? '0' + day : day);
                                    if (fullDateText in this.state.data) {
                                        let data = null;
                                        Object.entries(this.state.data).forEach(([key, value], index) => {
                                            if (key === fullDateText){
                                                data = value.date;
                                            }
                                        });
                                        if (data) {
                                            if (day === today.getDate()) {
                                                return (
                                                    <Link to={"/heart-journal/archive/" + fullDateText} key={day + '-' + index}>
                                                        <div className="flex justify-center" key={day + '-' + index}>
                                                            <div className="mask mask-circle">
                                                                <div
                                                                    className="w-7 h-7 bg-data-heart flex justify-center items-center">
                                                    <span
                                                        className="text-sm font-semibold p-1 text-center text-white">{day}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            } else {
                                                return (
                                                    <Link to={"/heart-journal/archive/" + fullDateText} key={day + '-' + index}>
                                                        <div className="flex justify-center"  key={day + '-' + index}>
                                                            <div className="mask mask-heart">
                                                                <div
                                                                    className="w-7 h-7 bg-data-heart flex justify-center items-center">
                                                    <span
                                                        className="text-sm font-semibold p-1 text-center text-white">{day}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                            }
                                        } else {
                                            if (day === today.getDate()) {
                                                return (
                                                    <div className="flex justify-center"  key={day + '-' + index}>
                                                        <div className="mask mask-circle">
                                                            <div
                                                                className="w-7 h-7 bg-color-text-primary flex justify-center items-center">
                                                    <span
                                                        className="text-sm font-semibold p-1 text-center text-white">{day}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <span key={day + '-' + index}
                                                        className="text-sm font-semibold p-1 text-center text-black">{day}</span>
                                                )
                                            }
                                        }
                                    }
                                } else {
                                    return (
                                        <span></span>
                                    )
                                }
                            })
                        })}
                    </div>
                </div>
            </div>
        );
    }
}