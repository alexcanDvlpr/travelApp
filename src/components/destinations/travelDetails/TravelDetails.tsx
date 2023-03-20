import { Box, Center, Heading, Text } from "@chakra-ui/react";
import TravelingTabPanel from "../tabPanel/TravelingTabPanel";

const TravelDetails = ({ info }: { info: any }) => {
    return (
        <Box className="w-full h-full bg-gray-200 rounded-t-2xl mt-6">
            <Box className="pt-2 px-4">
                <Center>
                    <Heading as={'h2'} size="xl">{info.name}</Heading>
                </Center>
                <Box py={3}>
                    <Text>🛫 {info.shipDate.start} / {info.shipDate.end} 🛬</Text>
                    <Text>{info.flag} {info.destination}</Text>
                </Box>
                <Box>
                    <TravelingTabPanel points={info.monuments} people={info.people} />
                </Box>
            </Box>
        </Box>
    )
}

export default TravelDetails;