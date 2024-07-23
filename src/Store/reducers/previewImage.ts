// previewSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import html2canvas from 'html2canvas';

export const renderPreview = createAsyncThunk(
    'preview/renderPreview',
    async (_, { rejectWithValue }) => {
        try {
            const element = document.querySelector("#template") as HTMLElement | null;
            if (!element) {
                throw new Error("Element not found");
            }
            const canvas = await html2canvas(element);
            const imgData = canvas.toDataURL('image/png');
            console.log("imgData",imgData);
            return imgData;
        } catch (error:any) {
            return rejectWithValue(error.message);
        }
    }
);


const previewSlice = createSlice({
    name: 'preview',
    initialState: {
        image: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(renderPreview.pending, (state:any) => {
                state.status = 'loading';
            })
            .addCase(renderPreview.fulfilled, (state:any, action) => {
                state.status = 'succeeded';
                state.image = action.payload;
            })
            .addCase(renderPreview.rejected, (state:any, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default previewSlice.reducer;
