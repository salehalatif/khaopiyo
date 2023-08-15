
import './App.css';
import Header from './components/Header';
import BannerInfo from './components/BannerInfo';
import CategoryList from './components/CategoryList';
import CategoryWiseMenu from './components/CategoryWiseMenu';
import DeliveryAddres from './components/DeliveryAddres';
import Footer from './components/Footer';

import categories from './json/categories.json';
import items from './json/items.json';

//console.log(JSON.stringify(items));
function App() {
    return (
        <>
            <Header />
            <BannerInfo />

            {/* content body */}
            <section className="main ">
                <CategoryList categories={categories} />
                <DeliveryAddres />
                <CategoryWiseMenu categories={categories} items={items}/>
            </section>

            <Footer />
        </>

    );
}

export default App;
