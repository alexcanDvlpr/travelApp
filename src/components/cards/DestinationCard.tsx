import { Avatar, AvatarGroup, Card, CardBody, CardFooter, Heading, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";


const DestinationCard = ({ destination }: { destination: any }) => {
    return (
        <Link href={`/dashboard/destinations/${destination._id}`}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={15}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={destination.picture}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{destination.name}</Heading>
                        <Heading size='sm'>{destination.destination}</Heading>
                    </CardBody>

                    <CardFooter>
                        <AvatarGroup size='md' max={5}>
                            {
                                destination.people && destination.people.map((person: any) => (
                                    <Avatar key={person.email} name={person.email} src={person.picture} />
                                ))
                            }
                        </AvatarGroup>
                    </CardFooter>
                </Stack>
            </Card>
        </Link>
    )
}

export default DestinationCard;