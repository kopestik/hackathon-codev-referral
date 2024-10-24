import { Divider } from "@nextui-org/react"
import { RewardItem } from "./RewardItem"

export const RewardsContainer = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5 mx-20">
                {items.map(({name,points}) => (
                    <RewardItem name={name} points={points} image={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/300`} />
                ))}
            </div>

            <Divider className="my-8" />

            <span className="text-2xl">Conversion</span>
            <div className="grid grid-cols-3 gap-5 mx-20 mt-5">
                {conversion.map(({name,points}) => (
                    <RewardItem name={name} points={points} image={`https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/200/300`} />
                ))}
            </div>
        </>
    )
}

const items = [
    {
        name: "Playstation 5 Disc",
        points: "1,000"
    },{
        name: "Steam Deck Oled",
        points: "1,500"
    },{
        name: "Tesla Cybertruck LTD",
        points: "50,000"
    },{
        name: "Surly Midnight Special",
        points: "2,500"
    },{
        name: "Specialized Chisel HT",
        points: "3,000"
    },{
        name: "Nike Vaporfly 3 LE",
        points: "500"
    },{
        name: "Macbook Pro 16 M3",
        points: "3,000"
    },
    {
        name: "House & Lot 500sqm",
        points: "35,000"
    },{
        name: "Trip to Japan 3D",
        points: "10,000"
    },
]

const conversion = [
    {
        name: "Points to Cash",
        points: "999"
    },
    {
        name: "Points to PTO",
        points: "999"
    }
]