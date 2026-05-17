"use client"

import { motion } from "framer-motion"
import { Shield, FileText, Code, Clock, Users, Download } from "lucide-react"

const trustMechanisms = [
  {
    icon: FileText,
    title: "数据来源追踪",
    description: "每个数据点都记录原始来源和获取时间",
  },
  {
    icon: Code,
    title: "代码版本记录",
    description: "策略逻辑、回测代码的完整版本控制",
  },
  {
    icon: Clock,
    title: "参数与时间戳",
    description: "所有参数配置和执行时间精确记录",
  },
  {
    icon: Users,
    title: "权限与审批流",
    description: "多级权限控制和审批流程管理",
  },
  {
    icon: Shield,
    title: "回测风险检查",
    description: "自动检测过拟合、数据泄漏等问题",
  },
  {
    icon: Download,
    title: "审计日志导出",
    description: "完整审计日志的标准化导出能力",
  },
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            为专业金融机构设计的可信 AI 工作流
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alpha Pulse 从第一天就把权限、审计、风控和合规边界做进架构
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trustMechanisms.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-glow p-5 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 bg-secondary/50 rounded-xl border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">合规边界声明</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Alpha Pulse 定位为<strong className="text-foreground">研究辅助、策略开发、风险审计和决策支持系统</strong>，
                不做未经许可的代客理财，不承诺收益，不以&quot;自动交易神器&quot;作为销售话术。
                系统旨在提升研究与策略验证效率、降低数据和回测错误、强化风险识别与合规审计能力。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
