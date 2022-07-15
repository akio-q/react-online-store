import { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.product = props.product;

        // this.state = {

        // }
    }

    render () {
        const { images, rating, price, title, category } = this.product;

        return (
            <div className="product">
                <div className="product__image-wrapper">
                    <img src={images[0]}
                     className="product__image"
                    alt="Photo" />
                </div >
                <div className="product__content">
                    <div className="product__block-rating-and-price">
                    <div className="product__rating">
                        <div className="product__rating-count">{rating}</div>
                        <i className="icon-star"></i>
                    </div>
                    <div className="product__price">{price}</div>
                    </div>
                    <div className="product__about">{title}</div>
                    <div className="product__category">{category}</div>
                </div>
                <button className="product__button" data-element="cardBtn">ADD TO CART</button>
            </div>
        );
    }
}