import Container from '@mui/material/Container';
import Navbar from "./components/navbar/Navbar.jsx";
import Slides from "./components/slider/Slides.jsx";
import Categories from "./components/categories/Categories.jsx"
import Cart from './components/cart/Cart.jsx';

const routes = [
    {
        routeRole: "",
        type: "collapse",
        route: "/",
        component: <>
            <Navbar />
            <Slides />
            <Container maxWidth="lg"><Categories /></Container>
        </>,
    },
    {
        routeRole: "",
        type: "collapse",
        route: "/cart",
        component: <Cart />
    },
]
export default routes;