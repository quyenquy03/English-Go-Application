/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICategory } from "@/types/category/CategoryTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import categoryThunks from "./categoryThunks";

export interface AppState {
  loading: boolean;
  categories: ICategory[];
  selectedCategory?: ICategory;
  currentCategory?: ICategory;
  actionModal: "create" | "update" | "delete" | "restore" | "active" | "inactive";
  openModalSaveCategory: boolean;
  openModalConfirm: boolean;
  isSubmitting: boolean;
}

const initialState: AppState = {
  loading: false,
  categories: [],
  selectedCategory: undefined,
  currentCategory: undefined,
  openModalSaveCategory: false,
  openModalConfirm: false,
  actionModal: "create",
  isSubmitting: false,
};

export const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    changeSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    changeOpenModalSaveCategory: (state, action) => {
      state.openModalSaveCategory = action.payload;
    },
    changeOpenModalConfirm: (state, action) => {
      state.openModalConfirm = action.payload;
    },
    changeActionModal: (state, action) => {
      state.actionModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryThunks.getAllCategoryOfLevel.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryThunks.getAllCategoryOfLevel.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data || [];
      })
      .addCase(categoryThunks.getAllCategoryOfLevel.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(categoryThunks.getCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryThunks.getCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCategory = action.payload.data as ICategory;
      })
      .addCase(categoryThunks.getCategoryById.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(categoryThunks.createNewCategory.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(categoryThunks.createNewCategory.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.openModalSaveCategory = false;
        state.selectedCategory = undefined;
        state.actionModal = "create";
        state.categories.unshift(action.payload.data as ICategory);
      })
      .addCase(categoryThunks.createNewCategory.rejected, (state, action: PayloadAction<any>) => {
        state.isSubmitting = false;
      });
    builder
      .addCase(categoryThunks.updateCategory.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(categoryThunks.updateCategory.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.openModalSaveCategory = false;
        state.selectedCategory = undefined;
        state.actionModal = "create";
        state.categories = state.categories.map((category) => {
          if (category.id === action.payload.data?.id) {
            return action.payload.data as ICategory;
          }
          return category;
        });
      })
      .addCase(categoryThunks.updateCategory.rejected, (state, action: PayloadAction<any>) => {
        state.isSubmitting = false;
      });
    builder
      .addCase(categoryThunks.deleteCategory.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(categoryThunks.deleteCategory.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.openModalConfirm = false;
        state.selectedCategory = undefined;
        state.actionModal = "create";
        state.categories = state.categories.filter((category) => category.id !== action.payload.data?.id);
      })
      .addCase(categoryThunks.deleteCategory.rejected, (state, action: PayloadAction<any>) => {
        state.isSubmitting = false;
      });
    builder
      .addCase(categoryThunks.restoreCategory.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(categoryThunks.restoreCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map((category) => {
          if (category.id === action.payload.data?.id) {
            return action.payload.data as ICategory;
          }
          return category;
        });
        state.isSubmitting = false;
        state.openModalConfirm = false;
        state.selectedCategory = undefined;
        state.actionModal = "create";
      })
      .addCase(categoryThunks.restoreCategory.rejected, (state, action: PayloadAction<any>) => {
        state.isSubmitting = false;
      });
    builder
      .addCase(categoryThunks.activeCategory.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(categoryThunks.activeCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map((category) => {
          if (category.id === action.payload.data?.id) {
            return action.payload.data as ICategory;
          }
          return category;
        });
        state.isSubmitting = false;
        state.openModalConfirm = false;
        state.selectedCategory = undefined;
        state.actionModal = "create";
      })
      .addCase(categoryThunks.activeCategory.rejected, (state, action: PayloadAction<any>) => {
        state.isSubmitting = false;
      });
    builder
      .addCase(categoryThunks.inactiveCategory.pending, (state) => {
        state.isSubmitting = true;
      })
      .addCase(categoryThunks.inactiveCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map((category) => {
          if (category.id === action.payload.data?.id) {
            return action.payload.data as ICategory;
          }
          return category;
        });
        state.isSubmitting = false;
        state.openModalConfirm = false;
        state.selectedCategory = undefined;
        state.actionModal = "create";
      })
      .addCase(categoryThunks.inactiveCategory.rejected, (state, action: PayloadAction<any>) => {
        state.isSubmitting = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const CategoryAction = {
  ...CategorySlice.actions,
  ...categoryThunks,
};

export default CategorySlice.reducer;
