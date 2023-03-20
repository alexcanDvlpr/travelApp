import { Avatar, Box, Flex, Heading, TabPanel, Text } from "@chakra-ui/react"

export const UsersTravelPanel = ({ people }: { people: any }) => {
    return (
        <TabPanel>
            {people && people.map((person: any) => (
                <UserTravelSection key={person.email} data={person} />
            ))}
        </TabPanel>
    )
}

const UserTravelSection = ({ data }: { data: any }) => (
    <Flex mb={5}>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar size='xl' src={data.picture} name={data.email} />

            <Box>
                <Heading size='sm'>{data.name}</Heading>
                <Text>{data.email}</Text>
            </Box>
        </Flex>
    </Flex>
)