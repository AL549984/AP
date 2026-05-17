"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, AlertTriangle, FileText, Play } from "lucide-react"

const workflowSteps = [
  { step: "01", label: "Load market data", status: "complete" },
  { step: "02", label: "Generate research hypothesis", status: "complete" },
  { step: "03", label: "Build strategy logic", status: "complete" },
  { step: "04", label: "Run backtest", status: "complete" },
  { step: "05", label: "Stress test risk", status: "warning" },
  { step: "06", label: "Generate audit report", status: "active" },
]

const tags = [
  "Strategy Copilot",
  "Risk Agent", 
  "Backtest Validation",
  "Compliance Audit",
  "Research-to-Execution"
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Research-to-Execution Agent System
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              面向专业投资机构的{" "}
              <span className="text-gradient">AI-native Quant Research & Risk Agent OS</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Alpha Pulse 将市场研究、策略生成、回测验证、风险控制、执行复盘与合规审计整合为可追溯、可复现、可审计的智能工作流，帮助专业投资团队把复杂市场信息转化为可验证的决策支持。
            </p>

            <p className="text-sm text-muted-foreground/80 font-mono">
              Research-to-Execution Agent System for professional investors.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                申请产品演示
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                查看解决方案
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right side - Agent OS Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">alpha-pulse-agent-os</span>
              </div>

              <div className="grid md:grid-cols-3 divide-x divide-border">
                {/* Left - Workflow */}
                <div className="p-4 space-y-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Agent Workflow</h4>
                  <div className="space-y-2">
                    {workflowSteps.map((item, index) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2 text-xs"
                      >
                        {item.status === "complete" ? (
                          <CheckCircle2 className="w-3.5 h-3.5 status-green shrink-0" />
                        ) : item.status === "warning" ? (
                          <AlertTriangle className="w-3.5 h-3.5 status-yellow shrink-0" />
                        ) : (
                          <Play className="w-3.5 h-3.5 status-blue shrink-0" />
                        )}
                        <span className="font-mono text-muted-foreground">{item.step}</span>
                        <span className="text-foreground/80 truncate">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Middle - Metrics */}
                <div className="p-4 space-y-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Performance</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Sharpe Ratio</div>
                      <div className="text-xl font-mono font-semibold status-green">1.87</div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Max Drawdown</div>
                      <div className="text-xl font-mono font-semibold status-yellow">-12.4%</div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Risk Score</div>
                      <div className="text-xl font-mono font-semibold status-blue">B+</div>
                    </div>
                  </div>
                </div>

                {/* Right - Terminal */}
                <div className="p-4 space-y-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Audit Log</h4>
                  <div className="font-mono text-[10px] leading-relaxed space-y-1.5 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3 h-3 status-green shrink-0" />
                      <span>Research hypothesis generated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 status-green shrink-0" />
                      <span>Backtest completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 status-yellow shrink-0" />
                      <span>Risk issues detected</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-3 h-3 status-blue shrink-0" />
                      <span>Audit trail created</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-background rounded border border-border">
                    <pre className="text-[9px] leading-tight text-muted-foreground overflow-x-auto">
{`agent.run({
  task: "earnings_momentum",
  market: "US equities",
  period: "2020-2024",
  modules: ["research",
    "backtest", "risk"]
})`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
