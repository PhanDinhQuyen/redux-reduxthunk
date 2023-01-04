import { createServer, Model } from "miragejs";

export const setupServer = () =>
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/todo", (schema) => {
        return schema.todos.all();
      });

      this.post("/todo", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        return schema.todos.create(payload);
      });

      this.patch("/todo", (schema, request) => {
        const payload = JSON.parse(request.requestBody);
        console.log(["payload"], payload);
        const currentTodo = schema.todos.find(payload.id);
        currentTodo.completed = !currentTodo.completed;
        currentTodo.update(payload);
        return;
      });
    },
    models: {
      todos: Model,
    },
  });
