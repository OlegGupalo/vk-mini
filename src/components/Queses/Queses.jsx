import { Div, Group } from "@vkontakte/vkui"
import QuestionItem from "./QueseItem"

const queses = [
    {
        id: '0',
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",
        questions: [
            {
                quese: "Солнце это планета или звезда?",
                answer: "Звезда"
            }
        ]
    },
    {
        id: '1',
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: '2',
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: '3',
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: '4',
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    },
    {
        id: '5',
        title: "Игра престолов",
        questionsLength: 8,
        description: "2 сезон",

    }
]

const Queses = () => {
    return <Div>
        {queses.map(items => {
            return (
                <Group mode="plain" key={items.id}>
                    <QuestionItem {...items} />
                </Group>
            ) 
            
        })}
    </Div>
}

export default Queses