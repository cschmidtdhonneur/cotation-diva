(() => {
  const adultGuidance = {
    A1: {
      question: "Avez-vous souvent du mal à prêter attention aux détails, ou faites-vous souvent des erreurs d’étourderie dans votre travail ou dans d’autres activités ? Comment était-ce dans votre enfance (dans le travail scolaire ou dans d’autres activités) ?",
      examplesByPeriod: {
        current: ["Fait des erreurs d’étourderie", "Travaille lentement pour éviter les erreurs", "Le travail est imprécis", "Ne lit pas les instructions avec soin", "Néglige ou manque des détails", "Besoin de trop de temps pour mener à leur terme des tâches minutieuses ou comportant de nombreux détails", "Facilement empêtré par les détails", "Commet des erreurs parce que travaille trop rapidement", "Autre:"],
        childhood: ["Erreurs d’étourderie dans le travail scolaire", "Erreurs parce qu’il ne lisait pas les questions correctement", "Néglige ou manque des détails", "Le travail est imprécis", "Ne répondait pas à des questions parce qu’il ne les lisait pas correctement", "Ne répondait pas aux questions posées au verso d’un examen", "Les autres faisaient remarquer que le travail n’était pas soigné", "Ne vérifiait pas ses réponses dans les devoirs scolaires", "Besoin de trop de temps pour mener à leur terme des tâches minutieuses ou comportant de nombreux détails", "Autre:"]
      }
    },
    A2: {
      question: "Trouvez-vous souvent difficile de maintenir votre attention sur des tâches ? Comment était-ce dans votre enfance (dans les activités de jeu) ?",
      examplesByPeriod: {
        current: ["Incapable de maintenir longtemps l’attention sur des tâches*", "Facilement distrait par ses propres pensées ou associations d’idées", "Facilement distrait par des pensées sans rapport avec la tâche ou le contexte", "Du mal à rester concentré pendant des conférences et/ou des conversations", "Difficile de suivre un film jusqu’à la fin, ou de lire un livre*", "Rapidement ennuyé par les choses*", "Pose des questions sur des sujets déjà discutés", "Autre:"],
        childhood: ["Du mal à maintenir l’attention lors du travail scolaire", "Du mal à maintenir l’attention sur un jeu*", "Du mal à rester concentré pendant des cours et/ou des conversations", "Facilement distrait", "Du mal à se concentrer*", "Besoin d’un environnement structuré pour ne pas être distrait", "Rapidement lassé dans ses activités*", "Autre:"]
      },
      note: "*A moins que le patient trouve le sujet particulièrement intéressant (par exemple, ordinateur ou hobby)"
    },
    A3: {
      question: "Donnez-vous souvent l’impression de ne pas écouter lorsqu’on vous parle directement ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Rêveur ou préoccupé", "Du mal à se concentrer pendant une conversation", "Après-coup, ne se rappelle pas du sujet d’une conversation", "Change souvent de sujet dans une conversation", "D’autres personnes vous disent que vos pensées sont ailleurs", "L’esprit est ailleurs, même en l’absence d’une distraction évidente", "Autre:"],
        childhood: ["Ne sait plus ce que les parents/enseignants ont dit", "Rêveur ou préoccupé", "Besoin d’un contact visuel ou qu’on élève la voix pour écouter", "L’esprit est ailleurs, même en l’absence d’une distraction évidente", "Souvent il faut l’appeler plusieurs fois", "Les questions doivent être répétées", "Autre:"]
      }
    },
    A4: {
      question: "Avez-vous souvent du mal à suivre les consignes et à mener à terme vos tâches domestiques ou vos obligations professionnelles au travail ? Comment était-ce dans votre enfance (dans le travail scolaire) ?",
      examplesByPeriod: {
        current: ["Fait plusieurs tâches en même temps sans les terminer", "Commence quelque chose mais perd très vite sa concentration et est facilement détourné du but", "Besoin de fixer une durée limite pour terminer les tâches", "Du mal à terminer les tâches administratives", "Du mal à suivre les instructions dans un manuel", "Autre:"],
        childhood: ["Du mal à suivre les consignes", "En difficulté lorsque les tâches comprennent plusieurs étapes successives", "Commence quelque chose mais perd très vite sa concentration et est facilement détourné du but", "Ne termine pas les choses", "Ne termine pas les devoirs ou ne les rend pas", "A besoin de structure pour pouvoir terminer les tâches", "Autre:"]
      }
    },
    A5: {
      question: "Trouvez-vous souvent difficile d’organiser les tâches ou les activités ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Du mal à planifier les activités de la vie quotidienne", "Du mal à gérer des tâches séquentielles", "La maison et/ou l’espace de travail est en désordre", "Du mal à maintenir en ordre des documents ou des effets personnels", "Travaille de manière brouillonne ou désorganisée", "Planifie trop de tâches ou planification inefficace", "Prévoit régulièrement de faire plusieurs choses au même moment (doublons)", "Arrive en retard", "Ne respecte pas les dates limites", "Incapable d’utiliser un agenda ou un journal personnel de manière efficace", "Rigide pour arriver à respecter le planning", "Faible conscience et mauvaise gestion du temps", "Établit des plannings sans les utiliser", "Besoin qu’un tiers structure les choses", "Autre:"],
        childhood: ["Du mal à être prêt à temps", "Chambre / bureau en désordre et/ou travail brouillon", "Du mal à maintenir en ordre des documents ou des effets personnels", "Du mal à jouer seul", "Du mal à planifier des tâches ou ses devoirs", "Ne respecte pas les dates limites", "Fait les choses de manière embrouillée", "Arrive en retard", "Faible conscience du temps", "Du mal à s’occuper seul", "Autre:"]
      }
    },
    A6: {
      question: "Évitez-vous souvent (ou avez-vous en aversion, ou faites-vous à contrecœur) les tâches qui nécessitent un effort mental soutenu ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Fait en premier les choses les plus faciles ou les plus agréables", "Remet souvent à plus tard les tâches ennuyeuses ou difficiles", "Remet à plus tard les tâches jusqu’à dépasser les échéances", "Évite les tâches monotones, comme les tâches administratives", "Évite de rédiger des rapports, remplir des formulaires ou vérifier des documents longs", "N’aime pas lire à cause de l’effort mental", "Évite des tâches qui demandent beaucoup de concentration", "Autre:"],
        childhood: ["Évite les devoirs ou les a en aversion", "Lit peu de livres ou n’aime pas lire à cause de l’effort mental", "Évite des tâches qui demandent beaucoup de concentration", "Déteste les sujets scolaires qui demandent beaucoup de concentration", "Remet à plus tard les tâches ennuyeuses ou difficiles", "Autre:"]
      }
    },
    A7: {
      question: "Perdez-vous souvent les objets nécessaires à votre travail ou vos activités ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Égare outils, paperasse, lunettes, téléphone portable, portefeuille, clés, ou agenda", "Oublie des choses en quittant un lieu", "Perd des papiers pour son travail", "Perd beaucoup de temps à chercher des choses", "Panique si des gens ont changé des choses de place", "Range les choses au mauvais endroit", "Perd des notes, listes ou numéros de téléphone", "Autre:"],
        childhood: ["Perd son matériel scolaire, crayons, livres, ou d’autres choses encore", "Égare des jouets, habits ou devoirs scolaires", "Perd beaucoup de temps à chercher des choses", "Panique si des gens ont changé des choses de place", "Les parents et/ou les enseignants font remarquer qu’il a perdu des choses", "Autre:"]
      }
    },
    A8: {
      question: "Vous laissez-vous souvent facilement distraire par des stimuli externes ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Du mal à ignorer des stimuli externes", "Du mal à reprendre le fil après avoir été distrait", "Facilement distrait par des bruits ou des événements", "Facilement distrait par une conversation entre d’autres personnes", "Du mal à filtrer et/ou sélectionner des informations", "Autre:"],
        childhood: ["En classe, il regarde souvent dehors", "Facilement distrait par des bruits ou des événements", "Du mal à reprendre le fil après avoir été distrait", "Autre:"]
      }
    },
    A9: {
      question: "Oubliez-vous souvent ce que vous avez à faire dans vos activités quotidiennes ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Oublie des rendez-vous ou des obligations", "Oublie les clés, l’agenda, etc.", "A besoin de rappels fréquents concernant les rendez-vous", "Oublie de payer des factures ou de rappeler des personnes", "Retourne à la maison pour récupérer des choses oubliées", "Utilise des listes de manière rigide pour être sûr de ne rien oublier", "Ne tient pas à jour son agenda et/ou oublie de consulter son agenda", "Oublie de faire ses corvées ou ses courses", "Autre:"],
        childhood: ["Oublie des rendez-vous ou des consignes", "Oublie de faire ses corvées ou ses courses", "On doit souvent lui rappeler les choses", "S’arrête en chemin parce qu’il a oublié ce qu’il devait faire", "Oublie d’apporter des affaires à l’école", "Oublie des choses à l’école ou chez des amis", "Autre:"]
      }
    },
    H1: {
      question: "Remuez-vous souvent les mains ou les pieds, tapotez-vous souvent des doigts ou tapez-vous souvent des pieds, ou vous tortillez-vous souvent sur votre siège ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Du mal à rester assis immobile", "Remue les jambes", "Tapote avec un stylo ou joue avec un objet", "Tortille les cheveux ou ronge les ongles", "Capable de contrôler l’agitation mais ressent du stress", "Autre:"],
        childhood: ["Les parents disent souvent des choses comme « tiens-toi tranquille »", "Remue les jambes", "Tapote avec un stylo ou joue avec un objet", "Tortille les cheveux ou ronge les ongles", "Incapable de rester assis de façon relaxée", "Capable de contrôler l’agitation mais ressent du stress", "Autre:"]
      }
    },
    H2: {
      question: "Vous levez-vous souvent dans des situations où vous êtes supposé rester assis ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Se lève souvent de son siège au bureau ou sur son lieu de travail", "Évite les réunions, les conférences, les cérémonies religieuses, etc.", "Préfère marcher plutôt que rester assis", "Ne reste jamais longtemps assis tranquille, bouge sans cesse", "Stressé par l’obligation de rester assis", "Cherche des excuses pour pouvoir se déplacer", "Autre:"],
        childhood: ["Se lève souvent pendant les repas ou quitte sa place en classe", "Trouve très difficile de rester assis en classe ou pendant les repas", "On lui dit souvent de rester assis", "Cherche des excuses pour pouvoir se déplacer", "Autre:"]
      }
    },
    H3: {
      question: "Vous sentez-vous souvent agité ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Se sent agité ou nerveux à l’intérieur", "Ressent constamment le sentiment d’avoir quelque chose à faire", "Trouve difficile de se relaxer", "Autre:"],
        childhood: ["Toujours court alors cela n’est pas approprié", "Grimpe sur les meubles ou saute sur les fauteuils", "Monte aux arbres", "Se sent agité à l’intérieur", "Autre:"]
      }
    },
    H4: {
      question: "Trouvez-vous souvent difficile de profiter tranquillement d’un moment de détente ? Comment était-ce dans votre enfance (dans les activités de jeu) ?",
      examplesByPeriod: {
        current: ["Parle pendant les activités alors que cela n’est pas approprié", "Se met rapidement en avant en public", "Bruyant dans tout type de situations", "Du mal à faire des activités tranquillement", "Du mal à parler doucement", "Autre:"],
        childhood: ["Parle à voix haute en jouant ou en classe", "Incapable de regarder la TV ou un film tranquillement", "On lui demande souvent de se calmer ou d’être plus tranquille", "Se met rapidement en avant en public", "Autre:"]
      }
    },
    H5: {
      question: "Êtes-vous souvent « sur la brèche » ou comme si vous étiez « dirigé par un moteur » ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Toujours occupé à faire quelque chose", "Pas à l’aise de devoir rester assis pour une longue durée, par exemple au restaurant ou dans des réunions", "Déborde d’énergie, toujours en mouvement", "On vous trouve agité ou difficile à suivre", "Dépasse ses propres limites", "Lâche difficilement prise, excessivement insistant", "Autre:"],
        childhood: ["Constamment occupé", "On vous trouve agité ou difficile à suivre", "Pas à l’aise de devoir rester assis pour une longue durée", "Se fait remarquer par son activité en classe ou à la maison", "Déborde d’énergie", "Toujours sur la brèche, monté sur ressorts", "Autre:"]
      }
    },
    H6: {
      question: "Parlez-vous souvent trop ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Parle tellement que les gens trouvent cela fatigant", "Connu pour parler de manière incessante", "Trouve difficile d’arrêter de parler", "Tendance à trop parler", "Ne laisse pas l’occasion aux autres d’intervenir dans une conversation", "Besoin de beaucoup de mots pour dire quelque chose", "Autre:"],
        childhood: ["Connu comme un « moulin à paroles »", "Les enfants ou les enseignants demandent souvent de se taire", "Les bulletins scolaires mentionnent souvent des bavardages", "Puni pour avoir trop parler", "Gêne le travail scolaire des autres en parlant trop", "Ne laisse pas les autres parler dans une conversation", "Autre:"]
      }
    },
    H7: {
      question: "Laissez-vous souvent échapper la réponse à une question qui n’est pas encore entièrement posée ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Pipelette, dit ce qu’il pense", "Dit les choses sans réfléchir", "Donne des réponses avant que les gens aient fini de parler", "Finit les phrases des autres", "Manque de tact", "Autre:"],
        childhood: ["Pipelette, dit les choses sans réfléchir", "Veut être le premier à répondre aux questions en classe", "Donne la première réponse qui lui vient à l’esprit", "Interrompt les autres avant que les phrases soient finies", "Du mal à attendre son tour dans des conversations", "Donne l’impression de manquer de tact", "Autre:"]
      }
    },
    H8: {
      question: "Trouvez-vous souvent difficile d’attendre votre tour ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Difficulté à attendre dans une file d’attente, veut doubler dans une file d’attente", "Du mal à attendre patiemment dans la circulation ou les embouteillages", "Impatient", "Démarre rapidement ou met brutalement un terme à des relations ou des emplois par impatience", "Autre:"],
        childhood: ["Du mal à attendre son tour dans les activités en groupe", "Du mal à attendre son tour en classe", "Toujours le premier à parler ou agir", "Rapidement impatient", "Traverse la route sans regarder", "Autre:"]
      }
    },
    H9: {
      question: "Interrompez-vous souvent les autres ou imposez-vous votre présence ? Comment était-ce dans votre enfance ?",
      examplesByPeriod: {
        current: ["Prompt à gêner les autres", "Impose sa présence aux autres (intrusif)", "Dérange les autres dans leurs activités sans qu’on lui ait rien demandé, ou fait à leur place", "Les autres font remarquer qu’il est intrusif", "Du mal à respecter les limites des autres", "A une opinion sur tout et la donne immédiatement", "Autre:"],
        childhood: ["Interrompt les autres dans leurs jeux ou leurs activités", "Utilise les affaires des autres sans leur demander ou sans leur permission", "Interrompt les conversations des autres", "Réagit sur tout", "Incapable d’attendre", "Autre:"]
      }
    }
  };

  const youngGuidance = {
    A1: {
      question: "Avez-vous souvent du mal à prêter attention aux détails, ou faites-vous des erreurs d’étourderie dans votre travail ou dans d’autres activités ?",
      examples: ["Fait des erreurs d’étourderie dans son travail scolaire en ne lisant pas complètement les consignes", "Ne répond pas à des questions au recto ou au verso d’un sujet d’examen parce qu’il ne les a pas lues", "On lui reproche un manque de soins dans son travail", "Il ne vérifie pas ses réponses dans ses devoirs à la maison", "Il doit travailler lentement pour éviter les erreurs", "Le travail est peu précis", "Ne lit pas les consignes avec soin, les survole ou passe à côté des détails", "A besoin de plus de temps pour aller au bout des tâches minutieuses", "Bute facilement sur les détails", "Fait trop d’erreurs parce qu’il travaille trop vite", "Autre:"]
    },
    A2: {
      question: "Avez-vous souvent du mal à maintenir votre attention pendant des tâches ?",
      examples: ["A du mal à maintenir longtemps son attention dans son travail ou les jeux*", "Facilement distrait par des stimuli externes ou par ses propres pensées", "A besoin d’une structure pour résister à la distraction", "A du mal à rester concentré pendant les cours et/ou des discussions", "Trouve difficile de regarder un film jusqu’à la fin, ou de lire un livre*", "S’ennuie facilement*", "Pose des questions sur des sujets déjà discutés", "Autre:"],
      note: "*A moins que le sujet l’intéresse particulièrement (par exemple, informatique ou passe-temps)"
    },
    A3: {
      question: "Est-ce vous donnez souvent l’impression de ne pas entendre alors qu’on vous parle directement ?",
      examples: ["Ne sait pas ce que les parents ou les enseignants viennent de dire", "On le dit rêveur ou préoccupé", "On lui dit que ses pensées sont souvent ailleurs", "N’écoute que s’il a un contact visuel ou si la voix est haussée", "On doit souvent l’appeler plusieurs fois ou lui reposer les questions", "A du mal à se concentrer pendant une discussion", "Après coup, ne se rappelle le sujet d’une conversation", "Change souvent de sujet dans une conversation", "Autre:"]
    },
    A4: {
      question: "Avez-vous souvent du mal à suivre les instructions et souvent du mal à terminer les tâches et les corvées ?",
      examples: ["A du mal à suivre les consignes (par exemple, dans un manuel)", "Du mal à suivre les instructions sur plusieurs étapes", "Du mal à aller au bout (une fois que la nouveauté est passée)", "Besoin de beaucoup de structure pour terminer les tâches", "Fait les choses de manière confuse sans aller au bout", "Commence mais se déconcentre très vite et facilement détourné", "Besoin d’une date/heure butoir pour aller au bout", "Du mal à terminer les tâches administratives ou les devoirs scolaire", "Autre:"]
    },
    A5: {
      question: "Trouvez-vous souvent difficile d’organiser des tâches et des activités ?",
      examples: ["Du mal à planifier les activités de la vie quotidienne ou planification inefficace", "Du mal à gérer les tâches séquentielles (par exemple, travail désordonné ou désorganisé)", "Du mal garder les objets et les biens en ordre ou à garder la chambre organisée", "Du mal à s’amuser", "N’arrive pas à respecter les dates limites", "Ne peut pas utiliser systématiquement un agenda ou un journal", "Inflexible par besoin de respecter strictement des plannings", "Faible sens du temps et de sa gestion, ou souvent en retard", "Besoin que d’autres structurent les choses à sa place", "Autre:"]
    },
    A6: {
      question: "Est-ce que vous évitez, ou avez-vous de l’aversion pour ou êtes-vous réticent devant des tâches qui demandent un effort mental soutenu ?",
      examples: ["Fait les choses faciles et les plus amusantes en premier", "Reporte à plus tard les tâches ennuyeuses ou difficile et dépasse de ce fait les dates limites", "Évite le travail monotone, comme l’administratif", "N’apprécie pas la lecture à cause de l’effort mental que cela demande", "Évite les tâches qui demandent un effort de concentration comme les devoirs", "Déteste les sujets scolaires qui demandent beaucoup de concentration", "Autre:"]
    },
    A7: {
      question: "Perdez-vous souvent des choses nécessaires à vos tâches et activités ?",
      examples: ["Perd des papiers pour ses devoirs, des notes, des listes ou des numéros de téléphone", "Les parents et/ou les enseignants lui reprochent de perdre des choses", "Perd beaucoup de temps à chercher ses affaires", "Panique si d’autres ont déplacé ses affaires", "Pose des objets au mauvais emplacement", "Oublie souvent des choses derrière lui", "Autre:"]
    },
    A8: {
      question: "Etes-vous souvent distrait par des stimuli extérieurs ?",
      examples: ["Du mal à ignorer les stimuli externes", "En classe, regarde souvent au dehors", "Du mal à reprendre le fil des choses après avoir été distrait", "Facilement distrait par les discussions des autres", "Du mal à filtrer et/ou sélectionner les informations", "Autre:"]
    },
    A9: {
      question: "Etes-vous souvent oublieux dans vos activités quotidiennes ?",
      examples: ["Oublie les rendez-vous, les instructions et autres obligations", "Oublie les clés, son agenda, etc.", "A besoin de nombreux rappels pour ses rendez-vous et ses affaires", "S’arrête à mi-chemin en ayant oublié ce qu’il devait faire", "Utilise des listes de manière rigide pour ne rien oublier", "Oublie de tenir à jour ou de regarder son agenda", "Oublie ses tâches ménagères ou de faire ses courses", "Autre:"]
    },
    H1: {
      question: "Vous remuez-vous souvent, tapotez-vous des doigts, bougez-vous les pieds ou vous tortillez-vous sur votre chaise ?",
      examples: ["Du mal à rester assis immobile", "Remue les jambes", "Tapote avec un crayon ou joue avec quelque chose", "Tripote les cheveux ou ronge les ongles", "Incapable de rester assis dans une chaise de manière détendue", "Contrôle sa nervosité mais au prix d’un sentiment de tension", "Autre:"]
    },
    H2: {
      question: "Vous levez-vous souvent d’un siège où vous êtes censé rester assis ?",
      examples: ["Trouve très difficile de rester assis à l’école ou pendant les repas", "Se lève souvent pendant le repas ou dans la classe", "Évite les cours, les conférences, les services religieux, etc.", "Préfère marcher plutôt que rester assis", "Ne reste jamais assis longtemps, se déplace tout le temps", "Tension liée à la difficulté de rester assis immobile", "Trouve des excuses pour se déplacer/bouger", "Autre:"]
    },
    H3: {
      question: "Vous sentez-vous souvent nerveux ?",
      examples: ["Toujours à courir", "Grimpe sur les meubles ou saute sur le canapé", "Grimpe dans les arbres", "Se sent nerveux ou agité à l’intérieur", "Sentiment constant d’avoir quelque chose à faire", "Trouve difficile de se détendre", "Autre:"]
    },
    H4: {
      question: "Trouvez-vous souvent difficile de participer à des activités de manière calme ?",
      examples: ["Parler fort dans les jeux ou en classe", "Incapable de suivre silencieusement une émission télévisée ou un film", "On vous demande de vous taire ou de vous calmer", "Parle pendant des activités alors qu’il ne faut pas", "Devient rapidement trop confiant en public", "Parler fort dans toutes sortes de situations", "Du mal à faire des activités en silence", "Du mal à parler à voix basse", "Autre:"]
    },
    H5: {
      question: "Est-ce que vous ne vous arrêtez jamais ou agissez-vous comme si vous étiez « monté sur des ressorts » ?",
      examples: ["Excessivement actif à l’école ou à la maison", "Trouvé occupé à faire quelque chose", "Se sent inconfortable de devoir rester assis calmement pendant une période prolongée, par exemple au restaurant ou dans des réunions", "Trop plein d’énergie", "On le trouve agité ou il est difficile de suivre sa cadence", "Dépasse ses propres limites", "Difficile de laisser aller les choses, va trop loin", "Autre:"]
    },
    H6: {
      question: "Parlez-vous souvent de manière excessive ?",
      examples: ["Parle tellement que les gens trouvent cela fatiguant", "Connu pour parler continuellement, moulin à paroles", "Les parents et les enseignants demandent souvent le silence", "Appréciations scolaires ou punitions liées au bavardage", "Trouve difficile de s’arrêter de parler", "Tendance à parler trop", "Empêche les autres de travailler en parlant trop", "Ne laisse pas aux autres la possibilité d’intervenir pendant une conversion", "Besoin de beaucoup de mots pour dire quelque chose", "Autre:"]
    },
    H7: {
      question: "Est-ce qu’une réponse vous échappe souvent avant que la question ait été totalement posée ?",
      examples: ["Pipelette, parle sans réfléchir", "Veut être le premier à répondre en classe", "Lâche une réponse même si elle est fausse", "Interrompt les autres ou répond avant la fin des phrases", "Termine les phrases des autres", "Donne l’impression de manquer de tact", "Autre:"]
    },
    H8: {
      question: "Trouvez-vous souvent difficile d’attendre votre tour ?",
      examples: ["Difficile d’attendre son tour dans des activités en groupe, en classe ou pendant une conversation", "Toujours le premier à parler ou agir", "Traverse la route sans regarder", "Du mal à attendre dans une file, coupe la file", "Impatient", "Débute ou termine rapidement des relations par impatience", "Autre:"]
    },
    H9: {
      question: "Interrompez-vous souvent ou êtes-vous intrusif ?",
      examples: ["S’immisce dans les jeux des autres", "Interrompt les conversations", "Réagit sur tout", "Incapable d’attendre", "Rapide à déranger les autres", "Perturbe les activités des autres sans qu’on ne lui demande rien, ou fait à leur place", "Du mal à respecter l’espace des autres", "A une opinion sur tout et la donne sur-le-champ", "Autre:"]
    },
    C1: {
      question: "Dans le domaine travail / études, ces symptômes causent-ils ou ont-ils causé des problèmes ?",
      examples: ["N’a pas atteint le niveau d’études attendu sur la base du QI", "N’a pas atteint un niveau de diplôme permettant d’accéder à la vie active", "A atteint le niveau d’études attendu sur la base du QI mais avec plus d’efforts que les autres", "Redoublement à cause de problèmes de concentration", "A fini ses études en plus d’années que nécessaire", "Parcours scolaire interrompu / renvoi définitif d’un établissement scolaire", "Du mal à faire ses devoirs scolaires", "Orienté vers l’éducation spéciale à cause des symptômes du TDAH", "Commentaires des enseignants sur le comportement et/ou la concentration", "Du mal avec le travail administratif ou la planification", "Gêne limitée car compensée par un QI élevé", "Gêne limitée car compensée par une structure externe", "Autre:"]
    },
    C2: {
      question: "Dans les relations avec les autres et/ou la famille, ces symptômes causent-ils ou ont-ils causé des problèmes ?",
      examples: ["Fréquentes disputes avec les frères et sœurs", "Punitions fréquentes voire gifles", "Peu de contact avec la famille du fait de conflits", "Structuration par parents obligatoire pour une période plus longue qu’attendu", "N’ose pas initier une relation avec quelqu’un", "Autre:"]
    },
    C3: {
      question: "Dans la socialisation, ces symptômes causent-ils ou ont-ils causé des problèmes ?",
      examples: ["Peu d’amis", "Objet de moqueries", "En groupe, on le fait taire ou on l’empêche de participer à des activités", "Tyrannique", "Rapidement lassé des relations sociales", "Du mal à maintenir des relations sociales", "Problèmes de communication engendrant des conflits", "Du mal à initier des relations sociales", "Faible estime de soi du fait d’expériences négatives", "Ne fait pas attention (par exemple, oublie d’envoyer des cartes, d’appeler au téléphone, de montrer de l’empathie)", "Autre:"]
    },
    C4: {
      question: "Dans le temps libre / les hobbies, ces symptômes causent-ils ou ont-ils causé des problèmes ?",
      examples: ["Incapable de se détendre vraiment pendant son temps libre", "Doit pratiquer de nombreux sports pour se détendre", "Se blesse en faisant trop de sport", "Incapable de finir de lire un livre ou de regarder un film jusqu’au bout", "Toujours occupé et, par conséquent, surmené", "Se lasse facilement de ses loisirs", "Recherche des sensations fortes et/ou prend trop de risques", "Problèmes avec la police et/ou la justice", "Accidents plus nombreux que les autres enfants/adolescents", "Trouble du comportement alimentaire à type d’hyperphagie ou de gloutonnerie", "Autre:"]
    },
    C5: {
      question: "Concernant la confiance en soi / l’image de soi, ces symptômes causent-ils ou ont-ils causé des problèmes ?",
      examples: ["Doute de lui-même à cause de commentaires négatifs des autres", "Image de soi négative à cause d’expériences d’échecs", "Peur de l’échec quand il doit faire des choses nouvelles", "Perfectionnisme", "Abattu par les symptômes du TDAH", "Autre:"]
    },
    C6: {
      question: "La gêne est-elle objectivée dans au moins deux environnements ?",
      examples: ["Maison", "École / collège / lycée", "Relations familiales", "Socialisation", "Temps libre / hobbies", "Confiance en soi / image de soi", "Autre:"]
    }
  };

  const periodLabelById = {
    current: "Exemples à l’âge adulte",
    childhood: "Exemples pendant l’enfance"
  };

  Object.assign(GUIDANCE.adult, adultGuidance);
  Object.assign(GUIDANCE.young, youngGuidance);

  function getGuidanceExamples(guidance, periods) {
    if (guidance.examplesByPeriod) {
      return periods.flatMap(period => guidance.examplesByPeriod[period.id] || []);
    }
    return guidance.examples || [];
  }

  renderGuidance = function renderGuidance(itemId, guidance, periods) {
    if (guidance.examplesByPeriod) {
      return `
        <details class="guidance" open>
          <summary>Question à poser et éléments à cocher</summary>
          <div class="guidance-body">
            <p><strong>Question.</strong> ${escapeHtml(guidance.question)}</p>
            <div class="period-evidence-grid" style="--period-count: ${periods.length}">
              ${periods.map(period => renderPeriodEvidenceColumn(itemId, guidance, period)).join("")}
            </div>
            ${guidance.note ? `<p class="guidance-note">${escapeHtml(guidance.note)}</p>` : ""}
          </div>
        </details>
      `;
    }

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
  };

  function renderPeriodEvidenceColumn(itemId, guidance, period) {
    const examples = guidance.examplesByPeriod[period.id] || [];
    return `
      <div class="period-evidence-column">
        <h5>${escapeHtml(periodLabelById[period.id] || period.label)}</h5>
        <div class="period-evidence-list">
          ${examples.map((example, index) => renderPeriodEvidenceItem(itemId, example, index, period)).join("")}
        </div>
      </div>
    `;
  }

  function renderPeriodEvidenceItem(itemId, example, index, period) {
    const evidence = getEvidence(itemId, index, period.id);
    return `
      <div class="period-evidence-item" data-period-label="${escapeHtml(period.label)}">
        <label class="mini-check">
          <input type="checkbox" data-evidence-item="${itemId}" data-evidence-index="${index}" data-evidence-period="${period.id}" ${evidence.checked ? "checked" : ""}>
          <span>${escapeHtml(example)}</span>
        </label>
        <textarea rows="1" data-evidence-note="${itemId}:${index}:${period.id}" data-evidence-item="${itemId}" data-evidence-index="${index}" data-evidence-period="${period.id}" placeholder="Élément rapporté">${escapeHtml(evidence.note || "")}</textarea>
      </div>
    `;
  }

  const originalRenderForm = renderForm;
  renderForm = function renderFormWithExactAdultItems() {
    originalRenderForm();
    els.root.querySelectorAll(".item-card").forEach(card => {
      const text = card.textContent.toLowerCase();
      card.dataset.filter = `${card.dataset.filter || ""} ${text}`;
    });
  };

  function sectionForSummary(summaryKey) {
    return SCALES[state.scale].sections.find(section => section.summaryKey === summaryKey);
  }

  function countPeriodYes(section, periodId) {
    if (!section) return 0;
    return section.items.reduce((total, [code]) => total + (getResponse(code, periodId).value === "yes" ? 1 : 0), 0);
  }

  function checkedEvidenceDetails() {
    const scale = SCALES[state.scale];
    const details = [];

    scale.sections.forEach(section => {
      const periods = section.responseMode === "single" ? [{ id: "global", label: "Cotation" }] : scale.periods;
      section.items.forEach(([code, title]) => {
        const guidance = getGuidance(code);
        if (!guidance) return;

        periods.forEach(period => {
          const examples = guidance.examplesByPeriod
            ? (guidance.examplesByPeriod[period.id] || [])
            : (guidance.examples.some(example => example.toLowerCase().includes("autre")) ? guidance.examples : [...guidance.examples, "autre élément rapporté"]);

          examples.forEach((example, index) => {
            const evidence = getEvidence(code, index, period.id);
            if (!evidence.checked && !evidence.note) return;
            details.push({
              code,
              title,
              period: period.label,
              example,
              checked: evidence.checked,
              note: evidence.note || ""
            });
          });
        });
      });
    });

    return details;
  }

  collectCheckedEvidence = function collectCheckedEvidenceWithExactAdultItems() {
    return checkedEvidenceDetails().map(item => {
      const marker = item.checked ? "coché" : "noté";
      const note = item.note ? ` : ${item.note}` : "";
      return `${item.code} ${item.title} - ${item.period} - ${item.example} (${marker})${note}`;
    });
  };

  function responseDetails() {
    const scale = SCALES[state.scale];
    const details = [];

    scale.sections.forEach(section => {
      const periods = section.responseMode === "single" ? [{ id: "global", label: "Cotation" }] : scale.periods;
      section.items.forEach(([code, title]) => {
        periods.forEach(period => {
          const response = getResponse(code, period.id);
          details.push({
            code,
            title,
            period: period.label,
            value: response.value || "",
            comment: response.comment || ""
          });
        });
      });
    });

    return details;
  }

  function yesItemsForPeriod(summaryKey, periodId) {
    const section = sectionForSummary(summaryKey);
    if (!section) return [];
    return section.items
      .filter(([code]) => getResponse(code, periodId).value === "yes")
      .map(([code, title]) => `${code} ${title}`);
  }

  function paragraphFromEvidence(details, periodLabel, codes) {
    return details
      .filter(item => item.period === periodLabel && codes.includes(item.code))
      .map(item => {
        const note = item.note ? ` (« ${item.note} »)` : "";
        return `${item.code} ${item.example}${note}`;
      });
  }

  function cleanText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function sentenceFromList(items, emptyText, limit = 8) {
    const clean = items.map(cleanText).filter(Boolean);
    if (!clean.length) return emptyText;
    const visible = clean.slice(0, limit);
    const suffix = clean.length > limit ? `, ainsi que ${clean.length - limit} autre(s) élément(s) renseigné(s)` : "";
    return `${visible.join(", ")}${suffix}.`;
  }

  function summarizeClinicalNotes(notes) {
    if (!notes.length) return "Aucune note clinique par domaine n’a été renseignée.";
    return notes
      .slice(0, 5)
      .map(note => {
        const [title, ...rest] = note.split(" : ");
        const content = cleanText(rest.join(" : "));
        return `${title} : ${content.slice(0, 600)}${content.length > 600 ? "..." : ""}`;
      })
      .join("\n");
  }

  function positiveItemSentence(label, items) {
    return items.length
      ? `${label} : les items cotés positivement concernent ${items.join(", ")}.`
      : `${label} : aucun item n’est coté positivement dans les réponses renseignées.`;
  }

  function periodSentenceLabel(label) {
    const normalized = String(label || "").toLowerCase();
    if (normalized.includes("âge adulte")) return "l’âge adulte";
    if (normalized.includes("actuel")) return "la période actuelle";
    if (normalized.includes("enfance")) return "l’enfance";
    if (normalized.includes("avant 12")) return "la période avant 12 ans";
    return `la période ${normalized}`;
  }

  function buildEvidenceSentence(label, evidenceItems) {
    return `${label} : ${sentenceFromList(evidenceItems.map(item => item.replace(/^[A-Z/0-9]+\\s+/, "")), "aucun exemple clinique n’a été coché ou renseigné pour cette période.")}`;
  }

  function collectCommentedDomains(responses) {
    const domains = [...new Set(responses.filter(item => item.comment).map(item => `${item.code} ${item.title} (${item.period})`))];
    return sentenceFromList(domains, "Aucune précision complémentaire n’a été saisie dans les commentaires de cotation.", 10);
  }

  function trimReport(lines) {
    const maxChars = 16500;
    const text = lines.join("\n");
    if (text.length <= maxChars) return text;
    const required = "\n\nNote de longueur\nLe compte rendu a été condensé automatiquement afin de rester dans une longueur compatible avec un document d’environ six pages maximum.";
    return `${text.slice(0, maxChars - required.length).replace(/\s+\S*$/, "")}${required}`;
  }

  generateReport = function generateClinicalReport() {
    updateSummary();
    const scale = SCALES[state.scale];
    const attention = sectionForSummary("attention");
    const hyper = sectionForSummary("hyper");
    const evidence = checkedEvidenceDetails();
    const responses = responseDetails().filter(item => item.comment || item.value);
    const primaryPeriod = scale.periods[0] || { id: "current", label: "Âge adulte" };
    const secondaryPeriod = scale.periods[1] || { id: "childhood", label: "Enfance" };
    const adultAttention = countPeriodYes(attention, primaryPeriod.id);
    const childAttention = countPeriodYes(attention, secondaryPeriod.id);
    const adultHyper = countPeriodYes(hyper, primaryPeriod.id);
    const childHyper = countPeriodYes(hyper, secondaryPeriod.id);
    const adultPositiveCodes = [
      ...yesItemsForPeriod("attention", primaryPeriod.id),
      ...yesItemsForPeriod("hyper", primaryPeriod.id)
    ];
    const childPositiveCodes = [
      ...yesItemsForPeriod("attention", secondaryPeriod.id),
      ...yesItemsForPeriod("hyper", secondaryPeriod.id)
    ];
    const adultCodes = adultPositiveCodes.map(label => label.split(" ")[0]);
    const childCodes = childPositiveCodes.map(label => label.split(" ")[0]);
    const adultEvidence = paragraphFromEvidence(evidence, primaryPeriod.label, adultCodes);
    const childEvidence = paragraphFromEvidence(evidence, secondaryPeriod.label, childCodes);
    const responseComments = responses.filter(item => item.comment);
    const sectionNotes = typeof collectSectionNotes === "function" ? collectSectionNotes() : [];
    const lines = [];

    lines.push(`Compte rendu clinique - ${scale.title}`);
    lines.push("");
    lines.push("1. Informations générales");
    lines.push(`Patient : ${state.meta.patient || "Non renseigné"}`);
    lines.push(`Date de naissance : ${formatDisplayDate(state.meta.birthdate) || "Non renseignée"}`);
    lines.push(`Profession / niveau scolaire : ${state.meta.profession || "Non renseigné"}`);
    lines.push(`Date de l’entretien : ${formatDisplayDate(state.meta.date) || "Non renseignée"}`);
    lines.push(`Clinicien : ${state.meta.clinician || "Non renseigné"}`);
    lines.push(`Source(s) : ${state.meta.informant || "Non renseignée(s)"}`);
    lines.push("");
    lines.push("2. Motif et plaintes rapportées");
    lines.push("Motif de consultation");
    lines.push(state.context.reason || "Non renseigné.");
    lines.push("Plaintes rapportées");
    lines.push(state.context.complaints || "Non renseignées.");
    lines.push("");
    lines.push("3. Résultats de la cotation");
    lines.push(`Pour ${periodSentenceLabel(primaryPeriod.label)}, ${adultAttention}/9 critère(s) d’inattention et ${adultHyper}/9 critère(s) d’hyperactivité-impulsivité sont cotés positivement.`);
    lines.push(`Pour ${periodSentenceLabel(secondaryPeriod.label)}, ${childAttention}/9 critère(s) d’inattention et ${childHyper}/9 critère(s) d’hyperactivité-impulsivité sont cotés positivement.`);
    lines.push(`Les retentissements ou contextes cochés sont au nombre de ${latestSummary.impact}. Statut de synthèse : ${els.status.textContent}. ${els.detail.textContent}`);
    lines.push("");
    lines.push("4. Synthèse descriptive des éléments renseignés");
    lines.push(positiveItemSentence(primaryPeriod.label, adultPositiveCodes));
    lines.push(buildEvidenceSentence(primaryPeriod.label, adultEvidence));
    lines.push(positiveItemSentence(secondaryPeriod.label, childPositiveCodes));
    lines.push(buildEvidenceSentence(secondaryPeriod.label, childEvidence));
    lines.push(`Les précisions saisies dans les commentaires concernent principalement : ${collectCommentedDomains(responseComments)}`);
    lines.push("");
    lines.push("5. Notes cliniques saisies");
    lines.push("Notes générales");
    lines.push(state.notes || "Non renseignées.");
    lines.push("Notes par domaine");
    lines.push(summarizeClinicalNotes(sectionNotes));
    lines.push("");
    lines.push("6. Conclusion descriptive à reprendre cliniquement");
    lines.push("Cette synthèse restitue les cotations et éléments renseignés au cours de l’entretien. Elle ne constitue pas, à elle seule, une conclusion diagnostique et doit être articulée à l’anamnèse, au fonctionnement quotidien, aux informations collatérales disponibles, au contexte développemental et aux diagnostics différentiels.");
    lines.push("");
    lines.push("Encadré de référence clinique HAS");
    lines.push(HAS_NOTICE);

    state.report = trimReport(lines);
    els.generatedReport.value = state.report;
    autoGrow(els.generatedReport);
    saveState();
    document.querySelector(".report-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (els?.report) {
    els.report.addEventListener("click", () => setTimeout(generateReport, 0));
  }

  renderForm();
})();
