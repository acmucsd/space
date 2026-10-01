import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Remove';
import s from "./style.module.scss";

interface panelData {
  data: {question: string; answer: string|any}[];
}
const Faq: React.FC<panelData> = ({ data }) => {

  const [expandedIndex, setExpandedIndex] = useState<Number>(-1);

  const handleChange =
    (panelIndex: Number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedIndex(newExpanded ? panelIndex : -1);
    };

  return (
    <div className={s.accordionGroup}>
        {data.map((questionObject, index) => 
            <Accordion expanded= {expandedIndex === index} onChange= {handleChange(index)} className={s.accordion} key={questionObject.question}>
              <AccordionSummary className={s.header}
                expandIcon={
                  expandedIndex === index ? <CloseIcon className={s.expandIcon} /> : <ExpandIcon className={s.expandIcon} />
                }
              >
                <Typography className={s.question}>
                  {questionObject.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className = {s.description}>
                <Typography component="div" className={s.answer}>
                  {questionObject.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
        )}
  </div>
  )
}

export default Faq;