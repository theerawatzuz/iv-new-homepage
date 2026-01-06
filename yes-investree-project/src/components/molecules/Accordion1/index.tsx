import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  accordionSummaryClasses,
  AccordionSummaryProps as MuiAccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import FaqTitleButton from "components/molecules/FaqTitleButton";
import React from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props}>
    {props.children}
  </MuiAccordion>
))(({ theme }) => ({
  "&::before": {
    display: "none",
  },
  backgroundColor: "inherit",
}));

const AccordionSummary = styled((props: MuiAccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  flexDirection: "row",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type CutomisedAccordionsProps = {
  onChange: (number: number) => void;
  className?: string;
  color?: "green" | "blue";
  content: {
    title: string;
    description: string;
  }[];
};

export default function CutomisedAccordions(props: CutomisedAccordionsProps) {
  const { onChange, className, color = "green", content } = props;
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      onChange(panel);
    };

  return (
    <div className='w-full'>
      {content.map((content, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <FaqTitleButton
              order={index}
              text={content.title}
              isActived={expanded === index}
              color={color === "green" ? "green" : "blue"}
            />
          </AccordionSummary>
          <AccordionDetails>
            <div className='text-body9 max-w-[450px] leading-normal px-8'>
              {content.description}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
