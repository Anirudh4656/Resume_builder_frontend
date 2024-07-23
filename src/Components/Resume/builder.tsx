import React from 'react';
import { CssBaseline, AppBar, Paper, Stepper, Step, StepLabel, Button, ListItem, ListItemText } from '@mui/material';
import { jsPDF } from 'jspdf';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Achievement from './Achievement';
import Template from './Template';
import { RootState } from '../../Store/store';
import { useSelector } from 'react-redux';
// import HiddenResume from './templates/HiddenResume';



const Builder = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Personal', 'Educational', 'Experience', 'Projects', 'Skills', 'Achievements', 'Template'];
    const preview = useSelector((state: RootState) => state.preview);
    if(!preview){
        console.log("not")
    }
    function getStepContent(step:any) {
        switch (step) {
            case 0: return <Personal />;
            case 1: return <Education  />;
            case 2: return <Experience  />;
            case 3: return <Project  />;
            case 4: return <Skill  />;
            case 5: return <Achievement  />;
            case 6: return <Template  />;
            default: throw new Error('Unknown step');
        }
    }

    const handleClick = (idx:any) => {
        setActiveStep(idx);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const generatePdf = () => {
        if (!preview?.image) {
            console.error("No preview image available.");
            return;
        }
    
        const img = new Image();
        img.src = preview.image;
    
        img.onload = () => {
            const pdf = new jsPDF({
                orientation: img.height > img.width ? 'portrait' : 'landscape',
                unit: 'pt',
                format: [img.width, img.height]
            });
    
            // Add the image to the PDF
            pdf.addImage(img, 'PNG', 0, 0, img.width, img.height, '', 'FAST');
            pdf.save('resume.pdf');
        };
    
        img.onerror = () => {
            console.error("Failed to load image for PDF.");
        };
    }
    const clickSave = (event:any) => {
        if (event) event.preventDefault();
        // if (props.resume._id) {
        //     props.updateData(token, props.resume);
        // } else if (token) {
        //     props.postData(token, props.resume);
        // } else {
        //     history.push('/signup');
        // }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute" color="default" sx={{ position: 'relative', width: '100%' }} />
            <div style={{ display: 'flex' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={generatePdf}
                    sx={{
                        height: 'fit-content',
                        position: 'absolute',
                        top: { xs: '76px', md: '104px', lg: '84px' },
                        left: { lg: '15px' },
                        right: { xs: '20px', md: '184px', lg: 'unset' },
                        width: 'fit-content',
                        
                    }}
                >
                    Download PDF
                </Button>
                <Stepper
                    orientation="vertical"
                    activeStep={activeStep}
                    sx={{
                        margin: 1,
                        width: '12%',
                        display: { xs: 'none', md: 'inline-block' }
                    }}
                >
                    {steps.map((label, idx) => (
                        <Step key={label}>
                            <StepLabel>
                                <ListItem button onClick={() => handleClick(idx)} sx={{ padding: 0 }}>
                                    <ListItemText primary={label} sx={{ margin: 0 }} />
                                </ListItem>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <main style={{ width: 'auto', marginLeft: '', marginRight: 'auto', maxWidth: 500, padding: 1 }}>
                    <Paper sx={{ marginTop: 2, marginBottom: 6, padding: 3 }}>
                        <React.Fragment>
                            <React.Fragment>
                                {getStepContent(activeStep)}
                               
                                    <Button onClick={handleBack} sx={{ marginTop: 3, marginLeft: 1 }} disabled={activeStep === 0}>
                                        Back
                                    </Button>
                                    {activeStep === steps.length - 1 ? (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={clickSave}
                                            sx={{ marginTop: 3, marginLeft: 1 }}
                                        >
                                            Save
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            sx={{ marginTop: 3, marginLeft: 1 }}
                                        >
                                            Next
                                        </Button>
                                    )}
                                
                            </React.Fragment>
                        </React.Fragment>
                    </Paper>
                </main>
                  
                </div>
           
            {/* {props.resume.template ? <HiddenResume id={"pdf"} style={{ display: 'none', maxHeight: '100%', maxWidth: '100%', position: 'absolute', left: 0, top: 0 }} /> : <div id={"pdf"}></div>} */}
        </React.Fragment>
    );
};



export default Builder
