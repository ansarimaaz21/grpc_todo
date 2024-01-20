// package main

// import (
// 	"fmt"
// 	proto "grpc/protoc"
// 	"net"

// 	"google.golang.org/grpc"
// 	"google.golang.org/grpc/reflection"
// )

// type server struct {
// 	proto.UnimplementedExampleServer
// }

// func main() {
// 	listener, tcpErr := net.Listen("tcp", ":8000")
// 	if tcpErr != nil {
// 		fmt.Println(tcpErr)
// 	}
// 	srv := grpc.NewServer()
// 	proto.RegisterExampleServer(srv, &server{})
// 	reflection.Register(srv)
// 	err := srv.Serve(listener)
// 	if err != nil {
// 		fmt.Println(err)
// 	}
// }

// func (s *server) ServerReply(stream proto.Example_ServerReplyClient) (*proto.HelloResponse, error) {
// 	fmt.Println("From Client", stream.SomeString)
// 	return &proto.HelloResponse{}, nil
// }

// main.go
package main

import (
	"context"
	"fmt"
	todo "grpc/client/src/protoc"
	"log"
	"net"
	"sync"

	"google.golang.org/grpc"
)

type todoServer struct {
	mu    sync.Mutex
	todos []*todo.Todo
	todo.UnimplementedTodoServiceServer
}

func (s *todoServer) AddTodo(ctx context.Context, req *todo.Todo) (*todo.TodoResponse, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	// Assign a unique ID to the todo (for simplicity, incrementing a counter here)
	req.Id = int32(len(s.todos) + 1)
	s.todos = append(s.todos, req)

	response := &todo.TodoResponse{
		Todo:   req,
		Status: "Added successfully",
	}

	return response, nil
}

func (s *todoServer) GetTodos(ctx context.Context, req *todo.Empty) (*todo.TodoList, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	fmt.Println(s.todos)
	return &todo.TodoList{
		Todos: s.todos,
	}, nil
}

func (s *todoServer) UpdateTodo(ctx context.Context, req *todo.Todo) (*todo.TodoResponse, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	// Find and update the todo with the matching ID
	for _, t := range s.todos {
		if t.GetId() == req.GetId() {
			t.Title = req.GetTitle()
			t.Completed = req.GetCompleted()
			return &todo.TodoResponse{
				Todo:   t,
				Status: "Updated successfully",
			}, nil
		}
	}

	return &todo.TodoResponse{
		Status: "Todo not found",
	}, nil
}

func (s *todoServer) DeleteTodo(ctx context.Context, req *todo.TodoId) (*todo.TodoResponse, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	// Find and remove the todo with the matching ID
	for i, t := range s.todos {
		if t.GetId() == req.GetId() {
			s.todos = append(s.todos[:i], s.todos[i+1:]...)
			return &todo.TodoResponse{
				Todo:   t,
				Status: "Deleted successfully",
			}, nil
		}
	}

	return &todo.TodoResponse{
		Status: "Todo not found",
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":9090")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	todo.RegisterTodoServiceServer(s, &todoServer{})
	err = s.Serve(lis)
	if err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
	fmt.Println("Server Started")
}
