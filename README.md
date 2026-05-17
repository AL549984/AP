# Alpha Pulse

Alpha Pulse 是一个面向专业投资机构的 AI-native Quant Research & Risk Agent OS 展示站。项目通过 Next.js App Router 构建，展示从市场研究、策略生成、回测验证、风险控制到合规审计的 Research-to-Execution Agent System。

网站内容面向私募基金、量化团队、家族办公室、券商资管团队和战略合作伙伴，强调可追溯、可复现、可审计的金融智能工作流。

## 项目亮点

- Research Agent：读取新闻、公告、财报、宏观、研报和另类数据，辅助形成研究假设与事件影响判断。
- Strategy Copilot：生成策略逻辑、因子定义、代码和回测框架，缩短策略验证周期。
- Backtest & Validation：支持回测、参数敏感性分析、样本外测试和稳定性验证等展示内容。
- Risk Officer Agent：突出过拟合、滑点、容量、相关性、极端行情、未来函数、幸存者偏差和数据泄漏检查。
- Compliance & Audit Layer：展示数据源、代码版本、模型输出、审批权限和审计导出的闭环能力。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- shadcn/ui 风格组件
- Framer Motion
- Lucide React
- Vercel Analytics

## 目录结构

```text
app/
  globals.css          # 全局样式
  layout.tsx           # 根布局、站点元信息、字体与 Analytics
  page.tsx             # 首页入口，组合各业务区块
components/
  *-section.tsx        # 首页业务展示区块
  navigation.tsx       # 顶部导航
  footer.tsx           # 页脚
  theme-provider.tsx   # 主题支持
  ui/                  # 通用 UI 组件
hooks/                 # 通用 React hooks
lib/                   # 工具函数
public/                # 静态资源
styles/                # 样式文件
```

## 本地开发

项目使用 pnpm 管理依赖。

```bash
pnpm install
pnpm dev
```

启动后访问：

```text
http://localhost:3000
```

## 常用命令

```bash
pnpm dev      # 启动本地开发服务器
pnpm build    # 构建生产版本
pnpm start    # 启动生产服务器
pnpm lint     # 运行 ESLint 检查
```

## 页面模块

首页由 [app/page.tsx](app/page.tsx) 组合以下区块：

- `Navigation`：站点导航
- `HeroSection`：产品定位与主视觉
- `HighlightsSection`：市场机会与产品差异化
- `ProductPipelineSection`：Research-to-Execution 工作流
- `WorkflowExampleSection`：示例工作流
- `ArchitectureSection`：系统架构
- `ComplianceSection`：合规与审计能力
- `ScenariosSection`：应用场景
- `BusinessModelSection`：商业模式
- `CompetitionSection`：竞争分析
- `RoadmapSection`：路线图
- `ContactSection`：演示、商务合作与投资沟通入口
- `Footer`：页脚信息

## 部署

推荐部署到 Vercel：

1. 将项目推送到 Git 仓库。
2. 在 Vercel 中导入仓库。
3. 构建命令使用 `pnpm build`。
4. 安装命令使用 `pnpm install`。
5. 输出目录保持 Next.js 默认配置。

项目在生产环境中会启用 Vercel Analytics。

## 开发说明

- 页面内容以组件化 section 组织，新增首页模块时优先在 `components/` 下新增独立 section，并在 [app/page.tsx](app/page.tsx) 中组合。
- 通用交互控件优先复用 `components/ui/` 下的组件。
- 全局元信息位于 [app/layout.tsx](app/layout.tsx)，包括站点标题、描述、关键词和图标配置。
- 项目当前是产品展示站，按钮主要用于演示预约、解决方案查看、商务合作和投资沟通等转化入口。