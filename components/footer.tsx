"use client"

const footerLinks = [
  { label: "产品", href: "#product" },
  { label: "解决方案", href: "#solutions" },
  { label: "风险与审计", href: "#compliance" },
  { label: "商业模式", href: "#business" },
  { label: "联系我们", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Company */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">α</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">Alpha Pulse</span>
            </div>
            <p className="text-sm text-muted-foreground">安徽衍易科技有限公司</p>
            <p className="text-xs font-mono text-muted-foreground/60 mt-1">THINK · TRADE · PAY</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground mb-2">
            AI-native Quant Research & Risk Agent OS for professional investors.
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2026 Anhui Yanyi Technology Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
