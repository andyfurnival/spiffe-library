#!/usr/bin/env bash
#npm install grpc_tools_node_protoc_ts --save-dev

PROTO_DEST=$(pwd)/src/proto
rm -rf "$(pwd)/src/proto"
mkdir -p "$(pwd)/src/proto/private"
mkdir -p "$(pwd)/src/proto/public"
#cd "$(dirname "$0")/../proto" || exit
PROTOFILES="$(find "./proto/private" -type f -name "*.proto")"
echo "JavaScript code generation: start"
# JavaScript code generation
#grpc_tools_node_protoc \
#    --js_out=import_style=commonjs_strict,binary:./src/proto/private \
#    --grpc_out=grpc_js:./src/proto/private \
#    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
#    --proto_path "./proto/private" \
#    $PROTOFILES
#echo "JavaScript code generation: end"
#
#echo "TypeScript code generation: start"
## TypeScript code generation
#grpc_tools_node_protoc \
#    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#    --ts_out=grpc_js:./src/proto/private \
#    --proto_path "./proto/private" \
#    $PROTOFILES


npx protoc \
  --ts_out ./src/proto/private \
  --ts_opt output_legacy_commonjs,client_grpc1,server_none,output_javascript_es2019 \
  --proto_path "./proto/private" \
                   $PROTOFILES
echo "TypeScript code generation: end"
PROTOFILES="$(find "./proto/public" -type f -name "*.proto")"
echo "JavaScript code generation: start"
# JavaScript code generation
#grpc_tools_node_protoc \
#    --js_out=import_style=commonjs_strict,binary:./src/proto/public \
#    --grpc_out=grpc_js:./src/proto/public \
#    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
#    --proto_path "./proto/public" \
#    $PROTOFILES
#echo "JavaScript code generation: end"
#
#echo "TypeScript code generation: start"
## TypeScript code generation
#grpc_tools_node_protoc \
#    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#    --ts_out=grpc_js:./src/proto/public \
#    --proto_path "./proto/public" \
#    $PROTOFILES
#

npx protoc \
  --ts_out ./src/proto/public \
  --ts_opt output_legacy_commonjs,client_grpc1,server_none,output_javascript_es2020 \
  --proto_path "./proto/public" \
                   $PROTOFILES
echo "TypeScript code generation: end"
