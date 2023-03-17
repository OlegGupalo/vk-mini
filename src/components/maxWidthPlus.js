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
                        disabled={activeStory === 'feed'}
                        style={
                            activeStory === 'feed'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                                }
                            : {}
                        }
                        data-story="feed"
                        onClick={onStoryChange}
                        before={<Icon28Newsfeed />}
                    >
                    Главная
                    </Cell>
                    <Cell
                        disabled={activeStory === 'questions'}
                        style={
                            activeStory === 'questions'
                            ? {
                                backgroundColor: 'var(--vkui--color_background_secondary)',
                                borderRadius: 8,
                                }
                            : {}
                        }
                        data-story="questions"
                        onClick={onStoryChange}
                        before={<Icon28Newsfeed />}
                    >
                    Вопросы
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
                    disabled={activeStory === 'clips'}
                    style={
                        activeStory === 'clips'
                        ? {
                            backgroundColor: 'var(--vkui--color_background_secondary)',
                            borderRadius: 8,
                            }
                        : {}
                    }
                    data-story="clips"
                    onClick={onStoryChange}
                    before={<Icon28Newsfeed />}
                    >
                    clips
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