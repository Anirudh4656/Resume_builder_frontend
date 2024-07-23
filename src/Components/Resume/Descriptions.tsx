import { Alert, Button, TextField } from '@mui/material';
import React from 'react'

interface DescriptionProps {
    sectionName: any;
    index: number;
    name: string;
    section: { [key: string]: any }[]; 
    onUpdate: (index: number, name: string, lines: string[]) => void;// Adjust this type based on the actual structure of your section data
}

const Description: React.FC<DescriptionProps> = ({ sectionName, index, name, section,onUpdate }) => {
    

    // Initial state
    const [lines, setLines] = React.useState<string[]>(section[index][name] || []);
    const [errorText, setErrorText] = React.useState<Record<number, string>>({});

    // Validate input
    const validateInput = (id: number, input: string) => {
        if (input.length < 3) {
            setErrorText((prev) => ({ ...prev, [id]: 'Too Small Text' }));
        } else if (input.length > 100) {
            setErrorText((prev) => ({ ...prev, [id]: 'Too Large Text' }));
        } else {
            setErrorText((prev) => ({ ...prev, [id]: '' }));
        }
    };

    // Add a new line
    const addLine = () => {
        const updatedLines = [...lines, ''];
        setLines(updatedLines);
        // Creating a deep copy of the section to avoid mutating the original object
        const updatedSection = JSON.parse(JSON.stringify(section));
        updatedSection[index][name] = updatedLines;
    };

    // Handle change in text fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id, 10); // Convert id to number
        const value = e.target.value;
        validateInput(id, value);
        const updatedLines = [...lines];
        updatedLines[id] = value;
        setLines(updatedLines);
       
        const updatedSection = JSON.parse(JSON.stringify(section));
        updatedSection[index][name] = updatedLines;
        onUpdate(index, name, updatedLines);
    };
    return (
            <React.Fragment>
                {lines.map((text, idx) => (
                    <div key={idx}>
                        <TextField
                            id={idx.toString()} // Convert idx to string
                            name={idx.toString()}
                            label={`Description Line ${idx + 1}`}
                            value={text}
                            onChange={handleChange}
                            type="text"
                            error={Boolean(errorText[idx])}
                            fullWidth
                        />
                        {errorText[idx] && (
                            <Alert severity="error">
                                {errorText[idx]}
                            </Alert>
                        )}
                    </div>
                ))}
    
                <Button
                    onClick={addLine}
                    variant="contained"
                    color="primary"
                >
                    +
                </Button>
            </React.Fragment>
        );
};

export default Description;