import ProductCard from "../Components/common/ProductCard";

async function getNews() {
  const res = await fetch('https://dummyjson.com/products', {
    cache: 'no-store',
  });
  return res.json();
}

const AllProducts = async () => {

  const news = await getNews();
  console.log(news)


  return (
    <>
      <div className="allproducts">
        <div className="container">
          <div className="flex gap-5 flex-wrap mt-10">
            {news?.products.map((item, key) => (
              <ProductCard
                key={key}
                title={item.title}
                category={item.category}
                image={item.thumbnail}
                price={item.price}
                rating={item.rating}
                stock={item.stock}
                discount={item.discountPercentage}
                item={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
