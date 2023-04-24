import { useState } from "react";
import { TTodo } from "../types";
import { API_URL } from "../settings";
import useEffectOnce from "./useEffectOnce";

/**
 Options for getting todos.
 @typedef {Object} TGetTodosOptions
 @property {boolean} [fetchOnMount] - Whether to fetch todos on component mount. Defaults to false.
 */
type TGetTodosOptions = {
    fetchOnMount?: boolean;
};

/**
 * Use api calls.
 * @param fetchOnMount
 */
const useApi = ({ fetchOnMount = false }: TGetTodosOptions) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [todos, setTodos] = useState<TTodo[]>([]);

    /**
     * Fetch and sort todos items.
     */
    const fetchTodos = () => {
        fetch(`${API_URL}/items?_sort=done,createdAt&_order=desc,asc`)
            .then(async (res) => {
                const todos = await res.json();
                setTodos(todos);
            })
            .catch((err) => {
                console.error(err);
                setIsError(true);
            })
            .finally(() => {
                setIsLoaded(true);
            })
    };

    /**
     * Add new todo.
     * @param title - add new todo.
     */
    const addTodo = (title: string) => {
      fetch(`${API_URL}/items`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title }),
      })
          .then(async (res) => {
              fetchTodos();
          })
          .catch(err => console.error(err));
    };

    /**
     * Delete todo item by id.
     * @param id - id of the todo item
     */
    const deleteTodo = (id: number) => {
        fetch(`${API_URL}/items/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network error!");
                }
                return res.json();
            })
            .then(() => {
                fetchTodos();
            })
            .catch(err => console.error(err));
    }

    /**
     * Edit todo title.
     * @param id -  id of the current todo item
     * @param title - title of the todo.
     */
    const editTodo = (id: number, title: string ) => {
      fetch(`${API_URL}/items/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title }),
      })
          .then(() => {
              fetchTodos();
          })
          .catch(err => console.error(err));
    };

    /**
     * Add or remove done on change checkbox value.
     * @param id - id of the todo
     * @param todoItem - the item of todo.
     */
    const changeDone = (id: number, todoItem: TTodo) => {
        fetch(`${API_URL}/done/${id.toString()}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...todoItem, done: !todoItem.done }),
        })
            .then(() => {
                fetchTodos();
            })
            .catch(err => console.error(err));
    };

    useEffectOnce(() => {
       if (fetchOnMount) {
           fetchTodos();
       }
    });

    return {
        todos,
        isLoaded,
        isError,
        fetchTodos,
        addTodo,
        deleteTodo,
        editTodo,
        changeDone,
    };
};

export default useApi;
