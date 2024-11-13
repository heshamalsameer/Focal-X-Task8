import Product from "./Product";

const Products = ({
  data,
  dialog,
}: {
  data: Array<{
    created_at: string;
    id: number;
    image_url: string;
    name: string;
    price: string;
    updated_at: string;
  }>;
  dialog: any;
}) => {
  const Elements = () => {
    let itemElements: JSX.Element[] = [];
    let itemElement: JSX.Element[] = [];
    for (let i = 0; i < data.length; i = i + 8) {
      itemElement = [];
      if (data.length > i + 8)
        for (let j = i; j < i + 8; j++) {
          itemElement.push(
            <Product
              key={j}
              id={data[j]?.id}
              img={data[j]?.image_url}
              name={data[j]?.name}
              dialog={dialog}
            />
          );
        }
      else
        for (let j = i; j < data.length; j++) {
          itemElement.push(
            <Product
              key={j}
              id={data[j]?.id}
              img={data[j]?.image_url}
              name={data[j]?.name}
              dialog={dialog}
            />
          );
        }
      itemElements.push(
        <div
          className="grid grid-cols-4 gap-y-[4.445vh] justify-between w-full min-w-full"
          key={i}
        >
          {itemElement}
        </div>
      );
    }
    return itemElements;
  };
  return <>{Elements()}</>;
};

export default Products;
