

const DestinationDetailsPage = async({params}) => { 

    const {id} = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();   
    console.log(destination);

    return (
        <div>
            Destination
        </div>
    );
};

export default DestinationDetailsPage;