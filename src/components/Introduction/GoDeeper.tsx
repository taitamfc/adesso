import {Component} from "react";

const CarouselItems = [
    {
        "id": "what_to_eat_to_lower_your_cholesterol",
        "title": "What to eat to lower your cholesterol",
        "image": "images/deeper/1.png",
        "link": "#"
    },
    {
        "id": "juicing_for_a_healthy_heart",
        "title": "Juicing for a healthy heart",
        "image": "images/deeper/2.png",
        "link": "#"
    },
    {
        "id": "what_to_eat_to_lower_your_cholesterol_2",
        "title": "What to eat to lower your cholesterol",
        "image": "images/deeper/1.png",
        "link": "#"
    },
    {
        "id": "juicing_for_a_healthy_heart_2",
        "title": "Juicing for a healthy heart",
        "image": "images/deeper/2.png",
        "link": "#"
    }
]

type States = {
    items: {
        id: string,
        title: string,
        image: string,
        link: string
    }[]
}

export class GoDeeper extends Component<any, States> {
    constructor(props: any) {
        super(props);
        this.getCarouselData();
    }

    getCarouselData() {
        this.state = {
            items: CarouselItems
        }
    }

    render() {
        return (
            <div className="w-full mt-4">
                <p className="text-2xl font-['Butler'] text-black capitalize">Go Deeper</p>
                <div className="bg-transparent mt-2">
                    <div className="carousel carousel-center max-w-lg space-x-3">
                        {this.state.items.map((item) => {
                            return (
                                <div key={item.id} className="carousel-item flex flex-col items-center justify-center">
                                    <div className="aspect-video rounded-box">
                                        <img src={item.image} className="w-full h-auto max-w-carousel-item rounded"/>
                                    </div>
                                    <a className="max-w-carousel-item text-black capitalize" href={item.link}>{item.title}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex justify-end">
                    <a className="mt-3 underline underline-offset-3
                text-color-primary decoration-color-primary float-right text-sm font-normal">Go Deeper Library</a>
                </div>
            </div>
        );
    }
}