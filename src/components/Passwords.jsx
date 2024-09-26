import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Grid, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const tooltipScore = `0 # Demasiado fácil de adivinar
1 # Muy fácil de adivinar
2 # Algo fácil de adivinar
3 # Segura e imposible de adivinar
4 # Muy imposible de adivinar`;

export const Passwords = () => {
    const [expanded, setExpanded] = useState(false);
    const { newPasswords = [] } = usePasswordGenerator();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid marginTop={2}>
            {
                newPasswords.map(({password, score, crack_times_display}, index) => (
                    <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}bh-content`}
                            id={`panel${index + 1}bh-header`}
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}>{ password }</Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
                            <Typography textAlign={"end"} >
                                <Tooltip title="Copiar al portapapeles" followCursor>
                                    <ContentPasteIcon sx={{ cursor: "pointer" }}/>
                                </Tooltip>
                            </Typography>

                            <Typography sx={{ fontWeight: "bold" }}>Tiempo de descifrado: </Typography>
                            <Typography>
                                En línea, con limitaci&oacute;n (100 intentos por hora): { crack_times_display.online_throttling_100_per_hour }
                            </Typography>
                            <Typography>
                                En línea, sin limitaci&oacute;n (10 intentos por segundo): { crack_times_display.online_no_throttling_10_per_second }
                            </Typography>
                            <Typography>
                                Fuera de l&iacute;nea, con hash lento (1e4 intentos por segundo): { crack_times_display.offline_slow_hashing_1e4_per_second }
                            </Typography>
                            <Typography>
                                Fuera de l&iacute;nea, con hash r&aacute;pido (1e10 intentos por segundo): { crack_times_display.offline_fast_hashing_1e10_per_second }
                            </Typography>
                            <Typography marginTop={2} sx={{ fontWeight: "bold" }}>
                                Puntuaci&oacute;n:
                                <Tooltip
                                    title={<div style={{ whiteSpace: 'pre-line' }}>{tooltipScore}</div>}
                                    followCursor
                                >
                                    <HelpIcon fontSize='small'/>
                                </Tooltip>
                            </Typography>
                            <Typography>
                                { score }
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Grid>
    );
}