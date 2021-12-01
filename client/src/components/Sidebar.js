import '../styles/sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="title-container">
                <h2>Filter</h2>
            </div>
            <div className="filter-group-container">
                <h4>Color</h4>
                <input type="checkbox" />
                <label htmlFor="">Blue</label>
            </div>
            <div className="filter-group-container">
                <h4>Size</h4>
                <div className="inputs-container">
                    <input type="checkbox" />
                    <label htmlFor="">S</label>
                    <input type="checkbox" />
                    <label htmlFor="">M</label>
                    <input type="checkbox" />
                    <label htmlFor="">L</label>
                    <input type="checkbox" />
                    <label htmlFor="">XL</label>
                    <input type="checkbox" />
                    <label htmlFor="">XXL</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
