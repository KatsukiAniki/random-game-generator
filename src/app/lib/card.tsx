import MotionPage from "./motion";

interface CardProps{
    title : string;
    price: string;
    genre: string;
    score: string;
    link: string;
    description: string;
}

export default function Card(card: CardProps){



    return(
            <div className="flex justify-center w-1/2 h-4/5 border border-blue-600">
                {/* Title */}
                <h1>{card.title ? card.title : "Example Title"}</h1>

                {/* Content */}
                <div>
                    {/* Price */}
                    {/* Genre */}
                    {/* Score */}
                    {/* Link to Game */}
                    {/* Description */}
                </div>
            </div>
    )
}