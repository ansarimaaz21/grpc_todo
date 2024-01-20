/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.2
// source: index.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./index_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.TodoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.Todo,
 *   !proto.todo.TodoResponse>}
 */
const methodDescriptor_TodoService_AddTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/AddTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.Todo,
  proto.todo.TodoResponse,
  /**
   * @param {!proto.todo.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoResponse.deserializeBinary
);


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.addTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/AddTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_AddTodo,
      callback);
};


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoResponse>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.addTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/AddTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_AddTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.Empty,
 *   !proto.todo.TodoList>}
 */
const methodDescriptor_TodoService_GetTodos = new grpc.web.MethodDescriptor(
  '/todo.TodoService/GetTodos',
  grpc.web.MethodType.UNARY,
  proto.todo.Empty,
  proto.todo.TodoList,
  /**
   * @param {!proto.todo.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoList.deserializeBinary
);


/**
 * @param {!proto.todo.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.getTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/GetTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetTodos,
      callback);
};


/**
 * @param {!proto.todo.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoList>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.getTodos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/GetTodos',
      request,
      metadata || {},
      methodDescriptor_TodoService_GetTodos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.Todo,
 *   !proto.todo.TodoResponse>}
 */
const methodDescriptor_TodoService_UpdateTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/UpdateTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.Todo,
  proto.todo.TodoResponse,
  /**
   * @param {!proto.todo.Todo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoResponse.deserializeBinary
);


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.updateTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/UpdateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_UpdateTodo,
      callback);
};


/**
 * @param {!proto.todo.Todo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoResponse>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.updateTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/UpdateTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_UpdateTodo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.todo.TodoId,
 *   !proto.todo.TodoResponse>}
 */
const methodDescriptor_TodoService_DeleteTodo = new grpc.web.MethodDescriptor(
  '/todo.TodoService/DeleteTodo',
  grpc.web.MethodType.UNARY,
  proto.todo.TodoId,
  proto.todo.TodoResponse,
  /**
   * @param {!proto.todo.TodoId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.TodoResponse.deserializeBinary
);


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.todo.TodoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.TodoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.TodoServiceClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.TodoService/DeleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_DeleteTodo,
      callback);
};


/**
 * @param {!proto.todo.TodoId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.TodoResponse>}
 *     Promise that resolves to the response
 */
proto.todo.TodoServicePromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/todo.TodoService/DeleteTodo',
      request,
      metadata || {},
      methodDescriptor_TodoService_DeleteTodo);
};


module.exports = proto.todo;
