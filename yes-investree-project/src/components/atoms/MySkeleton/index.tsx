import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import { ReactNode } from "react";

type MySkeletonProps = SkeletonProps & {
  children?: ReactNode;
  loading: boolean;
};

const MySkeleton = (props: MySkeletonProps) => {
  const { loading, children, sx, ...skeletonProps } = props;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      {loading ? (
        <Skeleton sx={{ borderRadius: 1, ...sx }} {...skeletonProps} />
      ) : (
        children
      )}
    </>
  );
};

export default MySkeleton;
