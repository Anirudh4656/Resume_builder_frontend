import React, { useEffect } from 'react';
import { Container, Grid, Typography, Divider, Box, Paper, Stack, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { renderPreview } from '../../../Store/reducers/previewImage';
import { RootState } from '../../../Store/store';
import { Code, Language, School, Work } from '@mui/icons-material';

const Template2: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(renderPreview());
    }, [dispatch]);

    const resume = useSelector((state: RootState) => state.resume);
    const location = useLocation();

    return (
        <Container  id="template" maxWidth="md">
              
            <Box my={4} p={2}>
                <Paper elevation={3} sx={{ p: 4 }}>
                    {/* Header Section */}
                    <Box textAlign="center">
                        <Typography variant="h3" component="h1" gutterBottom>
                            Enji Kusnadi
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Front-End Developer · UI/UX Designer
                        </Typography>
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            <Link target="_blank" to={'https://twitter.com'}>twitter.com</Link>
                            <Link target="_blank" to={'https://dribbble.com'}>dribbble.com</Link>
                            <Link target="_blank" to={'https://github.com'}>github.com</Link>
                            <Link to={'mailto:email@example.com'}>email@example.com</Link>
                        </Stack>
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    {/* Education Section */}
                    <Box mb={4}>
                       
                        <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
                        <Box> <Typography variant="h4" gutterBottom>
                             Education
                        </Typography></Box>
                            <Box>
                                <Typography variant="h6">STMIK Indonesia Mandiri</Typography> </Box>

                                 <Box> <Typography variant="body1" color="textSecondary">Teknik Informatika (S1)</Typography></Box>
                                 <Box>  <Typography variant="body1" color="textSecondary">Oct 2018 - present</Typography></Box>
                           
                        </Box>
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    {/* Experience Section */}
                    <Box mb={4}>
                        <Typography variant="h4" gutterBottom>
                             Experience
                        </Typography>
                        <Box mb={2}>
                            <Typography variant="h6">Femican 1928.id</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Front-End Developer (self-employed)</Typography>
                            <Typography variant="body2" color="textSecondary">Mar 2022 - present</Typography>
                            <ul>
                                <li>Designing UI/UX for clients</li>
                                <li>Developing front-end applications</li>
                            </ul>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="h6">Ciptaloka.com</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Front-End Developer (self-employed)</Typography>
                            <Typography variant="body2" color="textSecondary">Jan 2022 - Mar 2022</Typography>
                            <ul>
                                <li>Maintained the company’s website</li>
                                <li>Developed mobile-friendly features</li>
                            </ul>
                        </Box>
                        <Box mb={2}>
                            <Typography variant="h6">Ciptaloka.com</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Software Developer</Typography>
                            <Typography variant="body2" color="textSecondary">Jul 2018 - Jan 2021</Typography>
                            <ul>
                                <li>Developed e-commerce features</li>
                                <li>Managed backend integrations</li>
                            </ul>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    {/* Featured Project Section */}
                    <Box mb={4}>
                        <Typography variant="h4" gutterBottom>
                           Featured Project
                        </Typography>
                        <Typography variant="h6">SPKJIS</Typography>
                        <Typography variant="body1" color="textSecondary">
                            Project details and technologies used.
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    {/* Skills & Tools Section */}
                    <Box mb={4}>
                        <Typography variant="h4" gutterBottom>
                            Skills & Tools
                        </Typography>
                        <Typography variant="h6">Languages</Typography>
                        <Stack direction="row" spacing={1} sx={{ my: 1 }}>
                            <Chip label="HTML" />
                            <Chip label="CSS" />
                            <Chip label="JavaScript" />
                            <Chip label="TypeScript" />
                            <Chip label="PHP" />
                        </Stack>
                        <Typography variant="h6">Technologies</Typography>
                        <Stack direction="row" spacing={1} sx={{ my: 1 }}>
                            <Chip label="React" />
                            <Chip label="Redux" />
                            <Chip label="Node.js" />
                            <Chip label="Express" />
                            <Chip label="MySQL" />
                            <Chip label="MongoDB" />
                        </Stack>
                        <Typography variant="h6">Tools & Software</Typography>
                        <Stack direction="row" spacing={1} sx={{ my: 1 }}>
                            <Chip label="VS Code" />
                            <Chip label="Figma" />
                            <Chip label="Adobe XD" />
                            <Chip label="Photoshop" />
                            <Chip label="Illustrator" />
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default Template2;
