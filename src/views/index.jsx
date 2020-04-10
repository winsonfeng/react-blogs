// import Article from './Article'
import Login from './Login'
import NotFound from './NotFound'
import ArticleList from './Article'
import ArticleEdit from './Article/Edit'
import Loadable from "../Loadable";
import Loading from '../components/Loading'
//实现懒加载 Loading
const Dashboard = Loadable({
    loader:import('./Dashboard'),
    loading:Loading
})

const Article = Loadable({
    loader:import('./Article'),
    loading:Loading
})
export {
    Dashboard,
    Article,
    Login,
    NotFound,
    ArticleEdit,
    ArticleList
}


