import api from '@/service/api';

// export const register = (credentials) => {
//   return api().post('/register', credentials)
// }

export const getTodos = () =>
  api().get('/todos');

export const addTodo = (content) =>
  api().post('/todo', { content });

export const deleteTodo = (id) =>
  api().delete(`/todo/${id}`);

export const updateTodo = (todo) =>
  api().post(`/todo/${todo.id}`, { content: todo.content, isCompleted: todo.isCompleted });

export const getAirData = () =>
  api().get('/air');
