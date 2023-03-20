import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Text, Checkbox, Avatar, Flex } from '@chakra-ui/react';
import { UsersTravelPanel } from './UserTabPanels';

const TravelingTabPanel = ({ people, points }: { people: any, points: any }) => {
    return (
        <Tabs isFitted>
            <TabList>
                <Tab>Puntos de Interés</Tab>
                <Tab>Compañía</Tab>
            </TabList>

            <TabPanels>
                <ShipPointsPanel points={points} />
                <UsersTravelPanel people={people} />
            </TabPanels>
        </Tabs>
    )
}

const ShipPointsPanel = ({ points }: { points: any }) => {
    if (!points || points.length === 0) {
        return (<Button>Añadir monumentos</Button>)
    }

    return (
        <TabPanel>
            {
                points && points.map((monument: any) => (
                    <MonumentSection monument={monument} key={monument.name} />
                ))
            }
        </TabPanel>
    )
}

const MonumentSection = ({ monument }: { monument: any }) => {
    const handlerOnChange = (evt: any) => {
        console.log(evt.target.value)
    }
    return (
        <Checkbox my={5} value={monument.viewed} isChecked={monument.viewed} onChange={handlerOnChange}>
            <Flex alignItems={'center'}>
                <Avatar mr={5} size='md' src={monument.picture} name={monument.name} />
                <Text fontSize={'xl'}>{monument.name}</Text>
            </Flex>
        </Checkbox>
    )
}

export default TravelingTabPanel;