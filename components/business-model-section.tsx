"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, CheckCircle2, Cpu, Database, LockKeyhole, ServerCog, ShieldCheck, Sparkles, Users, Wrench } from "lucide-react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

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

const partnershipCards = [
  {
    icon: ServerCog,
    title: "算力提供商",
    eyebrow: "Compute Provider",
    body: "接入 GPU、TEE、边缘节点与隔离 Sandbox 资源，面向 Agent 工作流提供可审计算力供给。",
    meta: "capacity · billing · isolation",
  },
  {
    icon: Sparkles,
    title: "Agent 开发者",
    eyebrow: "Beta Application",
    body: "加入 Alpha Pulse Agent SDK Beta，将研究、交易、支付与审计能力封装为企业级可组合模块。",
    meta: "sdk · marketplace · revenue share",
  },
  {
    icon: Cpu,
    title: "企业智能化升级",
    eyebrow: "Enterprise Transformation",
    body: "为资管、券商、金融科技团队部署私有 Agent OS，打通数据、权限、执行与合规链路。",
    meta: "private cloud · workflow · governance",
  },
]

const institutionalDomains = ["capital", "ventures", "vc", "fund", "asset", "partners", "invest", "securities"]

export function BusinessModelSection() {
  const [investorEmail, setInvestorEmail] = useState("")
  const [qualified, setQualified] = useState(false)

  const investorEmailState = useMemo(() => {
    if (!investorEmail) {
      return { valid: false, label: "Awaiting institutional email" }
    }

    const emailPatternValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(investorEmail)
    const domain = investorEmail.split("@")[1]?.toLowerCase() ?? ""
    const institutional = institutionalDomains.some((keyword) => domain.includes(keyword))

    if (!emailPatternValid) {
      return { valid: false, label: "Email format requires review" }
    }

    if (!institutional) {
      return { valid: false, label: "Use institution / VC email to continue" }
    }

    return { valid: true, label: "Institutional domain verified" }
  }, [investorEmail])

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

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Business Partnership</p>
              <h3 className="text-2xl font-bold sm:text-3xl">合作入口</h3>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground">
              面向供给侧、开发者生态和企业落地三类合作路径，统一进入 Alpha Pulse 业务联调队列。
            </p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {partnershipCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="gradient-border-card group relative overflow-hidden rounded-lg p-px"
              >
                <div className="relative h-full rounded-lg bg-card p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="rounded-md border border-primary/20 bg-primary/10 p-2.5 text-primary">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground">0{index + 1}</span>
                  </div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{card.eyebrow}</p>
                  <h4 className="mb-3 text-lg font-semibold">{card.title}</h4>
                  <p className="mb-6 text-sm leading-6 text-muted-foreground">{card.body}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-mono text-[11px] text-muted-foreground">{card.meta}</span>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="investor-card mt-16 overflow-hidden rounded-lg border border-chart-3/20 bg-card"
        >
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-border p-6 lg:border-r lg:border-b-0 lg:p-8">
              <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-chart-3/20 bg-chart-3/10 px-2.5 py-1 font-mono text-[11px] text-chart-3">
                <LockKeyhole className="h-3.5 w-3.5" />
                Investor Relations
              </div>
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">申请访问 Alpha Pulse 核心数据室 (Data Room)</h3>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                为机构投资人与战略资本伙伴开放经营指标、产品路线、合规材料与核心财务模型访问申请。
              </p>
              <div className="mt-8 grid gap-3 font-mono text-xs text-muted-foreground sm:grid-cols-3">
                <div className="rounded-md border border-border bg-secondary/30 p-3">ARR model</div>
                <div className="rounded-md border border-border bg-secondary/30 p-3">Pipeline</div>
                <div className="rounded-md border border-border bg-secondary/30 p-3">Risk memo</div>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground" htmlFor="investor-email">
                    Institution / VC email
                  </label>
                  <div className="relative">
                    <Input
                      id="investor-email"
                      type="email"
                      value={investorEmail}
                      onChange={(event) => setInvestorEmail(event.target.value)}
                      placeholder="partner@fund.vc"
                      className="h-11 bg-secondary/40 pr-10 font-mono"
                      aria-invalid={investorEmail ? !investorEmailState.valid : undefined}
                    />
                    {investorEmailState.valid ? (
                      <CheckCircle2 className="absolute right-3 top-3 h-5 w-5 text-accent" />
                    ) : (
                      <ShieldCheck className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <p className={`font-mono text-[11px] ${investorEmailState.valid ? "text-accent" : "text-muted-foreground"}`}>
                    {investorEmailState.label}
                  </p>
                </div>

                <label className="flex items-start gap-3 rounded-md border border-border bg-secondary/25 p-4 text-sm text-muted-foreground">
                  <Checkbox checked={qualified} onCheckedChange={(checked) => setQualified(checked === true)} className="mt-0.5" />
                  <span>我确认代表合格投资人或合规授权机构，并理解 Data Room 资料访问需完成后续尽调与保密流程。</span>
                </label>

                <Button
                  className="h-11 w-full bg-primary hover:bg-primary/90 disabled:bg-secondary disabled:text-muted-foreground"
                  disabled={!investorEmailState.valid || !qualified}
                >
                  请求 Data Room 访问
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
