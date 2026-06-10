import type { KBCategory, Reminder, Deadline, DashboardStats } from '@/types'

// Chat answers
export const chatAnswers: Record<string, string> = {
  'Welke documenten moet ik deze maand uploaden?':
    'Voor deze maand ontbreken nog **3 documenten**: uw bankuittreksel van april, 2 aankoopfacturen en uw verkoopoverzicht. U kunt deze direct uploaden via de knop hieronder. Uw boekhouder krijgt automatisch een melding zodra alles binnen is.',
  'Wanneer moet mijn btw-aangifte binnen zijn?':
    'Uw volgende btw-aangifte voor kwartaal Q2 2026 heeft als deadline **20 juli 2026**. U heeft nog 41 dagen. Uw boekhouder kan dit indienen zodra alle facturen zijn geüpload en gecontroleerd.',
  'Hoe upload ik mijn facturen?':
    'Uploaden is eenvoudig: klik op "Upload documenten" in uw portaal, kies het type factuur (aankoop of verkoop) en selecteer uw bestand. Ondersteunde formaten: **PDF, JPG, PNG**. Maximum bestandsgrootte: 10 MB per bestand.',
  'Wat is het verschil tussen aankoopfactuur en verkoopfactuur?':
    'Een **aankoopfactuur** is een factuur die u ontvangt van een leverancier voor aankopen die u deed. Een **verkoopfactuur** is een factuur die u zelf verstuurt naar uw klanten. Beide zijn belangrijk voor uw boekhouding en btw-aangifte.',
  'Kan ik restaurantkosten inbrengen?':
    'Restaurantkosten kunnen **gedeeltelijk aftrekbaar** zijn als ze beroepsmatig zijn (klantenmaal, zakelijke bespreking). Upload de factuur en voeg een korte omschrijving toe van het zakelijk doel. Uw boekhouder beoordeelt de exacte aftrekbaarheid.',
  'Wat moet ik doen met een buitenlandse factuur?':
    'Buitenlandse facturen uploadt u normaal via het portaal. Voeg het origineel toe. Facturen in andere valuta worden automatisch omgezet. Let op **BTW-verlegging** als uw leverancier in een EU-land zit — uw boekhouder verwerkt dit correct.',
  'Waar zie ik mijn openstaande documenten?':
    'In uw portaal onder **"Mijn documenten"** ziet u een volledig overzicht van alle geüploade stukken en welke nog ontbreken. De sectie "Status dossier" toont ook de voortgang per categorie.',
  'Kan ik mijn boekhouder een bericht sturen?':
    'Ja, via **"Berichten"** in uw portaal kunt u direct berichten sturen naar uw boekhouder. U ontvangt hier ook meldingen als er een antwoord is. Voor dringende zaken kunt u telefonisch contact opnemen via het kantoor.',
}

export const chatSuggestions = Object.keys(chatAnswers)

// Knowledge base
export const knowledgeBase: KBCategory[] = [
  {
    id: 'btw',
    label: 'Btw',
    icon: '📋',
    items: [
      {
        id: 'btw-1',
        question: 'Wanneer moet ik een btw-aangifte indienen?',
        answer: 'Kwartaalaangevers dienen uiterlijk de 20e van de maand na het kwartaal in (april, juli, oktober, januari). Maandaangevers dienen de 20e van de volgende maand in. Uw boekhouder regelt dit voor u na ontvangst van alle documenten.',
        category: 'btw',
      },
      {
        id: 'btw-2',
        question: 'Wat is intracommunautaire btw?',
        answer: 'Bij aankopen van EU-leveranciers zonder Belgische btw past u zelf de btw toe via BTW-verlegging (code 87 in uw aangifte). Upload de factuur en uw boekhouder verwerkt dit correct in uw kwartaalaangifte.',
        category: 'btw',
      },
      {
        id: 'btw-3',
        question: 'Wat is een btw-vrijstelling kleine ondernemingen?',
        answer: 'Ondernemingen met een jaaromzet onder €25.000 kunnen kiezen voor de btw-vrijstellingsregeling. U vraagt dan geen btw aan klanten maar kunt ook geen btw recupereren. Vraag uw boekhouder of dit voordelig is voor uw situatie.',
        category: 'btw',
      },
    ],
  },
  {
    id: 'facturen',
    label: 'Facturen',
    icon: '🧾',
    items: [
      {
        id: 'fact-1',
        question: 'Welke gegevens moet een factuur bevatten?',
        answer: 'Een geldige factuur bevat: uw naam/bedrijfsnaam en BTW-nummer, klantnaam en -adres, uniek factuurnummer, factuurdatum, omschrijving van de dienst of het product, bedrag excl. btw, btw-percentage en totaalbedrag incl. btw.',
        category: 'facturen',
      },
      {
        id: 'fact-2',
        question: 'Hoe lang moet ik facturen bewaren?',
        answer: 'U moet facturen minimaal 7 jaar bewaren (10 jaar voor onroerende goederen). Via het BELTH e-loket worden uw documenten digitaal gearchiveerd en automatisch 10 jaar bewaard — volledig conform de Belgische wetgeving.',
        category: 'facturen',
      },
      {
        id: 'fact-3',
        question: 'Mag ik een factuur per e-mail versturen?',
        answer: 'Ja, elektronische facturen zijn volledig rechtsgeldig in België. Zorg voor een uniek factuurnummer, correcte btw-gegevens en bewaar een kopie. Stuur ze bij voorkeur in PDF-formaat en upload een kopie in uw e-loket.',
        category: 'facturen',
      },
    ],
  },
  {
    id: 'kosten',
    label: 'Kosten',
    icon: '💰',
    items: [
      {
        id: 'kosten-1',
        question: 'Zijn restaurantkosten aftrekbaar?',
        answer: 'Restaurantkosten kunnen gedeeltelijk aftrekbaar zijn bij zakelijk gebruik (klantenmaal, zakelijke bespreking). Upload de factuur en voeg een korte omschrijving toe van het zakelijk doel en de aanwezige personen. Uw boekhouder beoordeelt de aftrekbaarheid.\n\nDit is algemene informatie. Voor definitieve fiscale beoordeling controleert uw boekhouder het dossier.',
        category: 'kosten',
      },
      {
        id: 'kosten-2',
        question: 'Zijn autokosten aftrekbaar?',
        answer: 'Autokosten zijn gedeeltelijk aftrekbaar afhankelijk van het type voertuig, de CO₂-uitstoot en het zakelijk gebruik. Voor elektrische wagens gelden bijzondere regels. Uw boekhouder berekent het exacte aftrekbare percentage op basis van uw specifieke situatie.',
        category: 'kosten',
      },
      {
        id: 'kosten-3',
        question: 'Zijn thuiswerkonkosten aftrekbaar?',
        answer: 'Een thuiskantoorvergoeding van forfaitair €10/maand is fiscaal aftrekbaar zonder bewijsstukken. Voor hogere bedragen dient u aan te tonen welk deel van uw woning u gebruikt als kantoor. Upload relevante documenten en uw boekhouder berekent het correcte bedrag.',
        category: 'kosten',
      },
    ],
  },
  {
    id: 'deadlines',
    label: 'Deadlines',
    icon: '📅',
    items: [
      {
        id: 'dead-1',
        question: 'Wat zijn de belangrijkste fiscale deadlines in 2026?',
        answer: 'BTW-aangifte Q2: 20 juli 2026. Personenbelasting (digitaal): 31 oktober 2026. Vennootschapsbelasting: 7 maanden na afsluiting boekjaar. Sociale bijdragen zelfstandigen: per kwartaal. Uw boekhouder houdt u automatisch op de hoogte via dit portaal.',
        category: 'deadlines',
      },
      {
        id: 'dead-2',
        question: 'Wat als ik een deadline mis?',
        answer: 'Een laattijdige aangifte kan leiden tot belastingverhogingen (10-50%) en boetes. Contacteer uw boekhouder zo snel mogelijk. In sommige gevallen is een uitstelverzoek mogelijk. Preventie is beter: het systeem stuurt u automatisch herinneringen ruim voor de deadline.',
        category: 'deadlines',
      },
    ],
  },
  {
    id: 'lonen',
    label: 'Lonen',
    icon: '💼',
    items: [
      {
        id: 'loon-1',
        question: 'Wanneer moet ik mijn loonfiche uploaden?',
        answer: 'Upload uw loonfiches bij het begin van elk kwartaal of zodra u ze ontvangt van uw sociaal secretariaat (SD Worx, Partena, etc.). Dit is nodig voor uw fiscale aangifte, sociale bijdragen en eventuele RSZ-aangifte.',
        category: 'lonen',
      },
      {
        id: 'loon-2',
        question: 'Wat zijn de sociale bijdragen voor zelfstandigen?',
        answer: 'Zelfstandigen betalen kwartaalbijdragen aan hun socialeverzekeringsfonds. Het bedrag is gebaseerd op uw netto-beroepsinkomen van 3 jaar geleden. Voorlopige bijdragen zijn mogelijk. Uw boekhouder helpt u het juiste bedrag te berekenen.',
        category: 'lonen',
      },
    ],
  },
  {
    id: 'vennootschap',
    label: 'Vennootschap',
    icon: '🏢',
    items: [
      {
        id: 'venn-1',
        question: 'Wanneer is het voordelig een vennootschap op te richten?',
        answer: 'Een vennootschap kan voordelig zijn vanaf een bepaald inkomensniveau (doorgaans vanaf €60.000-80.000 netto per jaar), omwille van lagere vennootschapsbelasting (25%), vermogensplanning en beperkte aansprakelijkheid. Een grondige simulatie door uw boekhouder is aangewezen.',
        category: 'vennootschap',
      },
    ],
  },
  {
    id: 'upload',
    label: 'Upload hulp',
    icon: '⬆',
    items: [
      {
        id: 'up-1',
        question: 'Welke bestandsformaten kan ik uploaden?',
        answer: 'U kunt PDF-, JPG-, PNG- en TIFF-bestanden uploaden. PDF heeft de voorkeur omdat dit het meest leesbaar is voor uw boekhouder en onze AI. Maximum bestandsgrootte: 10 MB per bestand. U kunt meerdere bestanden tegelijk uploaden.',
        category: 'upload',
      },
      {
        id: 'up-2',
        question: 'Mijn upload mislukt — wat nu?',
        answer: 'Controleer of het bestand kleiner is dan 10 MB en een ondersteund formaat heeft (PDF, JPG, PNG). Bij problemen kunt u contact opnemen via "Berichten" of het kantoor bellen. U kunt ook de pagina herladen en het opnieuw proberen.',
        category: 'upload',
      },
    ],
  },
]

// Reminders
export const reminders: Reminder[] = [
  {
    id: 'r1',
    clientId: 'c1',
    clientName: 'Sophie Peeters BV',
    missingDocs: ['Bankuittreksel april', '2 aankoopfacturen'],
    message: 'Beste Sophie, wij missen nog uw bankuittreksel en 2 aankoopfacturen voor april. U kunt deze veilig uploaden via uw e-loket. Dank bij voorbaat!',
    deadline: '20 jul 2026',
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'r2',
    clientId: 'c2',
    clientName: 'Restaurant Lotus',
    missingDocs: ['Bankuittreksel april', 'Bankuittreksel mei', 'Verkooprapport mei'],
    message: 'Geachte klant, uw btw-aangifte deadline nadert. Wij missen nog 3 documenten. Upload zo snel mogelijk via het e-loket om de deadline niet te missen.',
    deadline: '20 jun 2026',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 'r3',
    clientId: 'c4',
    clientName: 'Medipraktijk Gent',
    missingDocs: ['Loonfiche mei'],
    message: 'Beste klant, uw loonfiche voor mei ontbreekt nog in het dossier. Gelieve dit document zo spoedig mogelijk te uploaden via uw e-loket.',
    deadline: '30 jun 2026',
    priority: 'medium',
    status: 'pending',
  },
  {
    id: 'r4',
    clientId: 'c6',
    clientName: 'IT Solutions Ghent',
    missingDocs: ['Bankuittreksel april', 'BTW-aangifte Q1'],
    message: 'Geachte klant, uw dossier is nog onvolledig. Wij hebben uw bankuittreksel en BTW-aangifte Q1 nodig om uw boekhouding bij te werken.',
    deadline: '15 jun 2026',
    priority: 'high',
    status: 'pending',
  },
]

// Deadlines
export const deadlines: Deadline[] = [
  {
    id: 'dl1',
    title: 'BTW-aangifte Q2 2026',
    description: 'Kwartaalaangifte btw voor alle kwartaalaangevers',
    date: '20 juli 2026',
    daysLeft: 41,
    priority: 'high',
    clientIds: ['c1', 'c2', 'c4', 'c5'],
  },
  {
    id: 'dl2',
    title: 'Sociale bijdragen Q3 2026',
    description: 'Kwartaalbijdrage zelfstandigen',
    date: '15 september 2026',
    daysLeft: 98,
    priority: 'medium',
    clientIds: ['c1', 'c3'],
  },
  {
    id: 'dl3',
    title: 'BTW-aangifte Restaurant Lotus',
    description: 'Dringende aangifte — documenten ontbreken',
    date: '20 juni 2026',
    daysLeft: 6,
    priority: 'high',
    clientIds: ['c2'],
  },
  {
    id: 'dl4',
    title: 'Personenbelasting 2026',
    description: 'Digitale indiening aanslagjaar 2025',
    date: '31 oktober 2026',
    daysLeft: 144,
    priority: 'low',
    clientIds: ['c1', 'c3', 'c5'],
  },
]

// Dashboard stats
export const dashboardStats: DashboardStats = {
  newDocuments: 24,
  missingDossiers: 8,
  openQuestions: 5,
  urgentDeadlines: 3,
  autoRecognized: 12,
}
