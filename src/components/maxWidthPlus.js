import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic, useAdaptivityConditionalRender, Tabbar, TabbarItem, Badge, usePlatform, Platform, PanelHeader, Panel, Cell, Group, Counter, PanelHeaderBack, Placeholder, Button } from '@vkontakte/vkui';
import { Icon28AccessibilityOutline, Icon28MessageOutline, Icon28Newsfeed, Icon28NewsfeedOutline, Icon28UserCircleOutline } from '@vkontakte/icons';


const PlusWidth = ({
    viewWidth,
    isVKCOM,
    activeStory,
    onStoryChange,

}) => {
    return <Panel>
                {isVKCOM && <PanelHeader />}
                <Group>
                    <Cell
                        disabled={activeStory === 'home'}
                        style={
                            activeStory === 'home'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                                }
                            : {}
                        }
                        data-story="home"
                        onClick={onStoryChange}
                        before={<Icon28Newsfeed />}
                    >
                    Главная
                    </Cell>
                    <Cell
                        disabled={activeStory === 'create'}
                        style={
                            activeStory === 'create'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                                }
                            : {}
                        }
                        data-story="create"
                        onClick={onStoryChange}
                        before={<Icon28Newsfeed />}
                    >
                    Создать
                    </Cell>
                    <Cell
                        disabled={activeStory === 'friends'}
                        style={
                            activeStory === 'friends'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                                }
                            : {}
                        }
                        data-story="friends"
                        onClick={onStoryChange}
                        before={<Icon28Newsfeed />}
                        >
                            Друзья
                    </Cell>
                    <Cell
                    disabled={activeStory === 'profile'}
                    style={
                        activeStory === 'profile'
                        ? {
                            backgroundColor: 'var(--vkui--color_background_secondary)',
                            borderRadius: 8,
                            }
                        : {}
                    }
                    data-story="profile"
                    onClick={onStoryChange}
                    before={<Icon28Newsfeed />}
                    >
                    Профиль
                    </Cell>
                </Group>
            </Panel>
}

export default PlusWidth