
PROTO_DEST=../src/proto

mkdir -p ${PROTO_DEST}

cd "$(dirname "$0")/../proto" || exit
PROTOFILES=("$(find "$(pwd)" -type f -name "*.proto")")
echo "JavaScript code generation: start"
# JavaScript code generation
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    --proto_path "$(pwd)" \
      $PROTOFILES
echo "JavaScript code generation: end"

echo "TypeScript code generation: start"
# TypeScript code generation
protoc \
    --plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DEST} \
    --proto_path "$(pwd)" \
    $PROTOFILES
echo "TypeScript code generation: enc"
