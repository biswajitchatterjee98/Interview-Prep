window.CGL = {
  days: [
    {
      id: 1,
      date: "1 Oct",
      title: "Number sense and money maths",
      lead: "Number system, simplification, percentage, profit and loss, discount.",
      notes: [
        {
          title: "Number system",
          points: [
            "<strong>HCF</strong> is the largest number that divides both. <strong>LCM</strong> is the smallest number both divide into. For two numbers, HCF × LCM = product of the numbers.",
            "A fraction in lowest terms has HCF of numerator and denominator equal to 1. 0.25 = 1/4, 0.125 = 1/8.",
            "Square root: √0.01 = 0.1, √0.0169 = 0.13, √169 = 13. If a number ends in 2, 3, 7, or 8 it is not a perfect square."
          ]
        },
        {
          title: "Simplification",
          points: [
            "BODMAS: Brackets, Of (or orders), Division and Multiplication left to right, then Addition and Subtraction left to right.",
            "Worked: 8 + 4 × 3 − 6 ÷ 2 = 8 + 12 − 3 = 17. Multiplication happens before the minus."
          ]
        },
        {
          title: "Percentage, profit, discount",
          points: [
            "x% of N = (x/100) × N. If a value becomes y after a p% rise, original = y × 100 / (100 + p).",
            "Profit % = (Profit / CP) × 100. Loss % uses CP, not SP.",
            "Successive discounts of a% and b% = a + b − (ab/100). A 10% discount on ₹500 is ₹450.",
            "If SP is given with a loss of r%, CP = SP × 100 / (100 − r)."
          ]
        }
      ],
      questions: [
        q("HCF of 36 and 48 is", ["6", "12", "18", "24"], 1, "36 = 2²×3², 48 = 2⁴×3. Common part is 2²×3 = 12."),
        q("LCM of 12 and 18 is", ["36", "6", "72", "216"], 0, "12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36."),
        q("√0.0169 equals", ["0.13", "1.3", "0.013", "13"], 0, "13² = 169, so √0.0169 = 0.13."),
        q("8 + 4 × 3 − 6 ÷ 2 equals", ["15", "17", "9", "21"], 1, "4×3 = 12 and 6÷2 = 3, so 8+12−3 = 17."),
        q("15% of 240 is", ["30", "36", "40", "48"], 1, "10% is 24 and 5% is 12, so 36."),
        q("A number increased by 20% becomes 72. The number is", ["60", "58", "86.4", "52"], 0, "1.2x = 72, so x = 60."),
        q("CP ₹400, SP ₹460. Profit percent is", ["12%", "15%", "20%", "10%"], 1, "Profit 60 on 400 is 15%."),
        q("Marked price ₹500, discount 10%. Selling price is", ["450", "490", "550", "400"], 0, "10% of 500 is 50, so SP is 450."),
        q("An article is sold for ₹900 at a loss of 10%. Cost price is", ["810", "990", "1000", "1100"], 2, "90% of CP is 900, so CP is 1000."),
        q("Two successive discounts of 20% and 10% equal a single discount of", ["30%", "28%", "32%", "25%"], 1, "20 + 10 − (20×10)/100 = 28%."),
        q("2/5 of 150 is", ["50", "60", "75", "30"], 1, "150/5 = 30, times 2 is 60."),
        q("Which is a perfect square?", ["128", "196", "242", "300"], 1, "14² = 196. The others are not squares.")
      ]
    },
    {
      id: 2,
      date: "2 Oct",
      title: "Ratio, work, and speed",
      lead: "Ratio, average, mixture, partnership, interest, time and work, time and distance.",
      notes: [
        {
          title: "Ratio, average, mixture",
          points: [
            "If a ratio a:b splits a total T, the parts are T×a/(a+b) and T×b/(a+b).",
            "Average = sum / count. If one value changes, the sum changes by the same amount.",
            "Alligation: when two prices mix, the ratio of quantities is the cross difference of prices. In a 3:1 milk–water mix of 40 L, milk is 30 L."
          ]
        },
        {
          title: "Interest and partnership",
          points: [
            "Simple interest = PRT/100. Compound interest for 2 years on principal P at r% is P[(1+r/100)² − 1]. Difference between CI and SI for 2 years is P(r/100)².",
            "Partnership share is in the ratio of (capital × time). Equal capital–time products mean equal profit."
          ]
        },
        {
          title: "Work and speed",
          points: [
            "If A finishes in a days, A’s one-day work is 1/a. Together, add the rates.",
            "A pipe that fills and a leak that empties: net rate = fill rate − empty rate.",
            "Speed = distance / time. To convert m/s to km/h, multiply by 18/5. A 150 m train at 10 m/s crosses a pole in 15 s and runs at 36 km/h."
          ]
        }
      ],
      questions: [
        q("₹40 is split in the ratio 2:3. The larger part is", ["16", "24", "20", "30"], 1, "3/5 of 40 is 24."),
        q("Average of 10, 20 and 30 is", ["15", "20", "25", "18"], 1, "Sum 60 divided by 3 is 20."),
        q("40 litres of mixture has milk and water in 3:1. Milk is", ["10 L", "20 L", "30 L", "35 L"], 2, "Milk is 3/4 of 40 = 30 L."),
        q("SI on ₹1000 at 10% for 2 years is", ["100", "200", "210", "120"], 1, "1000×10×2/100 = 200."),
        q("CI on ₹1000 at 10% for 2 years is", ["200", "210", "220", "121"], 1, "Year 1 interest 100, year 2 interest 110, total 210."),
        q("A finishes a job in 10 days, B in 15 days. Together they take", ["5 days", "6 days", "8 days", "12 days"], 1, "1/10 + 1/15 = 1/6, so 6 days."),
        q("A tap fills a tank in 6 hours. A leak empties it in 12 hours. Together the tank fills in", ["4 hours", "8 hours", "12 hours", "18 hours"], 2, "1/6 − 1/12 = 1/12, so 12 hours."),
        q("60 km in 1.5 hours means speed of", ["30 km/h", "40 km/h", "45 km/h", "90 km/h"], 1, "60 / 1.5 = 40 km/h."),
        q("10 m/s equals", ["18 km/h", "36 km/h", "54 km/h", "72 km/h"], 1, "Multiply by 18/5: 10×18/5 = 36."),
        q("A invests ₹20,000 for 12 months and B invests ₹30,000 for 8 months. Profit is shared in", ["2:3", "3:2", "1:1", "4:3"], 2, "20,000×12 = 30,000×8 = 2,40,000. Ratio 1:1."),
        q("The average of five numbers is 18. Their sum is", ["80", "90", "72", "108"], 1, "18×5 = 90."),
        q("A 150 m train running at 10 m/s crosses a pole in", ["10 s", "15 s", "20 s", "25 s"], 1, "Time = length/speed = 150/10 = 15 s.")
      ]
    },
    {
      id: 3,
      date: "3 Oct",
      title: "Algebra, shapes, and charts",
      lead: "Algebra, geometry, trigonometry, mensuration, and data interpretation.",
      notes: [
        {
          title: "Algebra",
          points: [
            "(a+b)² = a² + 2ab + b². (a−b)² = a² − 2ab + b². a² − b² = (a−b)(a+b).",
            "If x + y = 5 and x − y = 1, add them: 2x = 6, so x = 3 and y = 2.",
            "The graph of y = 2x + 1 is a straight line. It passes through (0, 1) and (1, 3)."
          ]
        },
        {
          title: "Geometry and trigonometry",
          points: [
            "Angles of a triangle add to 180°. An exterior angle equals the sum of the two remote interior angles.",
            "sin 30° = 1/2, cos 30° = √3/2, tan 45° = 1, sin 90° = 1, cos 90° = 0.",
            "sin²θ + cos²θ = 1. tan(90° − θ) = cot θ. In a height-and-distance question, if the angle of elevation is 45°, height equals the base distance."
          ]
        },
        {
          title: "Mensuration and charts",
          points: [
            "Circle: area πr², circumference 2πr. Use π = 22/7 when r is a multiple of 7. Area of r = 7 is 154.",
            "Cylinder volume = πr²h. For r = 7 and h = 10, volume is 1540.",
            "A pie chart is 360°. 25% of the total is a 90° sector. Read the total first, then convert the slice."
          ]
        }
      ],
      questions: [
        q("(a + b)² equals", ["a² + b²", "a² + 2ab + b²", "a² − 2ab + b²", "(a + b)(a − b)"], 1, "The middle term is 2ab."),
        q("If x + y = 5 and x − y = 1, then x is", ["2", "3", "4", "5"], 1, "Adding gives 2x = 6, so x = 3."),
        q("The line y = 2x + 1 passes through", ["(1, 3)", "(1, 2)", "(0, 0)", "(2, 1)"], 0, "When x = 1, y = 3."),
        q("sin 30° equals", ["0", "1/2", "√3/2", "1"], 1, "Standard value: sin 30° = 1/2."),
        q("sin²θ + cos²θ equals", ["0", "2", "tan θ", "1"], 3, "This is the basic identity."),
        q("tan(90° − θ) equals", ["tan θ", "sin θ", "cot θ", "sec θ"], 2, "Complementary-angle rule."),
        q("A tower casts a 10 m shadow when the elevation of the sun is 45°. Height of the tower is", ["5 m", "10 m", "10√3 m", "20 m"], 1, "tan 45° = 1, so height = base = 10 m."),
        q("Area of a circle of radius 7 cm (π = 22/7) is", ["44 cm²", "154 cm²", "308 cm²", "49 cm²"], 1, "πr² = 22/7 × 49 = 154."),
        q("Volume of a cylinder with r = 7 cm and h = 10 cm (π = 22/7) is", ["440 cm³", "1540 cm³", "220 cm³", "3080 cm³"], 1, "πr²h = 154 × 10 = 1540."),
        q("Side of a square is 5 cm. Its area and perimeter are", ["25 cm² and 20 cm", "20 cm² and 25 cm", "10 cm² and 20 cm", "25 cm² and 10 cm"], 0, "Area = side², perimeter = 4 × side."),
        q("In a pie chart, 25% of the data is a sector of", ["25°", "45°", "90°", "180°"], 2, "25% of 360° is 90°."),
        q("Sum of angles in a triangle is", ["90°", "180°", "270°", "360°"], 1, "Always 180° for a triangle in a plane.")
      ]
    },
    {
      id: 4,
      date: "4 Oct",
      title: "Verbal reasoning",
      lead: "Analogy, classification, series, coding, blood relations, direction.",
      notes: [
        {
          title: "Analogy, odd one, series",
          points: [
            "Name the relationship in words before you look at options: synonym, part–whole, tool–worker, young one, square, +n.",
            "Odd one out fails the rule the other three share. Check category first, then spelling or number pattern.",
            "Number series: look at differences, then differences of differences, then ×n ± k. Alphabet series: count letters, and remember Z wraps to A."
          ]
        },
        {
          title: "Coding and family",
          points: [
            "If CAT is coded as DBU, each letter moved +1. Always test the rule on every letter, not only the first.",
            "Blood relations: rewrite the sentence from the speaker outward. “My mother’s only son” is the speaker if the speaker is male, or the speaker’s brother if the speaker is female. Draw only when the sentence is long.",
            "Direction: facing north, left is west and right is east. A right turn from north faces east. Final displacement uses Pythagoras when the path has a right angle."
          ]
        }
      ],
      questions: [
        q("Book : Read :: Pen : ?", ["Ink", "Write", "Paper", "Nib"], 1, "A book is used to read. A pen is used to write."),
        q("Find the odd one: 8, 27, 64, 100", ["8", "27", "64", "100"], 3, "8, 27 and 64 are cubes. 100 is not."),
        q("3, 8, 15, 24, ?", ["33", "35", "36", "32"], 1, "Differences are +5, +7, +9, so next difference is +11. 24+11 = 35."),
        q("AZ, BY, CX, ?", ["DW", "DV", "EW", "DU"], 0, "First letter goes forward, second goes backward: D then W."),
        q("If CAT is coded as DBU, then DOG is coded as", ["EPH", "CPF", "ENH", "EOH"], 0, "Each letter moves +1: D+1=E, O+1=P, G+1=H."),
        q("In a certain code, ROAD is written as URDG. The pattern is +3. Then MAIL is", ["PDLO", "QDLO", "PDLN", "QDLP"], 0, "M+3=P, A+3=D, I+3=L, L+3=O."),
        q("Pointing to a woman, Ravi said, “She is the daughter of the only son of my grandfather.” The woman is Ravi’s", ["Aunt", "Sister", "Cousin", "Mother"], 1, "Only son of Ravi’s grandfather is Ravi’s father. His daughter is Ravi’s sister."),
        q("A is the brother of B. B is the sister of C. C is the son of D. How is A related to D?", ["Daughter", "Son", "Father", "Uncle"], 1, "A is male and a child of D, so A is D’s son."),
        q("A man walks 4 km north, then 3 km east. Distance from the start is", ["5 km", "7 km", "1 km", "12 km"], 0, "3-4-5 right triangle."),
        q("Facing north, you turn right, then right again, then left. You now face", ["North", "East", "South", "West"], 1, "Right to east, right to south, left to east."),
        q("Find the odd one: Apple, Mango, Potato, Banana", ["Apple", "Mango", "Potato", "Banana"], 2, "Potato is a vegetable. The others are fruits."),
        q("2, 6, 12, 20, 30, ?", ["40", "42", "36", "48"], 1, "Differences +4, +6, +8, +10, so next +12. 30+12 = 42.")
      ]
    },
    {
      id: 5,
      date: "5 Oct",
      title: "Logic and figures",
      lead: "Syllogism, Venn diagrams, missing numbers, and non-verbal patterns described in words.",
      notes: [
        {
          title: "Syllogism",
          points: [
            "Draw circles only for the given statements. “All A are B” means the A circle sits inside B. “Some A are B” is an overlap. “No A is B” means separate circles.",
            "A conclusion must be forced. “Some” does not become “All”. If two conclusions are given, check each one on its own.",
            "“All pens are books. All books are papers.” Then all pens are papers. You cannot say all papers are pens."
          ]
        },
        {
          title: "Venn and number patterns",
          points: [
            "In a class Venn question, start from the “only both” region, then subtract from each total.",
            "A missing number in a figure usually uses the same operation on every cell: sum of neighbours, product, or square of a digit.",
            "Paper folding: the punch appears mirrored across each crease when the paper opens. Embedded figure: the small shape must match size and angle, not a stretched copy."
          ]
        }
      ],
      questions: [
        q("Statements: All pens are books. All books are papers. Conclusion: All pens are papers.", ["Follows", "Does not follow", "Follows only if some papers are pens", "Data is inadequate"], 0, "Pens sit inside books, and books sit inside papers."),
        q("Statements: Some cats are dogs. All dogs are animals. Conclusion: Some cats are animals.", ["Follows", "Does not follow", "Only “all cats are animals” follows", "Neither idea is usable"], 0, "The cats that are dogs are animals."),
        q("Statements: No apple is a mango. Some mangoes are fruits. Conclusion: No apple is a fruit.", ["Follows", "Does not follow", "Follows if all fruits are mangoes", "Both statements contradict"], 1, "Apples can still be fruits that are not mangoes."),
        q("In a group of 40, 18 like tea, 16 like coffee, and 8 like both. How many like only tea?", ["8", "10", "18", "26"], 1, "Only tea = 18 − 8 = 10."),
        q("Using the same group, how many like neither tea nor coffee?", ["14", "12", "6", "22"], 0, "Tea or coffee = 10 + 8 + 8 = 26. Neither = 40 − 26 = 14. Only coffee is 16 − 8 = 8."),
        q("Find the missing number: 4, 9, 16, 25, ?", ["30", "36", "49", "32"], 1, "These are squares: 2², 3², 4², 5², 6²."),
        q("A figure uses 2, 3, 6 in one cell because 2 × 3 = 6. The cell 4, 5, ? should be", ["9", "20", "1", "45"], 1, "Same rule: 4 × 5 = 20."),
        q("Which number is wrong in 2, 6, 12, 20, 30, 42, 58?", ["20", "42", "58", "12"], 2, "The rule is +4, +6, +8, +10, +12, +14. After 42 comes 56, not 58."),
        q("A square paper is folded in half once and one hole is punched on the fold. When opened, the holes number", ["1", "2", "4", "8"], 0, "A punch on the crease is one hole that is not duplicated off the fold. If the punch is on the crease itself it remains a single hole."),
        q("A paper is folded once and a hole is punched away from the fold. Opened, you see", ["1 hole", "2 holes", "3 holes", "4 holes"], 1, "The crease mirrors the punch, so two holes appear."),
        q("Which shape can hide inside a larger similar copy of itself without rotating: a square inside a bigger square, sides parallel?", ["Yes", "No", "Only if it is a circle", "Only after a 45° turn"], 0, "A smaller square with parallel sides sits inside a larger square. That is an embedded figure."),
        q("In a series of figures the dot moves one corner clockwise each step. After the top-left corner, it is at", ["Top-right", "Bottom-left", "Bottom-right", "Centre"], 0, "Clockwise from top-left is top-right.")
      ]
    },
    {
      id: 6,
      date: "6 Oct",
      title: "English",
      lead: "The question types Tier 1 actually uses. Read the rule, then the sentence.",
      notes: [
        {
          title: "Grammar that SSC repeats",
          points: [
            "Subject–verb: “One of the boys is”. “The committee has decided” when it acts as one unit. “Neither he nor his friends are ready” — the verb follows the nearer subject.",
            "Since/for with perfect tense: “He has lived here since 2020 / for five years.”",
            "Active to passive: object becomes subject, and the tense stays. “She wrote a letter” → “A letter was written by her.”",
            "Direct to indirect: present becomes past, “now” becomes “then”, “today” becomes “that day”. “He said, ‘I am tired.’” → “He said that he was tired.”"
          ]
        },
        {
          title: "Vocabulary",
          points: [
            "Synonym of abundant: plentiful. Antonym of ancient: modern.",
            "“A blessing in disguise” means a good result that first looked bad. “Once in a blue moon” means very rarely.",
            "One word: a person who speaks many languages is a polyglot. A place where dead bodies are kept is a mortuary.",
            "Common spellings: accommodation (two c, two m), separate (not seperate), receive (i before e does not apply: e then i)."
          ]
        }
      ],
      questions: [
        q("Choose the correct sentence.", ["One of the boys are absent.", "One of the boys is absent.", "One of the boy is absent.", "One of boys are absent."], 1, "“One” is singular, so the verb is “is”."),
        q("He has lived in Delhi ____ 2019.", ["for", "since", "from", "by"], 1, "“Since” is used with a starting point."),
        q("Find the error: “She do not like coffee.”", ["She", "do", "not like", "coffee"], 1, "With “she” the verb is “does”."),
        q("Improve: “He is senior than me.”", ["He is senior to me.", "He is senior from me.", "He is senior then me.", "No improvement"], 0, "“Senior”, “junior”, “superior” take “to”, not “than”."),
        q("Synonym of “abundant”", ["Scarce", "Plentiful", "Tiny", "Empty"], 1, "Abundant means present in large quantity."),
        q("Antonym of “ancient”", ["Old", "Historic", "Modern", "Early"], 2, "Ancient and modern are opposites."),
        q("“Once in a blue moon” means", ["Every month", "Very rarely", "At night", "On a Monday"], 1, "The idiom means very seldom."),
        q("A person who knows many languages is a", ["Linguist only in poetry", "Polyglot", "Translator", "Novelist"], 1, "Polyglot is the one-word substitution SSC expects."),
        q("Which spelling is correct?", ["Accomodation", "Acommodation", "Accommodation", "Acomodation"], 2, "Double c and double m."),
        q("Passive form of “She wrote a letter.”", ["A letter is written by her.", "A letter was written by her.", "A letter wrote by her.", "A letter is wrote by her."], 1, "Simple past stays past: “was written”."),
        q("He said, “I am tired.” In indirect speech:", ["He said that I am tired.", "He said that he was tired.", "He said that he is tired.", "He told that he tired."], 1, "Present “am” shifts to past “was”, and “I” becomes “he”."),
        q("Rearrange to a sensible order: (1) the match (2) They (3) won (4) yesterday", ["2-3-1-4", "2-1-3-4", "1-2-3-4", "4-2-3-1"], 0, "They won the match yesterday.")
      ]
    },
    {
      id: 7,
      date: "7 Oct",
      title: "General awareness",
      lead: "Polity, modern history, geography, science, and a few events from 2026. The short extra list at the end is for a last pass, not a new subject.",
      notes: [
        {
          title: "Polity",
          points: [
            "Lok Sabha’s normal term is 5 years. Rajya Sabha is a permanent house; one-third of members retire every second year.",
            "Article 32 is the right to constitutional remedies. Dr Ambedkar called it the heart and soul of the Constitution.",
            "A Money Bill is defined in Article 110 and can be introduced only in Lok Sabha. The GST Council is under Article 279A.",
            "Fundamental duties are in Article 51A, added by the 42nd Amendment. The 42nd Amendment is called the Mini Constitution. NITI Aayog replaced the Planning Commission in 2015."
          ]
        },
        {
          title: "History and geography",
          points: [
            "Battle of Plassey: 1757. The Revolt of 1857. Dandi March: 1930. Quit India: 1942.",
            "Jawaharlal Nehru wrote The Discovery of India. Bankim Chandra Chatterjee wrote Vande Mataram.",
            "Indian Standard Time is based on 82.5° E. The Tropic of Cancer passes through India. The Ganga is the longest river in India."
          ]
        },
        {
          title: "Science and 2026 events",
          points: [
            "SI unit of force is the newton. pH below 7 is acidic. Haemoglobin is in red blood cells. Vitamin C deficiency causes scurvy. Vitamin D deficiency causes rickets.",
            "The Union Cabinet approved Green Energy Corridor Phase-III, also presented as PM DHARA, with an outlay of ₹1,86,405 crore. It targets evacuation of up to 135 GW of renewable energy and 50 GWh of battery storage, to be set up by FY 2032–33.",
            "On 30 September 2026, Prime Minister Narendra Modi spoke with US President Donald Trump. They reviewed the India–US Comprehensive Global Strategic Partnership, including trade, defence, energy, and critical technologies.",
            "Last-pass facts: Canberra is the capital of Australia. Rabi MSP crops include wheat, barley, gram, lentil, rapeseed-mustard, and safflower."
          ]
        }
      ],
      questions: [
        q("The normal term of the Lok Sabha is", ["4 years", "5 years", "6 years", "2 years"], 1, "Article 83: five years unless dissolved sooner."),
        q("Right to constitutional remedies is", ["Article 14", "Article 19", "Article 21", "Article 32"], 3, "Article 32. Ambedkar called it the heart and soul of the Constitution."),
        q("A Money Bill is defined in", ["Article 110", "Article 112", "Article 108", "Article 123"], 0, "Article 110. It is introduced in Lok Sabha."),
        q("Fundamental duties are in", ["Article 32", "Article 51A", "Article 368", "Article 356"], 1, "Article 51A, inserted by the 42nd Amendment."),
        q("The 42nd Amendment is popularly called", ["Mini Constitution", "Magna Carta", "Instrument of Accession", "Objectives Resolution"], 0, "Because of the scale of changes it made."),
        q("The Battle of Plassey was fought in", ["1757", "1764", "1857", "1526"], 0, "1757, between the British and Siraj-ud-Daulah."),
        q("The Quit India Movement was launched in", ["1930", "1942", "1920", "1947"], 1, "8 August 1942."),
        q("The Discovery of India was written by", ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "S. Radhakrishnan"], 1, "Nehru wrote it during imprisonment."),
        q("Indian Standard Time follows the meridian", ["68.5° E", "82.5° E", "90° E", "75° E"], 1, "82°30′ E, which is 5 hours 30 minutes ahead of GMT."),
        q("The SI unit of force is", ["Joule", "Watt", "Pascal", "Newton"], 3, "One newton accelerates 1 kg by 1 m/s²."),
        q("A solution with pH 3 is", ["Neutral", "Acidic", "Basic", "A salt only"], 1, "pH below 7 is acidic."),
        q("Deficiency of vitamin C causes", ["Rickets", "Scurvy", "Beriberi", "Goitre"], 1, "Scurvy. Rickets is vitamin D. Beriberi is vitamin B1."),
        q("Green Energy Corridor Phase-III (PM DHARA) has an outlay of about", ["₹1,790 crore", "₹90,962 crore", "₹1,86,405 crore", "₹54 crore"], 2, "Cabinet outlay ₹1,86,405 crore, including transmission and 50 GWh of battery storage."),
        q("That corridor scheme aims to evacuate renewable energy of up to", ["50 GW", "135 GW", "900 GW", "5 GW"], 1, "Up to 135 GW. The 900 GW figure is a wider non-fossil capacity aim for 2035, not the corridor’s evacuation target."),
        q("On 30 September 2026, PM Modi spoke with President Trump about", ["Only cricket", "The India–US Comprehensive Global Strategic Partnership", "A new capital for India", "Leaving the United Nations"], 1, "They reviewed trade, defence, energy, and critical technologies.")
      ]
    },
    {
      id: 8,
      date: "8 Oct",
      title: "Full mock",
      lead: "Three full-length Tier 1 papers (100 questions each), built from a 2016–2025 shift analysis: same scoring (+2 / −0.50), 15 minutes per section, 25 questions per section. Pick Set 1, 2, or 3 — no question repeats inside a set.",
      mock: true
    }
  ]
};

function q(text, options, answer, why) {
  return { text, options, answer, why };
}
