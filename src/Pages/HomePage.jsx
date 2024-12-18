const HomePage = () => {
    const featuredItems = [
  { id: 1, name: "Special Pizza", description: "Cheesy and delicious!", price: "Rs.999" },
  { id: 2, name: "Pasta Alfredo", description: "Creamy alfredo sauce.", price: "Rs.599" },
  { id: 3, name: "Salad", description: "Fresh and healthy.", price: "Rs.249" },
];

const promotions = [
  { id: 1, name: "Holiday Special", details: "20% off on all orders!" },
  { id: 2, name: "Free Delivery", details: "On orders over Rs.699" },
];

    return (
      <div className="homepage" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <section className="welcome-section">
          <h1 style={{fontSize:60}}>Welcome to Our Restaurant!</h1>
          <p>Discover our delicious menu and enjoy special deals just for you.</p>
        </section>
  
        <section className="featured-items">
          <h2 className="popular-head">Popular Menu Items</h2>
          <div className="menu-items">
            {featuredItems.map((item) => (
              <div key={item.id} className="menu-item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </section>
  
        <section className="promotions">
          <h2>Current Promotions</h2>
          <div className="promotion-items">
            {promotions.map((promo) => (
              <div key={promo.id} className="promotion-item">
                <h3>{promo.name}</h3>
                <p>{promo.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  export default HomePage;