"use client"

import { motion } from "framer-motion"
import { Database, Bot, Server, Layers } from "lucide-react"

const architectureLayers = [
  {
    icon: Database,
    title: "数据层",
    subtitle: "Time-aware Financial Data Pipeline",
    items: ["行情数据", "财报公告", "新闻研报", "宏观指标", "另类数据", "用户私有数据"],
    emphasis: "关键不是数据多，而是清洗、标准化、时间对齐、权限管理和可追溯。",
    color: "primary"
  },
  {
    icon: Bot,
    title: "Agent 层",
    subtitle: "Multi-Agent Research Workflow",
    items: ["Planner", "Researcher", "Quant Developer", "Backtester", "Risk Officer", "Compliance Officer"],
    emphasis: "Risk Officer Agent 是关键模块，负责反驳、挑错和压力测试。",
    color: "accent"
  },
  {
    icon: Server,
    title: "计算层",
    subtitle: "Hybrid Model Routing",
    items: ["通用 LLM API", "开源模型私有化", "云 GPU 集群", "向量数据库", "任务队列", "权限隔离"],
    emphasis: "便宜任务用小模型，高价值推理用强模型，敏感数据用私有模型。",
    color: "primary"
  },
  {
    icon: Layers,
    title: "应用层",
    subtitle: "Financial Agent OS",
    items: ["Strategy Copilot", "Research Agent", "Risk Agent", "Execution Analytics", "Portfolio Agent", "Enterprise Platform"],
    emphasis: "完整的端到端解决方案，而不是单点工具。",
    color: "accent"
  },
]

export function ArchitectureSection() {
  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            真正的壁垒不只是 LLM，而是金融数据 + 工作流 + 风控审计
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            四层架构，端到端覆盖从数据到应用的完整链路
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow p-6 rounded-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  layer.color === "accent" 
                    ? "bg-accent/10 border border-accent/20" 
                    : "bg-primary/10 border border-primary/20"
                }`}>
                  <layer.icon className={`w-5 h-5 ${
                    layer.color === "accent" ? "text-accent" : "text-primary"
                  }`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{layer.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground">{layer.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded border border-border text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                {layer.emphasis}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
