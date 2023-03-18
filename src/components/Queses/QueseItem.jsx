import { Button, Card, CardGrid, Div, Paragraph, Title } from "@vkontakte/vkui"
import './index.css'
import { useRouter } from "@happysanta/router"
import { PAGE_PRODUCT_ITEM } from "../.."

const QuestionItem = ({
    id,
    title,
    description,
    questionsLength
}) => {
    const router = useRouter()
    return <CardGrid size="l">
        <Card mode="shadow">
            <Div className="quesesItem">
                <Button onClick={() => router.pushPage(PAGE_PRODUCT_ITEM, {id: id})} className="queseTitle">{title}</Button>
                <Paragraph className="queseDescription">{description}</Paragraph>
            </Div>
        </Card>
    </CardGrid>
}

export default QuestionItem