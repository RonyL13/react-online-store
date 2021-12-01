import "../styles/home.css"

const Home = () => {
    return (
        <div>
            <div className="welcome-banner">
                <h1>Beauty Is Power</h1>
                <img src="https://assets.vogue.com/photos/615cb9788b6ad31d46ef2976/16:9/w_2560%2Cc_limit/00_story.jpg" alt="" />
            </div>
            <div className="categories-banner">
                <h1>Shop By Category</h1>
                <div className="categories">
                    <a href ="" className="category-container">
                            <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/tshirt-1024.png" alt="" />
                            <h6>T-Shirts</h6>
                    </a>
                    <a href="" className="category-container">
                        <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/dress-1024.png" alt="" />
                        <h6>Dresses</h6>
                    </a>
                    <a href="" className="category-container">
                        <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/hoodie-1024.png" alt="" />
                        <h6>Hoodies</h6>
                    </a>
                    <a href="" className="category-container">
                        <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/jacket-1024.png" alt="" />
                        <h6>Coats</h6>
                    </a>
                    <a href="" className="category-container">
                        <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/head-1024.png" alt="" />
                        <h6>Hats</h6>
                    </a>
                    <a href="" className="category-container">
                        <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/trainers-1024.png" alt="" />
                        <h6>Shoes</h6>
                    </a>
                    <a href="" className="category-container">
                        <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/trousers-1024.png" alt="" />
                        <h6>Bottoms</h6>
                    </a>
                    <a href="" className="category-container">
                        <img src="https://cdn3.iconfinder.com/data/icons/clothing-set-2/64/jacketcoat-1024.png" alt="" />
                        <h6>Formal</h6>
                    </a>
                    </div>
            </div>
        </div>
    )
}

export default Home
