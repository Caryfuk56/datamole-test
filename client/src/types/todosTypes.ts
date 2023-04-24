/**
 * Type of todo response object.
 * @typedef {Object} TTodo
 * @property {number} id - The unique identifier of the todo item.
 * @property {string} title - The title or description of the todo item.
 * @property {boolean} done - Indicates whether the todo item has been completed.
 * @property {number} createdAt - The Unix timestamp of when the todo item was created.
*/
export type TTodo = {
    id: number;
    title: string;
    done: boolean;
    createdAt: number;
}
