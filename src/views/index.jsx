// import Article from './Article'
// import Login from './Login'
// import NotFound from './NotFound'
// import ArticleList from './Article'
// import ArticleEdit from './Article/Edit'
// import Loadable from "../Loadable";
import Loadable from "react-loadable";
import Loading from '../components/Loading'
//实现懒加载 Loading
const Dashboard = Loadable({
    loader:()=>import('./Dashboard'),
    loading:Loading
})
const Login = Loadable({
    loader:()=>import('./Login'),
    loading:Loading
})
const Article = Loadable({
    loader:()=>import('./Article'),
    loading:Loading
})
const NotFound = Loadable({
    loader:()=>import('./NotFound'),
    loading:Loading
})
const ArticleEdit = Loadable({
    loader:()=>import('./Article/Edit'),
    loading:Loading
})
const ArticleList = Loadable({
    loader:()=>import('./Article/List'),
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


