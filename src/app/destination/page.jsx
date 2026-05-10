import DestinationCard from "@/components/DestinationCard";


const DestinationPage = async () => {

    const res = await fetch('http://localhost:5000/destination');
    const destination = await res.json();


    return (
        <div className="max-w-[90%] mx-auto">
            <h1 className="text-2xl font-semibold mt-4">All Destinations</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">
                {
                    destination.map(dest => <DestinationCard key={dest._id} destination={dest} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;