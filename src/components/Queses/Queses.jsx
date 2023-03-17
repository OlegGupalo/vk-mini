import { Div } from "@vkontakte/vkui"
import QuestionItem from "./QueseItem"

const queses = [
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8
    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8
    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8
    },
    {
        id: 0,
        title: "Игра престолов",
        questionsLength: 8
    }
]

const Queses = () => {
    return <Div>
        {queses.map(items => {
            return <QuestionItem id={items.id} {...items} />
        })}
        <Div>tsal</Div>
    </Div>
}

export default Queses