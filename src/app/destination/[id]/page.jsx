import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";


const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();

    const { _id, imageUrl, price, destinationName, duration, country, description } = destination;

    return (
        <div className="max-w-7xl mx-auto ">
            <Image
                alt={destinationName}
                src={`${imageUrl}?w=800&q=80`}
                height={300}
                width={700}
                className="rounded-xl"
            />
            <div className="px-4">
                <div className="flex items-center gap-2 text-xl text-gray-500 mt-4">
                    <LuMapPin />
                    <span>{country}</span>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-4xl font-semibold py-2">{destinationName}</h3>
                    <h4 className="font-semibold text-xl text-gray-500">${price}/person</h4>
                </div>
                <div className="flex gap-2 items-center">
                    <FaRegCalendar /> 
                    {duration}
                </div>
                <div>
                    <h2 className="text-2xl pt-8 font-semibold">Overview</h2>
                    <p className="text-gray-500 font-semibold">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;