import { Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Articles from "../Articles/Articles"
import Admin from "../Admin/Admin"
import Products from "../Products/Products"
import Contact from "../Contact/Contact"
import NotFound from '../NotFound/NotFound';
import SingleProducts from "../Products/SingleProducts";
import Sales from "../Admin/Sales";
import Sellers from '../Admin/Sellers';
import User from '../Admin/User';
import Page from '../Admin/Page';




const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProducts />} />

                <Route path='articles' element={<Articles />} />

                <Route path='/admin' element={<Admin />} >
                    <Route path="sales" element={<Sales />} />
                    <Route path="sellers" element={<Sellers />} />
                    <Route path="users" element={<User />} />
                    <Route path="Page" element={<Page />} />
                </Route >

                <Route path='/contact' element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    )
}

export default AllRoutes