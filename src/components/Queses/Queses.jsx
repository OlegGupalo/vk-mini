import { Div, Group } from "@vkontakte/vkui"
import QuestionItem from "./QueseItem"

const queses = [
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",
    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    }
]

const Queses = () => {
    return <Div>
        {queses.map(items => {
            return (
                <Group mode="plain">
                    <QuestionItem id={items.id} {...items} />
                </Group>
            ) 
            
        })}
    </Div>
}

export default Queses