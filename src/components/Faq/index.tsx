import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    <>
        {data.map((questionObject, index) => 
            <Accordion expanded= {expandedIndex === index} onChange= {handleChange(index)} sx = {{ 
              borderTop: index === 0 ? 3 : 0,
              borderBottom: 3,
              bgcolor: 'transparent',
              color: 'white',
              boxShadow: 'none',
            }} key = {questionObject.question}>
              <AccordionSummary expandIcon={<ExpandMoreIcon className = {s.header}/>}>
                <Typography sx = {{ fontSize: 20 }}>
                  {questionObject.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className = {s.description}>
                <Typography component="div" sx = {{ fontSize: 20 }}>
                  <div>{questionObject.answer}</div>
                </Typography>
              </AccordionDetails>
            </Accordion>
        )}
  </>
  )
}

export default Faq;