import Dish from './pages/Dish/Dish';
import AddDish from './pages/AddDish/AddDish';

const routers = [
    {
        name: "Danh sách món ăn",
        link: "/dish",
        component: Dish,
        isNav: "yes"
    },
    // {
    //     name: "Posts",
    //     link: "/posts",
    //     component: Posts,
    //     isNav: "yes"
    // },
    // {
    //     name: "Music",
    //     link: "/music",
    //     component: Music,
    //     isNav: "yes"
    // },
    // {
    //     name: "Sports",
    //     link: "/sports",
    //     component: Sports,
    //     isNav: "yes"
    // },
    // {
    //     name: "News",
    //     link: "/news",
    //     component: Home,
    //     isNav: "yes"
    // },
    // {
    //     name: "Contact",
    //     link: "/contact",
    //     component: Home,
    //     isNav: "yes"
    // },
    // {
    //     link: "/post/:stub/:id",
    //     component: PostID,
    //     isNav: "no"
    // },
    // {
    //     link: "/music-page/:country/:stub/:id",
    //     component: PostID,
    //     isNav: "no"
    // },
    // {
    //     link: "/sport-page/:sport/:stub/:id",
    //     component: PostID,
    //     isNav: "no"
    // },
    {
        name: "Thêm món ăn",
        link: "/add-dish",
        component: AddDish,
        isNav: "yes"
    }
]


export {
    routers as routers
}