const goals = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
      "Your smile is contagious!",
      "You have a great sense of humor.",
      "You bring out the best in other people.",
      "You're a great listener",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  }, 
  getFortune: (req, res) => { 
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A beautiful, smart, and loving person will be coming into your life.",
      "A beautiful, smart, and loving person will be coming into your life.",
      "A hunch is creativity trying to tell you something.",
      "A person is never to old to learn",
      "A lifetime of happiness lies ahead of you.",
      "A smile is your personal welcome mat.",
      "All your hard work will soon pay off.",
      "Believe in yourself and others will too.",
      "Change is happening in your life, so go with the flow!",
      "Don’t just spend time. Invest it.",
      "Take care and sensitivity you show towards others will return to you.",
    ];

    // choose random compliment

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomfortune = fortunes[randomIndex];
    res.status(200).send(randomfortune);
  },
  getInspireQuotes: (req, res) => {
    const inspireQuotes = [
      `"When you have a dream, you've got to grab it and never let go." 
        — Carol Burnett`,
      `"Nothing is impossible. The word itself says 'I'm possible!'" 
        — Audrey Hepburn`,
      `"There is nothing impossible to they who will try." 
        — Alexander the Great`,
      `"The bad news is time flies. The good news is you're the pilot." 
        — Michael Altshuler`,
      `"Life has got all those twists and turns. You've got to hold on tight and off you go." 
        — Nicole Kidman`,
      `"Keep your face always toward the sunshine, and shadows will fall behind you." 
        — Walt Whitman`,
      `"You define your own life. Don't let other people write your script." 
        — Oprah Winfrey`,
      `"You are never too old to set another goal or to dream a new dream." 
        — Malala Yousafzai`,
      `"Spread love everywhere you go." 
        — Mother Teresa`,
      `"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on." 
        — Lady Gaga`,
      `"If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is." 
        — Gabrielle Bernstein`,
      `"You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens." 
        — Mandy Hale`,
      `"You can be everything. You can be the infinite amount of things that people are."`,
      `"It is during our darkest moments that we must focus to see the light." 
        — Aristotle`,
      `"In a gentle way, you can shake the world." 
        — Mahatma Gandhi`,
      `"Try to be a rainbow in someone's cloud." 
        — Maya Angelou`,
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * inspireQuotes.length);
    let randomInspireQuote = inspireQuotes[randomIndex];

    res.status(200).send(randomInspireQuote);
  },
  createNewGoal: (req, res) => {
    const { newGoal } = req.body;
    goals.push(newGoal);

    res.status(200).send(goals);
  },
  updateGoal: (req, res) => {
    let goalid = +req.params.goalid - 1;
    let { goaltext } = req.body;
    goals[goalid] = goaltext;
    res.status(200).send(goals);
  },
  deleteGoal: (req, res) => {
    let goalid = +req.params.goalid - 1;
    goals.splice(goalid, 1);
    res.status(200).send(goals);
  },
};
