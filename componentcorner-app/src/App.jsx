import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your one-stop shop for tech products"
        buttonText="Shop Now"
      />

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <ProductCard
          name="Wireless Headphones"
          price="$59.99"
          image="https://placehold.co/600x400"
          description="High quality sound and noise cancellation."
        />

        <ProductCard
          name="Smart Watch"
          price="$89.99"
          image="https://placehold.co/600x400"
          description="Track your fitness and stay connected."
        />

        <ProductCard
          name="Bluetooth Speaker"
          price="$39.99"
          image="https://placehold.co/600x400"
          description="Portable speaker with powerful bass."
        />
      </div>

      <Footer
        company="ComponentCorner"
        email="support@componentcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;
