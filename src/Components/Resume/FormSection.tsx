import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store/store';
import { addSectionItem, ResumeState } from '../../Store/reducers/ResumeReducer';
import FormInput from './FormInput';

// Define the type for form props
interface FormProps {
    input: any; // Change `any` to a more specific type if possible
    name: string;
    section: keyof ResumeState;
}

const FormSection: React.FC<FormProps> = ({ input, name, section }) => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.resume[section]);
    console.log("newSuser",user);
    console.log("section",section);
    const [newSection, setNewSection] = useState(user);
    const blankSection = input;
console.log("blanksection",blankSection)
    const addSection = () => {
        setNewSection([...newSection, { ...blankSection }]);
        console.log("newSection",newSection)
        dispatch(addSectionItem({ section, item: blankSection }));
    };

    const update = (index: number, updatedItem: any) => {
        const updatedSection = newSection.map((item, i) => (i === index ? updatedItem : item));
        setNewSection(updatedSection);
        dispatch(addSectionItem({ section, item: updatedItem }));
    };

    return (
        <div>
            <h3>{name}</h3>
            {newSection.map((item, index) => (
                <div key={index}>
                    <FormInput section={[...newSection]} id={index} update={update} input={input} name={name}  />
                </div>
            ))}
            <button onClick={addSection}>Add {name}</button>
        </div>
    );
};

export default FormSection;
