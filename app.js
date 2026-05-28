const SCALES = {
  adult: {
    title: "DIVA 2.0 adulte",
    periods: [
      { id: "current", label: "Âge adulte" },
      { id: "childhood", label: "Enfance" }
    ],
    threshold: "Repère courant: au moins 6 symptômes dans un domaine, avec retentissement et début ancien à discuter cliniquement.",
    sections: [
      {
        id: "attention",
        title: "Inattention",
        summaryKey: "attention",
        items: [
          ["A1", "Attention aux détails", "Erreurs d’étourderie, oublis d’éléments importants, travail peu précis."],
          ["A2", "Maintien de l’attention", "Difficulté à rester concentré pendant une tâche, une lecture, une conversation ou une réunion."],
          ["A3", "Écoute directe", "Semble ne pas écouter, perd le fil ou nécessite des répétitions."],
          ["A4", "Consignes et finalisation", "Commence mais termine difficilement, oublie les étapes ou change de tâche."],
          ["A5", "Organisation", "Difficulté à planifier, prioriser, ranger, respecter les délais."],
          ["A6", "Effort mental soutenu", "Évite ou reporte les tâches longues, administratives ou exigeantes mentalement."],
          ["A7", "Pertes d’objets", "Égarenments répétés d’affaires utiles au quotidien."],
          ["A8", "Distractibilité", "Se laisse détourner par des stimuli externes ou des pensées parasites."],
          ["A9", "Oublis quotidiens", "Rendez-vous, tâches, messages, obligations ou routines oubliés."]
        ]
      },
      {
        id: "hyper",
        title: "Hyperactivité / impulsivité",
        summaryKey: "hyper",
        items: [
          ["H1", "Agitation motrice", "Remue les mains ou les pieds, bouge sur son siège, manipule des objets."],
          ["H2", "Rester assis", "Se lève ou quitte sa place quand il est attendu de rester assis."],
          ["H3", "Sensation d’agitation", "Activité excessive, besoin de bouger, sentiment intérieur de tension ou d’impatience."],
          ["H4", "Activités calmes", "Difficulté à se détendre ou à pratiquer une activité calme."],
          ["H5", "Toujours en action", "Fonctionne comme poussé par un moteur, rythme difficile à ralentir."],
          ["H6", "Parle beaucoup", "Discours abondant, difficulté à doser la quantité de parole."],
          ["H7", "Réponses précipitées", "Répond avant la fin, coupe la question, agit avant d’avoir tout entendu."],
          ["H8", "Attendre son tour", "Impatience dans les files, groupes, conversations ou activités partagées."],
          ["H9", "Interrompt ou impose", "Interrompt, s’immisce, prend la place, finit les phrases ou les tâches d’autrui."]
        ]
      },
      {
        id: "impact",
        title: "Retentissement et contexte",
        summaryKey: "impact",
        responseMode: "single",
        items: [
          ["R1", "Études / formation", "Difficultés repérées dans le parcours scolaire, universitaire ou de formation."],
          ["R2", "Travail / organisation professionnelle", "Impact sur délais, priorités, réunions, erreurs, stabilité ou rendement."],
          ["R3", "Vie domestique", "Gestion administrative, rangement, finances, routines, tâches ménagères."],
          ["R4", "Relations", "Tensions familiales, amicales, conjugales ou sociales liées aux symptômes."],
          ["R5", "Conduite / prises de risque", "Impulsivité, accidents, conflits, dépenses, usages ou décisions précipitées."],
          ["R6", "Début ancien", "Éléments compatibles avec une présence de symptômes dans l’enfance."]
        ]
      }
    ]
  },
  young: {
    title: "Young DIVA-5",
    periods: [
      { id: "current", label: "Actuel" },
      { id: "before12", label: "Avant 12 ans" }
    ],
    threshold: "Repère DSM-5 enfant/adolescent: au moins 6 symptômes dans un domaine, plusieurs contextes et retentissement à apprécier.",
    sections: [
      {
        id: "attention",
        title: "Inattention",
        summaryKey: "attention",
        items: [
          ["A1", "Détails et fautes d’étourderie", "Erreurs, oublis, devoirs ou activités terminés trop vite."],
          ["A2", "Attention soutenue", "Difficulté à rester attentif en classe, jeu, devoirs ou échange."],
          ["A3", "Écoute", "Semble ailleurs quand on lui parle directement."],
          ["A4", "Consignes et tâches", "Ne suit pas les consignes jusqu’au bout ou ne termine pas les devoirs."],
          ["A5", "Organisation", "Matériel, cartable, devoirs, étapes ou temps difficiles à organiser."],
          ["A6", "Effort mental", "Évite ou repousse les devoirs, lectures ou tâches longues."],
          ["A7", "Pertes", "Perd matériel scolaire, vêtements, jouets, objets utiles."],
          ["A8", "Distractibilité", "Facilement distrait par le bruit, l’environnement ou ses pensées."],
          ["A9", "Oublis", "Oublie devoirs, affaires, consignes, activités ou messages."]
        ]
      },
      {
        id: "hyper",
        title: "Hyperactivité / impulsivité",
        summaryKey: "hyper",
        items: [
          ["H1", "Bouge beaucoup", "Remue, se tortille, manipule ou cherche à bouger."],
          ["H2", "Se lève", "Quitte sa place à l’école, à table ou dans les situations attendues."],
          ["H3", "Court / grimpe / agitation", "Activité motrice excessive ou sensation d’agitation selon l’âge."],
          ["H4", "Jeux calmes", "Difficulté à jouer ou participer calmement."],
          ["H5", "Toujours en mouvement", "Rythme intense, fatigue l’entourage, semble poussé par un moteur."],
          ["H6", "Parle trop", "Parole abondante ou difficile à interrompre."],
          ["H7", "Répond trop vite", "Répond avant la fin, complète, coupe les questions."],
          ["H8", "Attend son tour", "Difficulté à patienter dans les jeux, groupes, files ou conversations."],
          ["H9", "Interrompt", "S’immisce, prend les objets, impose sa présence ou interrompt les autres."]
        ]
      },
      {
        id: "contexts",
        title: "Contextes et retentissement",
        summaryKey: "impact",
        responseMode: "single",
        items: [
          ["C1", "Maison", "Retentissement familial, routines, devoirs, opposition secondaire ou conflits."],
          ["C2", "École", "Retentissement en classe, apprentissages, comportement, devoirs ou relations."],
          ["C3", "Pairs / loisirs", "Jeux, sport, activités, invitations, disputes ou intégration sociale."],
          ["C4", "Plusieurs informateurs", "Concordance ou discordance entre enfant, parents, enseignant, autres sources."],
          ["C5", "Début avant 12 ans", "Indices développementaux ou historiques compatibles."],
          ["C6", "Gêne significative", "Souffrance, limitation fonctionnelle ou adaptation importante de l’environnement."]
        ]
      }
    ]
  }
};

const GUIDANCE = {
  adult: {
    A1: {
      question: "Dans votre vie actuelle, vous arrive-t-il de faire des erreurs d’inattention ou de passer à côté de détails importants ? Était-ce déjà présent enfant ?",
      examples: ["erreurs dans les papiers, les mails ou les comptes", "relire plusieurs fois sans voir l’erreur", "travail rendu incomplet ou imprécis", "remarques répétées sur le manque de soin"]
    },
    A2: {
      question: "Avez-vous du mal à maintenir votre attention jusqu’au bout d’une tâche, d’une lecture, d’une réunion ou d’une conversation ?",
      examples: ["décrocher en réunion", "lire une page sans retenir", "abandonner les tâches longues", "avoir besoin de pauses très fréquentes"]
    },
    A3: {
      question: "Quand quelqu’un vous parle directement, vous dit-on que vous semblez ne pas écouter ou que vous êtes ailleurs ?",
      examples: ["faire répéter", "perdre le fil", "répondre à côté", "penser à autre chose pendant l’échange"]
    },
    A4: {
      question: "Vous arrive-t-il de ne pas aller au bout des consignes, démarches ou tâches commencées ?",
      examples: ["commencer plusieurs choses sans finir", "oublier une étape", "laisser des démarches administratives en attente", "ne pas terminer les projets malgré l’intention"]
    },
    A5: {
      question: "Comment vous organisez-vous au quotidien ? Est-ce difficile de planifier, prioriser, ranger ou respecter les délais ?",
      examples: ["retards répétés", "agenda peu fiable", "désordre envahissant", "difficulté à estimer le temps", "priorités changeantes"]
    },
    A6: {
      question: "Avez-vous tendance à éviter ou repousser les tâches qui demandent un effort mental prolongé ?",
      examples: ["paperasse", "lectures longues", "devis, factures ou impôts", "rapports", "formation ou révisions"]
    },
    A7: {
      question: "Perdez-vous souvent des objets nécessaires à votre quotidien ?",
      examples: ["clés, téléphone, portefeuille", "documents", "lunettes", "outils de travail", "objets égarés dans la maison"]
    },
    A8: {
      question: "Êtes-vous facilement distrait par ce qui se passe autour de vous ou par vos propres pensées ?",
      examples: ["bruits", "notifications", "personnes qui passent", "idées qui surgissent", "changer d’activité sans s’en rendre compte"]
    },
    A9: {
      question: "Vous arrive-t-il d’oublier des choses du quotidien, même importantes ?",
      examples: ["rendez-vous", "répondre à un message", "payer une facture", "faire une course", "prendre ou rapporter quelque chose"]
    },
    H1: {
      question: "Avez-vous souvent besoin de bouger, de manipuler quelque chose ou ressentez-vous une agitation physique ?",
      examples: ["remuer les jambes", "tapoter", "changer de position", "tripoter un objet", "difficulté à rester immobile"]
    },
    H2: {
      question: "Est-ce difficile pour vous de rester assis dans les situations où c’est attendu ?",
      examples: ["réunions", "repas", "cinéma", "salle d’attente", "se lever pour marcher sans vraie nécessité"]
    },
    H3: {
      question: "Ressentez-vous une agitation intérieure ou un besoin de faire quelque chose en permanence ?",
      examples: ["impatience corporelle", "tension interne", "sentiment d’être sous pression", "chercher une activité dès qu’il y a un temps vide"]
    },
    H4: {
      question: "Avez-vous du mal à vous détendre ou à pratiquer une activité calme sans vous sentir agité ?",
      examples: ["repos difficile", "vacances peu reposantes", "méditation impossible", "activité calme interrompue par autre chose"]
    },
    H5: {
      question: "Votre entourage vous décrit-il comme quelqu’un de toujours en action ou difficile à ralentir ?",
      examples: ["enchaîner les activités", "faire plusieurs choses à la fois", "rythme fatigant pour l’entourage", "se sentir poussé à agir"]
    },
    H6: {
      question: "Vous arrive-t-il de parler beaucoup ou d’avoir du mal à vous arrêter une fois lancé ?",
      examples: ["monopoliser l’échange", "digressions", "parler vite", "remarques de l’entourage", "difficulté à synthétiser"]
    },
    H7: {
      question: "Répondez-vous parfois trop vite, avant que la question soit terminée ou avant d’avoir tout entendu ?",
      examples: ["couper la fin des phrases", "répondre puis regretter", "envoyer trop vite un message", "décisions immédiates"]
    },
    H8: {
      question: "Est-ce difficile d’attendre votre tour ou de supporter l’attente ?",
      examples: ["files d’attente", "conversation de groupe", "jeux", "administratif", "impatience visible ou irritabilité"]
    },
    H9: {
      question: "Vous arrive-t-il d’interrompre les autres, de vous imposer dans une activité ou de finir les phrases ?",
      examples: ["couper la parole", "prendre une décision à la place d’autrui", "s’immiscer", "finir les phrases", "intervenir sans y être invité"]
    },
    R1: {
      question: "Quel impact ces difficultés ont-elles eu sur les études ou formations ?",
      examples: ["résultats irréguliers", "redoublement", "devoirs non rendus", "difficultés de révision", "potentiel jugé supérieur aux résultats"]
    },
    R2: {
      question: "Quel impact observez-vous dans le travail ou l’organisation professionnelle ?",
      examples: ["délais", "erreurs", "retards", "changements de poste", "épuisement compensatoire", "conflits autour de l’organisation"]
    },
    R3: {
      question: "Quel impact cela a-t-il dans la gestion de la maison, des papiers ou des routines ?",
      examples: ["désordre", "factures", "rendez-vous", "tâches domestiques", "charge mentale", "oublis familiaux"]
    },
    R4: {
      question: "Ces symptômes créent-ils des tensions dans les relations ?",
      examples: ["couper la parole", "oublis perçus comme un manque d’attention", "impulsivité verbale", "conflits de couple ou familiaux"]
    },
    R5: {
      question: "Y a-t-il des prises de risque ou décisions impulsives à explorer ?",
      examples: ["conduite", "dépenses", "addictions", "changements brusques", "messages envoyés sous impulsion"]
    },
    R6: {
      question: "Quels éléments indiquent que ces difficultés existaient déjà dans l’enfance ?",
      examples: ["bulletins scolaires", "remarques parentales", "agitation", "rêverie", "oublis", "désorganisation précoce"]
    }
  },
  young: {
    A1: {
      question: "Est-ce que l’enfant fait souvent des erreurs parce qu’il va trop vite, oublie des détails ou ne vérifie pas son travail ?",
      examples: ["erreurs d’étourderie dans le travail scolaire", "ne répond pas à des questions au recto ou au verso", "manque de soin reproché dans le travail", "ne vérifie pas ses réponses dans les devoirs", "doit travailler lentement pour éviter les erreurs", "travail peu précis", "lit les consignes trop vite ou les survole", "a besoin de plus de temps pour aller au bout", "fait trop d’erreurs parce qu’il travaille trop vite", "autre élément rapporté"]
    },
    A2: {
      question: "A-t-il du mal à rester attentif pendant les devoirs, la classe, une histoire, un jeu ou une conversation ?",
      examples: ["a du mal à maintenir longtemps son attention", "facilement distrait par l’environnement ou ses pensées", "a besoin d’une structure pour résister à la distraction", "a du mal à rester concentré pendant les cours ou les devoirs", "trouve difficile de regarder un film ou une activité jusqu’à la fin", "s’ennuie facilement", "pose des questions sur des sujets déjà discutés", "autre élément rapporté"]
    },
    A3: {
      question: "Quand on lui parle directement, semble-t-il ne pas écouter ou être dans ses pensées ?",
      examples: ["ne sait pas ce que les parents ou enseignants viennent de dire", "est décrit comme rêveur ou préoccupé", "on lui dit que ses pensées sont ailleurs", "n’écoute que s’il y a contact visuel ou voix insistante", "il faut souvent l’appeler plusieurs fois ou reposer la question", "a du mal à se concentrer pendant une discussion", "ne se rappelle pas le sujet d’une conversation", "change souvent de sujet", "autre élément rapporté"]
    },
    A4: {
      question: "Suit-il les consignes jusqu’au bout et termine-t-il ce qui est demandé ?",
      examples: ["a du mal à suivre les consignes", "difficulté avec les instructions en plusieurs étapes", "a du mal à aller au bout une fois la nouveauté passée", "a besoin de beaucoup de structure pour terminer", "fait les choses de manière confuse sans aller au bout", "commence puis se déconcentre très vite", "a besoin d’une échéance précise pour terminer", "du mal à terminer les tâches administratives ou scolaires", "autre élément rapporté"]
    },
    A5: {
      question: "A-t-il du mal à organiser son matériel, ses devoirs, son cartable ou les étapes d’une tâche ?",
      examples: ["du mal à planifier les activités de la vie quotidienne", "du mal avec les tâches séquentielles", "objets, biens ou espace difficiles à garder en ordre", "difficulté à organiser les loisirs ou le jeu", "n’arrive pas à respecter les dates limites", "ne peut pas utiliser systématiquement agenda ou cahier de textes", "besoin de routines strictes pour ne pas se désorganiser", "faible sens du temps ou souvent en retard", "besoin que d’autres structurent les choses", "autre élément rapporté"]
    },
    A6: {
      question: "Évite-t-il ou repousse-t-il les tâches qui demandent un effort mental, comme les devoirs ou la lecture ?",
      examples: ["fait d’abord les choses faciles ou amusantes", "reporte les tâches ennuyeuses ou difficiles", "évite le travail monotone", "n’aime pas lire à cause de l’effort mental", "évite les tâches demandant de la concentration", "déteste les matières scolaires demandant beaucoup d’effort", "a besoin d’un adulte à côté pour s’y mettre", "autre élément rapporté"]
    },
    A7: {
      question: "Perd-il souvent ses affaires ?",
      examples: ["perd papiers, devoirs, notes ou listes", "parents ou enseignants lui reprochent de perdre ses affaires", "perd beaucoup de temps à chercher ses affaires", "panique si d’autres déplacent ses affaires", "pose des objets au mauvais emplacement", "perd vêtements, lunettes, trousse ou matériel", "autre élément rapporté"]
    },
    A8: {
      question: "Est-il facilement distrait par le bruit, les autres enfants, ce qu’il voit ou ses propres idées ?",
      examples: ["du mal à ignorer les stimuli externes", "en classe, regarde souvent au dehors", "du mal à reprendre le fil après interruption", "facilement distrait par les discussions des autres", "du mal à filtrer ou sélectionner les informations", "part vers un autre jeu ou une autre idée", "autre élément rapporté"]
    },
    A9: {
      question: "Oublie-t-il souvent les choses du quotidien ?",
      examples: ["oublie rendez-vous, instructions ou obligations", "oublie clés, agenda ou matériel", "a besoin de nombreux rappels", "s’arrête à mi-chemin en oubliant ce qu’il devait faire", "utilise des listes de manière rigide pour ne rien oublier", "oublie de tenir à jour ou regarder son agenda", "oublie tâches ménagères, courses ou affaires à rapporter", "autre élément rapporté"]
    },
    H1: {
      question: "Bouge-t-il souvent les mains, les pieds, se tortille-t-il ou manipule-t-il des objets ?",
      examples: ["du mal à rester assis immobile", "remue les jambes", "tapote avec un crayon ou joue avec quelque chose", "tripote les cheveux ou ronge les ongles", "incapable de rester assis correctement", "contrôle sa nervosité au prix d’une tension interne", "autre élément rapporté"]
    },
    H2: {
      question: "Se lève-t-il dans les situations où il devrait rester assis ?",
      examples: ["trouve très difficile de rester assis à l’école ou pendant une activité", "évite cours, conférences ou situations assises", "préfère marcher plutôt que rester assis", "ne reste jamais assis longtemps et se déplace", "tension liée à la difficulté de rester immobile", "trouve des excuses pour se déplacer", "autre élément rapporté"]
    },
    H3: {
      question: "Court-il, grimpe-t-il ou bouge-t-il de façon excessive par rapport au contexte ou à son âge ?",
      examples: ["toujours à courir", "grimpe sur les meubles ou saute sur le canapé", "grimpe dans les arbres ou sur les structures", "se sent nerveux ou agité à l’intérieur", "sentiment constant d’avoir quelque chose à faire", "trouve difficile de se détendre", "autre élément rapporté"]
    },
    H4: {
      question: "A-t-il du mal à jouer ou participer calmement ?",
      examples: ["parle fort dans les jeux ou en classe", "incapable de suivre silencieusement une émission", "on lui demande de se taire ou de se calmer", "parle pendant des activités où il faudrait se taire", "devient rapidement trop confiant en public", "parle fort dans plusieurs situations", "du mal à faire des activités en silence", "du mal à parler à voix basse", "autre élément rapporté"]
    },
    H5: {
      question: "A-t-on l’impression qu’il est toujours en mouvement ou difficile à arrêter ?",
      examples: ["excessivement actif à l’école ou à la maison", "toujours occupé à faire quelque chose", "inconfortable quand il doit rester calmement assis", "trop plein d’énergie", "agité ou difficile à suivre dans sa cadence", "dépasse ses propres limites", "difficile de laisser aller les choses, va trop loin", "autre élément rapporté"]
    },
    H6: {
      question: "Parle-t-il beaucoup ou plus que les autres enfants de son âge ?",
      examples: ["parle tellement que les autres trouvent cela fatigant", "connu comme moulin à paroles", "parents ou enseignants demandent souvent de se taire", "appréciations ou punitions liées au bavardage", "trouve difficile de s’arrêter de parler", "tendance à parler trop", "empêche les autres de travailler en parlant", "ne laisse pas aux autres la possibilité d’intervenir", "a besoin de beaucoup de mots pour dire quelque chose", "autre élément rapporté"]
    },
    H7: {
      question: "Répond-il avant la fin des questions ou agit-il avant d’avoir entendu toute la consigne ?",
      examples: ["parle ou répond sans réfléchir", "veut être le premier à répondre en classe", "lâche une réponse même si elle est fausse", "interrompt ou répond avant la fin des phrases", "termine les phrases des autres", "donne l’impression de manquer de tact", "commence avant le signal", "autre élément rapporté"]
    },
    H8: {
      question: "A-t-il du mal à attendre son tour ?",
      examples: ["difficile d’attendre son tour dans les activités de groupe", "toujours le premier à parler ou agir", "traverse la route sans regarder", "du mal à attendre dans une file ou coupe la file", "impatient", "débute ou termine rapidement des relations par impulsivité", "frustration rapide", "autre élément rapporté"]
    },
    H9: {
      question: "Interrompt-il les autres ou s’impose-t-il dans leurs jeux, conversations ou activités ?",
      examples: ["s’immisce dans les jeux des autres", "interrompt les conversations", "réagit sur tout", "incapable d’attendre", "rapide à déranger les autres", "perturbe les activités des autres sans qu’on le lui demande", "du mal à respecter l’espace des autres", "a une opinion sur tout et la donne immédiatement", "autre élément rapporté"]
    },
    C1: {
      question: "À la maison, quelles situations sont les plus gênées par ces difficultés ?",
      examples: ["devoirs", "repas", "routine du matin", "coucher", "rangement", "conflits familiaux"]
    },
    C2: {
      question: "À l’école, qu’est-ce qui est rapporté par l’enseignant ou observé dans les apprentissages ?",
      examples: ["attention en classe", "bavardage", "devoirs", "résultats irréguliers", "punition", "besoin d’adaptations"]
    },
    C3: {
      question: "Avec les autres enfants ou en loisirs, y a-t-il un retentissement ?",
      examples: ["disputes", "rejet", "impulsivité dans les jeux", "sport", "anniversaires", "activités extra-scolaires"]
    },
    C4: {
      question: "Les différents informateurs décrivent-ils la même chose ou des situations différentes ?",
      examples: ["parents", "enseignant", "AESH", "orthophoniste", "éducateur", "enfant lui-même"]
    },
    C5: {
      question: "Depuis quand ces difficultés sont-elles présentes ? Y avait-il déjà des signes avant 12 ans ?",
      examples: ["maternelle", "début primaire", "bulletins", "remarques familiales", "agitation ou rêverie précoce"]
    },
    C6: {
      question: "Ces difficultés entraînent-elles une gêne réelle ou des adaptations importantes autour de lui ?",
      examples: ["surveillance permanente", "temps de devoirs très long", "conflits", "perte d’autonomie", "fatigue parentale ou scolaire"]
    }
  }
};

const state = {
  scale: "adult",
  meta: {},
  notes: "",
  evidence: {},
  responses: {}
};

const els = {
  scale: document.querySelector("#scale-select"),
  title: document.querySelector("#scale-title"),
  nav: document.querySelector("#section-nav"),
  root: document.querySelector("#form-root"),
  search: document.querySelector("#search"),
  print: document.querySelector("#print-btn"),
  reset: document.querySelector("#reset-btn"),
  patient: document.querySelector("#patient-name"),
  birthdate: document.querySelector("#patient-birthdate"),
  profession: document.querySelector("#patient-profession"),
  date: document.querySelector("#assessment-date"),
  clinician: document.querySelector("#clinician-name"),
  informant: document.querySelector("#informant"),
  saveFile: document.querySelector("#save-file-btn"),
  downloadSave: document.querySelector("#download-save-btn"),
  importSave: document.querySelector("#import-save-btn"),
  importInput: document.querySelector("#import-save-input"),
  saveStatus: document.querySelector("#save-status"),
  notes: document.querySelector("#global-notes"),
  attention: document.querySelector("#attention-score"),
  hyper: document.querySelector("#hyper-score"),
  impact: document.querySelector("#impact-score"),
  status: document.querySelector("#status-label"),
  detail: document.querySelector("#status-detail")
};

const STORAGE_KEY = "diva-cotation-v1";
const HANDLE_STORE = "diva-save-handle";
let diskFileHandle = null;
let diskSaveTimer = null;
let serverSaveTimer = null;
let latestSummary = { attention: 0, hyper: 0, impact: 0 };

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      Object.assign(state, JSON.parse(saved));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  if (!state.meta.date) state.meta.date = new Date().toISOString().slice(0, 10);
  if (!state.evidence) state.evidence = {};
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleDiskSave();
  scheduleServerSave();
}

function responseName(itemId, periodId) {
  return `${state.scale}:${itemId}:${periodId}`;
}

function getResponse(itemId, periodId) {
  return state.responses[responseName(itemId, periodId)] || { value: "", comment: "" };
}

function evidenceName(itemId, index, periodId) {
  return `${state.scale}:${itemId}:${index}:${periodId}`;
}

function getEvidence(itemId, index, periodId) {
  const scoped = state.evidence[evidenceName(itemId, index, periodId)];
  const legacy = state.evidence[`${state.scale}:${itemId}:${index}`];
  return scoped || (periodId === "global" ? legacy : null) || { checked: false, note: "" };
}

function setEvidence(itemId, index, periodId, patch) {
  const key = evidenceName(itemId, index, periodId);
  state.evidence[key] = { ...state.evidence[key], ...patch };
  saveState();
}

function setResponse(itemId, periodId, patch) {
  const key = responseName(itemId, periodId);
  state.responses[key] = { ...state.responses[key], ...patch };
  saveState();
  updateSummary();
}

function renderNav(scale) {
  els.nav.innerHTML = scale.sections
    .map(section => `<a href="#${section.id}" data-section="${section.id}">${section.title}</a>`)
    .join("");
}

function renderForm() {
  const scale = SCALES[state.scale];
  els.scale.value = state.scale;
  els.title.textContent = scale.title;
  renderNav(scale);

  els.root.innerHTML = scale.sections.map(section => {
    const items = section.items.map(([code, title, description]) => {
      const guidance = getGuidance(code);
      const rows = (section.responseMode === "single" ? [{ id: "global", label: "Cotation" }] : scale.periods)
        .map(period => renderResponseRow(code, period));
      return `
        <article class="item-card" data-filter="${[code, title, description, section.title, guidance?.question, ...(guidance?.examples || [])].join(" ").toLowerCase()}">
          <div class="item-title">
            <span class="item-code">${code}</span>
            <div>
              <h4>${title}</h4>
              <p>${description}</p>
              ${guidance ? renderGuidance(code, guidance, section.responseMode === "single" ? [{ id: "global", label: "Éléments" }] : scale.periods) : ""}
            </div>
          </div>
          <div class="response-grid">${rows.join("")}</div>
        </article>
      `;
    }).join("");

    return `
      <section class="criterion-section" id="${section.id}">
        <div class="section-header">
          <div>
            <h3>${section.title}</h3>
            <p>${section.items.length} items à coter</p>
          </div>
        </div>
        ${items}
      </section>
    `;
  }).join("");

  bindDynamicFields();
  filterItems();
  updateSummary();
}

function renderResponseRow(itemId, period) {
  const response = getResponse(itemId, period.id);
  const name = responseName(itemId, period.id);
  return `
    <div class="response-row">
      <div class="response-label">${period.label}</div>
      <div class="segmented" role="radiogroup" aria-label="${itemId} ${period.label}">
        ${["yes", "no", "na"].map(value => `
          <label>
            <input type="radio" name="${name}" value="${value}" data-item="${itemId}" data-period="${period.id}" ${response.value === value ? "checked" : ""}>
            <span>${value === "yes" ? "Oui" : value === "no" ? "Non" : "N/A"}</span>
          </label>
        `).join("")}
      </div>
      <textarea class="comment-field" rows="1" data-comment="${name}" data-item="${itemId}" data-period="${period.id}" placeholder="Commentaire / verbatim">${escapeHtml(response.comment || "")}</textarea>
    </div>
  `;
}

function getGuidance(code) {
  return GUIDANCE[state.scale]?.[code] || GUIDANCE.adult[code] || null;
}

function renderGuidance(itemId, guidance, periods) {
  const examples = guidance.examples.some(example => example.toLowerCase().includes("autre"))
    ? guidance.examples
    : [...guidance.examples, "autre élément rapporté"];
  return `
    <details class="guidance" open>
      <summary>Question à poser et éléments à cocher</summary>
      <div class="guidance-body">
        <p><strong>Question.</strong> ${escapeHtml(guidance.question)}</p>
        <div class="evidence-head" style="--period-count: ${periods.length}">
          <span>Élément</span>
          ${periods.map(period => `<span>${escapeHtml(period.label)}</span>`).join("")}
        </div>
        <div class="evidence-list">
          ${examples.map((example, index) => renderEvidenceRow(itemId, example, index, periods)).join("")}
        </div>
      </div>
    </details>
  `;
}

function renderEvidenceRow(itemId, example, index, periods) {
  return `
    <div class="evidence-row" style="--period-count: ${periods.length}">
      <span class="evidence-label">${escapeHtml(example)}</span>
      ${periods.map(period => {
        const evidence = getEvidence(itemId, index, period.id);
        return `
          <div class="evidence-period">
            <label class="mini-check">
              <input type="checkbox" data-evidence-item="${itemId}" data-evidence-index="${index}" data-evidence-period="${period.id}" ${evidence.checked ? "checked" : ""}>
              <span>Coché</span>
            </label>
            <textarea rows="1" data-evidence-note="${itemId}:${index}:${period.id}" data-evidence-item="${itemId}" data-evidence-index="${index}" data-evidence-period="${period.id}" placeholder="Élément rapporté">${escapeHtml(evidence.note || "")}</textarea>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function bindDynamicFields() {
  els.root.querySelectorAll("input[type='radio']").forEach(input => {
    input.addEventListener("change", event => {
      setResponse(event.target.dataset.item, event.target.dataset.period, { value: event.target.value });
    });
  });

  els.root.querySelectorAll("[data-comment]").forEach(area => {
    area.addEventListener("input", event => {
      setResponse(event.target.dataset.item, event.target.dataset.period, { comment: event.target.value });
      autoGrow(event.target);
    });
    autoGrow(area);
  });

  els.root.querySelectorAll("[data-evidence-item]").forEach(input => {
    if (input.matches("input[type='checkbox']")) {
      input.addEventListener("change", event => {
        setEvidence(event.target.dataset.evidenceItem, event.target.dataset.evidenceIndex, event.target.dataset.evidencePeriod, { checked: event.target.checked });
      });
    }
  });

  els.root.querySelectorAll("[data-evidence-note]").forEach(area => {
    area.addEventListener("input", event => {
      setEvidence(event.target.dataset.evidenceItem, event.target.dataset.evidenceIndex, event.target.dataset.evidencePeriod, { note: event.target.value });
      autoGrow(event.target);
    });
    autoGrow(area);
  });
}

function bindStaticFields() {
  const metaBindings = [
    [els.patient, "patient"],
    [els.birthdate, "birthdate"],
    [els.profession, "profession"],
    [els.date, "date"],
    [els.clinician, "clinician"],
    [els.informant, "informant"]
  ];

  metaBindings.forEach(([el, key]) => {
    el.value = state.meta[key] || "";
    el.addEventListener("input", () => {
      state.meta[key] = el.value;
      saveState();
    });
  });

  els.notes.value = state.notes || "";
  els.notes.addEventListener("input", () => {
    state.notes = els.notes.value;
    saveState();
    autoGrow(els.notes);
  });

  els.scale.addEventListener("change", () => {
    state.scale = els.scale.value;
    saveState();
    renderForm();
  });

  els.search.addEventListener("input", filterItems);
  els.print.addEventListener("click", () => window.print());
  els.reset.addEventListener("click", resetCurrentScale);
  els.saveFile.addEventListener("click", chooseSaveFile);
  els.downloadSave.addEventListener("click", downloadBackup);
  els.importSave.addEventListener("click", () => els.importInput.click());
  els.importInput.addEventListener("change", importBackup);
  autoGrow(els.notes);
}

function resetCurrentScale() {
  const prefix = `${state.scale}:`;
  Object.keys(state.responses).forEach(key => {
    if (key.startsWith(prefix)) delete state.responses[key];
  });
  Object.keys(state.evidence).forEach(key => {
    if (key.startsWith(prefix)) delete state.evidence[key];
  });
  state.notes = "";
  els.notes.value = "";
  saveState();
  renderForm();
}

function countYes(section, periodIds) {
  return section.items.reduce((total, [code]) => {
    const hasYes = periodIds.some(periodId => getResponse(code, periodId).value === "yes");
    return total + (hasYes ? 1 : 0);
  }, 0);
}

function updateSummary() {
  const scale = SCALES[state.scale];
  const sections = Object.fromEntries(scale.sections.map(section => [section.summaryKey, section]));
  const symptomPeriods = scale.periods.map(period => period.id);
  const attention = sections.attention ? countYes(sections.attention, symptomPeriods) : 0;
  const hyper = sections.hyper ? countYes(sections.hyper, symptomPeriods) : 0;
  const impact = sections.impact ? countYes(sections.impact, ["global"]) : 0;
  latestSummary = { attention, hyper, impact };

  els.attention.textContent = attention;
  els.hyper.textContent = hyper;
  els.impact.textContent = impact;

  const meetsSymptomMarker = attention >= 6 || hyper >= 6;
  if (meetsSymptomMarker && impact > 0) {
    els.status.textContent = "Repère atteint";
    els.detail.textContent = scale.threshold;
  } else if (attention || hyper || impact) {
    els.status.textContent = "À interpréter";
    els.detail.textContent = scale.threshold;
  } else {
    els.status.textContent = "À compléter";
    els.detail.textContent = "La synthèse se met à jour pendant la saisie.";
  }
}

function filterItems() {
  const query = els.search.value.trim().toLowerCase();
  els.root.querySelectorAll(".item-card").forEach(card => {
    card.classList.toggle("hidden", query && !card.dataset.filter.includes(query));
  });
}

function autoGrow(area) {
  area.style.height = "auto";
  area.style.height = `${Math.max(area.scrollHeight, 42)}px`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function backupPayload() {
  return {
    app: "Cotation DIVA",
    version: 2,
    savedAt: new Date().toISOString(),
    summary: latestSummary,
    data: state
  };
}

function backupText() {
  return JSON.stringify(backupPayload(), null, 2);
}

function backupFilename() {
  const patient = sanitizePart(state.meta.patient || "patient");
  const date = sanitizePart(state.meta.date || new Date().toISOString().slice(0, 10));
  const scale = sanitizePart(SCALES[state.scale].title);
  return `${date}_${patient}_${scale}.json`;
}

function sanitizePart(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "dossier";
}

function downloadBackup() {
  const blob = new Blob([backupText()], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = backupFilename();
  link.click();
  URL.revokeObjectURL(url);
  setSaveStatus("Sauvegarde téléchargée.");
}

async function chooseSaveFile() {
  if (!window.showSaveFilePicker) {
    setSaveStatus("Sauvegarde auto non disponible ici. Utilisez Télécharger.");
    downloadBackup();
    return;
  }

  try {
    diskFileHandle = await window.showSaveFilePicker({
      suggestedName: backupFilename(),
      types: [
        {
          description: "Sauvegarde DIVA",
          accept: { "application/json": [".json"] }
        }
      ]
    });
    await rememberFileHandle(diskFileHandle);
    await writeDiskBackup();
    setSaveStatus("Sauvegarde automatique active.");
  } catch (error) {
    if (error.name !== "AbortError") {
      setSaveStatus("Sauvegarde auto impossible. Téléchargement disponible.");
    }
  }
}

function scheduleDiskSave() {
  if (!diskFileHandle) return;
  clearTimeout(diskSaveTimer);
  diskSaveTimer = setTimeout(() => {
    writeDiskBackup();
  }, 600);
}

function scheduleServerSave() {
  clearTimeout(serverSaveTimer);
  serverSaveTimer = setTimeout(() => {
    writeServerBackup();
  }, 700);
}

async function writeServerBackup() {
  try {
    const response = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: backupText()
    });

    if (!response.ok) return;
    const result = await response.json();
    setSaveStatus(`Sauvegardé dans sauvegardes/${result.path}.`);
  } catch {
    if (!diskFileHandle) {
      setSaveStatus("Sauvegarde navigateur active. Utilisez Télécharger pour un fichier.");
    }
  }
}

async function writeDiskBackup() {
  if (!diskFileHandle) return;
  try {
    const permission = await verifyWritePermission(diskFileHandle);
    if (!permission) {
      setSaveStatus("Cliquez sur Choisir le fichier pour réactiver la sauvegarde.");
      return;
    }

    const writable = await diskFileHandle.createWritable();
    await writable.write(backupText());
    await writable.close();
    setSaveStatus(`Sauvegardé sur l’ordinateur à ${new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}.`);
  } catch {
    setSaveStatus("Sauvegarde ordinateur interrompue. Téléchargement disponible.");
  }
}

async function verifyWritePermission(handle) {
  const options = { mode: "readwrite" };
  if ((await handle.queryPermission(options)) === "granted") return true;
  if ((await handle.requestPermission(options)) === "granted") return true;
  return false;
}

async function importBackup(event) {
  const [file] = event.target.files;
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());
    const nextState = imported.data || imported;
    if (!nextState || !nextState.responses || !nextState.meta) throw new Error("Invalid backup");

    state.scale = nextState.scale || "adult";
    state.meta = nextState.meta || {};
    state.notes = nextState.notes || "";
    state.evidence = nextState.evidence || {};
    state.responses = nextState.responses || {};
    saveState();
    bindMetaValues();
    renderForm();
    setSaveStatus("Sauvegarde importée.");
  } catch {
    setSaveStatus("Ce fichier ne ressemble pas à une sauvegarde DIVA.");
  } finally {
    event.target.value = "";
  }
}

function bindMetaValues() {
  els.patient.value = state.meta.patient || "";
  els.birthdate.value = state.meta.birthdate || "";
  els.profession.value = state.meta.profession || "";
  els.date.value = state.meta.date || "";
  els.clinician.value = state.meta.clinician || "";
  els.informant.value = state.meta.informant || "";
  els.notes.value = state.notes || "";
  autoGrow(els.notes);
}

function setSaveStatus(message) {
  els.saveStatus.textContent = message;
}

function openHandleDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(HANDLE_STORE, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("handles");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function rememberFileHandle(handle) {
  const db = await openHandleDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("handles", "readwrite");
    tx.objectStore("handles").put(handle, "current");
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function restoreFileHandle() {
  if (!("indexedDB" in window)) return;

  try {
    const db = await openHandleDb();
    diskFileHandle = await new Promise((resolve, reject) => {
      const tx = db.transaction("handles", "readonly");
      const request = tx.objectStore("handles").get("current");
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    db.close();
    if (diskFileHandle) {
      setSaveStatus("Sauvegarde auto prête si l’autorisation est encore active.");
      scheduleDiskSave();
    }
  } catch {
    diskFileHandle = null;
  }
}

async function init() {
  loadState();
  bindStaticFields();
  bindMetaValues();
  renderForm();
  await restoreFileHandle();
}

init();
