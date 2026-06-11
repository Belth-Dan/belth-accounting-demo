export type Lang = "nl" | "en" | "fr" | "zh";

export const DEFAULT_LANG: Lang = "nl";
export const STORAGE_KEY = "belth-accounting-ai-lang";

export const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "zh", label: "中文" },
];

export type Translation = {
  nav: {
    technology: string;
    platform: string;
    engagement: string;
    oem: string;
    aiSolutions: string;
    about: string;
    contact: string;
    bookDemo: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewLiveDemo: string;
    bookDemo: string;
  };
  problem: {
    badge: string;
    title: string;
    subtitle: string;
    items: { id: string; title: string; body: string }[];
  };
  solution: {
    badge: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    pillars: { id: string; label: string; sub: string }[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: { id: string; title: string; body: string }[];
  };
  demo: {
    badge: string;
    title: string;
    description: string;
    viewLiveDemo: string;
    aiAssistantActive: string;
    steps: { step: string; label: string; detail: string }[];
  };
  cta: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    viewLiveDemo: string;
    bookDemo: string;
  };
  footer: {
    location: string;
  };
};

export const translations: Record<Lang, Translation> = {
  nl: {
    nav: {
      technology: "Technology",
      platform: "Platform",
      engagement: "Engagement",
      oem: "OEM",
      aiSolutions: "AI Solutions",
      about: "About",
      contact: "Contact",
      bookDemo: "Boek een demo",
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
    },
    hero: {
      badge: "AI e-loket · Boekhoudkantoren",
      titleLine1: "Minder opvolging.",
      titleLine2: "Meer advieswerk.",
      subtitle:
        "Laat klanten documenten uploaden, vragen stellen en deadlines opvolgen zonder extra druk op uw team. BELTH automatiseert de administratieve stroom zodat uw boekhouders zich focussen op wat telt.",
      viewLiveDemo: "Bekijk live demo",
      bookDemo: "Boek demo",
    },
    problem: {
      badge: "Het probleem",
      title: "Administratie die uw team vertraagt",
      subtitle: "Vier terugkerende knelpunten in elk boekhoudkantoor die tijd en energie kosten.",
      items: [
        {
          id: "late-docs",
          title: "Documenten die te laat binnenkomen",
          body: "Klanten wachten tot de deadline of leveren onvolledige dossiers aan. Uw team verliest uren aan herinneringen en opvolging.",
        },
        {
          id: "repeat-questions",
          title: "Herhalende vragen van klanten",
          body: "Dezelfde vragen over btw-aangiftes, deadlines en benodigde documenten bezetten uw inbox dag na dag.",
        },
        {
          id: "staff-pressure",
          title: "Dossierbeheerders onder druk",
          body: "Repetitief administratief werk laat weinig ruimte voor inhoudelijk advies en hoogwaardige service.",
        },
        {
          id: "vat-deadlines",
          title: "Btw-deadlines en ontbrekende stukken",
          body: "Opvolging van wettelijke deadlines en ontbrekende documenten is foutgevoelig zonder gestructureerde automatisering.",
        },
      ],
    },
    solution: {
      badge: "De oplossing",
      title: "BELTH AI e-loket",
      paragraph1:
        "Een volledig geïntegreerd platform dat uw klantcommunicatie, documentstroom en deadlineopvolging automatiseert. Gebouwd voor de dagelijkse werking van een Belgisch boekhoudkantoor.",
      paragraph2:
        "Klanten werken via een beveiligd portaal. Uw team werkt via een overzichtelijk dashboard. De AI-assistent zorgt voor de rest.",
      pillars: [
        { id: "portal", label: "Klantportaal", sub: "Documenten uploaden, status opvolgen, berichten sturen" },
        { id: "ai", label: "AI boekhoudassistent", sub: "24/7 antwoorden op klantvragen" },
        { id: "intake", label: "Document intake", sub: "Automatische classificatie bij upload" },
        { id: "dashboard", label: "Boekhouder dashboard", sub: "Realtime overzicht van alle dossiers" },
        { id: "reminders", label: "Automatische reminders", sub: "Gepersonaliseerde herinneringen per deadline" },
        { id: "tracking", label: "Dossieropvolging", sub: "Statusindicatoren per klant en periode" },
      ],
    },
    features: {
      badge: "Functionaliteiten",
      title: "Alles wat uw kantoor nodig heeft",
      subtitle: "Zes geïntegreerde modules, één platform.",
      items: [
        {
          id: "portal",
          title: "Klantportaal",
          body: "Een beveiligde online omgeving waar klanten documenten uploaden, de status van hun dossier volgen en berichten sturen.",
        },
        {
          id: "chat",
          title: "AI Chat",
          body: "Een getrainde boekhoudassistent beantwoordt klantvragen 24/7 op basis van uw eigen kennisbank en dossiergegevens.",
        },
        {
          id: "ocr",
          title: "Documentherkenning",
          body: "Automatische classificatie van facturen, rekeninguittreksels en andere stukken bij het uploaden.",
        },
        {
          id: "dashboard",
          title: "Boekhouder-dashboard",
          body: "Overzicht van alle dossiers, openstaande documenten en klantstatus op één scherm.",
        },
        {
          id: "reminders",
          title: "Automatische reminders",
          body: "Gepersonaliseerde herinneringen per e-mail voor btw-kwartalen, jaarrekeningen en ontbrekende documenten.",
        },
        {
          id: "tracking",
          title: "Dossieropvolging",
          body: "Statusindicatoren per dossier tonen welke stukken ontbreken, wat klaar is voor verwerking en wat in behandeling is.",
        },
      ],
    },
    demo: {
      badge: "Live demo",
      title: "Zie hoe het platform werkt",
      description:
        "De interactieve demo toont het volledige klanttraject: van documentupload tot AI-antwoord en boekhouderopvolging. Geen registratie vereist.",
      viewLiveDemo: "Bekijk live demo",
      aiAssistantActive: "AI-assistent actief",
      steps: [
        { step: "01", label: "Klant uploadt documenten", detail: "Via het portaal zonder e-mail of papier" },
        { step: "02", label: "AI beantwoordt vragen", detail: "Directe antwoorden op btw- en deadlinevragen" },
        { step: "03", label: "Dashboard voor de boekhouder", detail: "Realtime overzicht van alle dossiers" },
        { step: "04", label: "Automatische opvolging", detail: "Reminders voor ontbrekende documenten" },
      ],
    },
    cta: {
      badge: "Aan de slag",
      titleLine1: "Minder repetitief werk.",
      titleLine2: "Betere opvolging.",
      titleLine3: "Snellere klantcommunicatie.",
      subtitle: "Ontdek in de live demo hoe BELTH past in de dagelijkse werking van uw kantoor.",
      viewLiveDemo: "Bekijk live demo",
      bookDemo: "Boek demo",
    },
    footer: {
      location: "Zottegem, België",
    },
  },

  en: {
    nav: {
      technology: "Technology",
      platform: "Platform",
      engagement: "Engagement",
      oem: "OEM",
      aiSolutions: "AI Solutions",
      about: "About",
      contact: "Contact",
      bookDemo: "Book a demo",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "AI Portal · Accounting Firms",
      titleLine1: "Less follow-up.",
      titleLine2: "More advisory work.",
      subtitle:
        "Let clients upload documents, ask questions, and track deadlines without adding pressure to your team. BELTH automates the administrative workflow so your accountants can focus on what matters.",
      viewLiveDemo: "View live demo",
      bookDemo: "Book demo",
    },
    problem: {
      badge: "The challenge",
      title: "Administration that slows your team down",
      subtitle: "Four recurring bottlenecks in every accounting firm that cost time and energy.",
      items: [
        {
          id: "late-docs",
          title: "Documents arriving too late",
          body: "Clients wait until the deadline or submit incomplete files. Your team loses hours on reminders and follow-up.",
        },
        {
          id: "repeat-questions",
          title: "Repetitive client questions",
          body: "The same questions about VAT filings, deadlines, and required documents fill your inbox day after day.",
        },
        {
          id: "staff-pressure",
          title: "File managers under pressure",
          body: "Repetitive administrative work leaves little room for substantive advice and high-quality service.",
        },
        {
          id: "vat-deadlines",
          title: "VAT deadlines and missing documents",
          body: "Tracking statutory deadlines and missing documents is error-prone without structured automation.",
        },
      ],
    },
    solution: {
      badge: "The solution",
      title: "BELTH AI Portal",
      paragraph1:
        "A fully integrated platform that automates client communication, document flow, and deadline tracking. Built for the daily operations of a Belgian accounting firm.",
      paragraph2:
        "Clients work through a secure portal. Your team works from a clear dashboard. The AI assistant handles the rest.",
      pillars: [
        { id: "portal", label: "Client portal", sub: "Upload documents, track status, send messages" },
        { id: "ai", label: "AI accounting assistant", sub: "24/7 answers to client questions" },
        { id: "intake", label: "Document intake", sub: "Automatic classification on upload" },
        { id: "dashboard", label: "Accountant dashboard", sub: "Real-time overview of all files" },
        { id: "reminders", label: "Automated reminders", sub: "Personalised reminders per deadline" },
        { id: "tracking", label: "File tracking", sub: "Status indicators per client and period" },
      ],
    },
    features: {
      badge: "Capabilities",
      title: "Everything your firm needs",
      subtitle: "Six integrated modules, one platform.",
      items: [
        {
          id: "portal",
          title: "Client portal",
          body: "A secure online environment where clients upload documents, track file status, and send messages.",
        },
        {
          id: "chat",
          title: "AI Chat",
          body: "A trained accounting assistant answers client questions 24/7 based on your knowledge base and file data.",
        },
        {
          id: "ocr",
          title: "Document recognition",
          body: "Automatic classification of invoices, bank statements, and other documents on upload.",
        },
        {
          id: "dashboard",
          title: "Accountant dashboard",
          body: "Overview of all files, outstanding documents, and client status on a single screen.",
        },
        {
          id: "reminders",
          title: "Automated reminders",
          body: "Personalised email reminders for VAT quarters, annual accounts, and missing documents.",
        },
        {
          id: "tracking",
          title: "File tracking",
          body: "Per-file status indicators show what is missing, ready for processing, or in progress.",
        },
      ],
    },
    demo: {
      badge: "Live demo",
      title: "See how the platform works",
      description:
        "The interactive demo shows the full client journey: from document upload to AI response and accountant follow-up. No registration required.",
      viewLiveDemo: "View live demo",
      aiAssistantActive: "AI assistant active",
      steps: [
        { step: "01", label: "Client uploads documents", detail: "Via the portal — no email or paper" },
        { step: "02", label: "AI answers questions", detail: "Instant answers on VAT and deadline queries" },
        { step: "03", label: "Dashboard for the accountant", detail: "Real-time overview of all files" },
        { step: "04", label: "Automated follow-up", detail: "Reminders for missing documents" },
      ],
    },
    cta: {
      badge: "Get started",
      titleLine1: "Less repetitive work.",
      titleLine2: "Better follow-up.",
      titleLine3: "Faster client communication.",
      subtitle: "Discover in the live demo how BELTH fits into your firm's daily operations.",
      viewLiveDemo: "View live demo",
      bookDemo: "Book demo",
    },
    footer: {
      location: "Zottegem, Belgium",
    },
  },

  fr: {
    nav: {
      technology: "Technologie",
      platform: "Plateforme",
      engagement: "Engagement",
      oem: "OEM",
      aiSolutions: "Solutions IA",
      about: "À propos",
      contact: "Contact",
      bookDemo: "Réserver une démo",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      badge: "Portail IA · Cabinets comptables",
      titleLine1: "Moins de suivi.",
      titleLine2: "Plus de conseil.",
      subtitle:
        "Permettez à vos clients de déposer des documents, poser des questions et suivre les échéances sans surcharge pour votre équipe. BELTH automatise le flux administratif pour que vos comptables se concentrent sur l'essentiel.",
      viewLiveDemo: "Voir la démo en direct",
      bookDemo: "Réserver une démo",
    },
    problem: {
      badge: "Le défi",
      title: "Une administration qui ralentit votre équipe",
      subtitle: "Quatre points de friction récurrents dans chaque cabinet comptable qui coûtent du temps et de l'énergie.",
      items: [
        {
          id: "late-docs",
          title: "Documents reçus trop tard",
          body: "Les clients attendent la date limite ou transmettent des dossiers incomplets. Votre équipe perd des heures en relances et suivi.",
        },
        {
          id: "repeat-questions",
          title: "Questions clients répétitives",
          body: "Les mêmes questions sur les déclarations TVA, les échéances et les documents requis occupent votre boîte mail chaque jour.",
        },
        {
          id: "staff-pressure",
          title: "Gestionnaires de dossiers sous pression",
          body: "Le travail administratif répétitif laisse peu de place au conseil de fond et à un service de qualité.",
        },
        {
          id: "vat-deadlines",
          title: "Échéances TVA et pièces manquantes",
          body: "Le suivi des délais légaux et des documents manquants est source d'erreurs sans automatisation structurée.",
        },
      ],
    },
    solution: {
      badge: "La solution",
      title: "Portail IA BELTH",
      paragraph1:
        "Une plateforme entièrement intégrée qui automatise la communication client, le flux documentaire et le suivi des échéances. Conçue pour le fonctionnement quotidien d'un cabinet comptable belge.",
      paragraph2:
        "Les clients travaillent via un portail sécurisé. Votre équipe via un tableau de bord clair. L'assistant IA s'occupe du reste.",
      pillars: [
        { id: "portal", label: "Portail client", sub: "Déposer des documents, suivre le statut, envoyer des messages" },
        { id: "ai", label: "Assistant comptable IA", sub: "Réponses 24/7 aux questions clients" },
        { id: "intake", label: "Réception documentaire", sub: "Classification automatique à l'upload" },
        { id: "dashboard", label: "Tableau de bord comptable", sub: "Vue en temps réel de tous les dossiers" },
        { id: "reminders", label: "Rappels automatiques", sub: "Relances personnalisées par échéance" },
        { id: "tracking", label: "Suivi de dossier", sub: "Indicateurs de statut par client et période" },
      ],
    },
    features: {
      badge: "Fonctionnalités",
      title: "Tout ce dont votre cabinet a besoin",
      subtitle: "Six modules intégrés, une seule plateforme.",
      items: [
        {
          id: "portal",
          title: "Portail client",
          body: "Un environnement en ligne sécurisé où les clients déposent des documents, suivent le statut de leur dossier et envoient des messages.",
        },
        {
          id: "chat",
          title: "Chat IA",
          body: "Un assistant comptable formé répond aux questions clients 24/7 sur base de votre base de connaissances et de vos dossiers.",
        },
        {
          id: "ocr",
          title: "Reconnaissance documentaire",
          body: "Classification automatique des factures, relevés bancaires et autres pièces à l'upload.",
        },
        {
          id: "dashboard",
          title: "Tableau de bord comptable",
          body: "Vue d'ensemble de tous les dossiers, documents en attente et statut client sur un seul écran.",
        },
        {
          id: "reminders",
          title: "Rappels automatiques",
          body: "Relances personnalisées par e-mail pour les trimestres TVA, comptes annuels et documents manquants.",
        },
        {
          id: "tracking",
          title: "Suivi de dossier",
          body: "Des indicateurs par dossier montrent les pièces manquantes, prêtes à traiter ou en cours.",
        },
      ],
    },
    demo: {
      badge: "Démo en direct",
      title: "Découvrez le fonctionnement de la plateforme",
      description:
        "La démo interactive montre le parcours client complet : de l'upload documentaire à la réponse IA et au suivi comptable. Aucune inscription requise.",
      viewLiveDemo: "Voir la démo en direct",
      aiAssistantActive: "Assistant IA actif",
      steps: [
        { step: "01", label: "Le client dépose des documents", detail: "Via le portail, sans e-mail ni papier" },
        { step: "02", label: "L'IA répond aux questions", detail: "Réponses directes sur TVA et échéances" },
        { step: "03", label: "Tableau de bord comptable", detail: "Vue en temps réel de tous les dossiers" },
        { step: "04", label: "Suivi automatique", detail: "Rappels pour les documents manquants" },
      ],
    },
    cta: {
      badge: "Commencer",
      titleLine1: "Moins de travail répétitif.",
      titleLine2: "Meilleur suivi.",
      titleLine3: "Communication client plus rapide.",
      subtitle: "Découvrez dans la démo en direct comment BELTH s'intègre au fonctionnement quotidien de votre cabinet.",
      viewLiveDemo: "Voir la démo en direct",
      bookDemo: "Réserver une démo",
    },
    footer: {
      location: "Zottegem, Belgique",
    },
  },

  zh: {
    nav: {
      technology: "技术",
      platform: "平台",
      engagement: "参与",
      oem: "OEM",
      aiSolutions: "AI 解决方案",
      about: "关于我们",
      contact: "联系",
      bookDemo: "预约演示",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
    },
    hero: {
      badge: "AI 门户 · 会计师事务所",
      titleLine1: "减少跟进负担。",
      titleLine2: "更多顾问工作。",
      subtitle:
        "让客户上传文件、提出问题并跟进截止日期，无需给团队增加额外压力。BELTH 自动化行政流程，让您的会计师专注于真正重要的工作。",
      viewLiveDemo: "查看在线演示",
      bookDemo: "预约演示",
    },
    problem: {
      badge: "挑战",
      title: "拖慢团队的行政工作",
      subtitle: "每家会计师事务所都会遇到的四个反复出现的瓶颈，耗费时间与精力。",
      items: [
        {
          id: "late-docs",
          title: "文件提交过晚",
          body: "客户等到截止日期才提交，或提供不完整的档案。您的团队将耗费大量时间进行提醒和跟进。",
        },
        {
          id: "repeat-questions",
          title: "重复的客户咨询",
          body: "关于增值税申报、截止日期和所需文件的相同问题日复一日占据您的收件箱。",
        },
        {
          id: "staff-pressure",
          title: "档案管理员压力过大",
          body: "重复的行政工作挤占了实质性咨询和高质量服务的时间。",
        },
        {
          id: "vat-deadlines",
          title: "增值税截止日期与缺失文件",
          body: "在没有结构化自动化的情况下，跟踪法定期限和缺失文件容易出错。",
        },
      ],
    },
    solution: {
      badge: "解决方案",
      title: "BELTH AI 门户",
      paragraph1:
        "一个完全集成的平台，自动化客户沟通、文件流转和截止日期跟进。专为比利时会计师事务所的日常运营而打造。",
      paragraph2:
        "客户通过安全门户操作。您的团队通过清晰的仪表板工作。AI 助手处理其余事务。",
      pillars: [
        { id: "portal", label: "客户门户", sub: "上传文件、跟踪状态、发送消息" },
        { id: "ai", label: "AI 会计助手", sub: "全天候回答客户问题" },
        { id: "intake", label: "文件接收", sub: "上传时自动分类" },
        { id: "dashboard", label: "会计师仪表板", sub: "所有档案的实时概览" },
        { id: "reminders", label: "自动提醒", sub: "按截止日期发送个性化提醒" },
        { id: "tracking", label: "档案跟进", sub: "按客户和期间显示状态指标" },
      ],
    },
    features: {
      badge: "功能",
      title: "满足您事务所的一切需求",
      subtitle: "六个集成模块，一个平台。",
      items: [
        {
          id: "portal",
          title: "客户门户",
          body: "安全的在线环境，客户可上传文件、跟踪档案状态并发送消息。",
        },
        {
          id: "chat",
          title: "AI 聊天",
          body: "经过训练的会计助手基于您的知识库和档案数据，全天候回答客户问题。",
        },
        {
          id: "ocr",
          title: "文件识别",
          body: "上传时自动分类发票、银行对账单及其他文件。",
        },
        {
          id: "dashboard",
          title: "会计师仪表板",
          body: "在一个屏幕上查看所有档案、待处理文件和客户状态。",
        },
        {
          id: "reminders",
          title: "自动提醒",
          body: "针对增值税季度、年度账目和缺失文件发送个性化电子邮件提醒。",
        },
        {
          id: "tracking",
          title: "档案跟进",
          body: "每个档案的状态指标显示缺失、待处理和进行中的文件。",
        },
      ],
    },
    demo: {
      badge: "在线演示",
      title: "了解平台如何运作",
      description:
        "交互式演示展示完整的客户旅程：从文件上传到 AI 回复及会计师跟进。无需注册。",
      viewLiveDemo: "查看在线演示",
      aiAssistantActive: "AI 助手已激活",
      steps: [
        { step: "01", label: "客户上传文件", detail: "通过门户操作，无需邮件或纸质文件" },
        { step: "02", label: "AI 回答问题", detail: "即时回答增值税和截止日期相关问题" },
        { step: "03", label: "会计师仪表板", detail: "所有档案的实时概览" },
        { step: "04", label: "自动跟进", detail: "缺失文件的提醒通知" },
      ],
    },
    cta: {
      badge: "立即开始",
      titleLine1: "减少重复性工作。",
      titleLine2: "更好的跟进。",
      titleLine3: "更快的客户沟通。",
      subtitle: "在在线演示中了解 BELTH 如何融入您事务所的日常运营。",
      viewLiveDemo: "查看在线演示",
      bookDemo: "预约演示",
    },
    footer: {
      location: "比利时佐特海姆",
    },
  },
};

export function isValidLang(value: string | null): value is Lang {
  return value === "nl" || value === "en" || value === "fr" || value === "zh";
}
