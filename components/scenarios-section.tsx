"use client"

import { motion } from "framer-motion"
import { TrendingUp, Globe, Bitcoin, Building2 } from "lucide-react"

const scenarios = [
  {
    icon: TrendingUp,
    title: "私募基金 / 量化团队",
    description: "策略研究、因子生成、回测验证、风险审计",
    tags: ["策略研究", "因子挖掘", "回测验证"],
  },
  {
    icon: Globe,
    title: "家族办公室 / 全球宏观团队",
    description: "宏观事件研究、多资产配置、风险暴露分析",
    tags: ["宏观研究", "多资产配置", "风险分析"],
  },
  {
    icon: Bitcoin,
    title: "加密资产与跨境交易团队",
    description: "7×24 市场监控、策略复盘、异常波动风险提醒",
    tags: ["全天候监控", "策略复盘", "风险预警"],
  },
  {
    icon: Building2,
    title: "券商研究 / 自营 / 资管团队",
    description: "投研自动化、研究报告辅助、权限管理、审计留痕",
    tags: ["投研自动化", "权限管理", "审计留痕"],
  },
]

export function ScenariosSection() {
  return (
    <section id="solutions" className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            为高频、高价值、高验证压力的投资工作流而生
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            覆盖多类型专业投资机构的核心研究与风控需求
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <scenario.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{scenario.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{scenario.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {scenario.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary rounded border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
