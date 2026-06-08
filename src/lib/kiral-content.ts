export const kiralSite = {
  name: 'Kiral Bau',
  legalName: 'Kiral Bau',
  owner: 'Yavuz Polat',
  phone: '+49 176 30140780',
  email: 'kiralbau@hotmail.com',
  website: 'https://kiralbau.de',
  address: 'Utrechter Straße 26, 13347 Berlin',
  city: 'Berlin',
  region: 'Berlin & Brandenburg',
  metaTitle: 'Kiral Bau – Sanierung, WDVS, Fassade & Abbruch in Berlin',
  metaDescription:
    'Kiral Bau aus Berlin für Sanierung, WDVS, Putz- und Fassadenarbeiten, Klinkerriemchen, Abbruch und Innenausbau. Saubere Ausführung, klare Abläufe und verlässliche Termine.',
};

export type KiralService = {
  title: string;
  slug: string;
  short: string;
  detail: string;
  bullets: string[];
  idealFor: string;
};

export const kiralServices: KiralService[] = [
  {
    title: 'Sanierung & Modernisierung',
    slug: 'sanierung-modernisierung',
    short: 'Substanz sichern, Flächen erneuern und Objekte technisch wie optisch aufwerten.',
    detail:
      'Wir strukturieren Sanierungen so, dass Maßnahmen sauber aufeinander folgen. Dazu gehören die Vorbereitung von Untergründen, Abstimmungen mit Folgegewerken und eine Ausführung, die auf Bestand, Nutzung und Budget abgestimmt ist.',
    bullets: ['Bestandsprüfung und Maßnahmenplanung', 'Koordination mit Folgegewerken', 'Saubere Ausführung im laufenden Betrieb'],
    idealFor: 'Wohnhäuser, Gewerbeobjekte und Bestände mit Erneuerungsbedarf',
  },
  {
    title: 'WDVS & Dämmung',
    slug: 'wdvs-daemmung',
    short: 'Wärmeverluste senken, Fassaden neu aufbauen und Anschlüsse fachgerecht lösen.',
    detail:
      'Wärmedämmverbundsysteme müssen technisch sauber sitzen. Wir achten auf Untergrund, Sockel, Fensteranschlüsse und einen Aufbau, der langfristig robust bleibt und energetische Ziele unterstützt.',
    bullets: ['Dämmplatten, Armierung und Oberputz', 'Sockel- und Fensteranschlüsse', 'Fachgerechter Aufbau für langlebige Dämmung'],
    idealFor: 'Häuser und Wohnanlagen mit energetischem Sanierungsbedarf',
  },
  {
    title: 'Putz- & Fassadenarbeiten',
    slug: 'putz-fassadenarbeiten',
    short: 'Außenflächen reparieren, Risse schließen und Fassaden klar und hochwertig erneuern.',
    detail:
      'Vom Unterputz bis zum Oberputz übernehmen wir klassische Putzarbeiten und Fassadenreparaturen. Ziel ist ein ruhiges, belastbares Gesamtbild mit sauber ausgeführten Details.',
    bullets: ['Risssanierung und Flächenreparatur', 'Unter- und Oberputz', 'Anstrich und Fassadenpflege'],
    idealFor: 'Altbau, Mehrfamilienhäuser und Gewerbefassaden',
  },
  {
    title: 'Fassadengestaltung & Klinkerriemchen',
    slug: 'fassadengestaltung-klinkerriemchen',
    short: 'Fassaden optisch schärfen und Flächen mit Klinkerriemchen oder Gestaltungselementen veredeln.',
    detail:
      'Wenn die Fassade mehr Ausdruck braucht, setzen wir auf klare Gestaltung, passende Materialien und präzise Kanten. So entstehen Flächen, die technisch funktionieren und sichtbar besser wirken.',
    bullets: ['Klinkerriemchen und Designflächen', 'Gestaltung von Eingangs- und Sockelzonen', 'Harmonische Einbindung in die Bestandsfassade'],
    idealFor: 'Objekte mit Fokus auf Aufwertung und markanter Optik',
  },
  {
    title: 'Abbruch & Entkernung',
    slug: 'abbruch-entkernung',
    short: 'Selektive Rückbauarbeiten für Umbau, Sanierung und Neubeginn.',
    detail:
      'Wir führen Abbruch und Entkernung so aus, dass Folgearbeiten schnell starten können. Staub, Trennung der Materialien und die Vorbereitung der Flächen stehen dabei im Mittelpunkt.',
    bullets: ['Selektiver Rückbau', 'Saubere Baustellenorganisation', 'Vorbereitung für Sanierung und Ausbau'],
    idealFor: 'Umbauprojekte, gewerbliche Flächen und Vorbereitungen für Neubau',
  },
  {
    title: 'Innenausbau & Trockenbau',
    slug: 'innenausbau-trockenbau',
    short: 'Räume neu ordnen, Decken und Wände bauen und Flächen für die Nutzung vorbereiten.',
    detail:
      'Im Innenausbau sorgen wir für belastbare und saubere Übergänge zwischen Rückbau, Trockenbau und Oberfläche. Dabei stimmen wir den Ausbau auf Nutzung, Akustik und spätere Gewerke ab.',
    bullets: ['Trockenbauwände und Deckensysteme', 'Schallschutz und saubere Anschlüsse', 'Vorbereitung für Maler, Boden und Technik'],
    idealFor: 'Büros, Praxen, Wohnungen und Gewerbeeinheiten',
  },
];

export type KiralProject = {
  title: string;
  location: string;
  scope: string;
  result: string;
  imageHint: string;
};

export const kiralProjects: KiralProject[] = [
  {
    title: 'Mehrfamilienhaus Friedrichshain',
    location: 'Berlin',
    scope: 'WDVS, Putzsanierung und Fassadenüberarbeitung',
    result: 'Die Fassade wurde technisch erneuert und optisch geglättet, inklusive sauberer Anschlüsse und belastbarer Oberfläche.',
    imageHint: 'ruhige Wohnfassade mit sauberem Putzbild',
  },
  {
    title: 'Altbau Kreuzberg',
    location: 'Berlin',
    scope: 'Risssanierung, Fassadenreparatur und Anstrich',
    result: 'Ungleichmäßige Flächen wurden beruhigt und die Vorderseite des Gebäudes deutlich aufgewertet.',
    imageHint: 'Altbau mit sanierter Fassadenfront und hellen Putztönen',
  },
  {
    title: 'Gewerbeobjekt Charlottenburg',
    location: 'Berlin',
    scope: 'Entkernung und Innenausbau',
    result: 'Die Fläche wurde für den weiteren Ausbau vorbereitet, damit Folgegewerke direkt übernehmen konnten.',
    imageHint: 'leere Gewerbefläche mit sauberem Rückbau',
  },
  {
    title: 'Wohnanlage Spandau',
    location: 'Berlin',
    scope: 'Sockel, Klinkerriemchen und Fassadendetails',
    result: 'Die Wohnanlage bekam eine klarere, hochwertigere Straßenansicht mit robusten Materialübergängen.',
    imageHint: 'Wohnanlage mit strukturierten Fassadendetails',
  },
];

export type KiralFaqItem = {
  q: string;
  a: string;
};

export const kiralFaq: KiralFaqItem[] = [
  {
    q: 'Arbeitet Kiral Bau nur in Berlin?',
    a: 'Der Schwerpunkt liegt auf Berlin. Projekte im nahen Umland von Brandenburg sind nach Umfang und Terminlage ebenfalls möglich.',
  },
  {
    q: 'Welche Leistungen werden am häufigsten angefragt?',
    a: 'Besonders häufig sind Sanierung, WDVS, Putz- und Fassadenarbeiten, Abbruch sowie Innenausbau und Trockenbau.',
  },
  {
    q: 'Wie läuft eine Anfrage ab?',
    a: 'Sie schicken uns Eckdaten zum Objekt. Danach melden wir uns mit Rückfragen, einer Einschätzung oder einem Vorschlag für den nächsten Schritt.',
  },
  {
    q: 'Übernehmt ihr auch kleinere Maßnahmen?',
    a: 'Ja, auch Teilmaßnahmen wie Ausbesserungen, vorbereitende Arbeiten oder einzelne Fassadenabschnitte sind möglich.',
  },
  {
    q: 'Gibt es Angebote nach Besichtigung?',
    a: 'Ja. Bei passenden Projekten wird nach Prüfung und Besichtigung ein strukturiertes Angebot erstellt.',
  },
  {
    q: 'Arbeitet ihr auch mit laufendem Betrieb?',
    a: 'Wenn es das Projekt erlaubt, planen wir den Ablauf so, dass der Betrieb oder die Nutzung möglichst wenig gestört wird.',
  },
];

export const kiralAreas = [
  'Berlin-Mitte',
  'Charlottenburg-Wilmersdorf',
  'Friedrichshain-Kreuzberg',
  'Neukölln',
  'Spandau und Umland',
];

export function getKiralServiceBySlug(slug: string | undefined) {
  return kiralServices.find((service) => service.slug === slug);
}
