
const ProductCard = ({ product }) => {
    return (
        <div className="product">
            <div className="product__percent" >
                <img src="./assets/percent.png" alt="Percent " />
            </div>
            <img src={product.img} alt={product.title} className="product__img" />
            <img src="./assets/like.png" alt="Like" className="product__like" />
            <p className="product__title">{product.title}</p>
            <h2 className="product__price">{product.price}</h2>
            <a href="#" className="product__add">
                <img src="./assets/plus-blue.png" alt="Add" />
            </a>

        </div>
    )
}

export default ProductCard