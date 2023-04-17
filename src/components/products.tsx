import { Product, ProductImg, ProductsS } from "@/styles/products";

export function Products() {
  return (
    <ProductsS>
      <Product>
        <ProductImg src="https://scontent.frao5-1.fna.fbcdn.net/v/t39.30808-6/305811235_423200559878537_5980144477627087933_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zVih1eaYfasAX_FlOat&_nc_ht=scontent.frao5-1.fna&oh=00_AfBes1D6Im6Xg-OPSdGbMdPHKb0qkRG3ctWGLL3xDGVAlQ&oe=64435202" />
      </Product>
      <Product color="darkred">
        <ProductImg src="https://scontent.frao5-1.fna.fbcdn.net/v/t39.30808-6/305811235_423200559878537_5980144477627087933_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zVih1eaYfasAX_FlOat&_nc_ht=scontent.frao5-1.fna&oh=00_AfBes1D6Im6Xg-OPSdGbMdPHKb0qkRG3ctWGLL3xDGVAlQ&oe=64435202" />
      </Product>
      <Product color="blue">
        <ProductImg src="https://scontent.frao5-1.fna.fbcdn.net/v/t39.30808-6/305811235_423200559878537_5980144477627087933_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zVih1eaYfasAX_FlOat&_nc_ht=scontent.frao5-1.fna&oh=00_AfBes1D6Im6Xg-OPSdGbMdPHKb0qkRG3ctWGLL3xDGVAlQ&oe=64435202" />
      </Product>
    </ProductsS>
  );
}
