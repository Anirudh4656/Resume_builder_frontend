// src/redux/slices/resumeSlice.js
import { createSlice } from '@reduxjs/toolkit';
export interface Personal {
  
  }
  export interface Education {
  
  }
  export interface Experience {
  
  }
  export interface Skills {
  
  }
  export interface Projects {
  
  }
  export interface Achievements {
  
  }
  interface ResumeState {
    personal: Personal[];
    education:Education[];
    experience:Experience[];
    skills:Skills[];
    projects:Projects[];
    achievements:Achievements[]
  }

const initialState:ResumeState={
  personal: [],
  education: [],
  experience: [],
  skills: [],
  projects: [],
  achievements: [],
}
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
    setEducation,
    setExperience,
    setSkills,
    setProjects,
    setAchievements,
} = resumeSlice.actions;

export default resumeSlice.reducer;
