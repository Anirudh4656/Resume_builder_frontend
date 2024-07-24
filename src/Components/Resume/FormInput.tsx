import React, { useCallback, useState } from "react";
import _ from "lodash";
import { Alert, Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Description from "./Descriptions";

interface FormInputProps {
  input: Record<string, any>;
  section: any[];
  update: any;
  id: number;
  name: string;
}

export default function FormInput(props: FormInputProps) {
  const [errorText, setErrorText] = useState<Record<string, string>>({});
  const [minSize, setMinSize] = useState(50);
  const [localSection, setLocalSection] = useState(props.section[props.id]);
console.log("formInputProps",props);
  const validateInput = (id: string, name: string, input: string) => {
    let errorMessage = "";
    if (name === "gpa") {
      if (input.length < 1) errorMessage = "Too Small Input";
      else if (input.length > 5) errorMessage = "Too Large Input";
    } else if (name === "projectName") {
      if (input.length < 3) errorMessage = "Too Small Input";
      else if (input.length > 100) errorMessage = "Too Large Input";
    } else if (name === "SubField") {
      // input.forEach((keyword: any) => {
      //   if (keyword.field.length < 3) errorMessage = "Too Small Input";
      //   if (keyword.value.length < 3) errorMessage = "Too Small Input";
      // });
    } else {
      if (input.length < 3) errorMessage = "Too Small Input";
    }
    setErrorText((prev) => ({ ...prev, [id]: errorMessage }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, name, value } = e.target;
    validateInput(id, name, value);
    console.log("name,value",name, value)
    const updatedValue = (name === "SubField" || name === "keywords") ? value.split(",") : value;
    const updatedSection = { ...localSection, [name]: updatedValue };
    console.log("updatedValue",updatedValue)
    console.log("updatedSection",updatedSection)
    setLocalSection(updatedSection);
    console.log("updatedhandlechange",localSection)
    console.log("inhandlechange",)
    props.update(props.id, updatedSection);
  };

  const handleKeywordChange = (index: number, key: string, value: string) => {
    const updatedKeywords = localSection.SubField.map((keyword: any, i: number) => {
      if (i === index) return { ...keyword, [key]: value };
      return keyword;
    });
    console.log("handleKeywordChange ",)
    setLocalSection({ ...localSection, SubField: updatedKeywords });
    props.update(props.id, { ...localSection, SubField: updatedKeywords });
  };

  const handleAddKeyword = () => {
    const updatedKeywords = [...localSection.SubField, { field: "", value: "" }];
    setLocalSection({ ...localSection, SubField: updatedKeywords });
    props.update(props.id, { ...localSection, SubField: updatedKeywords });
  };

  const handleRemoveKeyword = (index: number) => {
    const updatedKeywords = localSection.SubField.filter((_: any, i: number) => i !== index);
    setLocalSection({ ...localSection, SubField: updatedKeywords });
    props.update(props.id, { ...localSection, SubField: updatedKeywords });
  };

  const handleDescriptionUpdate = useCallback(
    (index: number, name: string, lines: string[]) => {
      const updatedSection = { ...localSection, [name]: lines };
      setLocalSection(updatedSection);
      props.update(props.id, updatedSection);
    },
    [localSection, props, props.id]
  );

  const inputAttributes = (item: string) => {
    const attributes = {
      type: "text",
      shrink: false,
    };
    if (["date", "startDate", "endDate"].includes(item)) {
      attributes.type = "date";
      attributes.shrink = true;
    }
    return attributes;
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {Object.entries(props.input).map(([key, value], idx) => (
          <Grid key={idx} item xs={12}>
            {key === "description" || key === "projectDescription" ? (
              <Description
                sectionName={props.name}
                section={props.section}
                index={props.id}
                name={key}
                onUpdate={handleDescriptionUpdate}
              />
            ) : key === "SubField" ? (
              <Box>
                <Typography variant="h6">Keywords (Field - Value pairs)</Typography>
                {localSection.SubField.map((keyword: any, index: number) => (
                  <Box key={index} display="flex" alignItems="center" mb={2}>
                    <TextField
                      label={`Field ${index + 1}`}
                      value={keyword.field || ""}
                      onChange={(e) => handleKeywordChange(index, "field", e.target.value)}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label={`Value ${index + 1}`}
                      value={keyword.value || ""}
                      onChange={(e) => handleKeywordChange(index, "value", e.target.value)}
                      fullWidth
                      margin="normal"
                      style={{ marginLeft: 10 }}
                    />
                    <IconButton onClick={() => handleRemoveKeyword(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
                <Button onClick={handleAddKeyword} variant="contained" color="primary">
                  Add Keyword
                </Button>
              </Box>
            ) : (
              <div>
                <TextField
                  id={`${key}-${idx}`}
                  name={key}
                  label={
                    key === "keywords"
                      ? _.startCase(key) + " (separated by a `,`)"
                      : _.startCase(key)
                  }
                  value={localSection[key] || ""}
                  onChange={handleChange}
                  type={inputAttributes(key).type}
                  InputLabelProps={{
                    shrink: inputAttributes(key).shrink || Boolean(localSection[key]),
                  }}
                  error={Boolean(errorText[`${key}-${idx}`])}
                  fullWidth
                />
                {errorText[`${key}-${idx}`] && (
                  <Alert severity="error">{errorText[`${key}-${idx}`]}</Alert>
                )}
              </div>
            )}
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
