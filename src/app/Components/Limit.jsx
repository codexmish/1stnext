"use client";
import { Pagination } from "antd";
import { useRouter } from "next/navigation";

const Limit = ({products}) => {
  const router = useRouter();

  const onShowChange = (current, pageSize) => {
    // setLimit(pageSize);
    router.push(`?limit=${pageSize}`);
    // router.push(`skip=${current}`);
    // console.log(pageSize)

    // const skipmath = (current-1)* pageSize

    // setSkip(skipmath)
  };

  return (
    <>
      <div className="my-10">
        <Pagination
          defaultCurrent={1}
          total={products?.total}
          align={"end"}
          onChange={onShowChange}
          pageSizeOptions={[12, 24, 40, 52, 100]}
        />
      </div>
    </>
  );
};

export default Limit;
