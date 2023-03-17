import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { 
	View, 
	AdaptivityProvider, 
	AppRoot, 
	ConfigProvider, 
	SplitLayout, 
	SplitCol, 
	Epic, 
	useAdaptivityConditionalRender, 
	Tabbar, 
	TabbarItem, 
	Badge, 
	usePlatform, 
	Platform, 
	PanelHeader, 
	Panel, 
	Group, 
	PanelHeaderBack, 
	Placeholder, 
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home/Home';
import Persik from './panels/Home/Persik';
import Questions from './panels/Questions/Questions';
import { Icon28AccessibilityOutline, Icon28MessageOutline, Icon28Newsfeed, Icon28NewsfeedOutline, Icon28UserCircleOutline } from '@vkontakte/icons';
import PlusWidth from './components/maxWidthPlus';
import Create from './panels/Create/Create.';


const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const platform = usePlatform();
	const { viewWidth } = useAdaptivityConditionalRender();
	const [activeStory, setActiveStory] = React.useState('home');
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	const isVKCOM = platform !== Platform.VKCOM;

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
				<SplitLayout
					header={isVKCOM && <PanelHeader separator={false} />}
					style={{ justifyContent: 'center' }}
					>
					{viewWidth.tabletPlus && (
						<SplitCol className={viewWidth.tabletPlus.className} width={280} maxWidth={280}>
							<PlusWidth 
								viewWidth={viewWidth}
								isVKCOM={isVKCOM}
								activeStory={activeStory}
								onStoryChange={onStoryChange}
							/>
						</SplitCol>
					)}

      <SplitCol width="100%" maxWidth="800px" stretchedOnMobile autoSpaced>
        <Epic
          activeStory={activeStory}
          tabbar={
            viewWidth.tabletMinus && (
              <Tabbar className={viewWidth.tabletMinus.className}>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'home'}
                  data-story="home"
                  text="Главная"
                >
                  <Icon28Newsfeed />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'friends'}
                  data-story="friends"
                  text="Друзья"
                >
                  <Icon28NewsfeedOutline />
                </TabbarItem>
				<TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'create'}
                  data-story="create"
                  text="Создать"
                >
                  <Icon28NewsfeedOutline />
                </TabbarItem>
              </Tabbar>
            )
          }
        >
          <View id="profile" activePanel="profile">
            <Questions id="feed" go={onStoryChange} />
          </View>
          <View id="home" activePanel="home">
            <Home id={activeStory} go={onStoryChange} fetchedUser={fetchedUser} />
          </View>
          <View id="friends" activePanel="friends">
            <Questions id='friends' />
          </View>
          <View id="create" activePanel="create">
            <Create id="create" fetchedUser={fetchedUser} />
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader before={<PanelHeaderBack />}>Профиль</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder
                  icon={<Icon28UserCircleOutline width={56} height={56} />}
                ></Placeholder>
              </Group>
            </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
