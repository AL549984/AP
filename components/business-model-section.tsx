"use client"

import { motion } from "framer-motion"
import { Users, Building, Database, Wrench } from "lucide-react"

const businessModels = [
  {
    icon: Users,
    title: "Team SaaS",
    target: "小型基金、家办、量化团队、全球宏观/加密交易团队",
    pricing: "10–50 万元/年 或 1.5–7.5 万美元/年",
    color: "primary"
  },
  {
    icon: Building,
    title: "Enterprise Edition",
    target: "券商、资管、私募、金融科技公司",
    pricing: "50–300 万元/年，私有化部署 / 企业许可",
    color: "accent"
  },
  {
    icon: Database,
    title: "Data & Compute Add-ons",
    target: "有高频回测、私有数据、模型调用需求的客户",
    pricing: "按数据源、算力、模型调用量、连接器收费",
    color: "primary"
  },
  {
    icon: Wrench,
    title: "Implementation Service",
    target: "大客户",
    pricing: "一次性实施费 + 年度维护费",
    color: "accent"
  },
]

export function BusinessModelSection() {
  return (
    <section id="business" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            从专业团队 SaaS 到企业级私有化部署
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            灵活的商业模式，覆盖不同规模和需求的专业投资机构
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mb-12"
        >
          * 以下为示例商业模式，具体方案可根据客户需求定制
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {businessModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg shrink-0 ${
                  model.color === "accent"
                    ? "bg-accent/10 border border-accent/20"
                    : "bg-primary/10 border border-primary/20"
                }`}>
                  <model.icon className={`w-5 h-5 ${
                    model.color === "accent" ? "text-accent" : "text-primary"
                  }`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{model.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{model.target}</p>
                  <p className="text-sm font-mono text-foreground/80 px-3 py-2 bg-secondary rounded border border-border">
                    {model.pricing}
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
