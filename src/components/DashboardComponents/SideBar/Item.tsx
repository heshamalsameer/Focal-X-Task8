const Item = ({
  img,
  title,
  ind,
}: {
  img: string;
  title: string;
  ind: number;
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 min-w-fit h-[41px] w-full   ${
        ind == 0 ? `bg-praymary` : ""
      }`}
    >
      <img src={img} alt="img..." />
      <p className="font-medium text-sm">{title}</p>
    </button>
  );
};

export default Item;
