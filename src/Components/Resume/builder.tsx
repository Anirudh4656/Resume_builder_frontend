import React from "react";
import {
  CssBaseline,
  AppBar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Skill from "./Skill";
// import Achievement from "./Achievement";
import Template from "./Template";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import {
  useSubmitResumeMutation,
  useSendEmailMutation,
} from "../../Services/resume";
import HiddenResume from "../templates/HiddenResume";
import jsPDF from "jspdf";

const Builder = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    "Personal",
    "Educational",
    "Experience",
    "Projects",
    "Skills",
    // "Achievements",
    "Template",
  ];
  const user = useSelector((state: RootState) => state.resume);
  const userDetails = useSelector((state: RootState) => state.auth.user);
  console.log("userDetails", userDetails?.email);
  const previewImage = useSelector((state: RootState) => state.preview.image);
  const [submitResume] = useSubmitResumeMutation();
  const [sendEmail] = useSendEmailMutation();

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <Personal />;
      case 1:
        return <Education />;
      case 2:
        return <Experience />;
      case 3:
        return <Project />;
      case 4:
        return <Skill />;
      // case 5:
      //   return <Achievement />;
      case 5:
        return <Template />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleClick = (idx: number) => {
    setActiveStep(idx);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const generatePdf = () => {
    if (previewImage) {
      const img = new Image();
      img.src = previewImage;

      img.onload = () => {
        const imgWidth = img.width;
        const imgHeight = img.height;

        const orientation = imgWidth > imgHeight ? "l" : "p"; // Landscape or Portrait
        const pdfWidth = orientation === "l" ? 210 : 148; // A4 width in mm
        const pdfHeight = orientation === "l" ? 148 : 210; // A4 height in mm

        const pdf = new jsPDF(orientation, "mm", [pdfWidth, pdfHeight]);

        // Calculate scaling to fit the image within the page dimensions
        const scale = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const scaledWidth = imgWidth * scale;
        const scaledHeight = imgHeight * scale;

        // Center the image on the page
        const xOffset = (pdfWidth - scaledWidth) / 2;
        const yOffset = (pdfHeight - scaledHeight) / 2;

        // Add the image to the PDF
        pdf.addImage(img, "PNG", xOffset, yOffset, scaledWidth, scaledHeight);
        pdf.save("resume.pdf");

        // Create a Blob for the PDF
        const pdfBlob = pdf.output("blob");

        // Read the Blob as a Base64 Data URL
        const reader = new FileReader();
        reader.readAsDataURL(pdfBlob);
        reader.onloadend = async () => {
          const base64data = reader.result as string;
          const response = await sendEmail({
            pdf: base64data,
            // email:userDetails?.email ,
            email: "anirudh4656@gmail.com",
          }).unwrap();
          console.log("response", response);
        };
      };

      img.onerror = (error) => {
        console.error("Failed to load image for PDF:", error);
      };
    } else {
      console.error("No preview image available for PDF generation.");
    }
  };

  const clickSave = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event) event.preventDefault();
    try {
      console.log("in click save", user);
      const response = await submitResume(user).unwrap();
      console.log("response", response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        sx={{ position: "relative", width: "100%" }}
      />
      <Box display="flex" justifyContent="space-between" sx={{ p: 2 }}>
        {/* Stepper Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "15%",
            borderRight: "1px solid #ddd",
            pr: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={generatePdf}
            disabled={!previewImage}
            sx={{
              mb: 2,
            }}
          >
            Download PDF
          </Button>
          <Stepper
            orientation="vertical"
            activeStep={activeStep}
            sx={{ width: "100%" }}
          >
            {steps.map((label, idx) => (
              <Step key={label}>
                <StepLabel>
                  <ListItem
                    button
                    onClick={() => handleClick(idx)}
                    sx={{ p: 0 }}
                  >
                    <ListItemText primary={label} sx={{ m: 0 }} />
                  </ListItem>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Main Component Section */}
        <Box
          sx={{
            width: "50%",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper sx={{ mt: 2, mb: 6, p: 3, width: "100%" }}>
            {getStepContent(activeStep)}
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" onClick={clickSave}>
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </Paper>
        </Box>

        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {previewImage ? (
            <img
              id="preview"
              alt="preview"
              src={previewImage}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
               
                objectFit: "contain",
              }}
            />
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <HiddenResume
        id="pdf"
        style={{
          display: "none",
          maxHeight: "100%",
          maxWidth: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
    </React.Fragment>
  );
};

export default Builder;
