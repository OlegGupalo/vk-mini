import { Button, Div, Group, Panel, PanelHeader, PanelHeaderBack, Paragraph } from "@vkontakte/vkui";
import { useState } from "react"

const Questions = ({
    id, go, fetchedUser,friends = null
}) => {
    const [count, setCount] = useState(0);
    console.log(friends)
    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home"/>}>Друзья</PanelHeader>
            <Group>
                <Div>
                    {friends && friends.map((e,key) => {
                        return <Paragraph key={key}>{e.first_name}</Paragraph>
                    })}
                </Div>
            </Group>
        </Panel>
    )
}

export default Questions