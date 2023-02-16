import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import image from "./assets/images/image-product-desktop.jpg";

function App() {
  return (
    <div className="App">
      <main>
        <article className="card">
          <section className="image">
            <img src={image} alt="Product" />
          </section>
          <section className="content">
            <span className="category">perfume</span>
            <h1 className="title">Gabrielle Essence Eau De Perfum</h1>
            <p className="description">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="prices">
              <span className="current-price">$149.99</span>
              <span className="previous-price">$169.99</span>
            </div>
            <button className="add2cart">
              <i className="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart
            </button>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
