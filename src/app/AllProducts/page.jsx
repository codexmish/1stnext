import ProductCard from "../Components/common/ProductCard";
import Limit from "../Components/Limit";

async function getNews({limit}) {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`, {
    cache: 'no-store',
  });
  return res.json();
}

const AllProducts = async ({searchParams}) => {
  const query = await searchParams;
  const limit = query.limit;
  // const skip = query.skip;
  console.log(query)
  // const news = await getNews({ limit, skip });

  const news = await getNews({limit});
  // console.log(news)


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

          <div className="my-10">
            <Limit products={news}/>
          </div>

        </div>
      </div>
    </>
  );
};

export default AllProducts;
