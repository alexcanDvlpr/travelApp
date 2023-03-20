import DestinationCard from "@/components/cards/DestinationCard";
import GenericLayout from "@/layouts/GenericLayout";
import { ReactElement } from "react";
import { destinations } from "../../../data/destinations";

const DestinationsPage = () => {
    return (
        destinations && destinations.map(destination => (
            <DestinationCard destination={destination} key={destination._id} />
        ))
    )
}

DestinationsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <GenericLayout>
                {page}
            </GenericLayout>
        </>
    )
}

export default DestinationsPage;