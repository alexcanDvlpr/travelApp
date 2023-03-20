import TravelDetails from "@/components/destinations/travelDetails/TravelDetails";
import { getSingleDestinationById } from "@/data/destinations";
import GenericLayout from "@/layouts/GenericLayout";
import { Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const DestinationSinglePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const destination = getSingleDestinationById(Number(id));

    if (!destination) {
        return <div>Loading</div>
    }

    return (
        <Box className="w-full h-screen bg-red relative">
            <Box className="absolute top-0 right-0">
                <Image src={destination.picture} alt={destination.name} />
            </Box>
            <Box className="absolute bottom-0 right-0 w-full h-3/4">
                <TravelDetails info={destination} />
            </Box>
        </Box>
    )
}

DestinationSinglePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <GenericLayout>
                {page}
            </GenericLayout>
        </>
    )
}

export default DestinationSinglePage;