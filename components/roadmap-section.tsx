"use client"

import { motion } from "framer-motion"

const roadmapPhases = [
  {
    phase: "阶段一",
    timeline: "0–30 天",
    title: "战略收敛",
    description: "战略收敛、目标客户定义、MVP 范围收敛",
    status: "current"
  },
  {
    phase: "阶段二",
    timeline: "30–90 天",
    title: "MVP 构建",
    description: "完成 Strategy Copilot + Risk Agent MVP",
    status: "upcoming"
  },
  {
    phase: "阶段三",
    timeline: "3–6 个月",
    title: "试点验证",
    description: "完成首批试点客户、闭环工作流验证、关键指标验证",
    status: "upcoming"
  },
  {
    phase: "阶段四",
    timeline: "6–12 个月",
    title: "产品化",
    description: "产品化、私有化部署、权限审计系统、更多数据连接器",
    status: "upcoming"
  },
  {
    phase: "阶段五",
    timeline: "12–24 个月",
    title: "平台化",
    description: "扩展到 Research、Portfolio、Execution Analytics 和 Enterprise Agent Platform",
    status: "upcoming"
  },
]

export function RoadmapSection() {
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
            12–24 个月产品路线图
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从 MVP 到平台化的清晰发展路径
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid lg:grid-cols-5 gap-6">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector dot - desktop */}
                <div className={`hidden lg:block absolute top-[30px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${
                  phase.status === "current"
                    ? "bg-primary border-primary"
                    : "bg-background border-border"
                }`} />

                <div className={`card-glow p-5 rounded-xl h-full ${
                  phase.status === "current" ? "border-primary/50" : ""
                }`}>
                  <div className="lg:pt-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">{phase.phase}</span>
                      {phase.status === "current" && (
                        <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">当前</span>
                      )}
                    </div>
                    <div className="text-sm font-mono text-primary mb-2">{phase.timeline}</div>
                    <h3 className="font-semibold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
