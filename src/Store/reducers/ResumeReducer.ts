// src/redux/slices/resumeSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface Personal {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    website: string;
  }
  
  export interface Education {
    university: string;
    degree: string;
    startDate: string;
    endDate: string;
    gpa: number;
  }
  
  export interface Experience {
    title: string;
    organisation: string;
    startDate: string;
    endDate: string;
    description: string[];
  }
  
  export interface Skills {
    skillName: string;
    keywords: string[];
  }
  
  export interface Projects {
    projectName: string;
    keywords: string[];
    projectDescription: string[];
    projectLink: string;
  }
  
  export interface Achievements {
    title: string;
    date: string;
    organisation: string;
    description: string[];
  }
 export interface ResumeState {
    title: string;
    template?: string;
    image?:string;
    personal: Personal[];
    education:Education[];
    experience:Experience[];
    skills:Skills[];
    projects:Projects[];
    achievements:Achievements[]
    
  }



const initialState: ResumeState = {
    title: '',
    template: '',
   image:'',
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

export type ResumeSection = Exclude<keyof ResumeState, 'title' | 'template' |'image'>
type AddSectionItemPayload<T extends ResumeSection> = {
    section: T;
    item: ResumeState[T][number];
  };
  
  export type UpdateSectionItemPayload<T extends ResumeSection> = {
    section: T;
    index: number;
    item: ResumeState[T][number];
  };
const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        setTitle:(state,action)=>{
            state.title = action.payload;
        },
        setTemplate:(state,action)=>{
            state.template = action.payload;
        },
        setPersonal: (state, action) => {
            state.personal = action.payload;
        },
        setEducation: (state, action) => {                                              
            state.education = action.payload;
        },
        addSectionItem: <T extends ResumeSection>(state:ResumeState, action: PayloadAction<AddSectionItemPayload<T>>) => {
            const { section, item } = action.payload;
            (state[section] as any[]).push(item);
          },
          updateSectionItem: <T extends ResumeSection>(state: ResumeState , action: PayloadAction<UpdateSectionItemPayload<T>>) => {
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
    setTitle,
    setTemplate,
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
