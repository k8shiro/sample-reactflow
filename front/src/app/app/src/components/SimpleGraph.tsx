import React from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function SimpleGraph() {
  return (
    <div style={{width: "500px", height: "500px"}}>
      <h1>単純なグラフ</h1>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        proOptions={{ hideAttribution: true }}
      >
      </ReactFlow>
    </div>
  );
}

export default SimpleGraph;