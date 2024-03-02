import { ThreeDots } from "react-loader-spinner";
import { SpinWrapper } from "./Spinner.styled";
export const Spinner = () => {
  return (
    <SpinWrapper>
      <div>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </SpinWrapper>
  );
};
