"use client"

import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

type DemoRequestModalProps = {
  children: ReactNode
}

const requirementTags = ["AGI算力", "Agent支付", "量化托管"]

const baseLogs = [
  "[BOOT] alpha-pulse demo agent initialized",
  "[INFO] Allocating isolated Sandbox environment...",
  "[INFO] Loading quant workflow primitives",
  "[OK] Audit trail buffer mounted",
]

const scheduleDays = [
  { day: "Tue", date: "19", state: "available" },
  { day: "Wed", date: "20", state: "active" },
  { day: "Thu", date: "21", state: "available" },
  { day: "Fri", date: "22", state: "limited" },
]

const scheduleSlots = ["10:30", "14:00", "16:30"]

export function DemoRequestModal({ children }: DemoRequestModalProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>(["AGI算力"])
  const [logQueue, setLogQueue] = useState(baseLogs)
  const [visibleLogs, setVisibleLogs] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)

  const emailState = useMemo(() => {
    if (!email) return "awaiting corporate email"
    return /.+@.+\..+/.test(email) ? "mail identity accepted" : "invalid routing pattern"
  }, [email])

  useEffect(() => {
    if (!open) return

    setVisibleLogs([])
    setCurrentLine("")
    setLineIndex(0)
    setCharIndex(0)
    setSubmitted(false)
    setLogQueue(baseLogs)
  }, [open])

  useEffect(() => {
    if (!open || lineIndex >= logQueue.length) return

    const line = logQueue[lineIndex]
    const timer = window.setTimeout(() => {
      if (charIndex < line.length) {
        setCurrentLine(line.slice(0, charIndex + 1))
        setCharIndex((value) => value + 1)
        return
      }

      setVisibleLogs((logs) => [...logs, line])
      setCurrentLine("")
      setLineIndex((value) => value + 1)
      setCharIndex(0)
    }, charIndex === 0 ? 260 : 18)

    return () => window.clearTimeout(timer)
  }, [charIndex, lineIndex, logQueue, open])

  useEffect(() => {
    terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight, behavior: "smooth" })
  }, [visibleLogs, currentLine])

  const appendLog = (line: string) => {
    setLogQueue((logs) => [...logs, line])
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((tags) => {
      const nextTags = tags.includes(tag) ? tags.filter((item) => item !== tag) : [...tags, tag]
      appendLog(`[INFO] Binding requirement vector: ${nextTags.join(" + ") || "pending"}`)
      appendLog(`[TRACE] Routing agent capability profile -> ${tag}`)
      return nextTags
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    appendLog("[OK] Lead packet encrypted")
    appendLog("[INFO] Opening scheduling interface...")
    window.setTimeout(() => setSubmitted(true), 560)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-hidden border-primary/20 bg-background/95 p-0 shadow-[0_0_70px_oklch(0.65_0.19_250_/_0.12)] backdrop-blur-xl sm:max-w-5xl">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="request"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-[0.88fr_1.12fr]"
            >
              <div className="border-b border-border p-6 lg:border-r lg:border-b-0 lg:p-8">
                <DialogHeader className="mb-8">
                  <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Request a Demo
                  </div>
                  <DialogTitle className="text-2xl">启动 Alpha Pulse 演示环境</DialogTitle>
                  <DialogDescription>
                    提交基础信息后，我们会为你的团队生成一组可预约的产品演示时段。
                  </DialogDescription>
                </DialogHeader>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground" htmlFor="demo-email">
                      Company email
                    </label>
                    <Input
                      id="demo-email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                        appendLog(`[AUTH] Corporate email signal: ${event.target.value || "pending"}`)
                      }}
                      placeholder="name@company.com"
                      className="h-11 bg-secondary/40 font-mono"
                    />
                    <p className="font-mono text-[11px] text-muted-foreground">{emailState}</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground" htmlFor="demo-name">
                      Name
                    </label>
                    <Input
                      id="demo-name"
                      required
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value)
                        appendLog(`[USER] Principal contact updated: ${event.target.value || "anonymous"}`)
                      }}
                      placeholder="你的姓名"
                      className="h-11 bg-secondary/40"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Core requirements</div>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {requirementTags.map((tag) => {
                        const active = selectedTags.includes(tag)

                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleTag(tag)}
                            className={`rounded-md border px-3 py-2 text-left text-sm transition-all ${
                              active
                                ? "border-primary/50 bg-primary/10 text-foreground shadow-[0_0_18px_oklch(0.65_0.19_250_/_0.12)]"
                                : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                            }`}
                          >
                            <span className="font-mono text-[11px] text-primary">0{requirementTags.indexOf(tag) + 1}</span>
                            <span className="mt-1 block">{tag}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <Button className="h-11 w-full bg-primary hover:bg-primary/90" type="submit">
                    生成预约日程
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              <div className="min-h-[520px] bg-card/60 p-4 sm:p-6 lg:p-8">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background/80">
                  <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-primary" />
                      <span className="font-mono text-xs text-muted-foreground">agent-init.log</span>
                    </div>
                    <span className="rounded border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                      LIVE
                    </span>
                  </div>
                  <div
                    ref={terminalRef}
                    className="fui-scanlines h-[456px] overflow-y-auto p-4 font-mono text-[12px] leading-6 text-muted-foreground"
                  >
                    {visibleLogs.map((log, index) => (
                      <div key={`${log}-${index}`} className={log.includes("[OK]") ? "status-green" : log.includes("[TRACE]") ? "status-blue" : ""}>
                        {log}
                      </div>
                    ))}
                    {currentLine && <div className="text-foreground">{currentLine}<span className="animate-pulse text-primary">_</span></div>}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="p-6 sm:p-8"
            >
              <DialogHeader className="mb-6">
                <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Request accepted
                </div>
                <DialogTitle className="text-2xl">选择产品演示时间</DialogTitle>
                <DialogDescription>Alpha Pulse Strategy Session · 30 min · Asia/Shanghai</DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-lg border border-border bg-card p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-md border border-primary/20 bg-primary/10 p-2 text-primary">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Alpha Pulse Demo</div>
                      <div className="text-sm text-muted-foreground">Sandbox walkthrough + Q&A</div>
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-xs text-muted-foreground">
                    <div className="flex items-center gap-2"><Clock3 className="h-3.5 w-3.5" />30 minutes</div>
                    <div>需求：{selectedTags.join(" / ")}</div>
                    <div>联系人：{name || "pending"}</div>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-secondary/20 p-4">
                  <div className="mb-4 grid grid-cols-4 gap-2">
                    {scheduleDays.map((item) => (
                      <button
                        key={item.date}
                        className={`rounded-md border p-3 text-center transition-colors ${
                          item.state === "active"
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        <span className="block font-mono text-[11px] opacity-80">{item.day}</span>
                        <span className="block text-lg font-semibold">{item.date}</span>
                      </button>
                    ))}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {scheduleSlots.map((slot, index) => (
                      <button
                        key={slot}
                        className={`rounded-md border px-4 py-3 font-mono text-sm transition-colors ${
                          index === 1
                            ? "border-accent/50 bg-accent/10 text-accent"
                            : "border-border bg-card text-foreground hover:border-primary/40"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <Button className="mt-4 h-11 w-full bg-primary hover:bg-primary/90">确认预约</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}