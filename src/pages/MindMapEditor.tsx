
import { useState, useRef, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { 
  Save, 
  Download, 
  Share, 
  Plus, 
  Minus, 
  RotateCcw,
  Palette,
  Type,
  Link as LinkIcon
} from "lucide-react";

interface Node {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  connections: string[];
}

const MindMapEditor = () => {
  const { id } = useParams();
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodes, setNodes] = useState<Node[]>([
    { id: "1", x: 400, y: 200, text: "Central Idea", color: "#00D4FF", connections: ["2", "3"] },
    { id: "2", x: 200, y: 100, text: "Branch 1", color: "#FF6B9D", connections: [] },
    { id: "3", x: 600, y: 300, text: "Branch 2", color: "#8B5CF6", connections: [] },
  ]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [newNodeText, setNewNodeText] = useState("");
  const [zoom, setZoom] = useState(1);

  const colors = ["#00D4FF", "#FF6B9D", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"];

  const handleNodeDrag = (nodeId: string, event: React.MouseEvent) => {
    if (!draggedNode) return;
    
    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const x = (event.clientX - rect.left) / zoom;
    const y = (event.clientY - rect.top) / zoom;

    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, x, y } : node
    ));
  };

  const addNode = () => {
    if (!newNodeText.trim()) return;

    const newNode: Node = {
      id: Date.now().toString(),
      x: 400 + Math.random() * 200 - 100,
      y: 200 + Math.random() * 200 - 100,
      text: newNodeText,
      color: colors[Math.floor(Math.random() * colors.length)],
      connections: []
    };

    setNodes([...nodes, newNode]);
    setNewNodeText("");
  };

  const deleteNode = (nodeId: string) => {
    setNodes(nodes.filter(node => node.id !== nodeId));
    // Remove connections to this node
    setNodes(prev => prev.map(node => ({
      ...node,
      connections: node.connections.filter(conn => conn !== nodeId)
    })));
  };

  const updateNodeText = (nodeId: string, text: string) => {
    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, text } : node
    ));
  };

  const changeNodeColor = (nodeId: string, color: string) => {
    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, color } : node
    ));
  };

  const connectNodes = (fromId: string, toId: string) => {
    setNodes(nodes.map(node => 
      node.id === fromId 
        ? { ...node, connections: [...node.connections, toId] }
        : node
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="pt-16">
        {/* Toolbar */}
        <div className="border-b border-white/10 glass p-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold">Mind Map Editor</h1>
              {id && <Badge variant="secondary">ID: {id}</Badge>}
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Add new node..."
                  value={newNodeText}
                  onChange={(e) => setNewNodeText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addNode()}
                  className="w-48"
                />
                <Button size="sm" onClick={addNode}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-1">
                <Button size="sm" variant="outline" onClick={() => setZoom(zoom + 0.1)}>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => setZoom(Math.max(0.1, zoom - 0.1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => setZoom(1)}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center space-x-1">
                <Button size="sm" variant="outline">
                  <Save className="mr-1 h-4 w-4" />
                  Save
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="mr-1 h-4 w-4" />
                  Export
                </Button>
                <Button size="sm" variant="outline">
                  <Share className="mr-1 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Editor Canvas */}
        <div className="relative h-[calc(100vh-120px)] overflow-hidden">
          <svg
            ref={svgRef}
            className="w-full h-full cursor-grab"
            style={{ transform: `scale(${zoom})` }}
            onMouseMove={(e) => draggedNode && handleNodeDrag(draggedNode, e)}
            onMouseUp={() => setDraggedNode(null)}
          >
            {/* Connections */}
            {nodes.map(node =>
              node.connections.map(connId => {
                const connNode = nodes.find(n => n.id === connId);
                if (!connNode) return null;
                
                return (
                  <line
                    key={`${node.id}-${connId}`}
                    x1={node.x}
                    y1={node.y}
                    x2={connNode.x}
                    y2={connNode.y}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className="opacity-60"
                  />
                );
              })
            )}

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#FF6B9D" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            {/* Nodes */}
            {nodes.map(node => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="40"
                  fill={node.color}
                  className={`cursor-pointer transition-all duration-200 hover:opacity-80 ${
                    selectedNode === node.id ? 'stroke-white stroke-4' : ''
                  }`}
                  onMouseDown={() => setDraggedNode(node.id)}
                  onClick={() => setSelectedNode(node.id)}
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-white text-sm font-medium pointer-events-none select-none"
                  style={{ fontSize: '12px' }}
                >
                  {node.text.length > 10 ? node.text.substring(0, 10) + '...' : node.text}
                </text>
              </g>
            ))}
          </svg>

          {/* Node Properties Panel */}
          {selectedNode && (
            <Card className="absolute top-4 right-4 w-80 glass border-white/10 p-4 space-y-4">
              <h3 className="font-semibold flex items-center">
                <Palette className="mr-2 h-4 w-4" />
                Node Properties
              </h3>
              
              {(() => {
                const node = nodes.find(n => n.id === selectedNode);
                if (!node) return null;
                
                return (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Text</label>
                      <Input
                        value={node.text}
                        onChange={(e) => updateNodeText(selectedNode, e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Color</label>
                      <div className="flex flex-wrap gap-2">
                        {colors.map(color => (
                          <button
                            key={color}
                            className={`w-8 h-8 rounded-full border-2 ${
                              node.color === color ? 'border-white' : 'border-transparent'
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => changeNodeColor(selectedNode, color)}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => deleteNode(selectedNode)}
                        className="flex-1"
                      >
                        Delete Node
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setSelectedNode(null)}
                        className="flex-1"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </Card>
          )}

          {/* Zoom Indicator */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="glass">
              Zoom: {Math.round(zoom * 100)}%
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMapEditor;
