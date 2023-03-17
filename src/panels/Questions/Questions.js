import { Button, Div, Group, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { useState } from "react"

const Questions = ({
    id, go, fetchedUser
}) => {
    const [count, setCount] = useState(0);

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}>Вопросы</PanelHeader>
            <Group>
                <Div>
                    <Button className='HomeMenu' stretched size="l" mode="secondary" >
                        Show me the Persik, please
                    </Button>
                    <Button stretched size="l" mode="secondary">
                        Show me the questions, please
                    </Button>
                </Div>
            </Group>
        </Panel>
    )
}

export default Questions