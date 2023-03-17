import { Card, CardGrid, Div, Paragraph, Title } from "@vkontakte/vkui"
import './index.css'

const QuestionItem = ({
    id,
    title,
    description,
    questionsLength
}) => {
    return <CardGrid size="l">
        <Card mode="shadow">
            <Div className="quesesItem">
                <Title className="queseTitle">{title}</Title>
                <Paragraph className="queseDescription">{description}</Paragraph>
            </Div>
        </Card>
    </CardGrid>
}

export default QuestionItem