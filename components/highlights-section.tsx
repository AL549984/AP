"use client"

import { motion } from "framer-motion"
import { Bot, TrendingUp, Target, Shield } from "lucide-react"

const highlights = [
  {
    icon: Bot,
    title: "AI Agent 正从对话走向任务执行",
    description: `企业客户正在从"买模型"转向"买能完成任务的 Agent 工作流"。Alpha Pulse 面向真实金融工作流，而不是单轮问答。`,
  },
  {
    icon: TrendingUp,
    title: "金融是 Agent 最适合先落地的高价值场景",
    description: "金融场景具备高数据密度、高决策频次、高付费能力、高验证压力与高合规要求，适合作为 Agent 系统的高压测试场。",
  },
  {
    icon: Target,
    title: "MVP 切入点清晰",
    description: "第一阶段聚焦 Strategy Copilot + Risk Agent，帮助专业团队完成策略研究、回测验证、风险检查和审计报告。",
  },
  {
    icon: Shield,
    title: "差异化在可验证工作流",
    description: "每个结论都绑定数据来源、代码版本、参数、时间戳、权限、审批与审计日志，解决金融 AI 落地中的可信度问题。",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            为什么 Alpha Pulse 现在值得关注
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            在 AI Agent 从概念走向落地的关键时期，金融场景是最具价值的验证市场
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow p-6 rounded-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
