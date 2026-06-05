(() => {
  const adultGuidance = {
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
  };

  if (typeof GUIDANCE !== "undefined" && GUIDANCE.adult) {
    Object.assign(GUIDANCE.adult, adultGuidance);
  }

  if (typeof state !== "undefined" && state.scale === "adult" && typeof renderForm === "function") {
    renderForm();
  }
})();
