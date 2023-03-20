import GenericLayout from "@/layouts/GenericLayout";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Center, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

const ProfilePage = () => {
    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) return <div>Cargando...</div>

    return (
        <Container mt={4}>
            <Center>
                <Avatar size='xl' src={user?.picture} name={user?.nickname} />
            </Center>
            <Center>
                <VStack>
                    <Heading as={'h1'} mt={10}>{user?.email}</Heading>
                    <Heading as='h3' size='lg'>
                        {user?.locale === "es" ? "🇪🇸" : "🇬🇧"}{' '}{user?.nickname}
                    </Heading>
                </VStack>
            </Center>
        </Container>
    );
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <GenericLayout>
                {page}
            </GenericLayout>
        </>
    )
}

export default ProfilePage;