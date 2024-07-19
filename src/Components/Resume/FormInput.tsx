import React from 'react';
import _ from 'lodash';
import { Alert, Grid, TextField } from '@mui/material';
import Description from './Descriptions';



interface FormInputProps {
    input: Record<string, any>; // Adjust if you have a more specific type
    section: any[]; // Adjust if you have a more specific type
    update: any;
    id: number;
    name: string;
}

export default function FormInput(props: FormInputProps) {
    console.log("forminput",props);
    const [errorText, setErrorText] = React.useState<Record<string, string>>({});
    const [minSize, setMinSize] = React.useState(50);

    const validateInput = (id: string, name: string, input: string) => {
        let errorMessage = '';
        if (name === 'gpa') {
            if (input.length < 1) errorMessage = 'Too Small Input';
            else if (input.length > 5) errorMessage = 'Too Large Input';
        } else if (name === 'projectName') {
            if (input.length < 3) errorMessage = 'Too Small Input';
            else if (input.length > 100) errorMessage = 'Too Large Input';
        } else if (name === 'keywords') {
            const keywords = input.split(',');
            setMinSize(4);
            keywords.forEach(keyword => {
                if (keyword.length < 4) setMinSize(keyword.length);
            });
            if (minSize < 4) errorMessage = 'Too Small Keyword';
        } else {
            if (input.length < 3) errorMessage = 'Too Small Input';
        }
        setErrorText(prev => ({ ...prev, [id]: errorMessage }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, name, value } = e.target;
        const updatedSection = [...props.section];
        validateInput(id, name, value);
        const updatedValue = name === 'keywords' ? value.split(',') : value;
        updatedSection[props.id][name] = updatedValue;
        //dispatch updated section
        props.update(updatedSection);
    };

    const inputAttributes = (item: string) => {
        const attributes = {
            type: 'text',
            shrink: false,
        };
        if (['date', 'startDate', 'endDate'].includes(item)) {
            attributes.type = 'date';
            attributes.shrink = true;
        }
        return attributes;
    };

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {
                    Object.entries(props.input).map((name, idx) => (
                        <Grid key={idx} item xs={12}>
                            {name[0] === 'description' || name[0] === 'projectDescription' ? (
                               
                                <Description
                                    sectionName={props.name}
                                    section={props.section}
                                    index={props.id}
                                    name={name[0]}
                                />
                            ) : (
                                <div>
                                   
                                    <TextField
                                        id={`${name}-${idx}`}
                                        name={name[0]}
                                        label={(name[0] === 'keywords') ? (_.startCase(name[0]) + ' (separated by a `,`)') : _.startCase(name[0])}
                                        value={props.section[props.id][name[0]]}
                                        onChange={handleChange}
                                            type={inputAttributes(name[0]).type}
                                            InputLabelProps={{
                                                shrink: (inputAttributes(name[0]).type === 'date' ? true :
                                                    props.section[props.id][name[0]] ? true : false),
                                                //color: props.section[props.id][name[0]].length < 3 ? 'primary' : 'secondary'
                                            }}
                                        error={Boolean(errorText[`${name}-${idx}`])}
                                        fullWidth
                                    />
                                    {errorText[`${name}-${idx}`] && (
                                        <Alert  severity="error">
                                            {errorText[`${name}-${idx}`]}
                                        </Alert>
                                    )}
                                </div>
                            )}
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment>
    );
}
