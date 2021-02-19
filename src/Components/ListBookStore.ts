import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { listOfBook, Book } from '../Types'


interface ListBookState {
    list: listOfBook,
    selectedBookId: string;
    selectedAuthor: string;
}

const initialState: ListBookState = {
  list: [],
  selectedBookId: "",
  selectedAuthor:"",
};

export const ListBookSlice = createSlice({
  name: 'ListBook',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<listOfBook>) => {
      state.list = action.payload;
      },
    setSelectedBookId: (state, action: PayloadAction<string>) => {
      state.selectedBookId = action.payload;
    },
    setSelectedAuthor: (state, action: PayloadAction<string>) => {
      state.selectedAuthor = action.payload;
    },
  },
});

export const { setList, setSelectedBookId, setSelectedAuthor} = ListBookSlice.actions;

export const fetchBooks = (): AppThunk => dispatch => {
        fetch('https://raw.githubusercontent.com/sing2gather/impala-exercise/main/data.json').then(res => res.json()).then(resp => {
            const myContent: listOfBook = resp.books;
            dispatch(setList(myContent));
        })
};

export const selectList = (state: RootState) => state.listBook.list;

export const selectedBook = (state: RootState) => state.listBook.list.find((book) => book.id === state.listBook.selectedBookId)

export const sameAuthor = (state: RootState) => {
    let author = selectedBook(state)?.author
    if(author) return state.listBook.list.filter((book) => book.author === author && book.id !== state.listBook.selectedBookId)
}

export default ListBookSlice.reducer;