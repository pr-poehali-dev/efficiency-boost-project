import { useState } from "react";
import Icon from "@/components/ui/icon";

const sections = [
  { id: "goal", label: "Цель проекта", icon: "Target" },
  { id: "activities", label: "Мероприятия", icon: "ListChecks" },
  { id: "resources", label: "Ресурсы и бюджет", icon: "Wallet" },
  { id: "risks", label: "Риски", icon: "ShieldAlert" },
  { id: "effect", label: "Экономический эффект", icon: "TrendingUp" },
];

const problems = [
  { icon: "Clock", text: "Потери времени на ручное планирование и согласование задач" },
  { icon: "AlertTriangle", text: "Дублирование работ из-за отсутствия единой системы учёта" },
  { icon: "Users", text: "Низкая прозрачность загрузки персонала и оборудования" },
  { icon: "FileX", text: "Ошибки в документообороте и отчётности" },
];

const activities = [
  { phase: "1", title: "Диагностика", period: "Мес. 1–2", tasks: ["Аудит текущих процессов", "Интервью с сотрудниками", "Картирование потока создания ценности (VSM)"] },
  { phase: "2", title: "Проектирование", period: "Мес. 2–3", tasks: ["Разработка целевой модели процессов", "Формирование регламентов", "Выбор ПО / инструментов"] },
  { phase: "3", title: "Внедрение", period: "Мес. 3–6", tasks: ["Пилотный запуск на одном участке", "Обучение персонала", "Тиражирование на всё предприятие"] },
  { phase: "4", title: "Стабилизация", period: "Мес. 7–12", tasks: ["Мониторинг KPI", "Корректирующие действия", "Сдача проекта и отчётность"] },
];

const resources = [
  { category: "Персонал", items: ["Руководитель проекта — 1 чел.", "Бизнес-аналитик — 1 чел.", "ИТ-специалист — 1 чел.", "Ключевые эксперты бизнеса — 3–5 чел."] },
  { category: "Технологии", items: ["Система управления задачами (BPM / ERP)", "Инструменты аналитики и отчётности", "Корпоративный мессенджер / документооборот"] },
  { category: "Обучение", items: ["Тренинги по бережливому производству", "Обучение работе с новым ПО", "Сессии по изменению культуры"] },
];

const budget = [
  { item: "Консалтинг и проектирование", cost: "300 000 – 500 000 ₽" },
  { item: "Лицензии на ПО (год)", cost: "150 000 – 400 000 ₽" },
  { item: "Обучение персонала", cost: "80 000 – 150 000 ₽" },
  { item: "Внедрение и настройка", cost: "200 000 – 350 000 ₽" },
  { item: "Непредвиденные расходы (10%)", cost: "73 000 – 140 000 ₽" },
  { item: "ИТОГО", cost: "800 000 – 1 540 000 ₽", total: true },
];

const risks = [
  { level: "high", title: "Сопротивление персонала", prob: "Высокая", impact: "Высокий", mitigation: "Вовлечение сотрудников на этапе диагностики, разъяснение выгод, поддержка руководства" },
  { level: "medium", title: "Недостаточная поддержка топ-менеджмента", prob: "Средняя", impact: "Высокий", mitigation: "Назначение спонсора проекта из числа C-level, регулярные статус-совещания" },
  { level: "medium", title: "Задержки внедрения ПО", prob: "Средняя", impact: "Средний", mitigation: "Детальный план-график, буфер 2–4 недели, альтернативные поставщики" },
  { level: "low", title: "Превышение бюджета", prob: "Низкая", impact: "Средний", mitigation: "Резерв 10%, контрольные точки по бюджету ежемесячно" },
];

const riskColor: Record<string, string> = {
  high: "#ef4444",
  medium: "#f59e0b",
  low: "#22c55e",
};

const riskLabel: Record<string, string> = {
  high: "Высокий",
  medium: "Средний",
  low: "Низкий",
};

export default function Index() {
  const [active, setActive] = useState("goal");

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#f5f6f8", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e8eaed", padding: "0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #8bc34a, #5a9e1e)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Zap" size={18} style={{ color: "#fff" }} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#1a1a2e", letterSpacing: "-0.3px" }}>Оптимизация операционных процессов</div>
              <div style={{ fontSize: 11, color: "#888", fontWeight: 500 }}>Презентация проекта · 2026</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ background: "#eef7e6", color: "#5a9e1e", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, border: "1px solid #c5e09b" }}>
              Повышение производительности
            </span>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 40px", display: "flex", gap: 28 }}>
        {/* Sidebar nav */}
        <nav style={{ width: 240, flexShrink: 0 }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.07)", position: "sticky", top: 24 }}>
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  marginBottom: i < sections.length - 1 ? 2 : 0,
                  background: active === s.id ? "linear-gradient(135deg, #8bc34a18, #5a9e1e10)" : "transparent",
                  borderLeft: active === s.id ? "3px solid #8bc34a" : "3px solid transparent",
                  transition: "all 0.2s",
                  textAlign: "left",
                }}
              >
                <span style={{ color: active === s.id ? "#5a9e1e" : "#aaa", transition: "color 0.2s" }}>
                  <Icon name={s.icon} size={16} />
                </span>
                <span style={{ fontSize: 13, fontWeight: active === s.id ? 700 : 500, color: active === s.id ? "#1a1a2e" : "#666", transition: "all 0.2s" }}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* Progress */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 18, marginTop: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 14 }}>Срок проекта</div>
            {[
              { label: "Диагностика", w: "100%" },
              { label: "Проектирование", w: "75%" },
              { label: "Внедрение", w: "40%" },
              { label: "Стабилизация", w: "5%" },
            ].map((p) => (
              <div key={p.label} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4, fontWeight: 500 }}>{p.label}</div>
                <div style={{ background: "#f0f0f0", borderRadius: 4, height: 6 }}>
                  <div style={{ width: p.w, background: "linear-gradient(90deg, #8bc34a, #5a9e1e)", borderRadius: 4, height: 6 }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12, padding: "10px 14px", background: "#eef7e6", borderRadius: 10, display: "flex", alignItems: "center", gap: 8 }}>
              <Icon name="Calendar" size={14} style={{ color: "#5a9e1e" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#5a9e1e" }}>12 месяцев</span>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0 }}>

          {/* === GOAL === */}
          {active === "goal" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <SectionHeader
                icon="Target"
                title="Цель проекта и обоснование необходимости"
                subtitle="Какую проблему предприятия решает проект"
              />

              <div style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)", borderRadius: 16, padding: 32, marginBottom: 20, color: "#fff" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", color: "#8bc34a", textTransform: "uppercase", marginBottom: 12 }}>Проблема</div>
                <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.4, marginBottom: 16 }}>
                  При ФОТ 1 729 млн ₽ и численности <span style={{ color: "#8bc34a" }}>976 чел.</span> предприятие теряет<br />
                  до <span style={{ color: "#8bc34a" }}>346–519 млн ₽/год</span> из-за неоптимальных операционных процессов
                </div>
                <div style={{ fontSize: 14, color: "#aaa", lineHeight: 1.6 }}>
                  При выручке 19 245 млн ₽ каждый процент потерь производительности — это ~192 млн ₽ недополученного результата.
                  Устаревшие регламенты, ручной документооборот и разрозненность подразделений
                  приводят к систематическим задержкам, ошибкам и росту операционных затрат.
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                {problems.map((p) => (
                  <div key={p.text} style={{ background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "#fff5f5", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={p.icon} size={18} style={{ color: "#ef4444" }} />
                    </div>
                    <div style={{ fontSize: 13, color: "#333", fontWeight: 500, lineHeight: 1.5, paddingTop: 2 }}>{p.text}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: "4px solid #8bc34a" }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", color: "#8bc34a", textTransform: "uppercase", marginBottom: 12 }}>Цель проекта</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", lineHeight: 1.5, marginBottom: 20 }}>
                  Повысить производительность и качество работы за счёт оптимизации операционных процессов на 25–35% в течение 12 месяцев
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                  {[
                    { label: "Рост производительности", value: "+25–35%", icon: "TrendingUp" },
                    { label: "Снижение ошибок в учёте", value: "–60%", icon: "CheckCircle" },
                    { label: "Потенциал экономии ФОТ", value: "346–519 млн ₽", icon: "Banknote" },
                  ].map((kpi) => (
                    <div key={kpi.label} style={{ background: "#f8fdf3", borderRadius: 12, padding: 18, textAlign: "center", border: "1px solid #d4edba" }}>
                      <Icon name={kpi.icon} size={22} style={{ color: "#5a9e1e", marginBottom: 8 }} />
                      <div style={{ fontSize: 24, fontWeight: 800, color: "#5a9e1e", letterSpacing: "-1px" }}>{kpi.value}</div>
                      <div style={{ fontSize: 11, color: "#666", fontWeight: 500, marginTop: 4 }}>{kpi.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* === ACTIVITIES === */}
          {active === "activities" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <SectionHeader
                icon="ListChecks"
                title="Перечень ключевых мероприятий проекта"
                subtitle="Дорожная карта внедрения по фазам"
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {activities.map((a) => (
                  <div key={a.phase} style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 52, height: 52, background: "linear-gradient(135deg, #8bc34a, #5a9e1e)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontWeight: 800, fontSize: 20 }}>{a.phase}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>Фаза {a.phase}: {a.title}</div>
                        <span style={{ background: "#f0f0f5", color: "#666", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20 }}>{a.period}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {a.tasks.map((t) => (
                          <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 6, height: 6, background: "#8bc34a", borderRadius: "50%", flexShrink: 0 }} />
                            <span style={{ fontSize: 13, color: "#444", fontWeight: 500 }}>{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* === RESOURCES === */}
          {active === "resources" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <SectionHeader
                icon="Wallet"
                title="Ключевые ресурсы и бюджет проекта"
                subtitle="Необходимые ресурсы для успешной реализации"
              />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
                {resources.map((r) => (
                  <div key={r.category} style={{ background: "#fff", borderRadius: 16, padding: 22, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#8bc34a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 14 }}>{r.category}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {r.items.map((item) => (
                        <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <Icon name="Check" size={14} style={{ color: "#8bc34a", marginTop: 2, flexShrink: 0 }} />
                          <span style={{ fontSize: 12, color: "#444", lineHeight: 1.4, fontWeight: 500 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div style={{ padding: "18px 24px", borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>Сводный бюджет проекта</div>
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f8f9fa" }}>
                      <th style={{ padding: "12px 24px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px" }}>Статья расходов</th>
                      <th style={{ padding: "12px 24px", textAlign: "right", fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px" }}>Стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budget.map((b, i) => (
                      <tr key={b.item} style={{ borderTop: i === 0 ? "none" : "1px solid #f5f5f5", background: b.total ? "#f8fdf3" : "transparent" }}>
                        <td style={{ padding: "14px 24px", fontSize: b.total ? 14 : 13, fontWeight: b.total ? 700 : 500, color: b.total ? "#1a1a2e" : "#444" }}>{b.item}</td>
                        <td style={{ padding: "14px 24px", textAlign: "right", fontSize: b.total ? 15 : 13, fontWeight: b.total ? 800 : 600, color: b.total ? "#5a9e1e" : "#1a1a2e" }}>{b.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* === RISKS === */}
          {active === "risks" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <SectionHeader
                icon="ShieldAlert"
                title="Риски и ограничения проекта"
                subtitle="Идентифицированные риски и меры по их снижению"
              />

              <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                {Object.entries(riskColor).map(([k, v]) => (
                  <div key={k} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 10, height: 10, background: v, borderRadius: "50%" }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#666" }}>{riskLabel[k]} риск</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {risks.map((r) => (
                  <div key={r.title} style={{ background: "#fff", borderRadius: 16, padding: 22, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderLeft: `4px solid ${riskColor[r.level]}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 8, height: 8, background: riskColor[r.level], borderRadius: "50%" }} />
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>{r.title}</span>
                    </div>
                    <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
                      <span style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>Вероятность: <b style={{ color: "#333" }}>{r.prob}</b></span>
                      <span style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>Влияние: <b style={{ color: "#333" }}>{r.impact}</b></span>
                    </div>
                    <div style={{ background: "#f8f9fa", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#444", fontWeight: 500, lineHeight: 1.5 }}>
                      <span style={{ color: "#5a9e1e", fontWeight: 700 }}>Меры: </span>{r.mitigation}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#fff8e1", borderRadius: 16, padding: 20, marginTop: 20, border: "1px solid #ffe082", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <Icon name="Info" size={18} style={{ color: "#f59e0b", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#92400e", marginBottom: 4 }}>Ключевое ограничение</div>
                  <div style={{ fontSize: 13, color: "#78350f", lineHeight: 1.5 }}>
                    Успех проекта критически зависит от вовлечённости топ-менеджмента и готовности сотрудников к изменениям. Без активной поддержки руководства реализация существенно усложняется.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* === EFFECT === */}
          {active === "effect" && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <SectionHeader
                icon="TrendingUp"
                title="Экономический эффект от реализации проекта"
                subtitle="Методика расчёта и ожидаемые результаты"
              />

              <div style={{ background: "#fff", borderRadius: 16, padding: 28, marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#8bc34a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 18 }}>Методика расчёта экономического эффекта</div>

                <div style={{ background: "#fff8e1", border: "1px solid #ffe082", borderRadius: 10, padding: "12px 18px", marginBottom: 4, fontSize: 13, color: "#7a5c00", lineHeight: 1.7 }}>
                  <strong>Исходные условия:</strong> предприятие работает на «1С:Предприятие» без внедрённой ERP-системы. Учёт — преимущественно ручной: Excel, журналы, неструктурированные базы 1С. Основные потери — дублирование ввода данных, отсутствие сквозной аналитики, ручная сверка и согласование документов.
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <FormulaBlock
                    step="01"
                    title="Экономия ФОТ — устранение ручного дублирования данных из 1С"
                    formula="Э_фот = (Т_дубл × Ч_сотр × С_час) × 12"
                    desc="Т_дубл — время на ручной перенос, сверку и согласование документов в 1С в месяц (ч)  ·  Ч_сотр — число вовлечённых сотрудников  ·  С_час — стоимость часа (₽)"
                    example="Расчёт: 30 ч × 976 чел. × 862 ₽ × 12 мес. ≈ 302 968 320 ₽/год"
                  />
                  <FormulaBlock
                    step="02"
                    title="Снижение потерь от ошибок ручного учёта и пересортицы"
                    formula="Э_ош = (N_ош × С_ош) × К_снижения"
                    desc="N_ош — ошибки в месяц из-за ручного ввода в 1С (пересортица, недостачи, ошибки в документах)  ·  С_ош — стоимость устранения  ·  К_снижения = 0.7 (–70%)"
                    example="Расчёт: 150 ош. × 40 000 ₽ × 0.7 × 12 = 504 000 000 ₽/год"
                  />
                  <FormulaBlock
                    step="03"
                    title="Рост выручки — ускорение цикла исполнения заказов"
                    formula="Э_рост = В_тек × ΔП / 100"
                    desc="При отсутствии ERP цикл обработки заказа замедлен из-за ручных согласований в 1С. Интеграция даёт +15–20% пропускной способности"
                    example="Расчёт: 19 245 млн ₽ × 15% = 2 886 750 000 ₽/год"
                  />

                  <div style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)", borderRadius: 14, padding: 24, color: "#fff" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#8bc34a", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 12 }}>Итоговый показатель — ROI проекта</div>
                    <div style={{ fontFamily: "'IBM Plex Sans', monospace", fontSize: 18, fontWeight: 700, color: "#8bc34a", marginBottom: 12 }}>
                      ROI = (Суммарный эффект − Затраты) / Затраты × 100%
                    </div>
                    <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>
                      Суммарный эффект = Э_фот + Э_ош + Э_рост<br />
                      Затраты = лицензии ERP + интеграция с 1С + внедрение + обучение
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 16, padding: 28, marginBottom: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.06)", borderTop: "4px solid #8bc34a" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#8bc34a", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 18 }}>Расчёт эффекта — переход от 1С к ERP (первые 3 года)</div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#f8f9fa" }}>
                      <th style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: "0.5px" }}>Составляющая эффекта</th>
                      <th style={{ padding: "12px 16px", textAlign: "right", fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase" }}>Год 1</th>
                      <th style={{ padding: "12px 16px", textAlign: "right", fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase" }}>Год 2</th>
                      <th style={{ padding: "12px 16px", textAlign: "right", fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase" }}>Год 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Экономия ФОТ (30 ч дублир. × 976 чел. × 862 ₽)", y1: "151 484 160", y2: "302 968 320", y3: "302 968 320" },
                      { name: "Снижение потерь от ошибок ручного учёта", y1: "252 000 000", y2: "504 000 000", y3: "504 000 000" },
                      { name: "Рост выручки (+15% произв-ти)", y1: "1 443 375 000", y2: "2 886 750 000", y3: "2 886 750 000" },
                      { name: "Суммарный эффект", y1: "1 846 859 160", y2: "3 693 718 320", y3: "3 693 718 320", bold: true },
                      { name: "Затраты (ERP + интеграция 1С + обучение)", y1: "80 000 000", y2: "20 000 000", y3: "20 000 000" },
                      { name: "Чистый эффект", y1: "1 766 859 160", y2: "3 673 718 320", y3: "3 673 718 320", green: true },
                    ].map((row, i) => (
                      <tr key={row.name} style={{ borderTop: "1px solid #f5f5f5", background: row.green ? "#f8fdf3" : "transparent" }}>
                        <td style={{ padding: "13px 16px", fontSize: 13, fontWeight: row.bold || row.green ? 700 : 500, color: row.green ? "#5a9e1e" : "#333" }}>{row.name}</td>
                        {[row.y1, row.y2, row.y3].map((v, j) => (
                          <td key={j} style={{ padding: "13px 16px", textAlign: "right", fontSize: 13, fontWeight: row.bold || row.green ? 700 : 600, color: row.green ? "#5a9e1e" : "#1a1a2e" }}>
                            {v} ₽
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { label: "ROI (1-й год)", value: "2 209%", sub: "без ERP → с ERP, переход от 1С", icon: "Percent" },
                  { label: "Срок окупаемости", value: "~2 мес.", sub: "после завершения внедрения ERP", icon: "Clock" },
                  { label: "Чистый эффект (3 года)", value: "9,1 млрд ₽", sub: "при ФОТ 1 700 млн ₽/год (976 чел.)", icon: "Banknote" },
                ].map((kpi) => (
                  <div key={kpi.label} style={{ background: "linear-gradient(135deg, #8bc34a, #5a9e1e)", borderRadius: 16, padding: 24, textAlign: "center" }}>
                    <Icon name={kpi.icon} size={24} style={{ color: "rgba(255,255,255,0.85)", marginBottom: 8 }} />
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>{kpi.value}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.95)", marginTop: 2 }}>{kpi.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>{kpi.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #8bc34a, #5a9e1e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={icon} size={18} style={{ color: "#fff" }} />
        </div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.5px" }}>{title}</h1>
      </div>
      <div style={{ paddingLeft: 48, fontSize: 13, color: "#888", fontWeight: 500 }}>{subtitle}</div>
    </div>
  );
}

function FormulaBlock({ step, title, formula, desc, example }: { step: string; title: string; formula: string; desc: string; example: string }) {
  return (
    <div style={{ border: "1px solid #e8eaed", borderRadius: 12, padding: 20 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <div style={{ width: 28, height: 28, background: "#eef7e6", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: "#5a9e1e" }}>{step}</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>{title}</div>
          <div style={{ fontFamily: "'IBM Plex Sans', monospace", fontSize: 14, fontWeight: 600, color: "#5a9e1e", background: "#f8fdf3", padding: "8px 14px", borderRadius: 8, marginBottom: 8 }}>
            {formula}
          </div>
          <div style={{ fontSize: 11, color: "#888", lineHeight: 1.6, marginBottom: 6 }}>{desc}</div>
          <div style={{ fontSize: 12, color: "#5a9e1e", fontWeight: 600 }}>{example}</div>
        </div>
      </div>
    </div>
  );
}