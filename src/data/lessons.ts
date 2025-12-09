import { Lesson, LevelId } from '../types';

export const levels: Record<LevelId, { name: string; description: string }> = {
  A1: { name: 'Iniciante', description: 'Fundamentos básicos do italiano' },
  A2: { name: 'Básico', description: 'Construção de frases simples' },
  B1: { name: 'Intermediário', description: 'Conversações do dia a dia' },
  B2: { name: 'Intermediário Avançado', description: 'Expressões complexas' },
  C1: { name: 'Avançado', description: 'Fluência e precisão' },
  C2: { name: 'Proficiência', description: 'Domínio completo do idioma' }
};

export const lessons: Record<string, Lesson & { level: LevelId }> = {
  // ========== NÍVEL A1 - INICIANTE ==========
  'lesson-1': {
    id: 'lesson-1',
    level: 'A1',
    title: 'Saudações Básicas',
    description: 'Aprenda a cumprimentar em italiano',
    xpReward: 100,
    exercises: [
      {
        id: 'e1-1',
        type: 'translation',
        question: 'Oi (informal)',
        correctAnswer: 'Ciao',
        explanation: 'Ciao é usado entre amigos e familiares. É informal e pode significar tanto "oi" quanto "tchau".'
      },
      {
        id: 'e1-2',
        type: 'multiple_choice',
        question: 'Como se diz "bom dia"?',
        correctAnswer: 'Buongiorno',
        options: ['Buonasera', 'Buongiorno', 'Buonanotte', 'Ciao'],
        explanation: 'Buongiorno é usado desde a manhã até aproximadamente as 14h-16h.'
      },
      {
        id: 'e1-3',
        type: 'translation',
        question: 'Boa tarde / Boa noite',
        correctAnswer: 'Buonasera',
        explanation: 'Buonasera é usado após o meio-dia/tarde até a noite quando você vai dormir.'
      },
      {
        id: 'e1-4',
        type: 'multiple_choice',
        question: 'O que significa "Arrivederci"?',
        correctAnswer: 'Até logo (formal)',
        options: ['Olá', 'Até logo (formal)', 'Boa noite', 'Obrigado'],
        explanation: 'Arrivederci é uma despedida formal, significa "até nos vermos novamente".'
      },
      {
        id: 'e1-5',
        type: 'translation',
        question: 'Boa noite (ao dormir)',
        correctAnswer: 'Buonanotte',
        explanation: 'Buonanotte é usado apenas quando você está indo dormir ou desejando boa noite.'
      }
    ]
  },

  'lesson-2': {
    id: 'lesson-2',
    level: 'A1',
    title: 'Apresentações',
    description: 'Como se apresentar e conhecer pessoas',
    xpReward: 100,
    exercises: [
      {
        id: 'e2-1',
        type: 'translation',
        question: 'Meu nome é Marco',
        correctAnswer: 'Mi chiamo Marco',
        explanation: 'Mi chiamo significa literalmente "eu me chamo". É a forma mais comum de se apresentar.'
      },
      {
        id: 'e2-2',
        type: 'multiple_choice',
        question: 'Como perguntar "Como você se chama?" (informal)',
        correctAnswer: 'Come ti chiami?',
        options: ['Come stai?', 'Come ti chiami?', 'Dove abiti?', 'Quanti anni hai?'],
        explanation: 'Come ti chiami? é informal. A forma formal seria "Come si chiama?"'
      },
      {
        id: 'e2-3',
        type: 'translation',
        question: 'Prazer em conhecê-lo',
        correctAnswer: 'Piacere',
        explanation: 'Piacere é usado quando você conhece alguém pela primeira vez. Literalmente significa "prazer".'
      },
      {
        id: 'e2-4',
        type: 'multiple_choice',
        question: 'Como dizer "Eu sou brasileiro"?',
        correctAnswer: 'Sono brasiliano',
        options: ['Sono brasiliano', 'Mi chiamo brasiliano', 'Ho brasiliano', 'Faccio brasiliano'],
        explanation: 'Sono significa "eu sou". Brasiliano (masculino) ou brasiliana (feminino).'
      },
      {
        id: 'e2-5',
        type: 'translation',
        question: 'De onde você é?',
        correctAnswer: 'Di dove sei?',
        explanation: 'Di dove sei? é informal. A forma formal seria "Di dov\'è?"'
      }
    ]
  },

  'lesson-3': {
    id: 'lesson-3',
    level: 'A1',
    title: 'Números 1-20',
    description: 'Aprenda a contar em italiano',
    xpReward: 100,
    exercises: [
      {
        id: 'e3-1',
        type: 'multiple_choice',
        question: 'Qual é o número "cinque"?',
        correctAnswer: '5',
        options: ['3', '5', '7', '9'],
        explanation: 'Cinque = 5. Lembre-se: uno (1), due (2), tre (3), quattro (4), cinque (5).'
      },
      {
        id: 'e3-2',
        type: 'translation',
        question: 'dez',
        correctAnswer: 'dieci',
        explanation: 'Dieci = 10. É pronunciado "di-é-tchi".'
      },
      {
        id: 'e3-3',
        type: 'multiple_choice',
        question: 'O que é "quindici"?',
        correctAnswer: '15',
        options: ['12', '13', '15', '17'],
        explanation: 'Quindici = 15. Os números 11-19 têm formas especiais em italiano.'
      },
      {
        id: 'e3-4',
        type: 'translation',
        question: 'vinte',
        correctAnswer: 'venti',
        explanation: 'Venti = 20. É a base para 21-29 (ventuno, ventidue, etc.).'
      },
      {
        id: 'e3-5',
        type: 'multiple_choice',
        question: 'Como se diz "sete"?',
        correctAnswer: '7',
        options: ['6', '7', '8', '9'],
        explanation: 'Sette = 7. Não confunda com sei (6) ou otto (8).'
      }
    ]
  },

  'lesson-4': {
    id: 'lesson-4',
    level: 'A1',
    title: 'Cores',
    description: 'Aprenda as cores em italiano',
    xpReward: 100,
    exercises: [
      {
        id: 'e4-1',
        type: 'translation',
        question: 'vermelho',
        correctAnswer: 'rosso',
        explanation: 'Rosso (masculino) / rossa (feminino). As cores concordam em gênero e número.'
      },
      {
        id: 'e4-2',
        type: 'multiple_choice',
        question: 'Qual é a cor "blu"?',
        correctAnswer: 'azul',
        options: ['verde', 'azul', 'preto', 'branco'],
        explanation: 'Blu = azul. É invariável (não muda no feminino).'
      },
      {
        id: 'e4-3',
        type: 'translation',
        question: 'verde',
        correctAnswer: 'verde',
        explanation: 'Verde é igual em português e italiano! Verde (masc/fem singular), verdi (plural).'
      },
      {
        id: 'e4-4',
        type: 'multiple_choice',
        question: 'O que significa "giallo"?',
        correctAnswer: 'amarelo',
        options: ['cinza', 'amarelo', 'marrom', 'roxo'],
        explanation: 'Giallo = amarelo. Giallo (masc), gialla (fem).'
      },
      {
        id: 'e4-5',
        type: 'translation',
        question: 'branco',
        correctAnswer: 'bianco',
        explanation: 'Bianco (masculino) / bianca (feminino). Como em "vinho branco" = vino bianco.'
      }
    ]
  },

  'lesson-5': {
    id: 'lesson-5',
    level: 'A1',
    title: 'Família',
    description: 'Vocabulário sobre membros da família',
    xpReward: 100,
    exercises: [
      {
        id: 'e5-1',
        type: 'translation',
        question: 'mãe',
        correctAnswer: 'madre',
        explanation: 'Madre (formal) ou mamma (informal/carinhoso) significam mãe.'
      },
      {
        id: 'e5-2',
        type: 'multiple_choice',
        question: 'Como se diz "pai"?',
        correctAnswer: 'padre',
        options: ['fratello', 'padre', 'figlio', 'nonno'],
        explanation: 'Padre (formal) ou papà/babbo (informal). Atenção: "padre" também significa padre (religioso).'
      },
      {
        id: 'e5-3',
        type: 'translation',
        question: 'irmão',
        correctAnswer: 'fratello',
        explanation: 'Fratello = irmão. Sorella = irmã.'
      },
      {
        id: 'e5-4',
        type: 'multiple_choice',
        question: 'O que é "nonna"?',
        correctAnswer: 'avó',
        options: ['tia', 'avó', 'mãe', 'prima'],
        explanation: 'Nonna = avó, nonno = avô. Nonni = avós.'
      },
      {
        id: 'e5-5',
        type: 'translation',
        question: 'filho',
        correctAnswer: 'figlio',
        explanation: 'Figlio = filho, figlia = filha. Figli = filhos.'
      }
    ]
  },

  // ========== NÍVEL A2 - BÁSICO ==========
  'lesson-6': {
    id: 'lesson-6',
    level: 'A2',
    title: 'Verbos Essenciais - Essere',
    description: 'Conjugação do verbo "ser/estar"',
    xpReward: 150,
    exercises: [
      {
        id: 'e6-1',
        type: 'translation',
        question: 'Eu sou',
        correctAnswer: 'Io sono',
        explanation: 'Essere = ser/estar. Io sono (eu sou), tu sei (você é), lui/lei è (ele/ela é).'
      },
      {
        id: 'e6-2',
        type: 'multiple_choice',
        question: 'Como dizer "nós somos"?',
        correctAnswer: 'noi siamo',
        options: ['noi siamo', 'noi sono', 'noi sei', 'noi è'],
        explanation: 'Noi siamo = nós somos. Voi siete = vocês são, loro sono = eles/elas são.'
      },
      {
        id: 'e6-3',
        type: 'translation',
        question: 'Você é (informal)',
        correctAnswer: 'Tu sei',
        explanation: 'Tu sei é informal. A forma formal é "Lei è".'
      },
      {
        id: 'e6-4',
        type: 'multiple_choice',
        question: 'Complete: "Loro ___ italiani"',
        correctAnswer: 'sono',
        options: ['è', 'sei', 'siamo', 'sono'],
        explanation: 'Loro sono = eles/elas são. "Loro sono italiani" = Eles são italianos.'
      },
      {
        id: 'e6-5',
        type: 'translation',
        question: 'Ela é feliz',
        correctAnswer: 'Lei è felice',
        explanation: 'Lei è felice. Felice é invariável para masculino/feminino no singular.'
      }
    ]
  },

  'lesson-7': {
    id: 'lesson-7',
    level: 'A2',
    title: 'Verbos Essenciais - Avere',
    description: 'Conjugação do verbo "ter"',
    xpReward: 150,
    exercises: [
      {
        id: 'e7-1',
        type: 'translation',
        question: 'Eu tenho',
        correctAnswer: 'Io ho',
        explanation: 'Avere = ter. Io ho (eu tenho), tu hai (você tem), lui/lei ha (ele/ela tem).'
      },
      {
        id: 'e7-2',
        type: 'multiple_choice',
        question: 'Como dizer "você tem" (informal)?',
        correctAnswer: 'tu hai',
        options: ['tu ho', 'tu hai', 'tu ha', 'tu hanno'],
        explanation: 'Tu hai = você tem (informal). Lei ha = você tem (formal).'
      },
      {
        id: 'e7-3',
        type: 'translation',
        question: 'Nós temos fome',
        correctAnswer: 'Abbiamo fame',
        explanation: 'Noi abbiamo = nós temos. "Avere fame" = ter fome (expressão idiomática).'
      },
      {
        id: 'e7-4',
        type: 'multiple_choice',
        question: 'Complete: "Loro ___ una casa grande"',
        correctAnswer: 'hanno',
        options: ['ho', 'hai', 'abbiamo', 'hanno'],
        explanation: 'Loro hanno = eles têm. "Hanno una casa grande" = Eles têm uma casa grande.'
      },
      {
        id: 'e7-5',
        type: 'translation',
        question: 'Ele tem vinte anos',
        correctAnswer: 'Ha venti anni',
        explanation: 'Em italiano, idade usa o verbo "avere": "Ha venti anni" = Ele tem vinte anos.'
      }
    ]
  },

  'lesson-8': {
    id: 'lesson-8',
    level: 'A2',
    title: 'Comida e Bebida',
    description: 'Vocabulário essencial para restaurantes',
    xpReward: 150,
    exercises: [
      {
        id: 'e8-1',
        type: 'translation',
        question: 'água',
        correctAnswer: 'acqua',
        explanation: 'Acqua = água. "Acqua naturale" (sem gás) ou "acqua frizzante" (com gás).'
      },
      {
        id: 'e8-2',
        type: 'multiple_choice',
        question: 'O que é "pane"?',
        correctAnswer: 'pão',
        options: ['vinho', 'pão', 'queijo', 'carne'],
        explanation: 'Pane = pão. É masculino: il pane.'
      },
      {
        id: 'e8-3',
        type: 'translation',
        question: 'vinho',
        correctAnswer: 'vino',
        explanation: 'Vino = vinho. "Vino rosso" (tinto), "vino bianco" (branco).'
      },
      {
        id: 'e8-4',
        type: 'multiple_choice',
        question: 'Como se diz "café"?',
        correctAnswer: 'caffè',
        options: ['tè', 'caffè', 'latte', 'succo'],
        explanation: 'Caffè = café. "Un caffè" geralmente significa um espresso na Itália.'
      },
      {
        id: 'e8-5',
        type: 'translation',
        question: 'Eu gostaria de um café',
        correctAnswer: 'Vorrei un caffè',
        explanation: 'Vorrei = eu gostaria (forma educada de pedir). Vorrei un caffè, per favore.'
      }
    ]
  },

  'lesson-9': {
    id: 'lesson-9',
    level: 'A2',
    title: 'Dias da Semana e Tempo',
    description: 'Falar sobre dias e horários',
    xpReward: 150,
    exercises: [
      {
        id: 'e9-1',
        type: 'translation',
        question: 'segunda-feira',
        correctAnswer: 'lunedì',
        explanation: 'Lunedì = segunda-feira. Todos os dias da semana são masculinos em italiano.'
      },
      {
        id: 'e9-2',
        type: 'multiple_choice',
        question: 'Qual dia é "sabato"?',
        correctAnswer: 'sábado',
        options: ['sexta', 'sábado', 'domingo', 'quinta'],
        explanation: 'Sabato = sábado. Domenica = domingo.'
      },
      {
        id: 'e9-3',
        type: 'translation',
        question: 'Que horas são?',
        correctAnswer: 'Che ore sono?',
        explanation: 'Che ore sono? = Que horas são? (plural). Resposta: "Sono le tre" (São três horas).'
      },
      {
        id: 'e9-4',
        type: 'multiple_choice',
        question: 'Como dizer "hoje"?',
        correctAnswer: 'oggi',
        options: ['ieri', 'oggi', 'domani', 'ora'],
        explanation: 'Oggi = hoje. Ieri = ontem, domani = amanhã.'
      },
      {
        id: 'e9-5',
        type: 'translation',
        question: 'amanhã de manhã',
        correctAnswer: 'domani mattina',
        explanation: 'Domani mattina = amanhã de manhã. Mattina = manhã, sera = noite.'
      }
    ]
  },

  'lesson-10': {
    id: 'lesson-10',
    level: 'A2',
    title: 'No Restaurante',
    description: 'Frases úteis para pedir comida',
    xpReward: 150,
    exercises: [
      {
        id: 'e10-1',
        type: 'translation',
        question: 'O cardápio, por favor',
        correctAnswer: 'Il menù, per favore',
        explanation: 'Il menù = o cardápio. "Per favore" = por favor (sempre educado!).'
      },
      {
        id: 'e10-2',
        type: 'multiple_choice',
        question: 'Como pedir a conta?',
        correctAnswer: 'Il conto, per favore',
        options: ['La carta, per favore', 'Il conto, per favore', 'Il prezzo, per favore', 'La lista, per favore'],
        explanation: 'Il conto = a conta. É comum pedir "Il conto, per favore" ao final da refeição.'
      },
      {
        id: 'e10-3',
        type: 'translation',
        question: 'Eu gostaria de reservar uma mesa',
        correctAnswer: 'Vorrei prenotare un tavolo',
        explanation: 'Prenotare = reservar. Un tavolo = uma mesa. "Vorrei prenotare un tavolo per due persone".'
      },
      {
        id: 'e10-4',
        type: 'multiple_choice',
        question: 'O que significa "Buon appetito"?',
        correctAnswer: 'Bom apetite',
        options: ['Boa sorte', 'Bom apetite', 'Obrigado', 'De nada'],
        explanation: 'Buon appetito = Bom apetite. Dito antes de comer. Resposta: "Grazie, altrettanto!"'
      },
      {
        id: 'e10-5',
        type: 'translation',
        question: 'Estava delicioso',
        correctAnswer: 'Era buonissimo',
        explanation: 'Buonissimo = delicioso (superlativo de buono). Era = estava.'
      }
    ]
  },

  // ========== NÍVEL B1 - INTERMEDIÁRIO ==========
  'lesson-11': {
    id: 'lesson-11',
    level: 'B1',
    title: 'Verbos no Passato Prossimo',
    description: 'Falar sobre o passado recente',
    xpReward: 200,
    exercises: [
      {
        id: 'e11-1',
        type: 'translation',
        question: 'Eu comi',
        correctAnswer: 'Ho mangiato',
        explanation: 'Passato prossimo = avere/essere + particípio. Ho mangiato (eu comi).'
      },
      {
        id: 'e11-2',
        type: 'multiple_choice',
        question: 'Como dizer "eu fui" (andare)?',
        correctAnswer: 'sono andato',
        options: ['ho andato', 'sono andato', 'ero andato', 'fui andato'],
        explanation: 'Verbos de movimento usam ESSERE: sono andato/a (eu fui).'
      },
      {
        id: 'e11-3',
        type: 'translation',
        question: 'Nós vimos (vedere)',
        correctAnswer: 'Abbiamo visto',
        explanation: 'Abbiamo visto = nós vimos. O particípio de vedere é visto.'
      },
      {
        id: 'e11-4',
        type: 'multiple_choice',
        question: 'Qual particípio de "fare" (fazer)?',
        correctAnswer: 'fatto',
        options: ['fato', 'fatto', 'fetto', 'facito'],
        explanation: 'Fare → fatto (irregular). Ho fatto = eu fiz.'
      },
      {
        id: 'e11-5',
        type: 'translation',
        question: 'Ela chegou',
        correctAnswer: 'È arrivata',
        explanation: 'Arrivare usa ESSERE: è arrivato/a. No feminino: è arrivata.'
      }
    ]
  },

  'lesson-12': {
    id: 'lesson-12',
    level: 'B1',
    title: 'Direções e Localização',
    description: 'Perguntar e dar direções',
    xpReward: 200,
    exercises: [
      {
        id: 'e12-1',
        type: 'translation',
        question: 'Onde fica a estação?',
        correctAnswer: 'Dov\'è la stazione?',
        explanation: 'Dov\'è = onde fica/está. La stazione = a estação (de trem).'
      },
      {
        id: 'e12-2',
        type: 'multiple_choice',
        question: 'Como dizer "vire à direita"?',
        correctAnswer: 'giri a destra',
        options: ['vada dritto', 'giri a destra', 'giri a sinistra', 'torni indietro'],
        explanation: 'Giri a destra = vire à direita (formal). A sinistra = à esquerda.'
      },
      {
        id: 'e12-3',
        type: 'translation',
        question: 'Vá em frente',
        correctAnswer: 'Vada dritto',
        explanation: 'Vada dritto = vá em frente (formal). Vai dritto = informal.'
      },
      {
        id: 'e12-4',
        type: 'multiple_choice',
        question: 'O que significa "vicino a"?',
        correctAnswer: 'perto de',
        options: ['longe de', 'perto de', 'dentro de', 'fora de'],
        explanation: 'Vicino a = perto de. Lontano da = longe de.'
      },
      {
        id: 'e12-5',
        type: 'translation',
        question: 'O banco fica ao lado da farmácia',
        correctAnswer: 'La banca è accanto alla farmacia',
        explanation: 'Accanto a = ao lado de. La banca (banco), la farmacia (farmácia).'
      }
    ]
  },

  'lesson-13': {
    id: 'lesson-13',
    level: 'B1',
    title: 'Compras e Preços',
    description: 'Vocabulário para fazer compras',
    xpReward: 200,
    exercises: [
      {
        id: 'e13-1',
        type: 'translation',
        question: 'Quanto custa?',
        correctAnswer: 'Quanto costa?',
        explanation: 'Quanto costa? = Quanto custa? Quanto costano? (plural).'
      },
      {
        id: 'e13-2',
        type: 'multiple_choice',
        question: 'Como dizer "é muito caro"?',
        correctAnswer: 'è troppo caro',
        options: ['è molto buono', 'è troppo caro', 'è poco caro', 'è sempre caro'],
        explanation: 'È troppo caro = é muito caro. Caro/a = caro. A buon prezzo = barato.'
      },
      {
        id: 'e13-3',
        type: 'translation',
        question: 'Eu vou levar este',
        correctAnswer: 'Prendo questo',
        explanation: 'Prendo = eu vou levar/comprar. Questo = este, quella = aquele.'
      },
      {
        id: 'e13-4',
        type: 'multiple_choice',
        question: 'O que é "sconto"?',
        correctAnswer: 'desconto',
        options: ['conta', 'desconto', 'preço', 'troco'],
        explanation: 'Sconto = desconto. C\'è uno sconto? = Tem desconto?'
      },
      {
        id: 'e13-5',
        type: 'translation',
        question: 'Posso pagar com cartão?',
        correctAnswer: 'Posso pagare con carta?',
        explanation: 'Posso pagare = posso pagar. Con carta = com cartão. In contanti = em dinheiro.'
      }
    ]
  },

  'lesson-14': {
    id: 'lesson-14',
    level: 'B1',
    title: 'Tempo e Clima',
    description: 'Falar sobre o tempo e estações',
    xpReward: 200,
    exercises: [
      {
        id: 'e14-1',
        type: 'translation',
        question: 'Que tempo está?',
        correctAnswer: 'Che tempo fa?',
        explanation: 'Che tempo fa? = Como está o tempo? Resposta: Fa bello/brutto (está bom/ruim).'
      },
      {
        id: 'e14-2',
        type: 'multiple_choice',
        question: 'Como dizer "está chovendo"?',
        correctAnswer: 'piove',
        options: ['nevica', 'piove', 'fa caldo', 'fa freddo'],
        explanation: 'Piove = está chovendo. Nevica = está nevando.'
      },
      {
        id: 'e14-3',
        type: 'translation',
        question: 'Está quente',
        correctAnswer: 'Fa caldo',
        explanation: 'Fa caldo = está quente. Fa freddo = está frio. Usa-se o verbo "fare".'
      },
      {
        id: 'e14-4',
        type: 'multiple_choice',
        question: 'Qual é a estação "primavera"?',
        correctAnswer: 'primavera',
        options: ['inverno', 'verão', 'primavera', 'outono'],
        explanation: 'Primavera = primavera. Estate (verão), autunno (outono), inverno (inverno).'
      },
      {
        id: 'e14-5',
        type: 'translation',
        question: 'Há sol',
        correctAnswer: 'C\'è il sole',
        explanation: 'C\'è il sole = há sol. C\'è = há (singular). Ci sono = há (plural).'
      }
    ]
  },

  'lesson-15': {
    id: 'lesson-15',
    level: 'B1',
    title: 'Saúde e Corpo',
    description: 'Vocabulário médico básico',
    xpReward: 200,
    exercises: [
      {
        id: 'e15-1',
        type: 'translation',
        question: 'Minha cabeça dói',
        correctAnswer: 'Mi fa male la testa',
        explanation: 'Mi fa male = me dói. La testa = a cabeça. "Fare male" = doer.'
      },
      {
        id: 'e15-2',
        type: 'multiple_choice',
        question: 'O que é "febbre"?',
        correctAnswer: 'febre',
        options: ['tosse', 'febre', 'dor', 'remédio'],
        explanation: 'Febbre = febre. Ho la febbre = estou com febre.'
      },
      {
        id: 'e15-3',
        type: 'translation',
        question: 'Preciso de um médico',
        correctAnswer: 'Ho bisogno di un medico',
        explanation: 'Ho bisogno di = preciso de. Un medico = um médico. Una dottoressa = uma médica.'
      },
      {
        id: 'e15-4',
        type: 'multiple_choice',
        question: 'Como dizer "farmácia"?',
        correctAnswer: 'farmacia',
        options: ['ospedale', 'farmacia', 'medicina', 'dottore'],
        explanation: 'Farmacia = farmácia. Ospedale = hospital.'
      },
      {
        id: 'e15-5',
        type: 'translation',
        question: 'Estou me sentindo mal',
        correctAnswer: 'Non mi sento bene',
        explanation: 'Non mi sento bene = não me sinto bem. Mi sento male = me sinto mal.'
      }
    ]
  },

  // ========== NÍVEL B2 - INTERMEDIÁRIO AVANÇADO ==========
  'lesson-16': {
    id: 'lesson-16',
    level: 'B2',
    title: 'Congiuntivo Presente',
    description: 'Modo subjuntivo para dúvidas e desejos',
    xpReward: 250,
    exercises: [
      {
        id: 'e16-1',
        type: 'translation',
        question: 'Espero que você esteja bem',
        correctAnswer: 'Spero che tu stia bene',
        explanation: 'Congiuntivo após "sperare che". Stia é congiuntivo de stare.'
      },
      {
        id: 'e16-2',
        type: 'multiple_choice',
        question: 'Complete: "Penso che lui ___ italiano" (essere)',
        correctAnswer: 'sia',
        options: ['è', 'sia', 'sono', 'sei'],
        explanation: 'Sia é congiuntivo de essere. "Penso che" requer congiuntivo.'
      },
      {
        id: 'e16-3',
        type: 'translation',
        question: 'É importante que você venha',
        correctAnswer: 'È importante che tu venga',
        explanation: 'Expressões impessoais + che = congiuntivo. Venga é congiuntivo de venire.'
      },
      {
        id: 'e16-4',
        type: 'multiple_choice',
        question: 'Qual forma de congiuntivo de "avere" para "io"?',
        correctAnswer: 'abbia',
        options: ['ho', 'abbia', 'abbo', 'avessi'],
        explanation: 'Io abbia, tu abbia, lui abbia, noi abbiamo, voi abbiate, loro abbiano.'
      },
      {
        id: 'e16-5',
        type: 'translation',
        question: 'Embora seja difícil',
        correctAnswer: 'Benché sia difficile',
        explanation: 'Benché/sebbene (embora) sempre requer congiuntivo. Sia = subjuntivo de essere.'
      }
    ]
  },

  'lesson-17': {
    id: 'lesson-17',
    level: 'B2',
    title: 'Expressões Idiomáticas',
    description: 'Expressões comuns italianas',
    xpReward: 250,
    exercises: [
      {
        id: 'e17-1',
        type: 'multiple_choice',
        question: 'O que significa "In bocca al lupo"?',
        correctAnswer: 'Boa sorte',
        options: ['Com fome', 'Boa sorte', 'Muito cansado', 'Até logo'],
        explanation: '"Na boca do lobo" = Boa sorte! Resposta: "Crepi!" (que ele morra!).'
      },
      {
        id: 'e17-2',
        type: 'translation',
        question: 'Custa um olho da cara',
        correctAnswer: 'Costa un occhio della testa',
        explanation: 'Expressão idiomática: "custa um olho da cabeça" = muito caro.'
      },
      {
        id: 'e17-3',
        type: 'multiple_choice',
        question: 'O que significa "Avere le mani in pasta"?',
        correctAnswer: 'Estar envolvido em algo',
        options: ['Estar com fome', 'Estar envolvido em algo', 'Estar cansado', 'Estar perdido'],
        explanation: '"Ter as mãos na massa" = estar envolvido/participando de algo.'
      },
      {
        id: 'e17-4',
        type: 'translation',
        question: 'Chover canivetes (expressão para chover muito)',
        correctAnswer: 'Piovere a catinelle',
        explanation: 'Piovere a catinelle = chover muito forte (lit: chover em bacias).'
      },
      {
        id: 'e17-5',
        type: 'multiple_choice',
        question: '"Essere al verde" significa:',
        correctAnswer: 'Estar sem dinheiro',
        options: ['Estar feliz', 'Estar sem dinheiro', 'Estar doente', 'Estar com inveja'],
        explanation: 'Essere al verde = estar sem dinheiro/quebrado.'
      }
    ]
  },

  'lesson-18': {
    id: 'lesson-18',
    level: 'B2',
    title: 'Conversação Avançada',
    description: 'Expressar opiniões e argumentar',
    xpReward: 250,
    exercises: [
      {
        id: 'e18-1',
        type: 'translation',
        question: 'Na minha opinião',
        correctAnswer: 'Secondo me',
        explanation: 'Secondo me = na minha opinião. A mio parere = no meu parecer (mais formal).'
      },
      {
        id: 'e18-2',
        type: 'multiple_choice',
        question: 'Como dizer "concordo completamente"?',
        correctAnswer: 'Sono completamente d\'accordo',
        options: ['Non sono d\'accordo', 'Sono completamente d\'accordo', 'Forse hai ragione', 'Non è vero'],
        explanation: 'Sono (completamente) d\'accordo = concordo (completamente).'
      },
      {
        id: 'e18-3',
        type: 'translation',
        question: 'Por outro lado',
        correctAnswer: 'D\'altra parte',
        explanation: 'D\'altra parte / d\'altro canto = por outro lado. Útil para contrastar ideias.'
      },
      {
        id: 'e18-4',
        type: 'multiple_choice',
        question: 'Como expressar dúvida?',
        correctAnswer: 'Non ne sono sicuro',
        options: ['Sono sicuro', 'Non ne sono sicuro', 'È certamente vero', 'Senza dubbio'],
        explanation: 'Non ne sono sicuro = não tenho certeza. Forse = talvez.'
      },
      {
        id: 'e18-5',
        type: 'translation',
        question: 'Você tem razão',
        correctAnswer: 'Hai ragione',
        explanation: 'Avere ragione = ter razão. Hai torto = você está errado.'
      }
    ]
  },

  'lesson-19': {
    id: 'lesson-19',
    level: 'B2',
    title: 'Trabalho e Profissões',
    description: 'Vocabulário profissional',
    xpReward: 250,
    exercises: [
      {
        id: 'e19-1',
        type: 'translation',
        question: 'Qual é sua profissão?',
        correctAnswer: 'Qual è la tua professione?',
        explanation: 'Che lavoro fai? / Qual è la tua professione? = Qual é sua profissão?'
      },
      {
        id: 'e19-2',
        type: 'multiple_choice',
        question: 'Como dizer "estou procurando emprego"?',
        correctAnswer: 'Sto cercando lavoro',
        options: ['Ho un lavoro', 'Sto cercando lavoro', 'Lavoro qui', 'Non lavoro'],
        explanation: 'Cercare lavoro = procurar emprego. Sto cercando = estou procurando.'
      },
      {
        id: 'e19-3',
        type: 'translation',
        question: 'Trabalho em uma empresa',
        correctAnswer: 'Lavoro in un\'azienda',
        explanation: 'Un\'azienda = uma empresa. Lavorare in = trabalhar em.'
      },
      {
        id: 'e19-4',
        type: 'multiple_choice',
        question: 'O que é "collega"?',
        correctAnswer: 'colega',
        options: ['chefe', 'colega', 'funcionário', 'cliente'],
        explanation: 'Collega = colega (m/f). Il capo = o chefe.'
      },
      {
        id: 'e19-5',
        type: 'translation',
        question: 'Tenho uma reunião',
        correctAnswer: 'Ho una riunione',
        explanation: 'Riunione = reunião. Ho un appuntamento = tenho um compromisso.'
      }
    ]
  },

  'lesson-20': {
    id: 'lesson-20',
    level: 'B2',
    title: 'Cultura Italiana',
    description: 'História, arte e tradições',
    xpReward: 250,
    exercises: [
      {
        id: 'e20-1',
        type: 'multiple_choice',
        question: 'Qual é a capital da Itália?',
        correctAnswer: 'Roma',
        options: ['Milano', 'Roma', 'Venezia', 'Firenze'],
        explanation: 'Roma é a capital da Itália. Tem mais de 2.500 anos de história.'
      },
      {
        id: 'e20-2',
        type: 'translation',
        question: 'A torre de Pisa',
        correctAnswer: 'La torre di Pisa',
        explanation: 'La torre di Pisa = A torre de Pisa. Famosa por sua inclinação.'
      },
      {
        id: 'e20-3',
        type: 'multiple_choice',
        question: 'Quem pintou a Capela Sistina?',
        correctAnswer: 'Michelangelo',
        options: ['Leonardo da Vinci', 'Michelangelo', 'Raffaello', 'Caravaggio'],
        explanation: 'Michelangelo pintou o teto da Capela Sistina entre 1508-1512.'
      },
      {
        id: 'e20-4',
        type: 'translation',
        question: 'A ópera italiana',
        correctAnswer: 'L\'opera italiana',
        explanation: 'L\'opera = a ópera. A Itália é o berço da ópera (Verdi, Puccini, Rossini).'
      },
      {
        id: 'e20-5',
        type: 'multiple_choice',
        question: 'O que é "la passeggiata"?',
        correctAnswer: 'Passeio noturno tradicional',
        options: ['Uma dança', 'Passeio noturno tradicional', 'Uma comida', 'Uma festa'],
        explanation: 'La passeggiata é o passeio tradicional à noite nas ruas italianas.'
      }
    ]
  },

  // ========== LIÇÕES BÔNUS ==========
  'lesson-21': {
    id: 'lesson-21',
    level: 'C1',
    title: 'Literatura Italiana',
    description: 'Grandes autores e obras',
    xpReward: 300,
    exercises: [
      {
        id: 'e21-1',
        type: 'multiple_choice',
        question: 'Quem escreveu "A Divina Comédia"?',
        correctAnswer: 'Dante Alighieri',
        options: ['Dante Alighieri', 'Petrarca', 'Boccaccio', 'Manzoni'],
        explanation: 'Dante Alighieri escreveu "La Divina Commedia" no século XIV.'
      },
      {
        id: 'e21-2',
        type: 'translation',
        question: 'O escritor',
        correctAnswer: 'Lo scrittore',
        explanation: 'Lo scrittore = o escritor. La scrittrice = a escritora.'
      },
      {
        id: 'e21-3',
        type: 'multiple_choice',
        question: 'Qual obra de Italo Calvino?',
        correctAnswer: 'Il barone rampante',
        options: ['Il nome della rosa', 'Il barone rampante', 'Il Gattopardo', 'La coscienza di Zeno'],
        explanation: '"Il barone rampante" (O Barão nas Árvores) é de Italo Calvino, 1957.'
      },
      {
        id: 'e21-4',
        type: 'translation',
        question: 'Ler um livro',
        correctAnswer: 'Leggere un libro',
        explanation: 'Leggere = ler. Un libro = um livro. Un romanzo = um romance.'
      },
      {
        id: 'e21-5',
        type: 'multiple_choice',
        question: 'O que é "un racconto"?',
        correctAnswer: 'Um conto',
        options: ['Um poema', 'Um conto', 'Uma biografia', 'Um ensaio'],
        explanation: 'Un racconto = um conto (história curta). Una novella = uma novela.'
      }
    ]
  },

  'lesson-22': {
    id: 'lesson-22',
    level: 'C1',
    title: 'Política e Sociedade',
    description: 'Vocabulário para discussões sociais',
    xpReward: 300,
    exercises: [
      {
        id: 'e22-1',
        type: 'translation',
        question: 'O governo',
        correctAnswer: 'Il governo',
        explanation: 'Il governo = o governo. Il parlamento = o parlamento.'
      },
      {
        id: 'e22-2',
        type: 'multiple_choice',
        question: 'Como dizer "direitos humanos"?',
        correctAnswer: 'diritti umani',
        options: ['diritti civili', 'diritti umani', 'diritti sociali', 'diritti politici'],
        explanation: 'I diritti umani = os direitos humanos. Fundamentais para a democracia.'
      },
      {
        id: 'e22-3',
        type: 'translation',
        question: 'A democracia',
        correctAnswer: 'La democrazia',
        explanation: 'La democrazia = a democracia. Democratico = democrático.'
      },
      {
        id: 'e22-4',
        type: 'multiple_choice',
        question: 'O que é "elezioni"?',
        correctAnswer: 'Eleições',
        options: ['Protestos', 'Eleições', 'Debates', 'Votações'],
        explanation: 'Le elezioni = as eleições. Votare = votar.'
      },
      {
        id: 'e22-5',
        type: 'translation',
        question: 'A constituição',
        correctAnswer: 'La costituzione',
        explanation: 'La costituzione = a constituição. Lei fundamental do país.'
      }
    ]
  }
};

// Função helper para obter lições por nível
export function getLessonsByLevel(level: LevelId): (Lesson & { level: LevelId })[] {
  return Object.values(lessons).filter(lesson => lesson.level === level);
}

// Função helper para verificar se uma lição está desbloqueada
export function isLessonUnlocked(lessonId: string, completedLessons: string[]): boolean {
  const lessonNumber = parseInt(lessonId.split('-')[1]);
  if (lessonNumber === 1) return true;
  
  const previousLessonId = `lesson-${lessonNumber - 1}`;
  return completedLessons.includes(previousLessonId);
}

// Estatísticas de progresso
export function calculateProgress(completedLessons: string[]): {
  totalLessons: number;
  completedCount: number;
  percentage: number;
  levelProgress: Record<LevelId, { total: number; completed: number }>;
} {
  const totalLessons = Object.keys(lessons).length;
  const completedCount = completedLessons.length;
  const percentage = Math.round((completedCount / totalLessons) * 100);

  const levelProgress: Record<LevelId, { total: number; completed: number }> = {
    A1: { total: 0, completed: 0 },
    A2: { total: 0, completed: 0 },
    B1: { total: 0, completed: 0 },
    B2: { total: 0, completed: 0 },
    C1: { total: 0, completed: 0 },
    C2: { total: 0, completed: 0 }
  };

  Object.values(lessons).forEach(lesson => {
    levelProgress[lesson.level].total++;
    if (completedLessons.includes(lesson.id)) {
      levelProgress[lesson.level].completed++;
    }
  });

  return { totalLessons, completedCount, percentage, levelProgress };
}
