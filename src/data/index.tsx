
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiPython,
  SiDotnet, SiFastapi, SiFlutter,
  SiGoogle, SiAnthropic, SiOpenai
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { Rocket } from "lucide-react";

export const navLinks = [
  { name: "Sobre mí", href: "/#about" },
  { name: "Stack", href: "/#stack" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Cómo Trabajo", href: "/#workflow" },
];

export const heroData = {
  location: "Disponible para nuevos retos • Tijuana, MX (Disp. Viajar)",
  title: "Transformando datos en ",
  highlight: "soluciones reales.",
  description: "Soy David Eduardo Prieto. Combino 8 años de análisis de datos con ingeniería de software moderna para construir sistemas que las empresas realmente usan.",
  buttons: {
    primary: "Ver mi trabajo",
    secondary: "CV Digital",
    download: "Descargar CV",
    contact: "Contáctame (WhatsApp)",
  },
  whatsappUrl: "https://wa.me/5216642234345?text=Hola%20David,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte.",
};

export const aboutData = {
  title: "Más que código.",
  paragraphs: [
    "No soy el típico desarrollador que solo recibe tickets. Mi carrera comenzó en las trincheras de los **Datos (DBA)** y el **Business Intelligence**.",
    "Durante años, analicé cómo operan las empresas \"desde adentro\". Vi procesos rotos, excels infinitos y decisiones basadas en instinto. Me di cuenta de que el análisis no era suficiente; **necesitaba construir las herramientas para arreglar el problema de raíz.**",
    "Hoy, uso toda esa experiencia de negocio para liderar la **Transformación Digital**. No solo escribo funciones; diseño arquitecturas que conectan ERPs legados con interfaces modernas, elimino burocracia con automatización y convierto datos crudos en dashboards ejecutivos.",
    "Me muevo cómodamente entre áreas operativas, dirección y equipos técnicos, actuando como puente entre negocio, datos y tecnología.",
    "Además, soy un **Early Adopter agresivo**. Mantengo una capacitación constante en nuevas tecnologías y adopto sin reservas la **Inteligencia Artificial**. No como un atajo, sino como una herramienta que *explotó* para automatizar la codificación rutinaria. Esto me regala el recurso más valioso: tiempo para **entender profundamente tu negocio** y resolver los problemas estructurales que el código por sí solo no arregla.",
  ],
  stats: [
    { value: "+8", label: "Años de Exp." },
    { value: "6", label: "Sistemas en Prod." },
    { value: "+1k", label: "Usuarios Impactados" },
    { value: "100%", label: "Compromiso" },
  ],
};

export const projectsData = [
  {
    id: "crm",
    title: "CRM Empresarial & ERP Sync",
    subtitle: "Full-Stack • Python & Next.js",
    description: "Sistema centralizado para gestión de clientes sincronizado en tiempo real con ERP Legacy Kepler.",
    image: "/crm-mockup.png",
    color: "blue",
    href: "/projects/crm",
    // Detail Page Data
    gradient: "from-blue-700 to-cyan-600",
    tags: ["Next.js 14", "FastAPI", "Python", "SQL Server", "JWT", "Tailwind"],
    imagePlaceholder: "[Espacio para Screenshot del Dashboard del CRM]",
    challenge: {
      title: "El Desafío",
      description: "Aceros Frontera gestionaba sus ventas y clientes utilizando el ERP legacy <strong>Kepler</strong>, un sistema robusto pero con una interfaz anticuada y sin acceso web. Esto generaba problemas críticos:",
      list: [
        "Los vendedores no tenían acceso a inventarios o estados de cuenta fuera de la oficina.",
        "El seguimiento de leads se hacía en <strong>hojas de Excel dispersas</strong>, perdiendo trazabilidad.",
        "No existía una forma de visualizar KPIs de ventas en tiempo real sin correr reportes manuales lentos."
      ]
    },
    solution: {
      title: "La Solución",
      description: "Diseñé y construí un <strong>CRM Web Moderno</strong> que actúa como una capa de inteligencia sobre el ERP existente. No reemplazamos al ERP, lo <em>potenciamos</em>.",
      grid: [
        { title: "Frontend Reactivo", description: "Interfaz construida con <strong>Next.js 14</strong> y componentes <strong>Shadcn/UI</strong> para una experiencia tipo app nativa, rápida y responsive para vendedores en campo." },
        { title: "Backend de Alto Rendimiento", description: "API REST desarrollada en <strong>Python (FastAPI)</strong>. Elegí Python por su facilidad para manejar lógica de datos compleja y su integración nativa con librerías de análisis como Pandas." }
      ]
    },
    engineering: {
      title: "Ingeniería: El Reto de Sincronización",
      description: "El mayor obstáculo técnico fue la integración con el ERP Kepler (basado en SQL Server pero con esquemas complejos `C1, C2...`). Implementé un patrón de <strong>\"Read-Heavy / Write-Careful\"</strong>:",
      list: [
        "La API lee datos de clientes e inventarios directamente del ERP en tiempo real (usando <code>SQLAlchemy</code> optimizado).",
        "Las nuevas órdenes y clientes se escriben primero en una base de datos intermedia (Staging) para validación.",
        "Un job asíncrono inyecta los datos validados al ERP, asegurando que nunca corrompemos la integridad de la base de datos legacy."
      ]
    },
    impact: {
      stats: [
        { value: "40%", label: "Reducción en tiempo de captura de pedidos" },
        { value: "+1000", label: "Clientes gestionados en la nueva plataforma" },
        { value: "100%", label: "Visibilidad de inventarios en tiempo real" }
      ]
    }
  },
  {
    id: "intranet",
    title: "Intranet Corporativa 2.0",
    subtitle: "Refactorización • React & SQL Server",
    description: "Plataforma modular para gestión operativa. Migración total de arquitectura legacy (JSON) a SQL Server.",
    image: "/intranet-mockup.png",
    color: "purple",
    href: "/projects/intranet",
    // Detail Page Data
    gradient: "from-purple-700 to-pink-600",
    tags: ["React", "Express.js", "SQL Server", "JWT", "Refactoring", "Architecture"],
    imagePlaceholder: "[Espacio para Screenshot de la Intranet]",
    challenge: {
      title: "El Desafío (Deuda Técnica)",
      description: "La versión 1.0 de la intranet creció orgánicamente hasta volverse inmanejable.",
      alert: {
        title: "El Problema \"JSON Hell\":",
        text: "Toda la persistencia de datos se hacía en archivos `.json` locales. Concurrencia, integridad referencial y seguridad eran inexistentes."
      },
      list: [
        "Un archivo <code>index.js</code> monolítico de +8,000 líneas.",
        "Imposible generar reportes cruzados (ej. gastos de vehículo vs departamento del empleado).",
        "Fallas de seguridad críticas en la gestión de sesiones."
      ]
    },
    solution: {
      title: "La Transformación (V 2.0)",
      description: "Lideré una <strong>refactorización total (\"Big Bang\")</strong> para profesionalizar la plataforma, migrando a una arquitectura relacional robusta sin interrumpir la operación diaria.",
      grid: [
        { title: "Migración a SQL Server", description: "Diseñé un modelo relacional de <strong>39 tablas</strong> normalizadas, migrando datos históricos mediante scripts ETL personalizados." },
        { title: "Arquitectura Modular", description: "Rompí el monolito en <strong>20 módulos de rutas</strong> independientes (Vehículos, RH, Tickets, etc.) usando Express Router y Middlewares de seguridad." }
      ]
    },
    engineering: {
      title: "Módulos Clave Desarrollados",
      list: [
        "<strong>Control Vehicular:</strong> Gestión completa de flotilla: asignaciones a empleados, bitácoras de viaje, alertas de mantenimiento y cálculo de rendimiento de combustible.",
        "<strong>Tickets TI:</strong> Sistema de Helpdesk interno con SLAs, categorías y notificaciones automáticas.",
        "<strong>Planeación 2026:</strong> Módulo estratégico para definir y trackear metas anuales por departamento con semáforos de cumplimiento."
      ]
    },
    impact: {
      stats: [
        { value: "100%", label: "Integridad de datos (vs 0% con JSON)" },
        { value: "20+", label: "Procesos operativos digitalizados" },
        { value: "Secured", label: "Implementación de Roles y Permisos (JWT)" }
      ]
    }
  },
  {
    id: "inventory",
    title: "App Móvil de Inventarios",
    subtitle: "Mobile PWA • Barcode Scanning",
    description: "Eliminación de papel y marbetes. Escaneo digital de productos con sincronización en tiempo real.",
    image: "/inventory-mockup.png",
    color: "emerald",
    href: "/projects/inventory",
    // Detail Page Data
    gradient: "from-emerald-600 to-teal-500",
    tags: ["React PWA", "Mobile First", "Barcode API", "SQL Server", "Real-time Sync"],
    imagePlaceholder: "[Espacio para Screenshot de la App Móvil]",
    challenge: {
      title: "El Desafío (Papel y Error Humano)",
      description: "El levantamiento de inventarios era un proceso manual, lento y propenso a errores. Se dependía de \"marbetes\" (etiquetas de papel) y captura manual posterior en el sistema.",
      list: [
        "Discrepancias constantes por errores de escritura o lectura.",
        "Doble trabajo: conteo en piso + captura en escritorio.",
        "Falta de visibilidad del progreso del inventario en tiempo real."
      ]
    },
    solution: {
      title: "La Solución Digital",
      description: "Desarrollé una <strong>Progressive Web App (PWA)</strong> optimizada para dispositivos móviles y tablets industriales, capaz de escanear productos y sincronizar conteos al instante.",
      grid: [
        { title: "Escaneo Inteligente", description: "Integración con lectores láser y cámaras para identificación unívoca de productos, validando existencias contra el sistema central." },
        { title: "Modo Offline/Hybrid", description: "Capacidad de operar en zonas de almacén con baja conectividad, sincronizando los datos automáticamente al recuperar señal." }
      ]
    },
    impact: {
      stats: [
        { value: "0%", label: "Errores de captura manual (Eliminados)" },
        { value: "50%", label: "Reducción en tiempo de levantamiento" },
        { value: "Real-Time", label: "Visibilidad inmediata de variaciones" }
      ]
    }
  },
  {
    id: "powerbi",
    title: "Business Intelligence & KPIs",
    subtitle: "Power BI • SQL Server • ETL",
    description: "Democratización de datos. Dashboards interactivos para la toma de decisiones estratégicas en tiempo real.",
    image: "/powerbi-mockup.png",
    color: "yellow",
    href: "/projects/powerbi",
    // Detail Page Data
    gradient: "from-yellow-500 to-orange-500",
    tags: ["Power BI Service", "DAX Avanzado", "SQL Server Analysis", "ETL Pipelines", "Data Modeling"],
    iframe: "https://app.powerbi.com/view?r=eyJrIjoiNjY4M2I5NjItNjkyMC00MGQ2LTgwNzYtY2M5YzNjZTE4NjI5IiwidCI6IjQ4OTE2NjVlLWUyYWItNDNlYi1iZDYzLTliZDNmNzc4YjRjMyJ9",
    // PowerBI has slightly different structure in original page, adapting to schema:
    challenge: {
      title: "Alcance del Proyecto",
      description: "Diseñé un ecosistema de reportes conectados directamente al Data Warehouse, eliminando la dependencia de \"Exceles compartidos por correo\".",
      list: [
        "<strong>Ventas:</strong> Análisis de rentabilidad por producto y zona.",
        "<strong>Inventarios:</strong> Rotación, días calle y alertas de stock.",
        "<strong>Finanzas:</strong> Flujo de caja y cuentas por cobrar."
      ]
    },
    solution: {
      title: "Ingeniería de Datos",
      description: "Lo difícil no es hacer la gráfica, es <strong>limpiar e integrar los datos</strong>.",
      list: [ // Using list variant for solution here to match original
        "Modelado de datos en esquema de <strong>Estrella (Star Schema)</strong>.",
        "Cálculos complejos de <strong>DAX</strong> (Year-over-Year, YTD, Running Totals).",
        "Actualización automática programada cada hora."
      ]
    }
  },
];

export const mentorshipData = {
  title: "Mentoria & Capacitación",
  description: "No solo construyo software, construyo **equipos capaces**. Como parte de mi estrategia de liderazgo técnico, diseño e imparto programas de capacitación para elevar el nivel técnico de la organización.",
  items: [
    {
      title: "Uso Avanzado de IA",
      description: "Taller para mandos medios sobre Prompt Engineering y automatización de tareas con ChatGPT/Claude.",
      color: "blue",
    },
    {
      title: "Excel & Data Analytics",
      description: "Capacitación en automatización con macros, Power Query y dashboards interactivos para personal administrativo.",
      color: "green",
    },
  ],
  stats: {
    trained: "+50",
    programs: "2",
  },
};

export const workflowData = {
  title: "¿Cómo Trabajo?",
  subtitle: "Mi proceso probado para transformar ideas en sistemas productivos",
  phases: [
    {
      number: "01",
      title: "Descubrimiento & Análisis",
      description: "Entiendo el negocio antes de escribir código. Mapeo procesos actuales, identifico cuellos de botella y defino KPIs de éxito.",
      deliverables: ["Documento de requerimientos", "Diagrama de flujo de procesos", "Estimación de tiempos y recursos"],
      color: "blue"
    },
    {
      number: "02",
      title: "Diseño & Arquitectura",
      description: "Diseño la solución técnica: modelo de datos, arquitectura de sistema, stack tecnológico y wireframes de UI/UX.",
      deliverables: ["Diagrama de arquitectura", "Modelo de base de datos", "Mockups de interfaz"],
      color: "purple"
    },
    {
      number: "03",
      title: "Desarrollo Iterativo",
      description: "Desarrollo en sprints cortos con demos semanales. Código limpio, documentado y con pruebas automatizadas.",
      deliverables: ["Código versionado (Git)", "Demos funcionales", "Documentación técnica"],
      color: "emerald"
    },
    {
      number: "04",
      title: "Despliegue & Capacitación",
      description: "Despliegue a producción, monitoreo de métricas y capacitación del equipo para garantizar adopción exitosa.",
      deliverables: ["Sistema en producción", "Manual de usuario", "Sesiones de capacitación"],
      color: "orange"
    }
  ],
  tools: {
    title: "Herramientas que Domino",
    categories: [
      {
        name: "Desarrollo",
        items: ["VS Code + Copilot", "Git & GitHub", "Docker", "Postman"]
      },
      {
        name: "Diseño & Prototipado",
        items: ["Figma", "Excalidraw", "Mermaid (diagramas)"]
      },
      {
        name: "Gestión de Proyectos",
        items: ["Notion", "Linear", "Slack"]
      },
      {
        name: "IA & Automatización",
        items: ["Claude", "ChatGPT", "Cursor", "Antigravity"]
      }
    ]
  },
  methodology: {
    title: "Metodología",
    approach: "Agile adaptado a equipos pequeños",
    principles: [
      "Entregas incrementales cada 1-2 semanas",
      "Comunicación constante con stakeholders",
      "Documentación viva (no PDFs obsoletos)",
      "Código como fuente de verdad"
    ]
  }
};

export const techStackData = [
  { name: "Next.js 14", cat: "Frontend", icon: SiNextdotjs },
  { name: "React", cat: "Frontend", icon: SiReact },
  { name: "TypeScript", cat: "Language", icon: SiTypescript },
  { name: "Tailwind CSS", cat: "Style", icon: SiTailwindcss },
  { name: "Python", cat: "Language", icon: SiPython },
  { name: "C#", cat: "Language", icon: SiDotnet },
  { name: "ASP.NET Core", cat: "Backend", icon: SiDotnet },
  { name: "FastAPI", cat: "Backend", icon: SiFastapi },
  { name: "SQL Server", cat: "Database", icon: FaMicrosoft },
  { name: "Excel Advanced", cat: "Analytics", icon: FaMicrosoft },
  { name: "Power BI", cat: "Analytics", icon: FaMicrosoft },
  { name: "Gemini CLI", cat: "AI Engineering", icon: SiGoogle },
  { name: "Claude Code", cat: "AI Engineering", icon: SiAnthropic },
  { name: "OpenAI API", cat: "AI Engineering", icon: SiOpenai },
  { name: "Antigravity", cat: "AI Agent", icon: Rocket },
  { name: "Flutter", cat: "Mobile", icon: SiFlutter },
];

export const footerData = {
  linkedin: "https://linkedin.com/in/tu-usuario",
  github: "https://github.com/prietobarronde1-alt",
  copyright: "© 2026 David Prieto. Construido con Next.js y Tailwind.",
};
