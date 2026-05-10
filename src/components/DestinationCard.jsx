import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { LuExternalLink, LuMap, LuMapPin } from "react-icons/lu";


const DestinationCard = ({ destination }) => {

    const { _id, imageUrl, price, destinationName, duration, country } = destination;

    return (
        <div className="mt-6 shadow-lg rounded-xl border">

            <Image
                alt={destinationName}
                src={`${imageUrl}?w=800&q=80`}
                height={400}
                width={400}
                className="w-full rounded-xl object-cover h-60 max-w-100"
            />
            <div className="px-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <LuMapPin />
                    <span>{country}</span>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold py-2">{destinationName}</h3>
                    <h4 className="font-semibold text-gray-500">${price}/person</h4>
                </div>
                <div className="flex gap-2 items-center">
                    <FaRegCalendar /> {duration}
                </div>
            </div>
            <div>
                <Link href={`/destination/${_id}`}>
                    <Button variant="ghost" className={'flex items-center gap-1 text-blue-600 font-semibold text-md mb-2 underline underline-text-blue-600'} >
                        <span><LuExternalLink /></span>
                        Book Now
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;