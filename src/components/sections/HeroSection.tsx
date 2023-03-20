import { useAuth0 } from '@auth0/auth0-react';
import {
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    return (
        <Stack minH={'calc(100vh - 60px)'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            Traveling
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Organiza tus viajes
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        ¡Organiza tu viaje perfecto con amigos! Únete y crea un viaje en cuestión de minutos.
                    </Text>
                    {
                        !isLoading && <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            {
                                !isAuthenticated ? (
                                    <Button
                                        onClick={() => loginWithRedirect()}
                                        rounded={'full'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Iniciar Sesión
                                    </Button>
                                ) : (
                                    <Link href="/dashboard">
                                        <Button
                                            onClick={() => loginWithRedirect()}
                                            rounded={'full'}
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Ir al panel
                                        </Button>
                                    </Link>
                                )
                            }
                        </Stack>}
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    }
                />
            </Flex>
        </Stack>
    );
}