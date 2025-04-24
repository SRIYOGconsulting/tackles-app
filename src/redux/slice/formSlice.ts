import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the type for a single form entry
interface FormEntry {
  id: number; // Unique ID for identifying each entry
  name: string;
  number: string;
  selectedService: string;
  selectedShift: string;
  selectedPriority: string;
  selectedBudget: string;
  selectedArea: string;
  message: string;
  date: string;
}

// Define the type for the slice state
interface FormState {
  entries: FormEntry[]; // Array to hold multiple form entries
}

// Initial state
const initialState: FormState = {
  entries: [], // Start with an empty array
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<FormEntry>) {
      // Add a new form entry to the array
      state.entries.push(action.payload);
    },
    updateFormData(state, action: PayloadAction<FormEntry>) {
      // Find the index of the entry to be updated
      const index = state.entries.findIndex(
        entry => entry.id === action.payload.id,
      );
      if (index !== -1) {
        state.entries[index] = action.payload; // Update the specific entry
      }
    },
    clearAllFormData(state) {
      state.entries = [];
    },
  },
});

export const {addFormData, updateFormData, clearAllFormData} =
  formSlice.actions;

export default formSlice.reducer;
