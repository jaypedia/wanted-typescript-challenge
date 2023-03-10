// @ts-check

/**
 * @description Tag object type definition
 *
 * @typedef {Object} Tag
 * @property {number} id - Tag id
 * @property {string} name - Tag name
 */

/**
 * @description Todo object type definition
 *
 * @typedef {Object} Todo
 * @property {number} id - Todo id
 * @property {string} content - Todo content
 * @property {boolean} isCompleted - Todo status
 * @property {string} category - Todo category
 * @property {Tag[]} [tags] - Todo tags
 */

/**
 * @description Create a new todo.
 * @description A task can be added without any content.
 *
 * @async
 * @function createTodo
 * @param {string} content
 * @param {string} category
 * @param {Tag[]} [tags = []]
 * @returns {Promise<Todo | void>} - Returns a created todo
 * @throws {Error} - Throws an Error when failed to request
 */
const createTodo = async (content, category, tags) => {};

/**
 * @description Get all todos.
 *
 * @async
 * @function getTodos
 * @returns {Promise<Todo[] | void>} - Returns an array of todos
 * @throws {Error} - Throws an Error when failed to request
 */
const getTodos = async () => {};

/**
 * @description Get a specific todo by id.
 *
 * @async
 * @function getTodoById
 * @param {number} id - Todo id
 * @returns {Promise<Todo | void>} - Returns a todo matching the given id
 * @throws {Error} - Throws an Error when failed to request
 *
 */
const getTodoById = async (id) => {};

/**
 * @description Update a task except its id.
 *
 * @async
 * @function updateTodo
 * @param {number} id - Todo id
 * @param {string} content
 * @param {boolean} isCompleted
 * @param {string} category
 * @param {Tag[]} tags
 * @returns {Promise<Todo | void>} - Returns an updated todo
 * @throws {Error} - Throws an Error when failed to request
 */
const updateTodo = async (id, content, isCompleted, category, tags) => {};

/**
 * @description Update tags in a task.
 *
 * @async
 * @function updateTags
 * @param {number} id - Todo id
 * @param {Tag[]} tags
 * @returns {Promise<Todo | void>} - Returns an updated todo
 * @throws {Error} - Throws an Error when failed to request
 */
const updateTags = async (id, tags) => {};

/**
 * @description Delete all todos.
 *
 * @async
 * @function deleteAllTodos
 * @returns {Promise<void>}
 * @throws {Error} - Throws an Error when failed to request
 */
const deleteAllTodos = async () => {};

/**
 * @description Delete a todo by its id.
 *
 * @async
 * @function deleteTodoById
 * @param {number} id - Todo id
 * @returns {Promise<void>}
 * @throws {Error} - Throws an Error when failed to request
 */
const deleteTodoById = async (id) => {};

/**
 * @description Delete all tags in a todo.
 *
 * @async
 * @function deleteAllTags
 * @param {number} id - Todo id
 * @returns {Promise<void>}
 * @throws {Error} - Throws an Error when failed to request
 */
const deleteAllTags = async (id) => {};

/**
 * @description Delete a tag in a todo.
 *
 * @async
 * @function deleteTag
 * @param {number} id - Todo id
 * @param {number} tagId - Tag id
 * @returns {Promise<void>}
 * @throws {Error} - Throws an Error when failed to request
 */
const deleteTag = async (id, tagId) => {};
