type Props = {
  children: React.ReactNode;
};

const PrivacyPageContentDetail: React.FC<Props> = ({ children }) => {
  return <div className='mt-[14px] pl-3 laptop:pl-[29px]'>{children}</div>;
};

export default PrivacyPageContentDetail;
