import { Div } from "@vkontakte/vkui"
import './index.css'

const QuestionItem = ({
    id,
    title,
    questionsLength
}) => {
    return <Div className="quesesItem">
        {title}
    </Div>
}

export default QuestionItem