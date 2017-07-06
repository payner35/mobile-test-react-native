
import { StackNavigator } from 'react-navigation';



//screens
import NewsList from '../modules/news/containers/newsList';

const Routes = {
    Home: { screen: NewsList }
};


const AppNavigator = StackNavigator(Routes, {
    navigationOptions: {
        title: ({ state }) => {
            if (state.params) {
                return `${state.params.title}`;
            }
        }
    }
});

export default AppNavigator;
