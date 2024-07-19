import React from 'react';
import { CssBaseline, AppBar, Paper, Stepper, Step, StepLabel, Button, ListItem, ListItemText } from '@mui/material';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Achievement from './Achievement';
import Template from './Template';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { useSubmitResumeMutation } from '../../Services/resume';
// import HiddenResume from '../templates/HiddenResume';
import { renderPreview } from '../../Store/reducers/previewImage';
import HiddenResume from '../templates/HiddenResume';

const Builder = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Personal', 'Educational', 'Experience', 'Projects', 'Skills', 'Achievements', 'Template'];
    const user = useSelector((state: RootState) => state.resume);
    const previewImage = useSelector((state: RootState) => state.preview.image);
    const [submitResume] = useSubmitResumeMutation();
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
const generatePdf=()=>{

}
    // const generatePdf = () => {
    //     const img = new Image();
    //     img.src = props.image;
    //     const preview = document.getElementById('preview');
    //     const width = preview.clientWidth;
    //     const height = preview.clientHeight;

    //     if (props.image) {
    //         const pdf = new jsPDF({
    //             orientation: height > width ? 'portrait' : 'landscape',
    //             unit: 'pt',
    //             format: [height, width]
    //         });
    //         pdf.addImage(img, 'PNG', 0, 0, width, height, 'SLOW');
    //         pdf.save('resume.pdf');
    //     }
    // };

    const clickSave = async(event:any) => {
        if (event) event.preventDefault();
        try{
console.log("in click save",user);
const response =await submitResume(user).unwrap();
console.log("response",response);
        }catch(e){
           console.log(e)
        }
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
                        display:  'none'
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
                <div >
                    {previewImage ? <img id='preview' alt='preview'  src={ previewImage} /> : <></>}
                </div>
                </div>
           
                {previewImage && (
                    <div>
                        <img id='preview' alt='preview' src={previewImage} />
                    </div>
                )}
                <HiddenResume
                    id={user.template ? 'template1' : ''}
                    style={{ display: 'none', maxHeight: '100%', maxWidth: '100%', position: 'absolute', left: 0, top: 0 }}
                />
        </React.Fragment>
    );
};



export default Builder
