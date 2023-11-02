import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ToDo } from "@/utils/interfaces";
import { headers } from "../plans/plans";

export interface TodoState {
  todo: ToDo;
  todos: ToDo[];
  status: string;
  error: string;
}

const initialState: TodoState = {
  todo: {} as ToDo,
  todos: [],
  status: "idle",
  error: "",
};

const url = "http://localhost:8000/api/plans/";

export const fetchTodos = createAsyncThunk(
  "toDos/fetchTodos",
  async (planId: number) => {
    const res = await fetch(`${url}${planId}/toDo/`, {
      method: "GET",
      headers: headers,
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }
    const todos: ToDo[] = await res.json();
    return todos;
  }
);

export const fetchTodoById = createAsyncThunk(
  "toDos/fetchTodoById",
  async ({ planId, id }: { planId: number; id: number }) => {
    const res = await fetch(`${url}${planId}/toDo/${id}`, {
      method: "GET",
      headers: headers,
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }
    const todo: ToDo = await res.json();
    return todo;
  }
);

export const createTodo = createAsyncThunk(
  "plans/createTodo",
  async ({ planId, data }: { planId: number; data: ToDo }) => {
    const res = await fetch(`${url}${planId}/toDo/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
      credentials: "include",
    });
    return res.json();
  }
);

export const updateTodo = createAsyncThunk(
  "plans/updateTodo",
  async ({ id, data }: { id: number; data: ToDo }) => {
    const res = await fetch(`${url}toDo/${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: headers,
      credentials: "include",
    });
    return res.json();
  }
);

export const deleteTodo = createAsyncThunk(
  "plans/deleteTodo",
  async (id: number) => {
    await fetch(`${url}toDo/${id}/`, {
      method: "DELETE",
      headers: headers,
      credentials: "include",
    });
    return id;
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    selectTodo: (state, action: PayloadAction<number>) => {
      const selectedTodo = state.todos.find(
        (item) => item.id === action.payload
      );
      state.todo = selectedTodo !== undefined ? selectedTodo : ({} as ToDo);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "trying to fetch todos";
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.status = "todos fetched";
        state.todos = payload;
      })
      .addCase(fetchTodos.rejected, (state, { payload }) => {
        state.status = "failed to fetch the todos";
        state.error = JSON.stringify(payload);
      })
      .addCase(fetchTodoById.pending, (state) => {
        state.status = "selecting todo by id";
      })
      .addCase(fetchTodoById.fulfilled, (state, { payload }) => {
        state.status = "todo selected";
        state.todo = payload;
      })
      .addCase(fetchTodoById.rejected, (state, { payload }) => {
        state.status = "failed to select todo by id";
        state.error = JSON.stringify(payload);
      })
      .addCase(createTodo.pending, (state) => {
        state.status = "creating a new todo";
      })
      .addCase(createTodo.fulfilled, (state) => {
        state.status = "todo created";
      })
      .addCase(createTodo.rejected, (state, { payload }) => {
        state.status = "failed to create a new todo";
        state.error = JSON.stringify(payload);
      })
      .addCase(updateTodo.pending, (state) => {
        state.status = "updating todo";
      })
      .addCase(updateTodo.fulfilled, (state) => {
        state.status = "todo updated";
      })
      .addCase(updateTodo.rejected, (state, { payload }) => {
        state.status = "failed to update todo";
        state.error = JSON.stringify(payload);
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = "deleting todo";
      })
      .addCase(deleteTodo.fulfilled, (state) => {
        state.status = "todo deleted";
      })
      .addCase(deleteTodo.rejected, (state, { payload }) => {
        state.status = "failed to delete todo";
        state.error = JSON.stringify(payload);
      });
  },
});

export const { selectTodo } = todoSlice.actions;

export default todoSlice.reducer;
