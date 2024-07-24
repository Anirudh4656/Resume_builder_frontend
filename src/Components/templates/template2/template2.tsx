import React, { useEffect } from "react";
import { Container, Grid, Typography, Box, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { renderPreview } from "../../../Store/reducers/previewImage";
import { RootState } from "../../../Store/store";
import {
  LocationOn as LocationOnIcon,
  Mail as MailIcon,
  Language as LanguageIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Tag,
} from "@mui/icons-material";

const Template2: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(renderPreview() as any);
  }, [dispatch]);

  const resume = useSelector((state: RootState) => state.resume);
  console.log("resume", resume);

  return (
    <Container id="template">
      {/* Header */}
      <Box
        sx={{
          flex: 1,
          height: "320px",
          margin: 0,
          backgroundImage: 'url("/light.jpeg") !important',
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          "@media print": {
            backgroundImage: 'url("/light.jpeg")',
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact",
            backgroundColor: "white",
          },
          overflowX: {
            xs: "auto",
            md: "unset",
          },
          overflowY: {
            xs: "auto",
            md: "unset",
          },
        }}
      >
        <Box
          sx={{
            height: "104px",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              height: "52px",
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 800,
                fontSize: "28px",
                lineHeight: "35.28px",
                color: "#334155",
              }}
            >
              {resume.personal.firstName || "Anirudh"}{" "}
              {resume.personal.lastName || "Sharma"}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "25px",
                color: "#334155",
                marginTop: "10px",
              }}
            >
              {resume.title || "None"}
            </Typography>
          </Box>

          <Box sx={{ margin: "82px" }}>
            <Grid container spacing={1} justifyContent="center">
              <Grid item>
                <LocationOnIcon fontSize="small" />
                {resume.personal.website || "Chandigarh"}
              </Grid>

              <Grid item>
                <MailIcon fontSize="small" />
                {resume.personal.email || "anirudh4656@gmail.com"}
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{ marginTop: "20px" }}
            >
              <Grid item>
                <Chip
                  variant="outlined"
                  icon={<LanguageIcon />}
                  label={resume.personal.website}
                />
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  icon={<LanguageIcon />}
                  label={resume.personal.website}
                />
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  icon={<LanguageIcon />}
                  label={resume.personal.website}
                />
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  icon={<TwitterIcon />}
                  label={resume.personal.website}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "87px",
          gap: "2",
          margin: "0px 53px",
          alignItem: "center",
          borderBottom: "1px inset",
        }}
      >
        <Box
          sx={{
            width: "115px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px", //14
              lineHeight: "19.6px", //12.6
              fontWeight: "500",
              color: "#334155",
            }}
          >
            Education
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: 1.2,
          }}
        >
          {resume?.education.map((education, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // maxWidth:"350px"
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "19px", //13
                    lineHeight: "19.6px", //12.6
                    fontWeight: "500",
                    color: "#334155",

                    maxWidth: "580px", //380
                  }}
                >
                  {education?.university || "University of delhi"}{" "}
                  {education?.degree || "BE"}
                </Typography>
              </Box>
              <Box sx={{}}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px", //10
                    lineHeight: "19.6px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  {`${education.startDate || "0"}-${education.endDate || "0"}`}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "2",
          margin: "0px 53px",
          borderBottom: "1px inset",
        }}
      >
        <Box
          sx={{
            width: "115px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px", //14
              lineHeight: "19.6px", //12.6
              fontWeight: "500",
              color: "#334155",
            }}
          >
            Experience
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: 1.2,
          }}
        >
          {resume?.experience.map((experience, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // maxWidth:"350px"
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "19px", //13
                    lineHeight: "19.6px", //12.6
                    fontWeight: "500",
                    color: "#334155",
                    justifyContent: "space-between",
                    maxWidth: "580px", //380
                  }}
                >
                  {experience?.organisation || "75way technologies"}{" "}
                  {experience?.title || "ASD"}
                </Typography>

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px", //10
                    lineHeight: "19.6px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  {`${experience.startDate || "0"}-${
                    experience.endDate || "0"
                  }`}
                </Typography>
              </Box>
              <Box sx={{}}>
                <Box sx={{ display: "flex", gap: 1, marginTop: "10px" }}>
                  {experience.keywords.map((keyword) => (
                    <Chip
                      label={keyword}
                      sx={{
                        backgroundColor: "#ECEFF1",
                        color: "#455A64",
                        "& .MuiChip-icon": { color: "#455A64" },
                      }}
                    />
                  ))}
                </Box>
                {experience.description.map((description) => (
                  <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                    • {description}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "2",
          margin: "0px 53px",
          borderBottom: "1px inset",
        }}
      >
        <Box
          sx={{
            width: "115px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              lineHeight: "19.6px", 
              fontWeight: "500",
              color: "#334155",
            }}
          >
            Featured Project
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: 1.2,
          }}
        >
          {resume?.projects.map((project, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "19px", 
                    lineHeight: "19.6px", 
                    fontWeight: "500",
                    color: "#334155",
                    justifyContent: "space-between",
                    maxWidth: "580px", 
                  }}
                >
                  {project?.projectName || "Resume Builder"}
                </Typography>

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px", //10
                    lineHeight: "19.6px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                ></Typography>
              </Box>
              <Box sx={{}}>
                <Box sx={{ display: "flex", gap: 1, marginTop: "10px" }}>
                  {project.keywords.map((keyword, index) => (
                    <Chip
                      label={keyword}
                      sx={{
                        backgroundColor: "#ECEFF1",
                        color: "#455A64",
                        "& .MuiChip-icon": { color: "#455A64" },
                      }}
                    />
                  ))}
                </Box>
                {project.projectDescription.map((description, index) => (
                  <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                    • {description}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>



      <Box
        sx={{
          display: "flex",
          gap: "2",
          margin: "0px 53px",
          borderBottom: "1px inset",
        }}
      >
        <Box
          sx={{
            width: "115px",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              lineHeight: "19.6px", 
              fontWeight: "500",
              color: "#334155",
            }}
          >
            Skills
          </Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: 1.2,
          }}
        >
          {resume?.skills.map((skill, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "19px", 
                    lineHeight: "19.6px", 
                    fontWeight: "500",
                    color: "#334155",
                    justifyContent: "space-between",
                    maxWidth: "580px", 
                  }}
                >
                  {skill?.skillName || "Languages"}
                </Typography>

                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px", //10
                    lineHeight: "19.6px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                ></Typography>
              </Box>
              <Box sx={{}}>
                <Box sx={{ display: "flex", gap: 1, marginTop: "10px" }}>


                 
         {(skill.SubField).map((field)=>
                    <Box>
                   
                      <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px", //10
                    lineHeight: "19.6px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
               
                >
                  {field.field}
                </Typography>
               
                    </Box>
         )}
                </Box>
               
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Template2;
