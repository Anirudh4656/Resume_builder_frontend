// src/redux/slices/resumeSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Personal {
  
  }
  export interface Education {
    university: string,
    degree: string,
    startDate: string,
    endDate: string,
    gpa: number
  
  }
  export interface Experience {
  
  }
  export interface Skills {
  
  }
  export interface Projects {
  
  }
  export interface Achievements {
  
  }
 export interface ResumeState {
    personal: Personal[];
    education:Education[];
    experience:Experience[];
    skills:Skills[];
    projects:Projects[];
    achievements:Achievements[]
  }



const initialState: ResumeState = {
    personal: [
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            website: ""
        }
    ],
    education: [
        {
            university: "",
            degree: "",
            startDate: "",
            endDate: "",
            gpa: 0
        }
    ],
    experience: [
        {
            title: "",
            organisation: "",
            startDate: "",
            endDate: "",
            description: ['']
        }
    ],
    skills: [
        {
            skillName: '',
            keywords: ['']
        }
    ],
    projects: [
        {
            projectName: '',
            keywords: [''],
            projectDescription: [''],
            projectLink: ''
        }
    ],
    achievements: [
        {
            title: '',
            date: '',
            organisation: '',
            description: ['']
        }
    ],
};

type ResumeSection = keyof ResumeState;
type AddSectionItemPayload<T extends ResumeSection> = {
    section: T;
    item: ResumeState[T][number];
  };
  
  type UpdateSectionItemPayload<T extends ResumeSection> = {
    section: T;
    index: number;
    item: ResumeState[T][number];
  };
const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        setPersonal: (state, action) => {
            state.personal = action.payload;
        },
        setEducation: (state, action) => {
            state.education = action.payload;
        },
        addSectionItem: <T extends ResumeSection>(state: { [x: string]: (Personal | Education | Experience | Skills | Projects | Achievements)[]; }, action: PayloadAction<AddSectionItemPayload<T>>) => {
            const { section, item } = action.payload;
            state[section].push(item);
          },
          updateSectionItem: <T extends ResumeSection>(state: { [x: string]: (Personal | Education | Experience | Skills | Projects | Achievements)[]; }, action: PayloadAction<UpdateSectionItemPayload<T>>) => {
            const { section, index, item } = action.payload;
            state[section][index] = item;
          },
        setExperience: (state, action) => {
            state.experience = action.payload;
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        setAchievements: (state, action) => {
            state.achievements = action.payload;
        },
    },
});

export const {
    setPersonal,
    addSectionItem,
    updateSectionItem,
    setEducation,
    setExperience,
    setSkills,
    setProjects,
    setAchievements,
} = resumeSlice.actions;

export default resumeSlice.reducer;
