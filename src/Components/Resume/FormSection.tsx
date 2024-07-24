import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import {
  Achievements,
  addSectionItem,
  updateSectionItem,
  Education,
  Experience,
  Personal,
  Projects,
  ResumeSection,
  Skills,
} from "../../Store/reducers/ResumeReducer";
import FormInput from "./FormInput";


interface FormInputProps<T> {
  input: T;
  name: string;
  section: ResumeSection;
}

const FormSection = <
  T extends Personal | Education | Experience | Skills | Projects | Achievements
>({
  input,
  name,
  section,
}: FormInputProps<T>) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.resume[section] as T[]);
  const [newSection, setNewSection] = useState<T[]>(user);
  console.log("newSection", newSection,user);
  const blankSection = input;
  const addSection = () => {
    setNewSection([...newSection, { ...blankSection }]);
   
    dispatch(addSectionItem({ section, item: blankSection }));
  };

  const update = (index: number, updatedItem: T) => {
    console.log("updated Section", updatedItem);
    const updatedSection = newSection.map((item, i) =>
      i === index ? updatedItem : item
    );
    console.log("upSection", updatedSection);
    // console.log("pdatedSection",updatedSection)
    if (updatedSection) {
      setNewSection(updatedSection);
      // setFormState(updatedSection);
    }

    console.log("new Section", newSection);
    dispatch(updateSectionItem({ section, index, item: updatedItem }));
  };

  return (
    <div>
      {newSection.map((item, index) => (
        <div key={index}>
          <FormInput
            section={[...newSection]}
            id={index}
            update={update}
            input={input}
            name={name}
          />
        </div>
      ))}
      <button onClick={addSection}>Add {name}</button>
    </div>
  );
};

export default FormSection;
