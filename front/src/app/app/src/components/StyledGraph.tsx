import React from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 200, y: 100 }, data: { label: '3' }, style: { border: '10px solid #ff0000' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2'},
  { id: 'e1-3', source: '1', target: '3' , animated: true, style: { stroke: '#ff0000', strokeWidth: 10 }}
];

function StyledGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{width: "500px", height: "500px"}}>
      <h1>グラフのノード・エッジを装飾</h1>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        proOptions={{ hideAttribution: true }}
      >
      </ReactFlow>
    </div>
  );
}

export default StyledGraph;