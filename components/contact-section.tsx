"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Handshake, TrendingUp } from "lucide-react"

const ctaOptions = [
  {
    icon: Mail,
    title: "申请产品演示",
    description: "了解 Alpha Pulse 如何帮助您的团队",
    action: "预约演示",
    primary: true
  },
  {
    icon: Handshake,
    title: "商务合作",
    description: "探索战略合作与技术集成机会",
    action: "联系商务",
    primary: false
  },
  {
    icon: TrendingUp,
    title: "投资沟通",
    description: "与创始团队探讨投资机会",
    action: "发起沟通",
    primary: false
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            与 Alpha Pulse 一起构建专业投资机构的 AI Research-to-Execution OS
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            我们正在寻找愿意共同验证下一代金融 Agent 工作流的专业投资机构、量化团队、家族办公室、券商资管团队和战略合作伙伴。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-glow p-6 rounded-xl text-center ${
                option.primary ? "border-primary/50 bg-primary/5" : ""
              }`}
            >
              <div className={`p-3 rounded-lg mx-auto w-fit mb-4 ${
                option.primary
                  ? "bg-primary/20 border border-primary/30"
                  : "bg-secondary border border-border"
              }`}>
                <option.icon className={`w-6 h-6 ${option.primary ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
              <Button
                variant={option.primary ? "default" : "outline"}
                className={`w-full gap-2 ${option.primary ? "bg-primary hover:bg-primary/90" : ""}`}
              >
                {option.action}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
