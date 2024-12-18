import React, { useState } from "react";

const menuData = [
  { id: 1, name: "Garlic Bread", category: "Starters", description: "Toasted bread with garlic and herbs", price: "Rs.199", image: "https://media.istockphoto.com/id/547046390/photo/garlic-bread.jpg?s=612x612&w=0&k=20&c=oArNgkbjjPKlToDnBhL7xNwU4_eJLPTaLbAlIuunHDY=", dietary: "Vegetarian" },
  { id: 2, name: "Salad", category: "Starters", description: "Fresh lettuce with Caesar dressing", price: "Rs.249", image: "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-the-salad-has-a-lot-of-vegetables-and-other-things-image_2962610.jpg", dietary: "Vegetarian" },
  { id: 3, name: "Chicken Biriyani", category: "Main Course", description: "Juicy chicken cooked to perfection", price: "Rs.399", image: "https://static.wixstatic.com/media/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg", dietary: "Non-Vegetarian" },
  { id: 4, name: "Kunafa", category: "Desserts", description: "The ultimate kunafa experience.", price: "Rs.399", image: "https://www.unileverfoodsolutions.pk/dam/global-ufs/mcos/meps/pakistan/calcmenu/recipes/PK-recipes/desserts-&-bakery/custard-kunafa/main-header.jpg", dietary: "Vegetarian" },
  { id: 5, name: "Chocolate Cake", category: "Desserts", description: "Rich chocolate cake", price: "Rs.199", image: "https://img.freepik.com/premium-photo/chocolate-cake-hd-8k-wallpaper-stock-photographic-image_853645-35602.jpg", dietary: "Vegetarian" },
];

const categories = ["All", "Starters", "Main Course", "Desserts"];
const dietaryOptions = ["All","Vegetarian", "Gluten-Free", "Non-Vegetarian"];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDietary, setSelectedDietary] = useState("All");

  // Filter menu items based on category and dietary need
  const filteredItems = menuData.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const dietaryMatch = selectedDietary === "All" || item.dietary === selectedDietary;
    return categoryMatch && dietaryMatch;
  });

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <div className="filters">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        
        <select value={selectedDietary} onChange={(e) => setSelectedDietary(e.target.value)}>
          {dietaryOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default MenuPage;