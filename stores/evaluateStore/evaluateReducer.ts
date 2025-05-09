import { IPaginationData } from "@/types/AppType";
import { IEvaluate } from "@/types/evaluate/EvaluateTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import evaluateThunks from "./evaluateThunks";

export interface EvaluateState {
  evaluates: IEvaluate[];
  isSubmiting: boolean;
  isLoading?: boolean;
  evaluatePaginationData?: IPaginationData;
  openModalShowEvaluate: boolean;
  currentEvaluate?: IEvaluate;
}

const initialState: EvaluateState = {
  evaluates: [],
  isSubmiting: false,
  isLoading: false,
  openModalShowEvaluate: false,
  currentEvaluate: undefined,
};

export const EvaluateSlice = createSlice({
  name: "evaluates",
  initialState,
  reducers: {
    changeIsSubmiting: (state, action: PayloadAction<boolean>) => {
      state.isSubmiting = action.payload;
    },
    changeOpenModalShowEvaluate: (state, action: PayloadAction<boolean>) => {
      state.openModalShowEvaluate = action.payload;
    },
    changeCurrentEvaluate: (state, action: PayloadAction<IEvaluate | undefined>) => {
      state.currentEvaluate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(evaluateThunks.sendEvaluate.pending, (state) => {
        state.isSubmiting = true;
      })
      .addCase(evaluateThunks.sendEvaluate.fulfilled, (state, action) => {
        state.isSubmiting = false;
        console.log(action.payload);
      })
      .addCase(evaluateThunks.sendEvaluate.rejected, (state, action) => {
        state.isSubmiting = false;
        console.log(action.payload);
      });
    builder
      .addCase(evaluateThunks.getAllEvaluates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(evaluateThunks.getAllEvaluates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.evaluates = action.payload.data.items;
        state.evaluatePaginationData = {
          page: action.payload.data.currentPage,
          limit: action.payload.data.limit,
          totalItems: action.payload.data.totalItems,
          totalPages: action.payload.data.totalPages,
        };
      })
      .addCase(evaluateThunks.getAllEvaluates.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
    builder
      .addCase(evaluateThunks.toogleShowEvaluate.pending, (state) => {
        state.isSubmiting = true;
      })
      .addCase(evaluateThunks.toogleShowEvaluate.fulfilled, (state, action) => {
        state.isSubmiting = false;
        state.evaluates = state.evaluates.map((evaluate) => {
          if (evaluate.id === action.payload.data.id) {
            return action.payload.data;
          }
          return evaluate;
        });
      })
      .addCase(evaluateThunks.toogleShowEvaluate.rejected, (state, action) => {
        state.isSubmiting = false;
        console.log(action.payload);
      });
  },
});

// Action creators are generated for each case reducer function
export const EvaluateActions = {
  ...EvaluateSlice.actions,
  ...evaluateThunks,
};

export default EvaluateSlice.reducer;
