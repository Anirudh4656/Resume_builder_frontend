import React, { useEffect } from "react";
import { Container, Grid, Typography, Box, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

import {
  LocationOn as LocationOnIcon,
  Mail as MailIcon,
  Language as LanguageIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import { RootState } from "../../../../Store/store";
import { renderPreview } from "../../../../Store/reducers/previewImage";

const Template1: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(renderPreview() as any);
  }, [dispatch]);

  const resume = useSelector((state: RootState) => state.resume);
  console.log("resume", resume);

  return (
    <Container id="template" sx={{ backgroundColor: "#000", color: "#fff" }}>
      {/* Header */}
      <Box
        sx={{
          flex: 1,
          height: "320px",
          margin: 0,
          backgroundImage: 'url("/dark.jpeg") !important',
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          "@media print": {
            backgroundImage: 'url("/dark.jpeg")',
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact",
            backgroundColor: "black",
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
                color: "#E0E0E0",
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
                color: "#E0E0E0",
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
                  label={resume.personal.website || "anirudh.com"}
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    "& .MuiChip-icon": { color: "#fff" },
                  }}
                />
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  icon={<LinkedInIcon />}
                  label={resume.personal.website || "linkedin.com/anirudh"}
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    "& .MuiChip-icon": { color: "#fff" },
                  }}
                />
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  icon={<GitHubIcon />}
                  label={resume.personal.website || "github.com/anirudh"}
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    "& .MuiChip-icon": { color: "#fff" },
                  }}
                />
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  icon={<TwitterIcon />}
                  label={resume.personal.website || "@anirudh"}
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    "& .MuiChip-icon": { color: "#fff" },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          height: '87px',
          gap: 2,
          margin: "0px 53px",
          alignItems: 'center',
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
              color: "#E0E0E0",
            }}
          >
            Education
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
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
              key={index}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                    color: "#E0E0E0",
                    maxWidth: "580px",
                  }}
                >
                  {education?.university || "University of Delhi"} {education?.degree || "BE"}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    lineHeight: "19.6px",
                    fontWeight: "500",
                    color: "#E0E0E0",
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
          gap: 2,
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
              color: "#E0E0E0",
            }}
          >
            Experience
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
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
              key={index}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: 'space-between',
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
                    color: "#E0E0E0",
                    maxWidth: "580px",
                  }}
                >
                  {experience?.organisation || "75way Technologies"} {experience?.title || "ASD"}
                </Typography>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    lineHeight: "19.6px",
                    fontWeight: "500",
                    color: "#E0E0E0",
                  }}
                >
                  {`${experience.startDate || "0"}-${experience.endDate || "0"}`}
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", gap: 1, marginTop: "10px" }}>
                  {experience.keywords.map((keyword, index) => (
                    <Chip
                      key={index}
                      label={keyword}
                      sx={{
                        backgroundColor: "#2E2E2E",
                        color: "#E0E0E0",
                        "& .MuiChip-icon": { color: "#E0E0E0" },
                      }}
                    />
                  ))}
                </Box>
                {experience.description.map((description, index) => (
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: "5px", color: "#B0B0B0" }}
                    key={index}
                  >
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
          gap: 2,
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
              color: "#E0E0E0",
            }}
          >
            Featured Project
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
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
              key={index}
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
                    color: "#E0E0E0",
                    maxWidth: "580px",
                  }}
                >
                  {project?.projectName || "Resume Builder"}
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", gap: 1, marginTop: "10px" }}>
                  {project.keywords.map((keyword, index) => (
                    <Chip
                      key={index}
                      label={keyword}
                      sx={{
                        backgroundColor: "#2E2E2E",
                        color: "#E0E0E0",
                        "& .MuiChip-icon": { color: "#E0E0E0" },
                      }}
                    />
                  ))}
                </Box>
                {project.projectDescription.map((description, index) => (
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: "5px", color: "#B0B0B0" }}
                    key={index}
                  >
                    • {description}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Template1;
