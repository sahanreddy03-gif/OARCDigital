import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, Cpu, BarChart3, Rocket, Zap, Trash2, DollarSign } from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

type AgentType = "SDR" | "Content" | "Support" | "Data";

interface Agent {
  id: string;
  type: AgentType;
  name: string;
  cost: number;
  revenue: number;
  color: string;
  description: string;
}

const AGENT_TYPES: Record<AgentType, Omit<Agent, "id">> = {
  SDR: { type: "SDR", name: "AI Sales Agent", cost: 500, revenue: 5000, color: "#06b6d4", description: "Automates outreach & booking" },
  Content: { type: "Content", name: "Content Engine", cost: 300, revenue: 2500, color: "#a855f7", description: "Generates SEO blogs & social posts" },
  Support: { type: "Support", name: "Support Bot 24/7", cost: 200, revenue: 1200, color: "#22c55e", description: "Instant customer resolution" },
  Data: { type: "Data", name: "Data Analyst", cost: 400, revenue: 3000, color: "#f59e0b", description: "Real-time insights & forecasting" },
};

export default function GrowthSimulator() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const months = 12;

  const totalMonthlyCost = agents.reduce((acc, a) => acc + a.cost, 0);
  const totalMonthlyRevenue = agents.reduce((acc, a) => acc + a.revenue, 0);
  const roiMultiplier = totalMonthlyCost > 0 ? ((totalMonthlyRevenue - totalMonthlyCost) / totalMonthlyCost).toFixed(1) : "0.0";

  const [chartData, setChartData] = useState<any>({ labels: [], datasets: [] });

  useEffect(() => {
    const labels = Array.from({ length: months }, (_, i) => `Month ${i + 1}`);
    const humanRevenueLine = labels.map((_, i) => agents.length === 0 ? 0 : (i + 1) * (totalMonthlyRevenue * 0.4));
    const aiRevenueLine = labels.map((_, i) => {
      if (agents.length === 0) return 0;
      const growthFactor = 1.05;
      return totalMonthlyRevenue * ((Math.pow(growthFactor, i + 1) - 1) / (growthFactor - 1));
    });

    setChartData({
      labels,
      datasets: [
        { label: "OARC AI Workforce", data: aiRevenueLine, borderColor: "#06b6d4", backgroundColor: "rgba(6, 182, 212, 0.15)", borderWidth: 3, fill: true, tension: 0.4 },
        { label: "Traditional Human Team", data: humanRevenueLine, borderColor: "#52525b", borderWidth: 2, borderDash: [5, 5], fill: false, tension: 0.4 },
      ],
    });
  }, [agents, totalMonthlyRevenue]);

  const addAgent = (type: AgentType) => {
    if (agents.length >= 12) return;
    const newAgent = { ...AGENT_TYPES[type], id: Math.random().toString(36).substr(2, 9) };
    setAgents(prev => [...prev, newAgent]);
  };

  const removeAgent = (id: string) => setAgents(prev => prev.filter(a => a.id !== id));
  const resetSimulation = () => setAgents([]);

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-medium uppercase shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Zap className="w-3 h-3" /> Growth Simulator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI Workforce</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Stop guessing. Simulate the devastating impact of deploying an OARC AI fleet.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Builder */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-zinc-900/50 border-white/10 backdrop-blur-md p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Deploy Agents</h3>
                </div>
                <div className="text-xs text-zinc-500 font-mono bg-black/40 px-2 py-1 rounded">{agents.length}/12 UNITS</div>
              </div>
              <div className="space-y-3">
                {Object.entries(AGENT_TYPES).map(([key, agent]) => (
                  <motion.button
                    key={key}
                    onClick={() => addAgent(key as AgentType)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid={`button-add-agent-${key.toLowerCase()}`}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/40 border border-white/10 font-bold text-lg shadow-inner" style={{ color: agent.color }}>{key[0]}</div>
                      <div className="text-left">
                        <div className="font-semibold text-zinc-200">{agent.name}</div>
                        <div className="text-[10px] text-zinc-500 uppercase">{agent.description}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end relative z-10">
                      <span className="text-xs font-mono text-cyan-400">+${agent.revenue.toLocaleString()}</span>
                      <span className="text-[10px] text-zinc-600">-${agent.cost}/mo</span>
                    </div>
                  </motion.button>
                ))}
              </div>
              {agents.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-zinc-500 uppercase">Active Fleet</span>
                    <button onClick={resetSimulation} data-testid="button-reset-simulation" className="text-[10px] text-red-400 hover:text-red-300 underline">Reset</button>
                  </div>
                  <div className="h-[120px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 pr-2 space-y-2">
                    <AnimatePresence mode="popLayout">
                      {agents.map((agent) => (
                        <motion.div
                          key={agent.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center justify-between p-2 rounded bg-zinc-800/40 border border-white/5 text-sm group"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: agent.color }} />
                            <span className="text-zinc-300">{agent.name}</span>
                          </div>
                          <button onClick={() => removeAgent(agent.id)} className="text-zinc-600 hover:text-red-400 p-1">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right: Visualizer */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-cyan-950/30 to-black border border-cyan-800/30 p-5 rounded-2xl relative overflow-hidden group">
                <div className="text-xs text-cyan-400 font-medium mb-1 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5" /> MONTHLY REV
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white font-mono" data-testid="text-monthly-revenue">${totalMonthlyRevenue.toLocaleString()}</div>
              </div>
              <div className="bg-zinc-900/40 border border-white/10 p-5 rounded-2xl">
                <div className="text-xs text-zinc-500 font-medium mb-1 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" /> EST. COST
                </div>
                <div className="text-2xl md:text-3xl font-bold text-zinc-300 font-mono" data-testid="text-monthly-cost">${totalMonthlyCost.toLocaleString()}</div>
              </div>
              <div className="bg-purple-950/20 border border-purple-800/30 p-5 rounded-2xl">
                <div className="text-xs text-purple-400 font-medium mb-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" /> ROI MULTIPLIER
                </div>
                <div className="text-2xl md:text-3xl font-bold text-purple-200 font-mono" data-testid="text-roi">{roiMultiplier}x</div>
              </div>
              <div className="bg-zinc-900/40 border border-white/10 p-5 rounded-2xl">
                <div className="text-xs text-zinc-500 font-medium mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> VELOCITY
                </div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono" data-testid="text-velocity">{agents.length > 0 ? (agents.length * 12) + 100 : 0}%</div>
              </div>
            </div>
            <Card className="bg-[#0f0f11] border-white/10 p-6 h-[500px] md:h-[550px] shadow-2xl flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-zinc-200">12-Month Revenue Trajectory</h4>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                {agents.length > 0 ? (
                  <Line
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          grid: { color: "rgba(255,255,255,0.03)" },
                          ticks: { color: "#52525b", callback: (val) => `$${Number(val).toLocaleString()}` }
                        },
                        x: {
                          grid: { color: "transparent" },
                          ticks: { color: "#52525b" }
                        }
                      },
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          backgroundColor: 'rgba(9, 9, 11, 0.95)',
                          titleColor: '#fff',
                          bodyColor: '#a1a1aa',
                          borderColor: 'rgba(255,255,255,0.08)',
                          borderWidth: 1,
                          padding: 12,
                          callbacks: {
                            label: (ctx) => `${ctx.dataset.label}: $${Number(ctx.raw).toLocaleString()}`
                          }
                        }
                      }
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600">
                    <BarChart3 className="w-16 h-16 opacity-20 mb-4" />
                    <p className="text-lg font-medium text-zinc-500">Simulation Offline</p>
                    <p className="text-sm opacity-50">Deploy an agent to initialize projection models.</p>
                  </div>
                )}
              </div>
            </Card>
            <div className="flex justify-end pt-4">
              <Button size="lg" data-testid="button-execute-strategy" className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white border-0 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <Zap className="mr-2 w-4 h-4 fill-current" />Execute This Strategy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
