const model = {
    app: {
      userLoggedIn: null,
      currentPage: "loginPage",
    },
  
    input: {
      login: {
        userName: "",
        password: "",
      },
      createAccount: {
        email: "",
        userName: "",
        password: "",
      },
      createNewCharacter: {
        characterName: "",
      },
    },
    data: {
      users: [
        {
          userId: 1,
          userName: "abi",
          userEmail: "abibakar@getacademy.no",
          password: "1234",
        },
        {
          userId: 2,
          userName: "Chris",
          userEmail: "christoffer@getacademy.no",
          password: "1234",
        },
        {
          userId: 3,
          userName: "hakan",
          userEmail: "hakan@getacademy.no",
          password: "1234",
        },
        {
          userId: 4,
          userName: "leo",
          userEmail: "leonardo@getacademy.no",
          password: "1234",
        },
      ],
      userData: [
        {
          userId: 1,
          characterName: "asdf",
          health: 80,
          coding: 75,
          nk: 99,
          backpack: [],
        },
        {
          userId: 2,
          characterName: "jejej",
          health: 70,
          coding: 75,
          nk: 99,
          backpack: [],
        },
      ],
  
      characters: [
        {
          charId: 1,
          characterName: " ",
          characterArquetype: "Geek",
          codingPoints: 5,
          nkPoints: -5,
          image:  "./images/geek.jpg",
        },
        {
          charId: 2,
          characterName: " ",
          characterArquetype: "Charmer",
          codingPoints: -5,
          nkPoints: +5,
          image: "./images/charmer.png",
        },
        {
          charId: 3,
          characterName: " ",
          characterArquetype: "Avarage Joe",
          codingPoints: 0,
          nkPoints: 0,
          image: "./images/avarage.png",
        },
      ],
  
      bosses: [
        {
          bossId: 0,
          bossName: "Eskil",
          bossMsg: "Hei, jeg heter Eskil og jeg er kjempe flink på NK",
        },
        {
          bossId: 1,
          bossName: "Terje",
          bossMsg: "Vell vell, for å gå videre må du svare på spørsmålet:",
        },
        {
          bossId: 3,
          bossName: "elie marie",
          bossMsg: "Hei, jeg heter Ellie Marie og jeg er kjempe flink på git",
        },
      ],
  
      nkLevels: [
        {
          nkLevelId: 2,
          nkLevelName: "Growth Mindset",
          nkLevelText:
            "La oss se hvor langt du gikk på søket etter et bedre selv!",
        },
        {
          nkLevelId: 3,
          nkLevelName: "Locus of Control",
          nkLevelText: "Jeg lurer på hvilken del av spekteret du er nå.",
        },
        {
          nkLevelId: 4,
          nkLevelName: "Teamwork",
          nkLevelText:
            "Ikke få meg til å spørre teamkameratene dine hvor hyggelig du er!",
        },
      ],
  
      nkQuestions: [
        {
          nkLevelId: 2,
          questionId: 0,
          questionText: "Hva betyr Growth Mindset for deg?",
          rightAnswer: 2,
        },
  
        {
          nkLevelId: 3,
          questionId: 1,
          questionText: "Hva betyr Locus of Control",
          rightAnswer: 4,
        },
  
        {
          nkLevelId: 4,
          questionId: 2,
          questionText: "Hva betyr teamarbeid for deg",
          rightAnswer: 6,
        },
      ],
  
      nkAnswers: [
        {
          questionId: 0,
          answerId: 0,
          answerText: "Det betyr ingenting for meg",
        },
        {
          questionId: 0,
          answerId: 1,
          answerText: "Det betyr at vi er som trær",
        },
        {
          questionId: 0,
          answerId: 2,
          answerText:
            "Growth Mindset beskriver en måte å se utfordringer og tilbakeslag på.",
        },
        {
          questionId: 1,
          answerId: 3,
          answerText: "Det betyr ingenting for meg",
        },
        {
          questionId: 1,
          answerId: 4,
          answerText:
            "Locus of control er i hvilken grad mennesker tror at de, i motsetning til ytre krefter (utover deres innflytelse), har kontroll over utfallet av hendelser i deres liv.",
        },
        {
          questionId: 1,
          answerId: 5,
          answerText: "Jeg vet ikke",
        },
        {
          questionId: 2,
          answerId: 6,
          answerText:
            "teamarbeid er prosessen med å samarbeide med en gruppe mennesker for å oppnå et bestemt mål.",
        },
        {
          questionId: 2,
          answerId: 7,
          answerText: "Det betyr seier i sport",
        },
        {
          questionId: 2,
          answerId: 8,
          answerText: "Noe relatert til kjedelige ting",
        },
      ],
  
      codeLevels: [
        {
          codeLevelId: 1,
          codeLevelName: "console.log",
          codeLevelText:
            "La oss se hvor langt du gikk på søket etter en god developer!",
        },
        {
          codeLevelId: 2,
          codeLevelName: "MVC",
          codeLevelText:
            "La oss se hvor langt du gikk på søket etter en god developer!",
        },
        {
          codeLevelId: 3,
          codeLevelName: "Function",
          codeLevelText:
            "La oss se hvor langt du gikk på søket etter en god developer!",
        },
      ],
  
      codeQuestions: [
        {
          questionId: 1,
          codeLevelId: 1,
          questionText: "Hva er resultat av denne?console.log(1<0 && 1>0)",
          rightAnswer: 0,
        },
        {
          questionId: 2,
          codeLevelId: 2,
          questionText: "Hva betyr MVC?",
          rightAnswer: 3,
        },
        {
          questionId: 3,
          codeLevelId: 3,
          questionText: "Hvorfor bruker vi 'return' i function?",
          rightAnswer: 8,
        },
      ],
      codeAnswers: [
        {
          answerId: 0,
          questionId: 1,
          answerText: "false",
        },
        {
          answerId: 1,
          questionId: 1,
          answerText: "true",
        },
        {
          answerId: 2,
          questionId: 1,
          answerText: "error",
        },
        {
          answerId: 3,
          questionId: 2,
          answerText: "model view controller",
        },
        {
          answerId: 4,
          questionId: 2,
          answerText: "manage view constructor",
        },
        {
          answerId: 5,
          questionId: 2,
          answerText: "model vise const",
        },
        {
          answerId: 6,
          questionId: 3,
          answerText: "For å kalle function",
        },
        {
          answerId: 7,
          questionId: 3,
          answerText: "For å bruke returnere MVC",
        },
        {
          answerId: 8,
          questionId: 3,
          answerText: "For å returnere verdigen ut fra function",
        },
      ],
      visitLevels: [
        {
          visitLevelId: 1,
          visitLevelText: "hei",
          visitLevelName: "heihvordan går det med dere!!",
        },
        {
          visitLevelId: 2,
          visitLevelName: " hjelp",
          visitLevelText:
            "La oss se hvor langt du gikk på søket etter en god developer!",
        },
        {
          visitLevelId: 3,
          visitLevelName: "tilbake melding",
          visitLevelText:
            "dette er trnger fokusere mer, jeg vil at dere fjerner gjentat arrays!",
        },
      ],
      visitQuestions: [
        {
          questionId: 0,
          visitLevelId: 1,
          questionText: "hei hvordan går det med dere?",
          rightAnswer: 0,
        },
        {
          questionId: 1,
          visitLevelId: 2,
          questionText: "tranger dere hjelp  av noe?!",
          rightAnswer: 1,
        },
        {
          questionId: 2,
          visitLevelId: 3,
          questionText: "er dere klar til vise det dere har jobbet så langt?",
          rightAnswer: 1,
        },
      ],
  
      visitAswers: [
        {
          questionId: 0,
          answerId: 0,
          answerText: "bra",
        },
        {
          questionId: 0,
          answerId: 1,
          answerText: "ikke bra",
        },
        {
          questionId: 0,
          answerId: 2,
          answerText: "veldig bra",
        },
        {
          questionId: 1,
          answerId: 1,
          answerText: "ja, vi tranger hjelp",
        },
        {
          questionId: 1,
          answerId: 1,
          answerText: "nei, vi tranger ikke hjelp",
        },
        {
          questionId: 1,
          answerId: 2,
          answerText: "vi har spårsmøl!",
        },
        {
          questionId: 2,
          answerId: 6,
          answerText: "ja, vi er klar!!",
        },
        {
          questionId: 2,
          answerId: 7,
          answerText: "vi har litt igjen",
        },
        {
          questionId: 2,
          answerId: 8,
          answerText: "nei, vi er ikke klar",
        },
      ],
  
      items: [
        {
          itemId: 1,
          itemName: "mic",
          itemPoints: 12,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 2,
          itemName: "coin",
          itemPoints: 150,
          image: null,
        },
        {
          itemId: 3,
          itemName: "keyboard",
          itemPoints: 24,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 4,
          itemName: "chorei",
          itemPoints: 24,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 5,
          itemName: "redbull",
          itemPoints: 32,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 6,
          itemName: "moddle",
          itemPoints: 29,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 7,
          itemName: "mvc",
          itemPoints: 29,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 8,
          itemName: "gitHub",
          itemPoints: 29,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 9,
          itemName: "C# .Net",
          itemPoints: 29,
          coinValue: 60,
          image: null,
        },
        {
          itemId: 10,
          itemName: "JS",
          itemPoints: 29,
          coinValue: 60,
          image: null,
        },
      ],
    },
  };
  