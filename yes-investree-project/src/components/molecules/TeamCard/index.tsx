import { useMediaQuery, useTheme } from "@mui/material";
import Image from "components/atoms/Image";
import { cx } from "helpers/utils";

const BG_GRADIENT = {
  green:
    "bg-gradient-to-tr from-green-200 via-[#E2E2E2] via-35% to-main-bg to-50%",
  gray: "bg-gradient-to-tr from-[#E2E2E2] to-main-bg to-50%",
};

type TeamCardProps = {
  team: {
    name: string;
    position: string;
    expert: string;
    expierence: string | React.ReactNode;
    education: string | React.ReactNode;
    social: string;
    image: string;
  };
  background: "green" | "gray";
};
const TeamCard: React.FC<TeamCardProps> = ({ team, background }) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.down("laptop"));
  const detail = () => (
    <div className={cx("bg-inherit text-body3 text-gray-700 mt-8")}>
      <div className="py-[10px]">
        <div className="text-headline5">{team.name || "test"}</div>
        <div className="text-subtitle2">{team.position || "test"}</div>
      </div>
      <div className="mt-[10px]">
        <div className="text-headline12">ความเชี่ยวชาญ</div>
        <div>{team.expert || "test"}</div>
      </div>
      <div className="mt-4">
        <div className="text-headline12">ประสบการณ์</div>
        <div>{team.expierence || "test"}</div>
      </div>
      <div className="mt-4">
        <div className="text-headline12">การศึกษา</div>
        <div>{team.education || "test"}</div>
      </div>
      <div className="mt-4 flex gap-[8px]">
        <Image
          src={"/images/icons/linkedin.svg"}
          alt={team.name || "team"}
          width={24}
          height={24}
        />
        <div>{team.social || "Linkedin"}</div>
      </div>
    </div>
  );

  return (
    <div>
      <div
        className={cx(
          "container flex min-h-[300px] w-full max-w-[350px] rounded-[24px]",
          "tablet:max-w-[calc(100%-100px)]",
          "laptop:max-w-[1040px] laptop:rounded-[32px]",
          background === "green" ? BG_GRADIENT.green : BG_GRADIENT.gray,
          "hover:from-green-200 hover:via-[#E2E2E2] hover:via-35% hover:to-main-bg hover:to-50%"
        )}
      >
        <div
          className={cx(
            "w-full laptop:w-1/2 bg-inherit flex items-end justify-center",
            "laptop:justify-start"
          )}
        >
          <Image
            src={team.image || "/images/team/team-1.png"}
            alt={team.name || "team"}
            className={cx("mt-10 laptop:ml-10")}
            width={isLaptop ? 350 : 422}
            height={isLaptop ? 385 : 424}
          />
        </div>
        <div className="hidden laptop:block w-full laptop:w-1/2">
          {detail()}
        </div>
      </div>
      <div
        className={cx(
          "container w-full max-w-[350px]",
          "tablet:max-w-[calc(100%-100px)]",
          "laptop:hidden"
        )}
      >
        {detail()}
      </div>
    </div>
  );
};

export default TeamCard;
