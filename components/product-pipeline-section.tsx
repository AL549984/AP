"use client"

import { motion } from "framer-motion"
import { Database, Brain, Cpu, Layers, ArrowRight } from "lucide-react"

const pipelineSteps = [
  {
    icon: Database,
    title: "Research Agent",
    description: "读取新闻、公告、财报、宏观、研报和另类数据，更快形成研究假设和事件影响判断。",
  },
  {
    icon: Brain,
    title: "Strategy Copilot",
    description: "生成策略逻辑、因子定义、代码和回测框架，把策略验证周期从天/周缩短到小时级。",
  },
  {
    icon: Cpu,
    title: "Backtest & Validation",
    description: "执行回测、参数敏感性分析、样本外测试和稳定性验证。",
  },
  {
    icon: Layers,
    title: "Risk Officer Agent",
    description: "检查过拟合、滑点、容量、相关性、极端行情、未来函数、幸存者偏差和数据泄漏。",
  },
]

export function ProductPipelineSection() {
  return (
    <section id="product" className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            从策略想法到风险审计报告的智能闭环
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            市场数据 + 新闻公告 + 财报宏观 + 用户策略想法 → 策略报告 + 回测结果 + 风险解释 + 执行建议 + 审计日志
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card-glow p-6 rounded-xl h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 card-glow p-6 rounded-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
              <Layers className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">Compliance & Audit Layer</h3>
              <p className="text-sm text-muted-foreground">
                记录数据源、代码版本、模型输出、审批与权限，满足机构对可追溯和可审计的要求。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["数据追溯", "版本控制", "权限审批", "审计导出"].map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs font-mono bg-secondary rounded border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
