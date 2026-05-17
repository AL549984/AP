"use client"

import { motion } from "framer-motion"
import { Terminal, FileCode, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"

const workflowSteps = [
  { label: "解析用户任务", status: "complete" },
  { label: "加载市场数据", status: "complete" },
  { label: "生成研究假设", status: "complete" },
  { label: "构建策略逻辑", status: "complete" },
  { label: "执行回测验证", status: "complete" },
  { label: "风险压力测试", status: "warning" },
  { label: "生成审计报告", status: "active" },
]

const outputSections = [
  {
    title: "Strategy Hypothesis",
    content: "基于财报超预期事件的短期动量效应，在财报发布后5个交易日内存在显著的正向超额收益。"
  },
  {
    title: "Backtest Summary",
    items: [
      { label: "年化收益", value: "18.7%", status: "green" },
      { label: "Sharpe Ratio", value: "1.42", status: "green" },
      { label: "最大回撤", value: "-15.2%", status: "yellow" },
      { label: "胜率", value: "58.3%", status: "green" },
    ]
  },
  {
    title: "Risk Warnings",
    warnings: [
      "2022年熊市期间策略失效，需关注市场状态切换",
      "高波动环境下滑点影响显著",
      "部分小市值标的存在容量限制"
    ]
  },
  {
    title: "Audit Trail",
    logs: [
      { time: "14:32:01", action: "数据源已验证: Yahoo Finance, SEC EDGAR" },
      { time: "14:32:15", action: "回测代码版本: v2.3.1-alpha" },
      { time: "14:33:42", action: "风险检查完成: 3项警告" },
    ]
  }
]

export function WorkflowExampleSection() {
  return (
    <section id="workflow" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            一个典型任务如何在 Alpha Pulse 中完成
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从自然语言描述的策略想法，到可追溯的完整研究报告
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - User Input & Agent Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* User Input */}
            <div className="card-glow p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">用户任务输入</span>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <p className="text-sm text-foreground leading-relaxed">
                  &quot;帮我研究美股科技股财报超预期后的 5 日动量策略，并检查 2020–2024 年不同市场环境下的有效性。&quot;
                </p>
              </div>
            </div>

            {/* Agent Execution Steps */}
            <div className="card-glow p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <FileCode className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Agent 执行步骤</span>
              </div>
              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    {step.status === "complete" ? (
                      <CheckCircle2 className="w-4 h-4 status-green shrink-0" />
                    ) : step.status === "warning" ? (
                      <AlertTriangle className="w-4 h-4 status-yellow shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-primary animate-pulse shrink-0" />
                    )}
                    <span className="text-sm text-muted-foreground">{step.label}</span>
                    {step.status === "active" && (
                      <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full">进行中</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Generated Report */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-glow rounded-xl overflow-hidden"
          >
            {/* Report Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/30 border-b border-border">
              <span className="text-sm font-semibold">策略研究报告</span>
              <span className="text-xs font-mono text-muted-foreground">report-2024-001</span>
            </div>

            <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto">
              {/* Strategy Hypothesis */}
              <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {outputSections[0].title}
                </h4>
                <p className="text-sm text-foreground">
                  {outputSections[0].content}
                </p>
              </div>

              {/* Backtest Summary */}
              <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {outputSections[1].title}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {outputSections[1].items?.map((item) => (
                    <div key={item.label} className="p-2 bg-background rounded border border-border">
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className={`text-lg font-mono font-semibold ${
                        item.status === "green" ? "status-green" : "status-yellow"
                      }`}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Risk Warnings */}
              <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {outputSections[2].title}
                </h4>
                <div className="space-y-2">
                  {outputSections[2].warnings?.map((warning, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 status-yellow shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{warning}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Trail */}
              <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {outputSections[3].title}
                </h4>
                <div className="space-y-1.5 font-mono text-xs">
                  {outputSections[3].logs?.map((log, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-muted-foreground">[{log.time}]</span>
                      <span className="text-foreground/80">{log.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Actions */}
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                <span className="text-sm font-medium">下一步建议</span>
                <button className="flex items-center gap-1 text-sm text-primary hover:underline">
                  查看完整报告 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
