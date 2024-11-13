const PageNumber = ({
  value,
  fun,
  count,
  length,
}: {
  value: string | number;
  fun: any;
  count?: number;
  length?: number;
}) => {
  const myfun = () => {
    if (value == "<") fun("prev");
    else if (value == ">") fun("next");
    else fun(value);
  };
  return (
    <>
      {value == count + 1 ? (
        <button
          className="w-[4.1667vw] h-[4.1667vw] rounded-full border border-solid border-[#F1F1F1] text-[13px] font-semibold font-sans flex justify-center items-center cursor-pointer transition-all bg-praymary"
          onClick={myfun}
        >
          {value}
        </button>
      ) : typeof value == "string" || value == 1 || value == length ? (
        <button
          className="w-[4.1667vw] h-[4.1667vw] rounded-full border border-solid border-[#F1F1F1] text-[13px] font-semibold font-sans flex justify-center items-center cursor-pointer transition-all"
          onClick={myfun}
        >
          {value}
        </button>
      ) : (
        <button onClick={myfun}>.</button>
      )}
    </>
  );
};

export default PageNumber;
