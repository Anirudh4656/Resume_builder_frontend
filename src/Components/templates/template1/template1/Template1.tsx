import React from 'react';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';
import { RootState } from '../../../../Store/store';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { renderPreview } from '../../../../Store/reducers/previewImage';

 const Template1:React.FC=()=> {
    React.useEffect(() => {
        renderPreview()
    }, [])
    const resume = useSelector((state: RootState) => state.resume);
    const location = useLocation();
    return (
        <div id={location.state ? '' : 'hide'}>
            <Container id="template">
                <Box className="main">
                    <Box className="resume">
                        <Box className="top-content">
                            <Box className="name">
                                <Typography variant="h4" component="strong">
                                    {resume.personal[0].firstName}
                                </Typography>
                                <Typography variant="h4">{resume.personal[0].lastName}</Typography>
                            </Box>
                            <Box className="contact-details">
                                <Grid container spacing={1}>
                                    <Grid item>{resume.personal[0].website}</Grid>
                                    <Grid item>|</Grid>
                                    <Grid item>{resume.personal[0].email}</Grid>
                                    <Grid item>|</Grid>
                                    <Grid item>{resume.personal[0].phone}</Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Divider />
                        <Box className="main-content">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Box className="left-content">
                                        <Box className="education content">
                                            <Typography variant="h5" className="heading">
                                                EDUCATION
                                            </Typography>
                                            <Box className="info">
                                                {resume.education.map((education, index) => (
                                                    <Box key={index} className="details">
                                                        <Typography variant="subtitle1" className="sub-heading">
                                                            {education.degree}
                                                        </Typography>
                                                        <Typography>{education.university}</Typography>
                                                        <Typography>
                                                            {education.startDate} - {education.endDate}
                                                        </Typography>
                                                        <Typography>GPA: {education.gpa}</Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                        <Box className="skills content">
                                            <Typography variant="h5" className="heading">
                                                SKILLS
                                            </Typography>
                                            <Box className="info">
                                                {resume.skills.map((skill, index) => (
                                                    <Box key={index} className="details">
                                                        <Typography variant="subtitle1" className="sub-heading">
                                                            {skill.skillName}
                                                        </Typography>
                                                        <Box>
                                                            {skill.keywords.map((keyword, i) => (
                                                                <Typography key={i} className="inline">
                                                                    {(i ? ', ' : '') + keyword}
                                                                </Typography>
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                        <Box className="achivements content">
                                            <Typography variant="h5" className="heading">
                                                ACHIEVEMENTS
                                            </Typography>
                                            <Box className="info">
                                                {resume.achievements.map((achivement, index) => (
                                                    <Box key={index} className="details">
                                                        <Typography variant="subtitle1" className="sub-heading">
                                                            {achivement.title}
                                                        </Typography>
                                                        <Box>
                                                            <Typography className="inline">
                                                                {achivement.organisation} - {achivement.date}
                                                            </Typography>
                                                            <Box className="description">
                                                                {achivement.description.map((description, i) => (
                                                                    <Typography key={i}>{description}</Typography>
                                                                ))}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box className="right-content">
                                        <Box className="experience content">
                                            <Typography variant="h5" className="heading">
                                                WORK EXPERIENCE
                                            </Typography>
                                            <Box className="info">
                                                {resume.experience.map((experience, index) => (
                                                    <Box key={index} className="details">
                                                        <Typography variant="subtitle1" className="sub-heading">
                                                            {experience.title}
                                                        </Typography>
                                                        <Typography className="inline">
                                                            {experience.organisation} ({experience.startDate} - {experience.endDate})
                                                        </Typography>
                                                        <Box className="description">
                                                            {experience.description.map((description, i) => (
                                                                <Typography key={i}>{description}</Typography>
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                        <Box className="projects content">
                                            <Typography variant="h5" className="heading">
                                                PROJECTS
                                            </Typography>
                                            <Box className="info">
                                                {resume.projects.map((project, index) => (
                                                    <Box key={index} className="details">
                                                        <Typography variant="subtitle1" className="sub-heading">
                                                            {project.projectName.toUpperCase()}
                                                        </Typography>
                                                        <Box>
                                                            {project.keywords.map((keyword, i) => (
                                                                <Typography key={i} className="inline">
                                                                    {keyword}
                                                                </Typography>
                                                            ))}
                                                        </Box>
                                                        <Box className="description">
                                                            {project.projectDescription.map((description, i) => (
                                                                <Typography key={i}>{description}</Typography>
                                                            ))}
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
export default Template1