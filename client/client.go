package main

import (
	"context"
	todo "grpc/client/src/protoc"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	conn, err := grpc.Dial("localhost:9090", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		println(err)
	}
	client := todo.NewTodoServiceClient(conn)
	newTodo := &todo.Todo{
		Title:     "Buy Shoes",
		Completed: true,
	}
	response, err := client.AddTodo(context.Background(), newTodo)
	// resp, err := client.GetTodos(context.TODO(), &todo.Empty{})
	println(response.GetStatus())
	// fmt.Printf("%v+", resp.Todos)
	// resp, _ = protojson.Marshal(resp.Todos.ProtoReflect().Interface())
	// println((resp.Todos))
}
