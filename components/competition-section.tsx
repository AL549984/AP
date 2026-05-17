"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"

const comparisonData = [
  {
    category: "金融数据终端",
    features: {
      "金融数据治理": true,
      "AI Agent 工作流": false,
      "策略回测验证": false,
      "风险审计能力": false,
      "可追溯性": false,
    },
    note: "数据丰富，但以信息展示为主"
  },
  {
    category: "通用大模型 / Copilot",
    features: {
      "金融数据治理": false,
      "AI Agent 工作流": true,
      "策略回测验证": false,
      "风险审计能力": false,
      "可追溯性": false,
    },
    note: "灵活，但缺少金融专业能力"
  },
  {
    category: "量化平台 / 回测平台",
    features: {
      "金融数据治理": true,
      "AI Agent 工作流": false,
      "策略回测验证": true,
      "风险审计能力": false,
      "可追溯性": false,
    },
    note: "策略开发强，但缺少 Agent 协同"
  },
  {
    category: "OMS / RMS / 交易系统",
    features: {
      "金融数据治理": false,
      "AI Agent 工作流": false,
      "策略回测验证": false,
      "风险审计能力": true,
      "可追溯性": true,
    },
    note: "执行层强，不负责策略生成"
  },
  {
    category: "Alpha Pulse",
    features: {
      "金融数据治理": true,
      "AI Agent 工作流": true,
      "策略回测验证": true,
      "风险审计能力": true,
      "可追溯性": true,
    },
    note: "端到端 Agent 工作流",
    highlight: true
  },
]

const featureLabels = [
  "金融数据治理",
  "AI Agent 工作流",
  "策略回测验证",
  "风险审计能力",
  "可追溯性"
]

export function CompetitionSection() {
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
            不是单点工具，而是端到端 Agent 工作流
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            对比现有替代方案，Alpha Pulse 的差异化在于完整的可验证工作流
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left text-sm font-semibold">方案</th>
                {featureLabels.map((label) => (
                  <th key={label} className="p-4 text-center text-sm font-semibold">
                    {label}
                  </th>
                ))}
                <th className="p-4 text-left text-sm font-semibold">备注</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={row.category}
                  className={`border-b border-border ${
                    row.highlight ? "bg-primary/5" : ""
                  }`}
                >
                  <td className={`p-4 text-sm ${row.highlight ? "font-semibold text-primary" : ""}`}>
                    {row.category}
                  </td>
                  {featureLabels.map((label) => (
                    <td key={label} className="p-4 text-center">
                      {row.features[label as keyof typeof row.features] ? (
                        <Check className={`w-5 h-5 mx-auto ${row.highlight ? "text-primary" : "status-green"}`} />
                      ) : (
                        <Minus className="w-5 h-5 mx-auto text-muted-foreground/40" />
                      )}
                    </td>
                  ))}
                  <td className={`p-4 text-sm text-muted-foreground ${row.highlight ? "text-foreground" : ""}`}>
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`card-glow p-4 rounded-xl ${row.highlight ? "border-primary/50 bg-primary/5" : ""}`}
            >
              <h4 className={`font-semibold mb-3 ${row.highlight ? "text-primary" : ""}`}>
                {row.category}
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {featureLabels.map((label) => (
                  <div key={label} className="flex items-center gap-2 text-sm">
                    {row.features[label as keyof typeof row.features] ? (
                      <Check className={`w-4 h-4 ${row.highlight ? "text-primary" : "status-green"}`} />
                    ) : (
                      <Minus className="w-4 h-4 text-muted-foreground/40" />
                    )}
                    <span className="text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">{row.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            "时间感知金融数据管线",
            "可验证 Agent 工作流",
            "Risk Officer Agent",
            "私有化与权限体系"
          ].map((diff) => (
            <div key={diff} className="p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
              <span className="text-sm font-medium">{diff}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
