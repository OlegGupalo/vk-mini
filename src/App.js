import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Epic, useAdaptivityConditionalRender, Tabbar, TabbarItem, Badge, usePlatform, Platform, PanelHeader, Panel, Cell, Group, Counter, PanelHeaderBack, Placeholder, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home/Home';
import Persik from './panels/Home/Persik';
import Questions from './panels/Questions/Questions';
import { Icon28AccessibilityOutline, Icon28MessageOutline, Icon28Newsfeed, Icon28NewsfeedOutline, Icon28UserCircleOutline } from '@vkontakte/icons';
import PlusWidth from './components/maxWidthPlus';


const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const platform = usePlatform();
	const { viewWidth } = useAdaptivityConditionalRender();
	const [activeStory, setActiveStory] = React.useState('feed');
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

      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <Epic
          activeStory={activeStory}
          tabbar={
            viewWidth.tabletMinus && (
              <Tabbar className={viewWidth.tabletMinus.className}>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'feed'}
                  data-story="feed"
                  text="Главная"
                >
                  <Icon28Newsfeed />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === 'profile'}
                  data-story="profile"
                  text="Новости"
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
          <View id="feed" activePanel="feed">
            <Home id={activeStory} go={onStoryChange} fetchedUser={fetchedUser} />
          </View>
          <View id="friends" activePanel="friends">
            <Questions id='friends' />
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader before={<PanelHeaderBack />}>Клипы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>
              </Group>
            </Panel>
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
