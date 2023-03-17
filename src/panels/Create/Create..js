import {
	PanelHeader, 
	Panel, 
	Group, 
    Cell,
    Header
} from '@vkontakte/vkui';

const Create = ({
    id,
    fetchedUser
}) => {
    return ( 
        <Panel id={id}>
            <PanelHeader>Создать</PanelHeader>
            {fetchedUser &&
            <Group>
                
            </Group>}

            <Group>
                Создать
            </Group>
        </Panel>
    )
}

export default Create