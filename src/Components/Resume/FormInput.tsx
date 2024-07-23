import React from 'react';
import { Alert, Button, TextField } from '@mui/material';

interface DescriptionProps {
    sectionName: string;
    index: number;
    name: string;
    section: { [key: string]: any }[];
    update: (index: number, section: any) => void;
}

const Description: React.FC<DescriptionProps> = ({ sectionName, index, name, section, update }) => {
    const [lines, setLines] = React.useState<string[]>(section[index][name] || []);
    const [errorText, setErrorText] = React.useState<Record<number, string>>({});

    const validateInput = (id: number, input: string) => {
        let errorMessage = '';
        if (input.length < 3) {
            errorMessage = 'Too Small Text';
        } else if (input.length > 100) {
            errorMessage = 'Too Large Text';
        }
        setErrorText((prev) => ({ ...prev, [id]: errorMessage }));
    };

    const addLine = () => {
        const updatedLines = [...lines, ''];
        setLines(updatedLines);
        const updatedSection = { ...section[index], [name]: updatedLines };
        update(index, updatedSection);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id, 10);
        const value = e.target.value;
        validateInput(id, value);

        const updatedLines = [...lines];
        updatedLines[id] = value;
        setLines(updatedLines);

        const updatedSection = { ...section[index], [name]: updatedLines };
        update(index, updatedSection);
    };

    return (
        <React.Fragment>
            {lines.map((text, idx) => (
                <div key={idx}>
                    <TextField
                        id={idx.toString()}
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
