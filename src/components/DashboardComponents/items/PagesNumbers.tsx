import PageNumber from "./PageNumber";

const PagesNumbers = ({
  data,
  fun,
  count,
  setCount,
}: {
  data: Array<{
    created_at: string;
    id: number;
    image_url: string;
    name: string;
    price: string;
    updated_at: string;
  }>;
  fun: any;
  count: number;
  setCount: any;
}) => {
  const length: number = Math.ceil(data.length / 8);
  const pageNumber = () => {
    let number: JSX.Element[] = [];
    for (let i = 1; i <= length; i++) {
      number.push(
        <PageNumber value={i} key={i} fun={fun} count={count} length={length} />
      );
    }
    return number;
  };
  return <> {pageNumber()}</>;
};

export default PagesNumbers;
