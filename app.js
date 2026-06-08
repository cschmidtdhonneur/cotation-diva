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
    title: "Young DIVA-5 enfant / adolescent",
    periods: [
      { id: "current", label: "Actuel" },
      { id: "before12", label: "Avant 12 ans" }
    ],
    threshold: "Repère DSM-5 enfant/adolescent: au moins 6 symptômes dans un domaine, plusieurs contextes et retentissement à apprécier.",
    sections: [
      {
        id: "attention",
        title: "Inattention enfant / adolescent",
        summaryKey: "attention",
        items: [
          ["A1", "Attention aux détails dans le travail scolaire", "Erreurs d’étourderie, consignes lues trop vite, devoirs peu précis ou incomplets."],
          ["A2", "Maintien de l’attention en classe, devoirs ou jeu", "Difficulté à rester attentif pendant les cours, les devoirs, une activité ou une conversation."],
          ["A3", "Écoute quand on lui parle directement", "Semble ailleurs, rêveur ou préoccupé, nécessite des répétitions ou un contact visuel."],
          ["A4", "Consignes, devoirs et tâches demandées", "Suit difficilement les consignes jusqu’au bout ou ne termine pas les devoirs et corvées."],
          ["A5", "Organisation du matériel et du temps", "Cartable, chambre, documents, agenda, devoirs ou étapes d’une tâche difficiles à organiser."],
          ["A6", "Effort mental scolaire soutenu", "Évite ou repousse les devoirs, lectures ou tâches demandant une concentration prolongée."],
          ["A7", "Pertes d’affaires", "Perd matériel scolaire, papiers, vêtements, jouets ou objets nécessaires."],
          ["A8", "Distractibilité en classe ou au quotidien", "Facilement distrait par les bruits, les discussions, l’environnement ou ses propres idées."],
          ["A9", "Oublis dans les activités quotidiennes", "Oublie devoirs, affaires, consignes, rendez-vous, messages ou tâches demandées."]
        ]
      },
      {
        id: "hyper",
        title: "Hyperactivité / impulsivité enfant / adolescent",
        summaryKey: "hyper",
        items: [
          ["H1", "Agitation motrice observable", "Remue mains ou pieds, se tortille, manipule des objets ou bouge beaucoup sur sa chaise."],
          ["H2", "Se lève quand il devrait rester assis", "Quitte sa place en classe, à table ou dans les situations où il est attendu de rester assis."],
          ["H3", "Court, grimpe ou se sent agité", "Activité motrice excessive, grimpe, court, saute ou décrit une agitation intérieure selon l’âge."],
          ["H4", "Jeux et activités calmes", "Difficulté à jouer, participer ou se détendre calmement."],
          ["H5", "Toujours en mouvement", "Semble toujours actif, difficile à ralentir, fatigue l’entourage ou dépasse ses propres limites."],
          ["H6", "Parole excessive", "Parle beaucoup, bavarde, monopolise ou a du mal à s’arrêter."],
          ["H7", "Réponses précipitées", "Répond avant la fin des questions, coupe les phrases ou agit avant la consigne complète."],
          ["H8", "Attente du tour", "Difficulté à attendre dans les jeux, en groupe, en classe, dans une file ou une conversation."],
          ["H9", "Interruption ou intrusion", "Interrompt les autres, s’immisce dans les jeux, impose sa présence ou utilise les affaires d’autrui."]
        ]
      },
      {
        id: "contexts",
        title: "Retentissement enfant / adolescent",
        summaryKey: "impact",
        responseMode: "single",
        items: [
          ["C1", "Travail scolaire / études", "Retentissement sur les apprentissages, devoirs, résultats, concentration ou parcours scolaire."],
          ["C2", "Relations familiales", "Conflits, tensions, besoin de structuration parentale ou retentissement dans la vie familiale."],
          ["C3", "Socialisation", "Relations avec les pairs, intégration, disputes, moqueries, communication ou estime sociale."],
          ["C4", "Temps libre / loisirs", "Retentissement dans les jeux, sports, loisirs, détente, prises de risque ou activités extrascolaires."],
          ["C5", "Confiance en soi / image de soi", "Image de soi, peur de l’échec, découragement, retentissement émotionnel lié aux difficultés."],
          ["C6", "Plusieurs environnements", "Gêne retrouvée dans au moins deux contextes ou rapportée par plusieurs sources."]
        ]
      }
    ]
  }
};

const GUIDANCE = {
  adult: {
    A1: {
      question: "Dans votre vie actuelle, vous arrive-t-il de faire des erreurs d’inattention ou de passer à côté de détails importants ? Était-ce déjà présent enfant ?",
      examples: ["erreurs d’étourderie dans le travail, les papiers ou les comptes", "oublie des détails importants", "ne lit pas ou survole les consignes", "travail rendu incomplet ou imprécis", "relit plusieurs fois sans voir l’erreur", "doit travailler lentement pour éviter les erreurs", "fait des erreurs parce qu’il va trop vite", "remarques répétées sur le manque de soin", "a besoin de plus de temps pour finir correctement", "autre élément rapporté"]
    },
    A2: {
      question: "Avez-vous du mal à maintenir votre attention jusqu’au bout d’une tâche, d’une lecture, d’une réunion ou d’une conversation ?",
      examples: ["difficulté à maintenir longtemps son attention", "décroche en réunion ou en formation", "lit une page sans retenir", "perd le fil d’une conversation", "a du mal à regarder un film ou une émission jusqu’au bout", "abandonne les tâches longues", "s’ennuie rapidement", "a besoin d’une structure pour rester concentré", "a besoin de pauses très fréquentes", "pose des questions sur des sujets déjà abordés", "autre élément rapporté"]
    },
    A3: {
      question: "Quand quelqu’un vous parle directement, vous dit-on que vous semblez ne pas écouter ou que vous êtes ailleurs ?",
      examples: ["semble ne pas écouter quand on lui parle directement", "fait répéter", "perd le fil", "répond à côté", "pense à autre chose pendant l’échange", "ne retient pas ce qui vient d’être dit", "a besoin d’un contact visuel ou d’une relance", "change souvent de sujet", "est décrit comme rêveur ou préoccupé", "autre élément rapporté"]
    },
    A4: {
      question: "Vous arrive-t-il de ne pas aller au bout des consignes, démarches ou tâches commencées ?",
      examples: ["difficulté à suivre des consignes en plusieurs étapes", "commence plusieurs choses sans finir", "oublie une étape", "commence puis se déconcentre rapidement", "fait les choses de manière confuse", "laisse des démarches administratives en attente", "ne termine pas les projets malgré l’intention", "a besoin d’une échéance précise pour finir", "a besoin d’aide ou de structure pour aller au bout", "autre élément rapporté"]
    },
    A5: {
      question: "Comment vous organisez-vous au quotidien ? Est-ce difficile de planifier, prioriser, ranger ou respecter les délais ?",
      examples: ["difficulté à planifier les activités quotidiennes", "difficulté avec les tâches séquentielles", "priorités changeantes", "désordre envahissant", "objets, papiers ou espace difficiles à garder en ordre", "agenda peu fiable ou non consulté", "retards répétés", "difficulté à estimer le temps", "dates limites non respectées", "besoin de routines strictes", "besoin que d’autres structurent les choses", "autre élément rapporté"]
    },
    A6: {
      question: "Avez-vous tendance à éviter ou repousser les tâches qui demandent un effort mental prolongé ?",
      examples: ["évite les tâches qui demandent une concentration soutenue", "repousse les tâches ennuyeuses ou difficiles", "fait d’abord les choses faciles ou agréables", "paperasse administrative", "devis, factures ou impôts", "rapports, dossiers ou comptes rendus", "lectures longues", "formation ou révisions", "travail monotone difficile à commencer", "a besoin de pression ou d’un délai proche pour s’y mettre", "autre élément rapporté"]
    },
    A7: {
      question: "Perdez-vous souvent des objets nécessaires à votre quotidien ?",
      examples: ["perd clés, téléphone ou portefeuille", "perd papiers, courriers ou documents", "perd lunettes, badge, carte ou moyens de paiement", "perd outils de travail ou matériel utile", "égare des objets dans la maison", "pose les objets au mauvais endroit", "passe beaucoup de temps à chercher ses affaires", "panique ou s’énerve quand les objets sont déplacés", "a besoin d’un emplacement fixe pour tout", "autre élément rapporté"]
    },
    A8: {
      question: "Êtes-vous facilement distrait par ce qui se passe autour de vous ou par vos propres pensées ?",
      examples: ["facilement distrait par les bruits", "facilement distrait par les notifications", "distrait par les personnes qui passent ou parlent", "regarde souvent ailleurs pendant une tâche", "pensées ou idées qui surgissent", "change d’activité sans s’en rendre compte", "a du mal à reprendre le fil après interruption", "difficulté à filtrer les informations non pertinentes", "a besoin d’un environnement très calme", "autre élément rapporté"]
    },
    A9: {
      question: "Vous arrive-t-il d’oublier des choses du quotidien, même importantes ?",
      examples: ["oublie des rendez-vous", "oublie de répondre à un message ou un appel", "oublie de payer une facture ou d’envoyer un document", "oublie des courses ou démarches", "oublie de prendre ou rapporter quelque chose", "oublie des consignes ou obligations", "s’arrête à mi-chemin en oubliant ce qu’il allait faire", "a besoin de nombreux rappels, listes ou alarmes", "oublie de consulter son agenda ou ses listes", "autre élément rapporté"]
    },
    H1: {
      question: "Avez-vous souvent besoin de bouger, de manipuler quelque chose ou ressentez-vous une agitation physique ?",
      examples: ["remue les mains ou les pieds", "remue les jambes", "tapote avec les doigts ou un objet", "se tortille ou change souvent de position", "tripote un objet, un stylo ou ses vêtements", "ronge les ongles ou touche ses cheveux", "difficulté à rester immobile", "contrôle l’agitation au prix d’une tension interne", "l’entourage remarque une agitation motrice", "autre élément rapporté"]
    },
    H2: {
      question: "Est-ce difficile pour vous de rester assis dans les situations où c’est attendu ?",
      examples: ["difficulté à rester assis en réunion", "difficulté à rester assis pendant un repas", "difficulté au cinéma, théâtre ou conférence", "difficulté en salle d’attente", "se lève pour marcher sans vraie nécessité", "trouve des excuses pour se déplacer", "préfère marcher plutôt que rester assis", "évite les situations longues où il faut rester assis", "tension importante quand il faut rester immobile", "autre élément rapporté"]
    },
    H3: {
      question: "Ressentez-vous une agitation intérieure ou un besoin de faire quelque chose en permanence ?",
      examples: ["agitation intérieure", "impatience corporelle", "tension interne", "sentiment d’être sous pression", "besoin constant de faire quelque chose", "cherche une activité dès qu’il y a un temps vide", "difficulté à se détendre", "multiplie les activités ou projets", "se sent nerveux ou agité même sans bouger", "autre élément rapporté"]
    },
    H4: {
      question: "Avez-vous du mal à vous détendre ou à pratiquer une activité calme sans vous sentir agité ?",
      examples: ["difficulté à profiter d’un moment de détente", "repos difficile", "vacances peu reposantes", "activité calme rapidement interrompue", "difficulté à lire ou regarder tranquillement", "difficulté à rester silencieux dans une activité calme", "parle ou bouge pendant les moments calmes", "méditation, relaxation ou repos presque impossible", "l’entourage demande de se calmer ou de parler moins fort", "autre élément rapporté"]
    },
    H5: {
      question: "Votre entourage vous décrit-il comme quelqu’un de toujours en action ou difficile à ralentir ?",
      examples: ["constamment occupé", "enchaîne les activités", "fait plusieurs choses à la fois", "rythme fatigant pour l’entourage", "se sent poussé à agir", "a du mal à s’arrêter", "dépasse ses propres limites", "se surcharge d’activités", "inconfort marqué quand il n’y a rien à faire", "autre élément rapporté"]
    },
    H6: {
      question: "Vous arrive-t-il de parler beaucoup ou d’avoir du mal à vous arrêter une fois lancé ?",
      examples: ["parle beaucoup", "monopolise l’échange", "digressions fréquentes", "parle vite", "difficulté à s’arrêter de parler", "difficulté à synthétiser", "ne laisse pas toujours l’autre intervenir", "remarques de l’entourage sur le bavardage", "parle pour combler les silences", "autre élément rapporté"]
    },
    H7: {
      question: "Répondez-vous parfois trop vite, avant que la question soit terminée ou avant d’avoir tout entendu ?",
      examples: ["répond avant la fin de la question", "coupe la fin des phrases", "termine les phrases des autres", "répond puis regrette", "parle ou agit sans réfléchir", "envoie trop vite un message ou un mail", "décisions immédiates", "donne une impression de manque de tact", "commence une action avant le signal ou la consigne complète", "autre élément rapporté"]
    },
    H8: {
      question: "Est-ce difficile d’attendre votre tour ou de supporter l’attente ?",
      examples: ["difficulté dans les files d’attente", "impatience en salle d’attente ou dans l’administratif", "difficulté à attendre son tour dans une conversation", "intervient avant que ce soit son tour", "impatience visible ou irritabilité", "coupe la file ou cherche à éviter l’attente", "frustration rapide", "difficulté à attendre dans les transports ou la circulation", "débute ou termine rapidement des relations par impulsivité", "autre élément rapporté"]
    },
    H9: {
      question: "Vous arrive-t-il d’interrompre les autres, de vous imposer dans une activité ou de finir les phrases ?",
      examples: ["coupe la parole", "interrompt les conversations", "s’immisce dans une activité", "intervient sans y être invité", "finit les phrases des autres", "prend une décision à la place d’autrui", "prend ou utilise les objets des autres sans demander", "réagit sur tout ou donne son avis immédiatement", "difficulté à respecter l’espace ou le rythme des autres", "autre élément rapporté"]
    },
    R1: {
      question: "Quel impact ces difficultés ont-elles eu sur les études ou formations ?",
      examples: ["résultats irréguliers", "potentiel jugé supérieur aux résultats", "redoublement ou réorientation", "devoirs ou dossiers non rendus", "difficultés de révision", "procrastination avant examens", "absences, retards ou oublis de matériel", "besoin d’aide importante pour s’organiser", "arrêt ou changement de formation", "autre élément rapporté"]
    },
    R2: {
      question: "Quel impact observez-vous dans le travail ou l’organisation professionnelle ?",
      examples: ["délais non respectés", "erreurs ou oublis au travail", "retards", "difficultés en réunion", "difficultés à prioriser", "changements de poste ou instabilité", "conflits autour de l’organisation", "épuisement compensatoire", "surinvestissement pour masquer les difficultés", "autre élément rapporté"]
    },
    R3: {
      question: "Quel impact cela a-t-il dans la gestion de la maison, des papiers ou des routines ?",
      examples: ["désordre ou accumulation", "factures ou démarches administratives en retard", "rendez-vous oubliés", "tâches domestiques non terminées", "difficulté à tenir les routines", "gestion financière compliquée", "charge mentale importante", "oublis familiaux", "dépendance aux rappels d’autrui", "autre élément rapporté"]
    },
    R4: {
      question: "Ces symptômes créent-ils des tensions dans les relations ?",
      examples: ["coupe la parole", "oublis perçus comme un manque d’attention", "retards ou désorganisation générant des tensions", "impulsivité verbale", "conflits de couple ou familiaux", "difficulté à écouter jusqu’au bout", "promesses ou engagements oubliés", "reproches répétés de l’entourage", "isolement ou évitement secondaire", "autre élément rapporté"]
    },
    R5: {
      question: "Y a-t-il des prises de risque ou décisions impulsives à explorer ?",
      examples: ["conduite rapide ou inattentive", "accidents ou quasi-accidents", "dépenses impulsives", "addictions ou usages problématiques", "changements brusques", "messages envoyés sous impulsion", "prises de décision rapides regrettées", "conflits liés à l’impatience", "difficulté à mesurer les conséquences", "autre élément rapporté"]
    },
    R6: {
      question: "Quels éléments indiquent que ces difficultés existaient déjà dans l’enfance ?",
      examples: ["bulletins scolaires", "remarques parentales", "agitation dans l’enfance", "rêverie ou distractibilité précoce", "oublis fréquents", "désorganisation précoce", "matériel perdu", "devoirs non faits ou non rendus", "bavardage ou impatience signalés", "besoin d’encadrement important", "autre élément rapporté"]
    }
  },
  young: {
    A1: {
      question: "L’enfant ou l’adolescent a-t-il souvent du mal à prêter attention aux détails, ou fait-il des erreurs d’étourderie dans son travail scolaire ou ses activités ?",
      examples: ["erreurs d’étourderie dans le travail scolaire", "ne répond pas à des questions au recto ou au verso", "manque de soin reproché dans le travail", "ne vérifie pas ses réponses dans les devoirs", "doit travailler lentement pour éviter les erreurs", "travail peu précis", "lit les consignes trop vite ou les survole", "a besoin de plus de temps pour aller au bout", "fait trop d’erreurs parce qu’il travaille trop vite", "autre élément rapporté"]
    },
    A2: {
      question: "L’enfant ou l’adolescent a-t-il souvent du mal à maintenir son attention pendant les tâches, les cours, les devoirs, les jeux ou les échanges ?",
      examples: ["a du mal à maintenir longtemps son attention", "facilement distrait par l’environnement ou ses pensées", "a besoin d’une structure pour résister à la distraction", "a du mal à rester concentré pendant les cours ou les devoirs", "trouve difficile de regarder un film ou une activité jusqu’à la fin", "s’ennuie facilement", "pose des questions sur des sujets déjà discutés", "autre élément rapporté"]
    },
    A3: {
      question: "L’enfant ou l’adolescent donne-t-il souvent l’impression de ne pas entendre lorsqu’on lui parle directement ?",
      examples: ["ne sait pas ce que les parents ou enseignants viennent de dire", "est décrit comme rêveur ou préoccupé", "on lui dit que ses pensées sont ailleurs", "n’écoute que s’il y a contact visuel ou voix insistante", "il faut souvent l’appeler plusieurs fois ou reposer la question", "a du mal à se concentrer pendant une discussion", "ne se rappelle pas le sujet d’une conversation", "change souvent de sujet", "autre élément rapporté"]
    },
    A4: {
      question: "L’enfant ou l’adolescent a-t-il souvent du mal à suivre les instructions et à terminer les tâches, les devoirs ou les corvées ?",
      examples: ["a du mal à suivre les consignes", "difficulté avec les instructions en plusieurs étapes", "a du mal à aller au bout une fois la nouveauté passée", "a besoin de beaucoup de structure pour terminer", "fait les choses de manière confuse sans aller au bout", "commence puis se déconcentre très vite", "a besoin d’une échéance précise pour terminer", "du mal à terminer les tâches administratives ou scolaires", "autre élément rapporté"]
    },
    A5: {
      question: "L’enfant ou l’adolescent trouve-t-il souvent difficile d’organiser ses tâches, ses activités, son matériel ou son temps ?",
      examples: ["du mal à planifier les activités de la vie quotidienne", "du mal avec les tâches séquentielles", "objets, biens ou espace difficiles à garder en ordre", "difficulté à organiser les loisirs ou le jeu", "n’arrive pas à respecter les dates limites", "ne peut pas utiliser systématiquement agenda ou cahier de textes", "besoin de routines strictes pour ne pas se désorganiser", "faible sens du temps ou souvent en retard", "besoin que d’autres structurent les choses", "autre élément rapporté"]
    },
    A6: {
      question: "L’enfant ou l’adolescent évite-t-il, repousse-t-il ou montre-t-il une aversion pour les tâches qui demandent un effort mental soutenu ?",
      examples: ["fait d’abord les choses faciles ou amusantes", "reporte les tâches ennuyeuses ou difficiles", "évite le travail monotone", "n’aime pas lire à cause de l’effort mental", "évite les tâches demandant de la concentration", "déteste les matières scolaires demandant beaucoup d’effort", "a besoin d’un adulte à côté pour s’y mettre", "autre élément rapporté"]
    },
    A7: {
      question: "L’enfant ou l’adolescent perd-il souvent des choses nécessaires à ses tâches, à l’école ou à ses activités ?",
      examples: ["perd papiers, devoirs, notes ou listes", "parents ou enseignants lui reprochent de perdre ses affaires", "perd beaucoup de temps à chercher ses affaires", "panique si d’autres déplacent ses affaires", "pose des objets au mauvais emplacement", "perd vêtements, lunettes, trousse ou matériel", "autre élément rapporté"]
    },
    A8: {
      question: "L’enfant ou l’adolescent est-il souvent distrait par des stimuli extérieurs ?",
      examples: ["du mal à ignorer les stimuli externes", "en classe, regarde souvent au dehors", "du mal à reprendre le fil après interruption", "facilement distrait par les discussions des autres", "du mal à filtrer ou sélectionner les informations", "part vers un autre jeu ou une autre idée", "autre élément rapporté"]
    },
    A9: {
      question: "L’enfant ou l’adolescent est-il souvent oublieux dans ses activités quotidiennes ?",
      examples: ["oublie rendez-vous, instructions ou obligations", "oublie clés, agenda ou matériel", "a besoin de nombreux rappels", "s’arrête à mi-chemin en oubliant ce qu’il devait faire", "utilise des listes de manière rigide pour ne rien oublier", "oublie de tenir à jour ou regarder son agenda", "oublie tâches ménagères, courses ou affaires à rapporter", "autre élément rapporté"]
    },
    H1: {
      question: "L’enfant ou l’adolescent remue-t-il souvent les mains ou les pieds, tapote-t-il des doigts ou se tortille-t-il sur sa chaise ?",
      examples: ["du mal à rester assis immobile", "remue les jambes", "tapote avec un crayon ou joue avec quelque chose", "tripote les cheveux ou ronge les ongles", "incapable de rester assis correctement", "contrôle sa nervosité au prix d’une tension interne", "autre élément rapporté"]
    },
    H2: {
      question: "L’enfant ou l’adolescent se lève-t-il souvent dans des situations où il est censé rester assis ?",
      examples: ["trouve très difficile de rester assis à l’école ou pendant une activité", "évite cours, conférences ou situations assises", "préfère marcher plutôt que rester assis", "ne reste jamais assis longtemps et se déplace", "tension liée à la difficulté de rester immobile", "trouve des excuses pour se déplacer", "autre élément rapporté"]
    },
    H3: {
      question: "L’enfant ou l’adolescent court-il, grimpe-t-il ou se sent-il souvent agité ou nerveux ?",
      examples: ["toujours à courir", "grimpe sur les meubles ou saute sur le canapé", "grimpe dans les arbres ou sur les structures", "se sent nerveux ou agité à l’intérieur", "sentiment constant d’avoir quelque chose à faire", "trouve difficile de se détendre", "autre élément rapporté"]
    },
    H4: {
      question: "L’enfant ou l’adolescent trouve-t-il souvent difficile de participer à des jeux ou activités de manière calme ?",
      examples: ["parle fort dans les jeux ou en classe", "incapable de suivre silencieusement une émission", "on lui demande de se taire ou de se calmer", "parle pendant des activités où il faudrait se taire", "devient rapidement trop confiant en public", "parle fort dans plusieurs situations", "du mal à faire des activités en silence", "du mal à parler à voix basse", "autre élément rapporté"]
    },
    H5: {
      question: "L’enfant ou l’adolescent semble-t-il souvent ne jamais s’arrêter ou agir comme s’il était « monté sur des ressorts » ?",
      examples: ["excessivement actif à l’école ou à la maison", "toujours occupé à faire quelque chose", "inconfortable quand il doit rester calmement assis", "trop plein d’énergie", "agité ou difficile à suivre dans sa cadence", "dépasse ses propres limites", "difficile de laisser aller les choses, va trop loin", "autre élément rapporté"]
    },
    H6: {
      question: "L’enfant ou l’adolescent parle-t-il souvent de manière excessive ?",
      examples: ["parle tellement que les autres trouvent cela fatigant", "connu comme moulin à paroles", "parents ou enseignants demandent souvent de se taire", "appréciations ou punitions liées au bavardage", "trouve difficile de s’arrêter de parler", "tendance à parler trop", "empêche les autres de travailler en parlant", "ne laisse pas aux autres la possibilité d’intervenir", "a besoin de beaucoup de mots pour dire quelque chose", "autre élément rapporté"]
    },
    H7: {
      question: "L’enfant ou l’adolescent laisse-t-il souvent échapper une réponse avant que la question ait été totalement posée ?",
      examples: ["parle ou répond sans réfléchir", "veut être le premier à répondre en classe", "lâche une réponse même si elle est fausse", "interrompt ou répond avant la fin des phrases", "termine les phrases des autres", "donne l’impression de manquer de tact", "commence avant le signal", "autre élément rapporté"]
    },
    H8: {
      question: "L’enfant ou l’adolescent trouve-t-il souvent difficile d’attendre son tour ?",
      examples: ["difficile d’attendre son tour dans les activités de groupe", "toujours le premier à parler ou agir", "traverse la route sans regarder", "du mal à attendre dans une file ou coupe la file", "impatient", "débute ou termine rapidement des relations par impulsivité", "frustration rapide", "autre élément rapporté"]
    },
    H9: {
      question: "L’enfant ou l’adolescent interrompt-il souvent les autres ou se montre-t-il intrusif ?",
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
  context: {},
  notes: "",
  sectionNotes: {},
  report: "",
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
  report: document.querySelector("#report-btn"),
  patient: document.querySelector("#patient-name"),
  birthdate: document.querySelector("#patient-birthdate"),
  profession: document.querySelector("#patient-profession"),
  date: document.querySelector("#assessment-date"),
  clinician: document.querySelector("#clinician-name"),
  informant: document.querySelector("#informant"),
  reason: document.querySelector("#consultation-reason"),
  complaints: document.querySelector("#patient-complaints"),
  savedCases: document.querySelector("#saved-cases-select"),
  newCase: document.querySelector("#new-case-btn"),
  saveCase: document.querySelector("#save-case-btn"),
  loadCase: document.querySelector("#load-case-btn"),
  deleteCase: document.querySelector("#delete-case-btn"),
  saveFile: document.querySelector("#save-file-btn"),
  downloadSave: document.querySelector("#download-save-btn"),
  importSave: document.querySelector("#import-save-btn"),
  importInput: document.querySelector("#import-save-input"),
  saveStatus: document.querySelector("#save-status"),
  notes: document.querySelector("#global-notes"),
  generatedReport: document.querySelector("#generated-report"),
  printReport: document.querySelector("#print-report"),
  copyReport: document.querySelector("#copy-report-btn"),
  downloadReport: document.querySelector("#download-report-btn"),
  attention: document.querySelector("#attention-score"),
  hyper: document.querySelector("#hyper-score"),
  impact: document.querySelector("#impact-score"),
  status: document.querySelector("#status-label"),
  detail: document.querySelector("#status-detail")
};

const STORAGE_KEY = "diva-cotation-v1";
const CASES_KEY = "diva-cotation-cases-v1";
const ACTIVE_CASE_KEY = "diva-active-case-v1";
const HANDLE_STORE = "diva-save-handle";
let diskFileHandle = null;
let diskSaveTimer = null;
let serverSaveTimer = null;
let caseSaveTimer = null;
let activeCaseId = "";
let latestSummary = { attention: 0, hyper: 0, impact: 0 };

const HAS_NOTICE = "Conformément aux recommandations de bonne pratique publiées en septembre 2024 par la Haute Autorité de Santé, le diagnostic de Trouble Déficit de l’Attention avec ou sans Hyperactivité (TDAH) repose avant tout sur l’entretien clinique approfondi, l’analyse du parcours développemental et fonctionnel de la personne, ainsi que le recueil d’informations auprès de différentes sources.\n\nLa HAS précise que la réalisation d’un bilan neuropsychologique n’est pas une condition obligatoire pour poser un diagnostic de TDAH. Les outils standardisés (questionnaires, échelles, entretiens diagnostiques tels que la DIVA) viennent étayer l’évaluation clinique, sans s’y substituer.\n\nL’élément central du diagnostic demeure donc l’évaluation clinique menée par un professionnel formé, intégrant les critères diagnostiques, le retentissement fonctionnel et le contexte de vie de la personne évaluée.";

function formatDateForInput(value) {
  if (!value) return "";
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toLocaleDateString("fr-FR");
  }

  const raw = String(value).trim();
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[3]}/${iso[2]}/${iso[1]}`;

  const compact = raw.replace(/[.\-\s]/g, "/");
  const fr = compact.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
  if (!fr) return raw;

  const day = fr[1].padStart(2, "0");
  const month = fr[2].padStart(2, "0");
  const year = fr[3].length === 2 ? `20${fr[3]}` : fr[3];
  return `${day}/${month}/${year}`;
}

function formatDisplayDate(value) {
  return formatDateForInput(value);
}

function loadState() {
  activeCaseId = localStorage.getItem(ACTIVE_CASE_KEY) || "";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      Object.assign(state, JSON.parse(saved));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  if (!state.meta.date) state.meta.date = formatDateForInput(new Date());
  state.meta.date = formatDateForInput(state.meta.date);
  state.meta.birthdate = formatDateForInput(state.meta.birthdate || "");
  if (!state.context) state.context = {};
  if (!state.sectionNotes) state.sectionNotes = {};
  if (!state.evidence) state.evidence = {};
  if (!state.responses) state.responses = {};
  if (!state.report) state.report = "";
}

function saveState() {
  if (!activeCaseId && hasMeaningfulContent()) {
    activeCaseId = makeCaseId();
    localStorage.setItem(ACTIVE_CASE_KEY, activeCaseId);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateScaleLock();
  scheduleCaseSave();
  scheduleDiskSave();
  scheduleServerSave();
}

function updateScaleLock() {
  if (!els?.scale) return;
  const locked = Boolean(activeCaseId || hasMeaningfulContent());
  els.scale.disabled = locked;
  els.scale.title = locked
    ? "Le type d’évaluation est fixé pour ce dossier. Créez un nouveau dossier pour choisir une autre grille."
    : "Choisissez le type d’évaluation avant de commencer le dossier.";
  els.scale.closest(".panel")?.classList.toggle("scale-locked", locked);
}

function createEmptyState(keepClinician = true) {
  const clinician = keepClinician ? state.meta.clinician || "" : "";
  return {
    scale: state.scale || "adult",
    meta: {
      date: formatDateForInput(new Date()),
      clinician
    },
    context: {},
    notes: "",
    sectionNotes: {},
    report: "",
    evidence: {},
    responses: {}
  };
}

function replaceState(nextState) {
  nextState = normalizeImportedState(nextState);
  state.scale = nextState.scale || "adult";
  state.meta = nextState.meta || {};
  state.context = nextState.context || {};
  state.notes = nextState.notes || "";
  state.sectionNotes = nextState.sectionNotes || {};
  state.report = nextState.report || "";
  state.evidence = nextState.evidence || {};
  state.responses = nextState.responses || {};
  if (!state.meta.date) state.meta.date = formatDateForInput(new Date());
  state.meta.date = formatDateForInput(state.meta.date);
  state.meta.birthdate = formatDateForInput(state.meta.birthdate || "");
}

function normalizeImportedState(imported) {
  const data = imported?.data || imported || {};
  const metaFromLabel = parseCaseLabel(imported?.label || "");
  return {
    scale: data.scale || metaFromLabel.scale || "adult",
    meta: { ...metaFromLabel.meta, ...(data.meta || {}) },
    context: data.context || {},
    notes: data.notes || "",
    sectionNotes: data.sectionNotes || {},
    report: data.report || "",
    evidence: data.evidence || {},
    responses: data.responses || {}
  };
}

function hasStoredCaseData(item) {
  const data = item?.data;
  if (!data || typeof data !== "object") return false;
  return Boolean(
    data.meta?.patient ||
    data.meta?.birthdate ||
    data.meta?.profession ||
    data.context?.reason ||
    data.context?.complaints ||
    data.notes ||
    data.report ||
    Object.keys(data.responses || {}).length ||
    Object.keys(data.evidence || {}).length ||
    Object.keys(data.sectionNotes || {}).length
  );
}

function dataForStoredCase(item) {
  return hasStoredCaseData(item) ? item.data : item;
}

function parseCaseLabel(label) {
  const parts = String(label || "").split(" - ");
  const meta = {};
  let scale = "";
  if (parts.length >= 3) {
    if (parts[0] && parts[0] !== "Dossier sans nom") meta.patient = parts[0];
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(parts[1])) meta.date = parts[1];
    if (parts.slice(2).join(" - ").includes("Young")) scale = "young";
    if (parts.slice(2).join(" - ").includes("adulte")) scale = "adult";
  }
  return { meta, scale };
}

function cloneState() {
  return JSON.parse(JSON.stringify(state));
}

function readBrowserCases() {
  try {
    const cases = JSON.parse(localStorage.getItem(CASES_KEY) || "[]");
    return Array.isArray(cases) ? cases : [];
  } catch {
    return [];
  }
}

function writeBrowserCases(cases) {
  localStorage.setItem(CASES_KEY, JSON.stringify(cases));
}

function caseLabel(data) {
  const meta = data.meta || {};
  const patient = meta.patient || "Dossier sans nom";
  const date = formatDisplayDate(meta.date) || "sans date";
  const scale = SCALES[data.scale]?.title || data.scale || "DIVA";
  return `${patient} - ${date} - ${scale}`;
}

function makeCaseId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `case-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function saveCurrentCaseToBrowser({ silent = false } = {}) {
  const now = new Date().toISOString();
  const cases = readBrowserCases();
  if (!activeCaseId) {
    activeCaseId = makeCaseId();
    localStorage.setItem(ACTIVE_CASE_KEY, activeCaseId);
  }

  const data = cloneState();
  if (!hasMeaningfulContent() && activeCaseId) {
    const existing = cases.find(item => item.id === activeCaseId);
    if (hasStoredCaseData(existing)) {
      renderSavedCases(activeCaseId);
      if (!silent) setSaveStatus("Dossier vide non enregistré pour préserver l’ancien dossier.");
      return;
    }
  }
  const nextCase = {
    id: activeCaseId,
    label: caseLabel(data),
    updatedAt: now,
    data
  };
  const existingIndex = cases.findIndex(item => item.id === activeCaseId);
  if (existingIndex >= 0) cases[existingIndex] = nextCase;
  else cases.unshift(nextCase);

  cases.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  writeBrowserCases(cases);
  renderSavedCases(activeCaseId);
  if (!silent) setSaveStatus(`Dossier enregistré : ${nextCase.label}.`);
}

function scheduleCaseSave() {
  if (!activeCaseId) return;
  clearTimeout(caseSaveTimer);
  caseSaveTimer = setTimeout(() => {
    saveCurrentCaseToBrowser({ silent: true });
  }, 500);
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

function sectionNoteName(sectionId) {
  return `${state.scale}:${sectionId}`;
}

function getSectionNote(sectionId) {
  return state.sectionNotes?.[sectionNoteName(sectionId)] || "";
}

function setSectionNote(sectionId, value) {
  if (!state.sectionNotes) state.sectionNotes = {};
  state.sectionNotes[sectionNoteName(sectionId)] = value;
  saveState();
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
  updateScaleLock();
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
        ${renderSectionNotes(section)}
      </section>
    `;
  }).join("");

  bindDynamicFields();
  filterItems();
  updateSummary();
}

function renderSectionNotes(section) {
  return `
    <div class="section-notes">
      <label for="section-notes-${escapeHtml(section.id)}">Notes cliniques - ${escapeHtml(section.title)}</label>
      <textarea id="section-notes-${escapeHtml(section.id)}" rows="3" data-section-note="${escapeHtml(section.id)}" placeholder="Notes libres pour ce domaine, hypothèses, nuances, éléments à reprendre dans le compte rendu...">${escapeHtml(getSectionNote(section.id))}</textarea>
    </div>
  `;
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
  const scaleGuidance = GUIDANCE[state.scale] || {};
  if (Object.prototype.hasOwnProperty.call(scaleGuidance, code)) return scaleGuidance[code];
  return state.scale === "adult" ? GUIDANCE.adult[code] || null : null;
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
          <div class="evidence-period" data-period-label="${escapeHtml(period.label)}">
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

  els.root.querySelectorAll("[data-section-note]").forEach(area => {
    area.addEventListener("input", event => {
      setSectionNote(event.target.dataset.sectionNote, event.target.value);
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
      state.meta[key] = key === "date" || key === "birthdate" ? formatDateForInput(el.value) : el.value;
      if (key === "date" || key === "birthdate") el.value = state.meta[key];
      saveState();
    });
  });

  const contextBindings = [
    [els.reason, "reason"],
    [els.complaints, "complaints"]
  ];

  contextBindings.forEach(([el, key]) => {
    el.value = state.context[key] || "";
    el.addEventListener("input", () => {
      state.context[key] = el.value;
      saveState();
      autoGrow(el);
    });
    autoGrow(el);
  });

  els.notes.value = state.notes || "";
  els.notes.addEventListener("input", () => {
    state.notes = els.notes.value;
    saveState();
    autoGrow(els.notes);
  });

  els.generatedReport.value = state.report || "";
  els.generatedReport.addEventListener("input", () => {
    state.report = els.generatedReport.value;
    saveState();
    autoGrow(els.generatedReport);
  });

  els.scale.addEventListener("change", () => {
    if (els.scale.disabled) return;
    state.scale = els.scale.value;
    saveState();
    renderForm();
  });

  els.search.addEventListener("input", filterItems);
  els.print.addEventListener("click", exportCotationPdf);
  els.report.addEventListener("click", exportClinicalReportPdf);
  els.reset.addEventListener("click", resetCurrentScale);
  els.newCase?.addEventListener("click", createNewCase);
  els.saveCase?.addEventListener("click", () => saveCurrentCaseToBrowser());
  els.deleteCase?.addEventListener("click", deleteSelectedCase);
  els.savedCases.addEventListener("change", () => {
    if (els.savedCases.value) loadSelectedCase();
  });
  els.loadCase.addEventListener("click", loadSelectedCase);
  els.saveFile.addEventListener("click", chooseSaveFile);
  els.downloadSave.addEventListener("click", downloadBackup);
  els.importSave.addEventListener("click", () => els.importInput.click());
  els.importInput.addEventListener("change", importBackup);
  els.copyReport.addEventListener("click", copyReport);
  els.downloadReport.addEventListener("click", downloadReport);
  autoGrow(els.notes);
  autoGrow(els.generatedReport);
}

function resetCurrentScale() {
  const prefix = `${state.scale}:`;
  Object.keys(state.responses).forEach(key => {
    if (key.startsWith(prefix)) delete state.responses[key];
  });
  Object.keys(state.evidence).forEach(key => {
    if (key.startsWith(prefix)) delete state.evidence[key];
  });
  Object.keys(state.sectionNotes || {}).forEach(key => {
    if (key.startsWith(prefix)) delete state.sectionNotes[key];
  });
  state.notes = "";
  state.report = "";
  els.notes.value = "";
  els.generatedReport.value = "";
  saveState();
  renderForm();
  bindMetaValues();
  setSaveStatus("Cotation réinitialisée pour ce dossier.");
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

function generateReport() {
  updateSummary();
  const scale = SCALES[state.scale];
  const checkedItems = collectCheckedResponses();
  const evidenceLines = collectCheckedEvidence();
  const responseComments = collectResponseComments();
  const lines = [];

  lines.push(`Compte rendu de cotation ${scale.title}`);
  lines.push("");
  lines.push("Informations générales");
  lines.push(`Patient : ${state.meta.patient || "Non renseigné"}`);
  lines.push(`Date de naissance : ${formatDisplayDate(state.meta.birthdate) || "Non renseignée"}`);
  lines.push(`Profession / niveau scolaire : ${state.meta.profession || "Non renseigné"}`);
  lines.push(`Date de l’entretien : ${formatDisplayDate(state.meta.date) || "Non renseignée"}`);
  lines.push(`Clinicien : ${state.meta.clinician || "Non renseigné"}`);
  lines.push(`Source(s) : ${state.meta.informant || "Non renseignée(s)"}`);
  lines.push("");
  lines.push("Motif de consultation");
  lines.push(state.context.reason || "Non renseigné.");
  lines.push("");
  lines.push("Plaintes rapportées");
  lines.push(state.context.complaints || "Non renseignées.");
  lines.push("");
  lines.push("Résultats de la cotation");
  lines.push(`Inattention : ${latestSummary.attention} item(s) coté(s) positivement.`);
  lines.push(`Hyperactivité / impulsivité : ${latestSummary.hyper} item(s) coté(s) positivement.`);
  lines.push(`Retentissements cochés : ${latestSummary.impact}.`);
  lines.push(`${els.status.textContent} : ${els.detail.textContent}`);
  lines.push("");
  lines.push("Items cotés positivement");
  lines.push(checkedItems.length ? checkedItems.map(item => `- ${item}`).join("\n") : "Aucun item coté positivement pour le moment.");
  lines.push("");
  lines.push("Éléments cliniques cochés");
  lines.push(evidenceLines.length ? evidenceLines.map(item => `- ${item}`).join("\n") : "Aucun élément coché pour le moment.");
  lines.push("");
  lines.push("Commentaires de cotation");
  lines.push(responseComments.length ? responseComments.map(item => `- ${item}`).join("\n") : "Aucun commentaire spécifique renseigné.");
  lines.push("");
  lines.push("Notes générales d’entretien");
  lines.push(state.notes || "Non renseignées.");
  lines.push("");
  lines.push("Notes par domaine");
  lines.push(collectSectionNotes().length ? collectSectionNotes().map(item => `- ${item}`).join("\n") : "Aucune note par domaine renseignée.");
  lines.push("");
  lines.push("Encadré de référence clinique");
  lines.push(HAS_NOTICE);

  state.report = lines.join("\n");
  els.generatedReport.value = state.report;
  autoGrow(els.generatedReport);
  saveState();
  document.querySelector(".report-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function collectSectionNotes() {
  const scale = SCALES[state.scale];
  return scale.sections
    .map(section => {
      const note = getSectionNote(section.id).trim();
      return note ? `${section.title} : ${note}` : "";
    })
    .filter(Boolean);
}

function collectCheckedResponses() {
  const scale = SCALES[state.scale];
  const labels = [];

  scale.sections.forEach(section => {
    const periods = section.responseMode === "single" ? [{ id: "global", label: "Cotation" }] : scale.periods;
    section.items.forEach(([code, title]) => {
      const yesPeriods = periods
        .filter(period => getResponse(code, period.id).value === "yes")
        .map(period => period.label);
      if (yesPeriods.length) labels.push(`${code} ${title} (${yesPeriods.join(", ")})`);
    });
  });

  return labels;
}

function collectCheckedEvidence() {
  const scale = SCALES[state.scale];
  const labels = [];

  scale.sections.forEach(section => {
    const periods = section.responseMode === "single" ? [{ id: "global", label: "Éléments" }] : scale.periods;
    section.items.forEach(([code, title]) => {
      const guidance = getGuidance(code);
      if (!guidance) return;
      const examples = guidance.examples.some(example => example.toLowerCase().includes("autre"))
        ? guidance.examples
        : [...guidance.examples, "autre élément rapporté"];

      examples.forEach((example, index) => {
        periods.forEach(period => {
          const evidence = getEvidence(code, index, period.id);
          if (!evidence.checked && !evidence.note) return;
          const note = evidence.note ? ` : ${evidence.note}` : "";
          const marker = evidence.checked ? "coché" : "noté";
          labels.push(`${code} ${title} - ${period.label} - ${example} (${marker})${note}`);
        });
      });
    });
  });

  return labels;
}

function collectResponseComments() {
  const scale = SCALES[state.scale];
  const comments = [];

  scale.sections.forEach(section => {
    const periods = section.responseMode === "single" ? [{ id: "global", label: "Cotation" }] : scale.periods;
    section.items.forEach(([code, title]) => {
      periods.forEach(period => {
        const response = getResponse(code, period.id);
        if (!response.comment) return;
        const value = response.value ? responseLabel(response.value) : "non coté";
        comments.push(`${code} ${title} - ${period.label} (${value}) : ${response.comment}`);
      });
    });
  });

  return comments;
}

function responseLabel(value) {
  if (value === "yes") return "Oui";
  if (value === "no") return "Non";
  if (value === "na") return "N/A";
  return value;
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
  const date = sanitizePart(formatDisplayDate(state.meta.date) || formatDateForInput(new Date()));
  const scale = sanitizePart(SCALES[state.scale].title);
  return `${date}_${patient}_${scale}.diva`;
}

function reportFilename(extension = "html") {
  const patient = sanitizePart(state.meta.patient || "patient");
  const date = sanitizePart(formatDisplayDate(state.meta.date) || formatDateForInput(new Date()));
  const scale = sanitizePart(SCALES[state.scale].title);
  return `${date}_${patient}_${scale}_compte-rendu.${extension}`;
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
  setSaveStatus("Dossier exporté. Ce fichier .diva peut être réimporté dans l’application.");
}

async function copyReport() {
  const text = els.generatedReport.value || "";
  if (!text.trim()) {
    setSaveStatus("Générez d’abord un compte rendu.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setSaveStatus("Compte rendu copié.");
  } catch {
    els.generatedReport.select();
    setSaveStatus("Compte rendu sélectionné, vous pouvez le copier.");
  }
}

function downloadReport() {
  const text = els.generatedReport.value || "";
  if (!text.trim()) {
    setSaveStatus("Générez d’abord un compte rendu.");
    return;
  }

  const html = buildStandaloneReportHtml(text);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = reportFilename("html");
  link.click();
  URL.revokeObjectURL(url);
  setSaveStatus("Compte rendu téléchargé en document lisible.");
}

function buildStandaloneReportHtml(reportText) {
  const scale = SCALES[state.scale];
  const generatedAt = formatDisplayDate(new Date());
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(reportFilename("html").replace(/\.html$/, ""))}</title>
  <style>
    body { margin: 32px auto; max-width: 800px; color: #1f2933; font-family: Arial, sans-serif; line-height: 1.5; }
    h1 { margin-bottom: 4px; font-size: 26px; }
    .meta { color: #5f6b76; margin: 0 0 24px; }
    .report { white-space: pre-wrap; font-size: 14px; }
    .notice { border: 1px solid #c7d7d3; background: #f3faf8; padding: 14px; margin-top: 24px; }
    @page { margin: 16mm; }
  </style>
</head>
<body>
  <h1>Compte rendu professionnel</h1>
  <p class="meta">${escapeHtml(scale.title)} - ${escapeHtml(state.meta.patient || "Patient non renseigné")} - généré le ${escapeHtml(generatedAt)}</p>
  <main class="report">${escapeHtml(reportText)}</main>
</body>
</html>`;
}

function exportCotationPdf() {
  renderCotationPrintReport();
  setSaveStatus("PDF de cotation prêt : choisissez Enregistrer en PDF dans la fenêtre d’impression.");
  window.print();
}

function exportClinicalReportPdf() {
  generateReport();
  renderClinicalReportPrint();
  setSaveStatus("PDF du compte rendu prêt : choisissez Enregistrer en PDF dans la fenêtre d’impression.");
  window.print();
}

function renderCotationPrintReport() {
  updateSummary();
  const scale = SCALES[state.scale];
  const responseRows = collectAllCotationResponses();
  const evidenceItems = collectCheckedEvidence();
  const responseComments = collectResponseComments();
  const sectionNotes = collectSectionNotes();
  const generatedAt = new Date().toLocaleDateString("fr-FR");

  els.printReport.innerHTML = `
    <header class="print-header">
      <p class="print-eyebrow">Cotation DIVA</p>
      <h1>Dossier de cotation et notes d’entretien</h1>
      <p>${escapeHtml(scale.title)} - document généré le ${escapeHtml(generatedAt)}</p>
    </header>

    <section class="print-section print-grid">
      <div>
        <h2>Patient</h2>
        <p><strong>Nom / identifiant :</strong> ${escapeHtml(state.meta.patient || "Non renseigné")}</p>
        <p><strong>Date de naissance :</strong> ${escapeHtml(formatDisplayDate(state.meta.birthdate) || "Non renseignée")}</p>
        <p><strong>Profession / niveau scolaire :</strong> ${escapeHtml(state.meta.profession || "Non renseigné")}</p>
      </div>
      <div>
        <h2>Entretien</h2>
        <p><strong>Date :</strong> ${escapeHtml(formatDisplayDate(state.meta.date) || "Non renseignée")}</p>
        <p><strong>Clinicien :</strong> ${escapeHtml(state.meta.clinician || "Non renseigné")}</p>
        <p><strong>Source(s) :</strong> ${escapeHtml(state.meta.informant || "Non renseignée(s)")}</p>
      </div>
    </section>

    <section class="print-section print-scores">
      <article>
        <span>${latestSummary.attention}</span>
        <p>Inattention</p>
      </article>
      <article>
        <span>${latestSummary.hyper}</span>
        <p>Hyperactivité / impulsivité</p>
      </article>
      <article>
        <span>${latestSummary.impact}</span>
        <p>Retentissements</p>
      </article>
      <article>
        <span>${escapeHtml(els.status.textContent || "À compléter")}</span>
        <p>${escapeHtml(els.detail.textContent || "")}</p>
      </article>
    </section>

    <section class="print-section">
      <h2>Motif et plaintes rapportées</h2>
      <p><strong>Motif :</strong> ${escapeHtml(state.context.reason || "Non renseigné.")}</p>
      <p><strong>Plaintes :</strong> ${escapeHtml(state.context.complaints || "Non renseignées.")}</p>
    </section>

    <section class="print-section">
      <h2>Cotation complète</h2>
      ${responseRows.length ? `<ul>${responseRows.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>Aucune cotation renseignée.</p>"}
    </section>

    <section class="print-section">
      <h2>Cases d’exemples cochées et éléments notés</h2>
      ${evidenceItems.length ? `<ul>${evidenceItems.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>Aucun élément clinique coché ou renseigné.</p>"}
    </section>

    <section class="print-section">
      <h2>Commentaires de cotation</h2>
      ${responseComments.length ? `<ul>${responseComments.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>Aucun commentaire spécifique renseigné.</p>"}
    </section>

    <section class="print-section">
      <h2>Notes générales d’entretien</h2>
      <div class="print-report-text">${escapeHtml(state.notes || "Non renseignées.").replace(/\n/g, "<br>")}</div>
    </section>

    <section class="print-section">
      <h2>Notes cliniques par domaine</h2>
      ${sectionNotes.length ? `<ul>${sectionNotes.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>Aucune note par domaine renseignée.</p>"}
    </section>
  `;
}

function renderClinicalReportPrint() {
  updateSummary();
  const scale = SCALES[state.scale];
  const reportText = state.report || els.generatedReport.value || "";
  const generatedAt = new Date().toLocaleDateString("fr-FR");

  els.printReport.innerHTML = `
    <header class="print-header">
      <p class="print-eyebrow">Cotation DIVA</p>
      <h1>Compte rendu professionnel</h1>
      <p>${escapeHtml(scale.title)} - document généré le ${escapeHtml(generatedAt)}</p>
    </header>

    <section class="print-section print-grid">
      <div>
        <h2>Patient</h2>
        <p><strong>Nom / identifiant :</strong> ${escapeHtml(state.meta.patient || "Non renseigné")}</p>
        <p><strong>Date de naissance :</strong> ${escapeHtml(formatDisplayDate(state.meta.birthdate) || "Non renseignée")}</p>
        <p><strong>Profession / niveau scolaire :</strong> ${escapeHtml(state.meta.profession || "Non renseigné")}</p>
      </div>
      <div>
        <h2>Entretien</h2>
        <p><strong>Date :</strong> ${escapeHtml(formatDisplayDate(state.meta.date) || "Non renseignée")}</p>
        <p><strong>Clinicien :</strong> ${escapeHtml(state.meta.clinician || "Non renseigné")}</p>
        <p><strong>Source(s) :</strong> ${escapeHtml(state.meta.informant || "Non renseignée(s)")}</p>
      </div>
    </section>

    <section class="print-section">
      <h2>Synthèse rédigée</h2>
      <div class="print-report-text">${escapeHtml(reportText || "Compte rendu non généré.").replace(/\n/g, "<br>")}</div>
    </section>
  `;
}

function collectAllCotationResponses() {
  const scale = SCALES[state.scale];
  const rows = [];

  scale.sections.forEach(section => {
    const periods = section.responseMode === "single" ? [{ id: "global", label: "Cotation" }] : scale.periods;
    section.items.forEach(([code, title]) => {
      periods.forEach(period => {
        const response = getResponse(code, period.id);
        if (!response.value && !response.comment) return;
        const value = response.value ? responseLabel(response.value) : "Non coté";
        const comment = response.comment ? ` - note : ${response.comment}` : "";
        rows.push(`${section.title} - ${code} ${title} - ${period.label} : ${value}${comment}`);
      });
    });
  });

  return rows;
}

async function chooseSaveFile() {
  if (!window.showSaveFilePicker) {
    setSaveStatus("Sauvegarde auto non disponible ici. Utilisez Exporter le dossier.");
    downloadBackup();
    return;
  }

  try {
    diskFileHandle = await window.showSaveFilePicker({
      suggestedName: backupFilename(),
      types: [
        {
          description: "Dossier DIVA réimportable",
          accept: { "application/json": [".diva", ".json"] }
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
  if (!isLocalDevServer()) return;
  clearTimeout(serverSaveTimer);
  serverSaveTimer = setTimeout(() => {
    writeServerBackup();
  }, 700);
}

function isLocalDevServer() {
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
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
    if (!readBrowserCases().length) {
      setSaveStatus(`Sauvegardé dans sauvegardes/${result.path}.`);
      await refreshSavedCases(result.path);
    }
  } catch {
    if (!diskFileHandle) {
      setSaveStatus("Sauvegarde navigateur active. Utilisez Exporter le dossier pour obtenir un fichier réimportable.");
    }
  }
}

async function refreshSavedCases(selectedPath = "") {
  const browserCases = readBrowserCases();
  if (browserCases.length) {
    renderSavedCases(selectedPath || activeCaseId);
    return;
  }

  if (!isLocalDevServer()) {
    renderSavedCases("");
    return;
  }

  try {
    const response = await fetch("/api/list");
    if (!response.ok) return;
    const payload = await response.json();
    const cases = payload.cases || [];

    els.savedCases.innerHTML = [
      `<option value="">${cases.length ? "Choisir un dossier" : "Aucun dossier local"}</option>`,
      ...cases.map(item => `<option value="${escapeHtml(item.path)}">${escapeHtml(item.label)}</option>`)
    ].join("");

    if (selectedPath) els.savedCases.value = selectedPath;
  } catch {
    renderSavedCases("");
  }
}

function renderSavedCases(selectedId = "") {
  const cases = readBrowserCases();
  els.savedCases.innerHTML = [
    `<option value="">${cases.length ? "Choisir un dossier patient" : "Aucun dossier enregistré"}</option>`,
    ...cases.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.label)}</option>`)
  ].join("");
  if (selectedId && cases.some(item => item.id === selectedId)) {
    els.savedCases.value = selectedId;
  }
}

function deleteSelectedCase() {
  const selected = els.savedCases.value || activeCaseId;
  if (!selected) {
    setSaveStatus("Choisissez d’abord le dossier à supprimer.");
    return;
  }

  const cases = readBrowserCases();
  const caseToDelete = cases.find(item => item.id === selected);
  if (!caseToDelete) {
    setSaveStatus("Dossier introuvable dans la sauvegarde navigateur.");
    renderSavedCases(activeCaseId);
    return;
  }

  const confirmed = window.confirm(`Supprimer le dossier « ${caseToDelete.label} » ? Cette action supprime uniquement la sauvegarde locale de ce navigateur.`);
  if (!confirmed) return;

  const remaining = cases.filter(item => item.id !== selected);
  writeBrowserCases(remaining);

  if (activeCaseId === selected) {
    activeCaseId = "";
    localStorage.removeItem(ACTIVE_CASE_KEY);
    replaceState(createEmptyState(true));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    bindMetaValues();
    renderForm();
  }

  renderSavedCases(activeCaseId);
  setSaveStatus(`Dossier supprimé : ${caseToDelete.label}.`);
}

async function loadSelectedCase() {
  const selected = els.savedCases.value;
  if (!selected) {
    setSaveStatus("Choisissez d’abord un dossier sauvegardé.");
    return;
  }

  const browserCase = readBrowserCases().find(item => item.id === selected);
  if (browserCase) {
    activeCaseId = browserCase.id;
    localStorage.setItem(ACTIVE_CASE_KEY, activeCaseId);
    applyImportedState(dataForStoredCase(browserCase), { skipCaseSave: true });
    renderSavedCases(activeCaseId);
    setSaveStatus(`Dossier repris : ${browserCase.label}.`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  try {
    const response = await fetch(`/api/load?file=${encodeURIComponent(selected)}`);
    if (!response.ok) throw new Error("Load failed");
    const imported = await response.json();
    applyImportedState(imported);
    setSaveStatus(`Dossier repris : ${selected}.`);
  } catch {
    setSaveStatus("Impossible de reprendre ce dossier.");
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
    applyImportedState(imported);
    saveCurrentCaseToBrowser({ silent: true });
    refreshSavedCases(activeCaseId);
    setSaveStatus("Sauvegarde importée.");
  } catch {
    setSaveStatus("Ce fichier ne ressemble pas à une sauvegarde DIVA.");
  } finally {
    event.target.value = "";
  }
}

function createNewCase() {
  if (hasMeaningfulContent()) {
    saveCurrentCaseToBrowser({ silent: true });
  }

  activeCaseId = "";
  localStorage.removeItem(ACTIVE_CASE_KEY);
  replaceState(createEmptyState(true));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  bindMetaValues();
  renderForm();
  renderSavedCases("");
  setSaveStatus("Nouveau dossier prêt : choisissez DIVA adulte ou Young DIVA avant de commencer la saisie.");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function hasMeaningfulContent() {
  return Boolean(
    state.meta.patient ||
    state.meta.birthdate ||
    state.meta.profession ||
    state.meta.informant ||
    state.context.reason ||
    state.context.complaints ||
    state.notes ||
    state.report ||
    Object.keys(state.responses || {}).length ||
    Object.keys(state.evidence || {}).length ||
    Object.keys(state.sectionNotes || {}).length
  );
}

function applyImportedState(imported, options = {}) {
  const nextState = normalizeImportedState(imported);

  replaceState(nextState);
  if (options.skipCaseSave) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } else {
    saveState();
  }
  bindMetaValues();
  renderForm();
}

function bindMetaValues() {
  els.patient.value = state.meta.patient || "";
  els.birthdate.value = formatDateForInput(state.meta.birthdate || "");
  els.profession.value = state.meta.profession || "";
  els.date.value = formatDateForInput(state.meta.date || "");
  els.clinician.value = state.meta.clinician || "";
  els.informant.value = state.meta.informant || "";
  els.reason.value = state.context.reason || "";
  els.complaints.value = state.context.complaints || "";
  els.notes.value = state.notes || "";
  els.generatedReport.value = state.report || "";
  autoGrow(els.reason);
  autoGrow(els.complaints);
  autoGrow(els.notes);
  autoGrow(els.generatedReport);
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
  window.DivaApp = {
    exportCotationPdf,
    exportClinicalReportPdf,
    renderCotationPrintReport,
    renderClinicalReportPrint,
    saveCurrentCaseToBrowser,
    deleteSelectedCase,
    loadSelectedCase
  };
  await refreshSavedCases();
  await restoreFileHandle();
}

init();
