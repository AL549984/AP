"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DemoRequestModal } from "@/components/demo-request-modal"

const navItems = [
  { label: "产品", href: "#product" },
  { label: "解决方案", href: "#solutions" },
  { label: "Agent Workflow", href: "#workflow" },
  { label: "风险与审计", href: "#compliance" },
  { label: "商业模式", href: "#business" },
  { label: "联系我们", href: "#contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">α</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Alpha Pulse</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
              <a href="#business">商务合作</a>
            </Button>
            <DemoRequestModal>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                申请演示
              </Button>
            </DemoRequestModal>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="justify-start text-muted-foreground" asChild>
                <a href="#business" onClick={() => setMobileMenuOpen(false)}>商务合作</a>
              </Button>
              <DemoRequestModal>
                <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => setMobileMenuOpen(false)}>
                  申请演示
                </Button>
              </DemoRequestModal>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
