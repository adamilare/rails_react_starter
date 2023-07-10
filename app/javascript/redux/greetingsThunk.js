import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk(
  'greetings/getGreetings',
  async (name, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get('/api/greetings');
      return fulfillWithValue(data.greeting);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  },
);
