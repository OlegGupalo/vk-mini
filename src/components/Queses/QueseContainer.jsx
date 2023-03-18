import { useParams, useRouter } from "@happysanta/router"
import { Panel, PanelHeader, PanelHeaderBack, Placeholder } from "@vkontakte/vkui"

const QueseContainer = ({
    ids
}) => {
    const router = useRouter()
    const {id} = useParams()
    console.log("id", id)
    return <Panel id={ids}>
        <PanelHeader 
            before={<PanelHeaderBack onClick={() => router.popPage()} />}
        >
            Product
        </PanelHeader>
        <Placeholder>
            product id - {id}
        </Placeholder>
    </Panel>
}

export default QueseContainer