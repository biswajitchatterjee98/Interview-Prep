window.CGL_NOTES = {
  1: [
    topic(
      "Number system",
      [
        "Tier 1 uses whole numbers, integers, fractions, and decimals, and the relationships between them. A factor of a number divides it exactly. A multiple of a number is what you get when you multiply it by a whole number. 12 has factors 1, 2, 3, 4, 6, and 12. Multiples of 12 start 12, 24, 36.",
        "A prime number has exactly two factors, 1 and itself. 2 is the only even prime. 1 is neither prime nor composite. A composite number has more than two factors.",
        "Divisibility is the fast check before you divide. These rules cover almost every number-system question in the paper."
      ],
      [
        "A number is divisible by 2 if its last digit is even.",
        "By 3, if the sum of the digits is divisible by 3. By 9, if that sum is divisible by 9.",
        "By 4, if the last two digits form a number divisible by 4. By 8, check the last three digits.",
        "By 5, if it ends in 0 or 5. By 10, if it ends in 0.",
        "By 6, if it is divisible by both 2 and 3. By 11, if the difference of the sums of the alternate digits is 0 or a multiple of 11."
      ],
      [
        {
          prompt: "Which of 231, 242, and 255 is divisible by 3?",
          work: "Add the digits. 2+3+1 = 6, which is divisible by 3, so 231 works. 2+4+2 = 8, which is not. 2+5+5 = 12, which is, so 255 also works.",
          answer: "<strong>231 and 255.</strong> 242 is not divisible by 3."
        }
      ]
    ),
    topic(
      "HCF and LCM",
      [
        "The HCF (also called GCD) is the greatest number that divides two or more numbers without a remainder. The LCM is the smallest number that each of them divides into.",
        "Break each number into primes, then build HCF from the lowest powers that appear in every number, and LCM from the highest power of every prime that appears in any number."
      ],
      [
        "For two numbers, HCF × LCM = product of the two numbers.",
        "HCF of fractions = HCF of numerators / LCM of denominators.",
        "LCM of fractions = LCM of numerators / HCF of denominators.",
        "If HCF is h, the numbers can be written ha and hb, where a and b are co-prime. Then LCM = h × a × b."
      ],
      [
        {
          prompt: "Find the HCF and LCM of 36 and 48.",
          work: "36 = 2² × 3² and 48 = 2⁴ × 3. HCF keeps the common primes at the smaller power: 2² × 3 = 12. LCM keeps every prime at the larger power: 2⁴ × 3² = 144. Check: 12 × 144 = 1728 and 36 × 48 = 1728.",
          answer: "<strong>HCF 12, LCM 144.</strong>"
        }
      ]
    ),
    topic(
      "Fractions and decimals",
      [
        "A fraction is a part of a whole. To add or subtract, the denominators must match. To multiply, multiply the tops and the bottoms, then cancel. To divide, multiply by the reciprocal.",
        "A terminating decimal is a fraction whose denominator, after simplifying, has only 2 and 5 as prime factors. 1/4 = 0.25. 1/8 = 0.125. 1/3 = 0.333… does not terminate."
      ],
      [
        "a/b + c/d = (ad + bc) / bd.",
        "a/b ÷ c/d = a/b × d/c.",
        "To convert a decimal to a fraction, write the digits over 1 followed by as many zeros as there are decimal places, then simplify. 0.25 = 25/100 = 1/4.",
        "Of means multiply. 2/5 of 150 = (2/5) × 150."
      ],
      [
        {
          prompt: "What is 2/5 of 150?",
          work: "150 ÷ 5 = 30. Two of those parts is 60. The same product is (2 × 150) / 5 = 300 / 5 = 60.",
          answer: "<strong>60.</strong>"
        }
      ]
    ),
    topic(
      "Square roots",
      [
        "The square root of a number n is the number which, multiplied by itself, gives n. √169 = 13 because 13 × 13 = 169. A whole number ending in 2, 3, 7, or 8 cannot be a perfect square. A perfect square ends in 0, 1, 4, 5, 6, or 9, and a square ending in 0 must end in 00.",
        "For a decimal, pair the digits on each side of the point. √0.0169 has two decimal places in the answer because 0169 has two pairs: √0.0169 = 0.13."
      ],
      [
        "√(a × b) = √a × √b, when a and b are positive.",
        "√(a / b) = √a / √b.",
        "(√a)² = a.",
        "Useful squares: 11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225, 25² = 625."
      ],
      [
        {
          prompt: "Find √0.0169.",
          work: "Ignore the decimal and read 169, whose root is 13. The number 0.0169 has four decimal places, so the root has half of that, two decimal places.",
          answer: "<strong>0.13.</strong>"
        }
      ]
    ),
    topic(
      "Simplification and BODMAS",
      [
        "BODMAS fixes the order so two people get the same value. Brackets first. Then orders, which means powers and roots. Then division and multiplication, working left to right. Then addition and subtraction, also left to right. Division does not automatically come before multiplication; whichever of those two appears first from the left is done first. The same is true of addition and subtraction.",
        "“Of” is treated as multiplication and is done with the orders step, before the ordinary left-to-right multiplication."
      ],
      [
        "Order: Brackets, Of / orders, Division and Multiplication left to right, Addition and Subtraction left to right.",
        "a line written as a fraction is a bracket. The whole top is divided by the whole bottom.",
        "Approximation in the paper usually means round each number to a nearby easy value, then compute. 49.8 × 2.05 is about 50 × 2 = 100."
      ],
      [
        {
          prompt: "Find 8 + 4 × 3 − 6 ÷ 2.",
          work: "There are no brackets. Do 4 × 3 = 12 and 6 ÷ 2 = 3 before the plus and minus. The line is now 8 + 12 − 3. Left to right: 20 − 3 = 17. A common miss is to do 8 + 4 first and get 36.",
          answer: "<strong>17.</strong>"
        }
      ]
    ),
    topic(
      "Percentage",
      [
        "Percent means per hundred. 15% is 15 out of 100, which is the fraction 15/100 = 3/20. Every percentage question is a fraction question written in a different way.",
        "If a value rises by p%, the new value is the old value multiplied by (100 + p)/100. If it falls by p%, multiply by (100 − p)/100. To recover the original from the new value, divide by that same factor."
      ],
      [
        "x% of N = (x / 100) × N.",
        "What percent is A of B? (A / B) × 100.",
        "After a rise of p%, original = new × 100 / (100 + p).",
        "After a fall of p%, original = new × 100 / (100 − p).",
        "Successive changes of +a% and +b% act as a + b + (ab)/100 percent. If one change is a fall, use a negative sign."
      ],
      [
        {
          prompt: "A number becomes 72 after a 20% increase. What was the number?",
          work: "The new value is 120% of the original, so original × 120/100 = 72. Original = 72 × 100/120 = 72 × 5/6 = 60. Check: 20% of 60 is 12, and 60 + 12 = 72.",
          answer: "<strong>60.</strong>"
        }
      ]
    ),
    topic(
      "Profit and loss",
      [
        "Cost price is what the seller paid. Selling price is what the buyer pays. Profit is SP minus CP. Loss is CP minus SP. The exam almost always asks for the percent, and that percent is on the cost price unless the question clearly says “on the selling price”.",
        "If two items are sold at the same selling price, one at a profit of r% and one at a loss of r%, there is an overall loss. The equal selling prices do not cancel."
      ],
      [
        "Profit = SP − CP. Loss = CP − SP.",
        "Profit % = (Profit / CP) × 100. Loss % = (Loss / CP) × 100.",
        "SP = CP × (100 + profit%) / 100.",
        "SP = CP × (100 − loss%) / 100.",
        "CP = SP × 100 / (100 + profit%). CP = SP × 100 / (100 − loss%).",
        "If one item gains r% and another loses r%, and both have the same SP, overall loss % = (r/10)². For r = 10 this is 1%."
      ],
      [
        {
          prompt: "An article is sold for ₹900 at a loss of 10%. Find the cost price.",
          work: "A 10% loss means the selling price is 90% of the cost. 90% of CP = 900, so CP = 900 × 100/90 = 1000. The loss is ₹100, and 100/1000 = 10%.",
          answer: "<strong>₹1000.</strong>"
        }
      ]
    ),
    topic(
      "Discount",
      [
        "Marked price, also called list price, is the printed price. Discount is the reduction on that printed price. The selling price is what remains after the discount. Discount percent is always on the marked price, not on the cost price.",
        "A shopkeeper can have both a mark-up on cost and a discount on the marked price. Do the two steps separately. First raise the cost to the marked price, then cut the marked price by the discount."
      ],
      [
        "Discount = Marked price − Selling price.",
        "Discount % = (Discount / Marked price) × 100.",
        "SP = MP × (100 − discount%) / 100.",
        "Two successive discounts of a% and b% equal a single discount of a + b − (ab)/100 percent.",
        "If MP = CP × (100 + mark-up%) / 100, then apply the discount formula to that MP."
      ],
      [
        {
          prompt: "Marked price is ₹500. Discount is 10%, and then a further 20% is given on the reduced price. Find the selling price and the single equivalent discount.",
          work: "First cut: 10% of 500 is 50, so the price is 450. Second cut: 20% of 450 is 90, so the price is 360. Equivalent discount = 10 + 20 − (10×20)/100 = 30 − 2 = 28%. Check: 28% of 500 is 140, and 500 − 140 = 360.",
          answer: "<strong>Selling price ₹360, equivalent discount 28%.</strong> It is not 30%."
        }
      ]
    )
  ],
  2: [
    topic(
      "Ratio and proportion",
      [
        "A ratio compares two quantities of the same kind. 2:3 means 2 parts and 3 parts, five parts in all. A proportion says two ratios are equal: a:b = c:d, which is the same as a/b = c/d, and the cross product a×d = b×c.",
        "When a ratio splits a known total, each share is the total multiplied by that part over the sum of the parts."
      ],
      [
        "If a:b = m:n and the total is T, first quantity = T × m / (m+n), second = T × n / (m+n).",
        "a:b = c:d means ad = bc.",
        "If a:b and b:c are given, a:c = (first number of a:b) × (first of b:c is cancelled through b) : (second of a:b × second of b:c). For 2:3 and 3:4, a:b:c = 2:3:4.",
        "To divide A in the ratio m:n, the two shares are A×m/(m+n) and A×n/(m+n)."
      ],
      [
        {
          prompt: "₹40 is divided in the ratio 2:3. What is the larger share?",
          work: "Total parts = 2+3 = 5. One part = 40/5 = 8. Larger share = 3 × 8 = 24. Directly, 3/5 × 40 = 24.",
          answer: "<strong>₹24.</strong> The smaller share is ₹16."
        }
      ]
    ),
    topic(
      "Average",
      [
        "The average is the equal share if the total is spread evenly. It does not have to be one of the numbers in the list. If you know the average and the count, the sum is average times count. Most exam questions are easier if you work with the sum, then come back to the average at the end.",
        "If every value increases by k, the average increases by k. If one value in a list is wrong, the corrected sum is the old sum minus the wrong value plus the right value."
      ],
      [
        "Average = sum of values / number of values.",
        "Sum = average × number of values.",
        "If a new item x is added to n items of average A, new average = (nA + x) / (n+1).",
        "Weighted average = (n1×a1 + n2×a2) / (n1 + n2)."
      ],
      [
        {
          prompt: "The average of five numbers is 18. One of them, recorded as 12, was actually 22. What is the correct average?",
          work: "Old sum = 18 × 5 = 90. The recorded sum is 10 too small, so the correct sum is 100. Correct average = 100/5 = 20.",
          answer: "<strong>20.</strong>"
        }
      ]
    ),
    topic(
      "Mixture and alligation",
      [
        "A mixture question mixes two ingredients and asks for the quantity of one of them, or for the ratio in which they were mixed. When you know the ratio, multiply the total by each part over the sum of the parts, the same way as a ratio split.",
        "Alligation is the shortcut when two known prices (or strengths) are mixed to a known mean price. The ratio of the quantities is the cross difference of the prices. Cheaper quantity is to dearer quantity as (dearer − mean) is to (mean − cheaper)."
      ],
      [
        "In a mixture of ratio m:n, quantity of the first = total × m / (m+n).",
        "Alligation: quantity of cheaper / quantity of dearer = (dearer − mean) / (mean − cheaper).",
        "If water is added to milk, water has price 0. Mean price = milk price × milk / (milk + water).",
        "Replacement: after removing r litres from V litres of pure milk and filling water, milk left = V × (1 − r/V) after one step. After n such steps, milk = V × (1 − r/V)ⁿ."
      ],
      [
        {
          prompt: "40 litres of a mixture has milk and water in the ratio 3:1. How much milk is in it?",
          work: "Milk parts are 3 out of 3+1 = 4. Milk = 40 × 3/4 = 30 litres. Water = 10 litres.",
          answer: "<strong>30 litres of milk.</strong>"
        }
      ]
    ),
    topic(
      "Partnership",
      [
        "When partners invest money, profit is shared in the ratio of the money each person put in, but only if the money stayed in for the same time. If the times differ, each person’s share is capital multiplied by time. The unit of time must be the same for everyone: months with months, or years with years."
      ],
      [
        "Equal time: profit ratio = capital ratio.",
        "Different time: share ratio = (capital × time) of each partner.",
        "A sleeping partner still gets a share by the same capital-time rule. A working partner’s salary, if given, is taken out of the profit before the remainder is shared."
      ],
      [
        {
          prompt: "A invests ₹20,000 for 12 months. B invests ₹30,000 for 8 months. In what ratio is the profit shared?",
          work: "A’s capital-time = 20000 × 12 = 2,40,000. B’s capital-time = 30000 × 8 = 2,40,000. The products are equal.",
          answer: "<strong>1:1.</strong> B put in more money, but for fewer months, and the two effects cancel."
        }
      ]
    ),
    topic(
      "Simple interest",
      [
        "Simple interest is charged only on the original principal. It does not grow on the interest already earned. The rate in the formula is the percent per year, and the time is in years. If the time is given in months, divide the months by 12 before you substitute."
      ],
      [
        "Simple interest SI = (P × R × T) / 100.",
        "Amount = Principal + SI = P × (100 + RT) / 100.",
        "P = (SI × 100) / (R × T). R = (SI × 100) / (P × T). T = (SI × 100) / (P × R).",
        "If the rate is per month, convert it to a yearly rate, or keep time in months and use a monthly rate. Do not mix the two."
      ],
      [
        {
          prompt: "Find the simple interest on ₹1000 at 10% per year for 2 years.",
          work: "SI = 1000 × 10 × 2 / 100 = 200. The amount to be paid back is 1000 + 200 = 1200.",
          answer: "<strong>₹200.</strong>"
        }
      ]
    ),
    topic(
      "Compound interest",
      [
        "Compound interest is charged on the principal and also on the interest already added. For the yearly case that Tier 1 uses, the amount after T years is the principal multiplied by (1 + R/100) once for each year. The interest is the amount minus the principal.",
        "For two years, the difference between compound interest and simple interest is a standard shortcut. You do not need to compute both interests from scratch."
      ],
      [
        "Amount = P × (1 + R/100)ᵀ.",
        "Compound interest = Amount − P.",
        "For 2 years, CI = P[(1 + R/100)² − 1].",
        "For 2 years, CI − SI = P × (R/100)².",
        "Half-yearly compounding: rate becomes R/2 and the number of periods becomes 2T. Quarterly: rate R/4 and periods 4T."
      ],
      [
        {
          prompt: "Find the compound interest on ₹1000 at 10% per year for 2 years.",
          work: "After one year the interest is 100, so the principal becomes 1100. After the second year the interest is 10% of 1100, which is 110. Total interest = 100 + 110 = 210. By the shortcut, CI − SI = 1000 × (10/100)² = 10, and SI is 200, so CI is 210.",
          answer: "<strong>₹210.</strong>"
        }
      ]
    ),
    topic(
      "Time and work, including pipes",
      [
        "If a person finishes a job in n days, that person does 1/n of the job in one day. Add one-day rates when people work together. The time together is 1 divided by the combined rate.",
        "A pipe that fills is a positive rate. A leak or an outlet is a negative rate. The net rate is the fill rate minus the empty rate. If the net rate is 1/12, the tank fills in 12 hours."
      ],
      [
        "One-day work of A = 1 / (days A takes alone).",
        "A and B together: time = 1 / (1/a + 1/b) = ab / (a+b).",
        "If A is n times as fast as B, and B takes b days, A takes b/n days.",
        "Work = rate × time. If part of the work is already done, the remaining fraction is done at the new combined rate.",
        "Net rate of a filling pipe and a leak = 1/fill time − 1/empty time."
      ],
      [
        {
          prompt: "A tap fills a tank in 6 hours. A leak empties it in 12 hours. How long will the tank take to fill if both are open?",
          work: "Fill rate = 1/6 per hour. Leak rate = 1/12 per hour. Net = 1/6 − 1/12 = 1/12 of the tank per hour.",
          answer: "<strong>12 hours.</strong>"
        }
      ]
    ),
    topic(
      "Time, speed, and distance",
      [
        "Speed is distance divided by time. Keep the units together: kilometres with hours, or metres with seconds. The exam switches units often. Multiplying m/s by 18/5 gives km/h. Multiplying km/h by 5/18 gives m/s.",
        "A train crosses a pole in the time it takes to cover its own length. It crosses a platform in the time it takes to cover its own length plus the platform. Average speed for equal distances is not the ordinary average of the two speeds."
      ],
      [
        "Speed = distance / time. Distance = speed × time. Time = distance / speed.",
        "km/h to m/s: multiply by 5/18. m/s to km/h: multiply by 18/5.",
        "Time for a train of length L to cross a pole = L / speed.",
        "Time to cross a platform of length P = (L + P) / speed.",
        "Average speed for two equal distances at speeds u and v is 2uv / (u+v).",
        "If two objects move towards each other, relative speed = sum of speeds. If one chases the other in the same direction, relative speed = difference of speeds."
      ],
      [
        {
          prompt: "A 150 m train runs at 10 m/s. How long does it take to pass a pole, and what is the speed in km/h?",
          work: "The pole has no length, so the train must cover 150 m. Time = 150/10 = 15 seconds. Speed in km/h = 10 × 18/5 = 36.",
          answer: "<strong>15 seconds, at 36 km/h.</strong>"
        }
      ]
    )
  ],
  3: [
    topic(
      "Basic algebra",
      [
        "An identity is true for every value of the letters. An equation is true only for particular values. Tier 1 expects the school identities and the habit of substituting a value when a long expression can be simplified by one of them.",
        "Elementary surds are square roots that do not simplify to a whole number, such as √2 or √3. √12 = √(4×3) = 2√3. Add surds only when the root part is the same: 2√3 + 5√3 = 7√3."
      ],
      [
        "(a+b)² = a² + 2ab + b².",
        "(a−b)² = a² − 2ab + b².",
        "a² − b² = (a−b)(a+b).",
        "(a+b)² − (a−b)² = 4ab. (a+b)² + (a−b)² = 2(a² + b²).",
        "If a + 1/a = k, then a² + 1/a² = k² − 2.",
        "√(ab) is not equal to √a + √b. √(a/b) = √a / √b."
      ],
      [
        {
          prompt: "If x + 1/x = 3, find x² + 1/x².",
          work: "Square both sides: (x + 1/x)² = 9, so x² + 2 + 1/x² = 9. Subtract 2.",
          answer: "<strong>7.</strong>"
        }
      ]
    ),
    topic(
      "Linear equations and their graphs",
      [
        "A linear equation in two variables, such as x + y = 5, has many solutions. A second equation pins the pair down. Add the equations when the coefficients of one letter are the same size and you want that letter to disappear, or subtract them.",
        "The graph of ax + by = c is a straight line. Two different lines meet at one point, which is the solution. The same line written twice means infinitely many solutions. Parallel lines never meet, so there is no solution."
      ],
      [
        "From x + y = p and x − y = q, add to get x = (p+q)/2 and subtract to get y = (p−q)/2.",
        "The line y = mx + c has slope m and cuts the y-axis at (0, c).",
        "A point (x, y) lies on the line if substituting those values makes the equation true."
      ],
      [
        {
          prompt: "Solve x + y = 5 and x − y = 1. Does (1, 3) lie on y = 2x + 1?",
          work: "Add the equations: 2x = 6, so x = 3. Then y = 2. For the line, put x = 1: y = 2×1 + 1 = 3. The point (1, 3) fits. The point (1, 2) would not.",
          answer: "<strong>x = 3, y = 2. Yes, (1, 3) lies on the line.</strong>"
        }
      ]
    ),
    topic(
      "Triangles and centres",
      [
        "The interior angles of any triangle add to 180°. An exterior angle equals the sum of the two interior angles that are not next to it.",
        "Congruent triangles are the same size and shape. Similar triangles have the same angles, and their matching sides are in proportion. The centroid, circumcentre, incentre, and orthocentre are the centres the syllabus names. You need what each one is, not a long construction."
      ],
      [
        "Angle sum = 180°. In a right triangle the two acute angles add to 90°.",
        "Pythagoras: in a right triangle, hypotenuse² = side² + side². The 3-4-5 and 5-12-13 triples are the usual ones.",
        "Centroid is where the medians meet. It divides each median in the ratio 2:1, longer part toward the vertex.",
        "Incentre is the centre of the inscribed circle, the meeting point of the angle bisectors.",
        "Circumcentre is the centre of the circle through all three vertices, the meeting point of the perpendicular bisectors.",
        "Orthocentre is the meeting point of the altitudes.",
        "Similar triangles: corresponding sides are proportional. Area ratio = square of the side ratio."
      ],
      [
        {
          prompt: "A triangle has angles 40° and 60°. The third angle is?",
          work: "40 + 60 = 100. The remaining angle is 180 − 100 = 80.",
          answer: "<strong>80°.</strong>"
        }
      ]
    ),
    topic(
      "Circles, chords, and tangents",
      [
        "A chord joins two points on the circle. A diameter is the longest chord and equals twice the radius. The perpendicular from the centre to a chord bisects the chord.",
        "A tangent touches the circle at exactly one point and is perpendicular to the radius at that point. From a point outside the circle, the two tangents to the points of contact are equal in length. A common tangent to two circles is direct (external) or transverse (internal, crossing between the circles)."
      ],
      [
        "Angle in a semicircle is 90°.",
        "Angles in the same segment are equal.",
        "The angle at the centre is twice the angle at the circumference when both stand on the same arc.",
        "Tangent is perpendicular to the radius at the point of contact.",
        "Two tangents from an external point are equal.",
        "Length of a tangent from a point at distance d from the centre is √(d² − r²)."
      ],
      [
        {
          prompt: "A tangent from a point meets a circle of radius 5 cm. The point is 13 cm from the centre. How long is the tangent?",
          work: "The radius to the point of contact is perpendicular to the tangent, so the triangle is right-angled. Tangent length = √(13² − 5²) = √(169 − 25) = √144 = 12. This is a 5-12-13 triangle.",
          answer: "<strong>12 cm.</strong>"
        }
      ]
    ),
    topic(
      "Trigonometry",
      [
        "In a right triangle, sin θ = opposite / hypotenuse, cos θ = adjacent / hypotenuse, and tan θ = opposite / adjacent. The other three ratios are the reciprocals: cosec = 1/sin, sec = 1/cos, cot = 1/tan.",
        "Complementary angles add to 90°. The sine of an angle is the cosine of its complement, and the tangent of an angle is the cotangent of its complement. The values at 0°, 30°, 45°, 60°, and 90° are worth memorising as a row."
      ],
      [
        "sin²θ + cos²θ = 1. 1 + tan²θ = sec²θ. 1 + cot²θ = cosec²θ.",
        "sin(90° − θ) = cos θ. cos(90° − θ) = sin θ. tan(90° − θ) = cot θ.",
        "sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1.",
        "cos 0° = 1, cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2, cos 90° = 0.",
        "tan 0° = 0, tan 30° = 1/√3, tan 45° = 1, tan 60° = √3. tan 90° is not defined.",
        "Degree to radian: multiply by π/180. 180° = π radian."
      ],
      [
        {
          prompt: "Find the value of sin²30° + cos²30°, and of tan(90° − 30°).",
          work: "The first expression is 1 for every angle, including 30°. You do not need the separate values, though (1/2)² + (√3/2)² = 1/4 + 3/4 = 1 confirms it. tan(90° − 30°) = tan 60° = √3, which is also cot 30°.",
          answer: "<strong>1, and √3.</strong>"
        }
      ]
    ),
    topic(
      "Heights and distances",
      [
        "The angle of elevation is the angle you look up from the horizontal. The angle of depression is the angle you look down from the horizontal. They are equal when they are alternate angles between parallel horizontal lines.",
        "Draw a right triangle. The height is the opposite side and the ground distance is the adjacent side when the angle is at your eye. If the angle is 45°, tan 45° = 1, so height equals the ground distance."
      ],
      [
        "tan θ = height / distance along the ground.",
        "Height = distance × tan θ.",
        "If the angle of elevation is 30°, height = distance / √3. If it is 60°, height = distance × √3. If it is 45°, height = distance.",
        "When two angles of elevation of the same top are given from two points, the difference of the distances gives an equation in the height."
      ],
      [
        {
          prompt: "The shadow of a tower is 10 m when the sun’s elevation is 45°. How tall is the tower?",
          work: "tan 45° = height / 10. tan 45° is 1, so height / 10 = 1.",
          answer: "<strong>10 m.</strong>"
        }
      ]
    ),
    topic(
      "Mensuration: plane figures",
      [
        "Plane mensuration is area and perimeter of flat shapes. Use π = 22/7 when the radius is a multiple of 7, and π = 3.14 otherwise, unless the question says which value to use. Keep cm² for area. Do not add a length to an area."
      ],
      [
        "Rectangle: area = length × breadth, perimeter = 2(length + breadth).",
        "Square: area = side², perimeter = 4 × side. Diagonal = side√2.",
        "Triangle: area = (1/2) × base × height. Equilateral triangle of side a: area = (√3/4) a², height = (√3/2) a.",
        "Parallelogram: area = base × height. Rhombus: area = (1/2) × d1 × d2.",
        "Trapezium: area = (1/2) × (sum of parallel sides) × height.",
        "Circle: area = πr², circumference = 2πr. Sector of angle θ: area = (θ/360) × πr²."
      ],
      [
        {
          prompt: "A circle has radius 7 cm. Take π = 22/7. Find the area and the circumference.",
          work: "Area = 22/7 × 7 × 7 = 154 cm². Circumference = 2 × 22/7 × 7 = 44 cm.",
          answer: "<strong>Area 154 cm², circumference 44 cm.</strong>"
        }
      ]
    ),
    topic(
      "Mensuration: solids",
      [
        "A solid has volume, in cubic units, and a surface. The syllabus list is the right prism, the right circular cone, the right circular cylinder, the sphere, the hemisphere, the rectangular parallelepiped (a box), and the right pyramid with a triangular or square base.",
        "Volume of a prism or a cylinder is the area of the base multiplied by the height. A pyramid or a cone is one-third of that, because it tapers to a point."
      ],
      [
        "Cuboid (rectangular parallelepiped): volume = l × b × h. Total surface = 2(lb + bh + hl).",
        "Cube: volume = side³. Total surface = 6 × side².",
        "Cylinder: volume = πr²h. Curved surface = 2πrh. Total surface = 2πr(h + r).",
        "Cone: volume = (1/3)πr²h. Slant height l = √(r² + h²). Curved surface = πrl.",
        "Sphere: volume = (4/3)πr³. Surface = 4πr².",
        "Hemisphere: volume = (2/3)πr³. Curved surface = 2πr². Total surface including the base = 3πr².",
        "Right pyramid: volume = (1/3) × base area × height."
      ],
      [
        {
          prompt: "A cylinder has radius 7 cm and height 10 cm. Take π = 22/7. Find the volume.",
          work: "Volume = πr²h = 22/7 × 49 × 10 = 22 × 7 × 10 = 1540 cm³.",
          answer: "<strong>1540 cm³.</strong>"
        }
      ]
    ),
    topic(
      "Data interpretation",
      [
        "Tier 1 charts are the bar diagram, the pie chart, the histogram, and the frequency polygon. A bar’s height is the value. A pie is the whole, 360°, cut into shares. A histogram uses touching bars for class intervals; the area of a bar represents frequency. A frequency polygon joins the midpoints of the tops of those bars.",
        "Read the title and the units before any calculation. Most questions ask for a percentage, a ratio, or a difference of two readings."
      ],
      [
        "Pie: angle of a category = (value / total) × 360°.",
        "Value of a category = (angle / 360) × total.",
        "Percent share = (angle / 360) × 100, or (value / total) × 100.",
        "In a bar graph, difference = taller bar − shorter bar. Percent increase = (difference / original) × 100.",
        "Histogram class midpoint = (lower limit + upper limit) / 2. The frequency polygon uses these midpoints."
      ],
      [
        {
          prompt: "A family spends 25% of its income on rent. In a pie chart of that budget, what is the angle of the rent sector?",
          work: "The full circle is 360°. Rent is a quarter of the income, and a quarter of 360° is 90°.",
          answer: "<strong>90°.</strong>"
        }
      ]
    )
  ],
  4: [
    topic(
      "Analogy",
      [
        "An analogy says the relationship between the first pair is the same as the relationship between the second pair. Name that relationship in one short phrase before you look at the options. The usual relationships are purpose (book is used to read), worker and tool, part and whole, animal and young one, word and synonym, and a number rule such as square or double.",
        "Figural analogy uses the same idea with shapes: rotation, number of sides, shading, or the position of a dot. Symbolic analogy uses letters or signs with a fixed shift."
      ],
      [
        "Write the link as “A is to B because …”, then apply that same because to the new word.",
        "Number analogy: check +n, ×n, n², n² + 1, and n² − 1 before anything more elaborate.",
        "Letter analogy: count the jump. A to C is +2. The jump must fit every letter in the pair."
      ],
      [
        {
          prompt: "Book : Read :: Pen : ?",
          work: "A book is the object you use in order to read. A pen is the object you use in order to write. Ink is what a pen contains, and paper is what you write on, so those are related words but not the same relationship.",
          answer: "<strong>Write.</strong>"
        }
      ]
    ),
    topic(
      "Classification",
      [
        "Classification, the odd one out, gives four items of which three follow one rule. The fourth breaks it. Check the category first: three fruits and one vegetable, three primes and one composite, three cubes and one other number. Only after that should you look at spelling or a smaller number trick.",
        "Figural classification works the same way. Three figures may rotate the same way, or have the same number of lines, and one figure does not."
      ],
      [
        "State the rule that three items share, in one sentence.",
        "For numbers, test prime, square, cube, even, and multiple of a small number.",
        "For words, test meaning first, then number of letters, then vowel pattern."
      ],
      [
        {
          prompt: "Which is the odd one: 8, 27, 64, 100?",
          work: "8 = 2³, 27 = 3³, 64 = 4³. Each of those is a cube. 100 is 10², a square, and it is not a cube. 5³ would have been 125, not 100.",
          answer: "<strong>100.</strong>"
        }
      ]
    ),
    topic(
      "Series",
      [
        "A series is a list with one rule. For numbers, write the differences between neighbours. If those differences themselves make a simple list, such as +5, +7, +9, the next difference continues that list. If the differences do not help, try multiplying by a fixed number and then adding or subtracting a fixed number.",
        "An alphabet series often moves one letter forward and another backward. After Z comes A. A word series follows meaning: days, months, or a growing category. A figural series moves a dot, adds a line, or rotates a shape by the same angle each step."
      ],
      [
        "First check: constant difference. Second check: differences that themselves increase by a constant.",
        "Then check ×n + k, and n² or n³ plus or minus a small number.",
        "Alphabet position: A = 1 … Z = 26. A jump past Z wraps around.",
        "In a figural series, track one element only, then the next element."
      ],
      [
        {
          prompt: "Find the next term: 3, 8, 15, 24, ?",
          work: "Differences: 8−3 = 5, 15−8 = 7, 24−15 = 9. The differences grow by 2, so the next difference is 11. 24 + 11 = 35. The terms are also one less than the squares 4, 9, 16, 25, 36, which gives the same next term, 35.",
          answer: "<strong>35.</strong>"
        }
      ]
    ),
    topic(
      "Coding and decoding",
      [
        "A letter code shifts every letter by the same number of places, or by a pattern of places. Write the alphabet and count. +1 turns CAT into DBU. Always test the rule on the second and third letters. A rule that fits only the first letter is the usual trap.",
        "A number code may reverse digits, add the position values of letters (A = 1), or pair opposite letters. A and Z are opposites, B and Y, C and X, because their positions add to 27."
      ],
      [
        "Forward shift of k: each letter’s position increases by k. Backward shift decreases it.",
        "Opposite letters: position of the pair adds to 27. Opposite of D (4) is W (23).",
        "If the word is reversed and then shifted, do the two steps in the order the example shows.",
        "To decode, apply the opposite shift to the given code."
      ],
      [
        {
          prompt: "If CAT is coded as DBU, how is DOG coded?",
          work: "C to D is +1, A to B is +1, T to U is +1. The same +1 on DOG gives E, P, and H.",
          answer: "<strong>EPH.</strong>"
        }
      ]
    ),
    topic(
      "Blood relations",
      [
        "Rewrite the sentence from the inside, starting at the words “my” or “his”. Draw a small family only when there are three generations. Use a box or a male sign for a man and a circle for a woman, and put marriage as a double line and children as a line downward.",
        "“Only son of my grandfather”, said by a man, is that man’s father, unless the speaker’s father has a brother who was excluded by the word “only”. “Mother’s only son”, said by a woman, is her brother. Said by a man, it is the man himself."
      ],
      [
        "Father’s or mother’s son: brother, or the speaker if he is male and there is no other son.",
        "Father’s or mother’s daughter: sister, or the speaker if she is female and there is no other daughter.",
        "Brother’s or sister’s son: nephew. Brother’s or sister’s daughter: niece.",
        "Spouse’s father: father-in-law. Spouse’s brother: brother-in-law.",
        "Generation check: son and daughter are one generation down. Brother and sister are the same generation."
      ],
      [
        {
          prompt: "Pointing to a woman, Ravi said, “She is the daughter of the only son of my grandfather.” How is the woman related to Ravi?",
          work: "The only son of Ravi’s grandfather is Ravi’s father. The daughter of Ravi’s father is Ravi’s sister. She is not his cousin, because a cousin would be the daughter of a brother of his father, and the word “only” removes that brother.",
          answer: "<strong>Sister.</strong>"
        }
      ]
    ),
    topic(
      "Direction sense",
      [
        "North and south are opposite. East and west are opposite. If you face north, your left hand points west and your right hand points east. A right turn changes the way you face by 90° clockwise. A left turn is 90° anticlockwise.",
        "When the path has a right angle, the straight-line distance from the start is found with Pythagoras. A 3 km and 4 km pair gives 5 km. A 6 km and 8 km pair gives 10 km. The distance walked is the sum of the legs. The question usually asks for the straight-line distance, or for the final direction."
      ],
      [
        "Right turn: North → East → South → West → North.",
        "Left turn: North → West → South → East → North.",
        "Final distance = √(east-west shift² + north-south shift²).",
        "Distance walked = sum of the lengths of the path. These two answers are different.",
        "Sunrise is east and sunset is west. A shadow in the morning falls toward the west."
      ],
      [
        {
          prompt: "A man walks 4 km north and then 3 km east. How far is he from the start, and in which direction?",
          work: "The two legs are perpendicular. Distance = √(4² + 3²) = √(16 + 9) = √25 = 5 km. He is north and east of the start, so the direction is north-east. He walked 7 km, but that is not the distance from the start.",
          answer: "<strong>5 km, north-east.</strong>"
        }
      ]
    ),
    topic(
      "Word building",
      [
        "Word building asks you to make a meaningful English word from given letters, or to see what happens when the letters of a word are rearranged. You may use each given letter only as many times as it appears. An extra letter that was not supplied cannot be used. The word has to be a real word, not a string that only looks pronounceable.",
        "The usual forms are: rearrange the letters of a word to make another word (an anagram); pick which one letter, added to a group, makes a word; and say which word can be formed from a longer word such as a jumbled name. A second form asks which word cannot be formed, and the reason is always a missing or repeated letter.",
        "Work from the uncommon letters. Q needs a U. A jumbled set with one V, one K, and no second vowel is easier to place than a set full of A and E. If the question gives four ready-made options, test the options against the letter pool instead of inventing a word from scratch."
      ],
      [
        "Count each letter. The new word cannot use a letter more often than the source.",
        "An anagram uses exactly the same letters. LISTEN and SILENT are the same six letters.",
        "If one letter is left unused, the question will say so. Otherwise use them all.",
        "For “which cannot be formed”, find the option that needs a letter the source does not have."
      ],
      [
        {
          prompt: "Which of these words can be formed from the letters of the word “DICTIONARY”, using each letter no more than once: ACTION, RATION, DAIRY, CREATION?",
          work: "DICTIONARY contains one C, and CREATION needs a second C plus an E, so CREATION is impossible. ACTION uses A, C, T, I, O, N, all of which appear once in DICTIONARY. RATION uses R, A, T, I, O, N, which are also present. DAIRY uses D, A, I, R, Y, which are present. All three of ACTION, RATION, and DAIRY can be formed. CREATION cannot.",
          answer: "<strong>ACTION, RATION, and DAIRY can be formed. CREATION cannot.</strong>"
        }
      ]
    )
  ],
  5: [
    topic(
      "Syllogism",
      [
        "A syllogism gives statements that you must treat as true, and conclusions that may or may not follow. “All A are B” puts the whole A circle inside B. “Some A are B” means the circles overlap in at least one point. “No A is B” means the circles do not touch. “Some A are not B” means at least one A sits outside B.",
        "A conclusion follows only when every possible drawing of the statements makes that conclusion true. If you can draw the statements in a way that makes the conclusion false, the conclusion does not follow. “Some” never becomes “all” by itself."
      ],
      [
        "All A are B, and all B are C, so all A are C.",
        "All A are B does not mean all B are A.",
        "Some A are B, and all B are C, so some A are C.",
        "No A is B, and all B are C, does not mean no A is C. A can meet C outside B.",
        "If two conclusions are offered, mark each one separately. “Either-or” is used only when the two conclusions exhaust the possibilities and one of them must hold."
      ],
      [
        {
          prompt: "Statements: All pens are books. All books are papers. Conclusion: All pens are papers. Does a second conclusion, “All papers are pens”, follow?",
          work: "Pens are inside books, and books are inside papers, so every pen is a paper. The first conclusion follows. Papers can be larger than the pen circle, so a paper need not be a pen. The second conclusion does not follow.",
          answer: "<strong>Only “all pens are papers” follows.</strong>"
        }
      ]
    ),
    topic(
      "Venn diagrams",
      [
        "A class Venn question gives the size of each group and the size of the overlap. Fill the overlap first, because that region has been counted in both groups. Only-tea is the tea total minus the people who like both. The union is only-tea plus both plus only-coffee. People in neither group are the class size minus the union.",
        "A three-circle question is the same idea with one more region. Fill the “all three” region first, then each “exactly two” region, then each “only one” region."
      ],
      [
        "Only A = A total − both.",
        "Union of A and B = only A + both + only B = A + B − both.",
        "Neither = total − union.",
        "For three sets, total in at least one = sum of the singles − the pairwise overlaps that were subtracted too often + the triple overlap. Filling regions one by one avoids this formula."
      ],
      [
        {
          prompt: "In a group of 40, 18 like tea, 16 like coffee, and 8 like both. How many like only tea, and how many like neither?",
          work: "Only tea = 18 − 8 = 10. Only coffee = 16 − 8 = 8. Union = 10 + 8 + 8 = 26. Neither = 40 − 26 = 14.",
          answer: "<strong>10 like only tea. 14 like neither.</strong>"
        }
      ]
    ),
    topic(
      "Missing number and wrong number",
      [
        "A missing-number figure repeats one operation in every cell: the sum of two neighbours, their product, or the square of a digit. Find the operation from a cell that is already complete, then use it on the cell with the blank.",
        "A wrong-number series is a normal series with one term that breaks the rule. Write the rule from the early terms, extend it, and mark the first term that disagrees."
      ],
      [
        "Check sum, difference, product, and square on a completed cell before you invent a new rule.",
        "The same rule must fit every completed cell, not only one of them.",
        "In a wrong-term series, the differences usually become uneven at exactly one place."
      ],
      [
        {
          prompt: "One cell of a figure shows 2, 3, and 6, and 2 × 3 = 6. Another cell shows 4, 5, and a blank. A series reads 2, 6, 12, 20, 30, 42, 58. Which term of the series is wrong?",
          work: "The figure uses the product, so the blank is 4 × 5 = 20. In the series the differences are +4, +6, +8, +10, +12, and then +16. The last jump should be +14, which would make 56, not 58. So 58 is the wrong term.",
          answer: "<strong>The blank is 20. The wrong term is 58.</strong>"
        }
      ]
    ),
    topic(
      "Embedded figures and figural series",
      [
        "An embedded figure is a small shape hidden inside a larger one. It must match the small shape in the number of sides, the angles, and the size. A stretched or rotated copy is allowed only when the question says rotation is allowed. Count the sides of the target shape and look for that same closed outline in the big figure.",
        "In a figural series, one element moves. A dot may go clockwise, one corner at a time. A line may be added. A shape may rotate by 45° or 90°. Follow a single element from the first figure to the second, name the move, and check that the same move happens from the second figure to the third."
      ],
      [
        "Embedded: the hidden shape keeps its angles. A square does not become a rectangle.",
        "Clockwise from the top-left corner of a square: top-right, then bottom-right, then bottom-left, then top-left.",
        "A 90° clockwise turn takes the top side to the right side.",
        "If two elements move, write one sentence for each. They often move in opposite directions."
      ],
      [
        {
          prompt: "A dot sits at the top-left corner of a square and moves one corner clockwise at each step. Where is it after one step, and after four steps?",
          work: "One clockwise step from top-left lands on the top-right. Four steps later it has visited all four corners and is back at the top-left.",
          answer: "<strong>Top-right after one step. Top-left after four steps.</strong>"
        }
      ]
    ),
    topic(
      "Paper folding and punched holes",
      [
        "A square paper is folded, a hole is punched, and you have to say what the open sheet looks like. Each fold makes a mirror. When the sheet opens, the hole is copied across that fold. A hole punched on the crease itself is not copied to a new place; it stays on the crease.",
        "One fold makes two layers, so a punch away from the crease opens into two holes. A second fold, of the already folded paper, makes four layers, so one punch away from both creases opens into four holes. The holes are symmetric across each crease."
      ],
      [
        "One fold, punch off the crease: 2 holes, mirror images.",
        "One fold, punch on the crease: 1 hole.",
        "Two folds, punch off both creases: 4 holes.",
        "The open pattern is symmetric about every crease that was used.",
        "A transparent sheet with a figure, when folded, shows the figure reversed left to right if the fold is vertical."
      ],
      [
        {
          prompt: "A square is folded in half once. A hole is punched away from the fold. A second square is folded twice, and a hole is punched away from both folds. How many holes appear when each sheet is opened?",
          work: "The first sheet has two layers at the punch, so opening it shows two holes. The second sheet has four layers at the punch, so opening it shows four holes.",
          answer: "<strong>2 holes, and 4 holes.</strong>"
        }
      ]
    )
  ],
  6: [
    topic(
      "Reading comprehension",
      [
        "A passage is followed by questions on a fact stated in it, or on what the passage implies. The answer has to come from the passage. Outside knowledge can help you understand a word, but it cannot replace a sentence that is actually there.",
        "Read the questions once, then the passage, then answer. For a fact question, find the sentence that contains the same names and numbers. For an inference, the passage must force that idea. A choice that adds a new claim is wrong even if the claim is true in real life."
      ],
      [
        "Detail question: the words in the option should match one sentence, not the opposite of it.",
        "Inference: “the author suggests” still needs support in the passage.",
        "Title question: the title must cover the whole passage, not one example.",
        "Vocabulary-in-context: the meaning is the one that fits that sentence, which may not be the first dictionary meaning."
      ],
      [
        {
          prompt: "Passage: “The city added 40 buses in March. Even so, the morning crowds on the old routes did not thin.” Which statement follows?",
          work: "The passage says two things: buses were added, and the crowds stayed. It does not say the new buses were late, or that the city failed to buy them. An option that says the crowds remained despite the new buses is supported. An option that says the city bought no buses contradicts the first sentence.",
          answer: "<strong>Adding buses did not reduce the morning crowds.</strong>"
        }
      ]
    ),
    topic(
      "Cloze test and fill in the blanks",
      [
        "A cloze passage has blanks inside one connected text. Each blank is decided by grammar and by the meaning of the sentence around it. Read a sentence past the blank before you choose. The right word has to agree in tense and number, and it has to point the meaning in the direction the next sentence continues.",
        "A single-sentence fill-in is the same test, shorter. Prepositions and articles are the usual grammar blanks. “Since” goes with a point in time and a perfect tense. “For” goes with a length of time."
      ],
      [
        "He has lived here since 2019. He has lived here for five years.",
        "One of the boys is absent. “One” is singular.",
        "Neither of the two candidates was present. “Neither” is singular.",
        "Depend on, interested in, good at. The preposition is part of the phrase, not a free choice.",
        "A, an, and the: “an” before a vowel sound, not merely a vowel letter. An hour, a university."
      ],
      [
        {
          prompt: "He has lived in Delhi ____ 2019. Choose for, since, from, or by.",
          work: "The verb is in the present perfect, and 2019 is the starting point, not a length. “Since” is used with a starting point. “For” would need a duration, such as “for seven years”.",
          answer: "<strong>since.</strong>"
        }
      ]
    ),
    topic(
      "Error detection and sentence improvement",
      [
        "Error spotting asks which part of the sentence breaks a rule. Read the subject and the verb first. Then check tense, pronoun, preposition, and article. The error is one part. Do not rewrite the whole sentence in your head and then blame a part that is actually correct.",
        "Sentence improvement gives a phrase and a better replacement. “No improvement” is correct when the given sentence is already right. Do not change a correct sentence just because another wording is also possible."
      ],
      [
        "Subject-verb: a singular subject takes a singular verb. “The quality of the apples is good,” because the subject is quality.",
        "Senior, junior, superior, inferior, and prior take “to”, not “than”.",
        "“Return” already means come back. “Return back” is an error.",
        "Scarcely, hardly, and barely are followed by “when” or “before”, not by “than”.",
        "If the given sentence is grammatical, choose “no improvement”."
      ],
      [
        {
          prompt: "Improve: “He is senior than me.”",
          work: "“Senior” does not take “than”. The comparison word with senior is “to”. The pronoun after it, in careful exam English, is “me” in this common form, and the tested error is “than”.",
          answer: "<strong>He is senior to me.</strong>"
        }
      ]
    ),
    topic(
      "Synonyms and antonyms",
      [
        "A synonym is a word close in meaning. An antonym is a word opposite in meaning. The exam uses a word in isolation, so choose the general meaning, not a rare technical one. If two options are close, pick the one that could replace the word in an ordinary sentence.",
        "Watch prefixes. Un-, in-, im-, ir-, and dis- often build the antonym, but not always: “inflammable” means capable of burning, and it is not the opposite of “flammable”."
      ],
      [
        "Abundant means plentiful. The antonym is scarce.",
        "Ancient means very old. The antonym is modern.",
        "Brief means short. Expand is the opposite of contract.",
        "Replace the word in a simple sentence. If the sentence still means the same thing, the choice is a synonym."
      ],
      [
        {
          prompt: "Give a synonym of “abundant” and an antonym of “ancient”.",
          work: "Abundant describes a large supply, so plentiful can replace it. Ancient describes the distant past, and modern is the opposite period. Old and historic are near-synonyms of ancient, so they are not antonyms.",
          answer: "<strong>Plentiful. Modern.</strong>"
        }
      ]
    ),
    topic(
      "Idioms and phrases",
      [
        "An idiom means something other than the literal words. “Once in a blue moon” is not about the moon. It means very rarely. Learn the meaning as a whole phrase. In the exam, reject the option that retells the picture in the words, and keep the option that states the real meaning.",
        "A phrase question can also ask you to put the idiom into a sentence. The sentence must use the meaning, not the literal picture."
      ],
      [
        "Once in a blue moon: very rarely.",
        "A blessing in disguise: a good outcome that first looked unfortunate.",
        "To call a spade a spade: to speak plainly.",
        "Beat about the bush: to avoid the main point.",
        "The option that draws the literal scene is the trap."
      ],
      [
        {
          prompt: "What does “a blessing in disguise” mean?",
          work: "The words mention a blessing and a disguise. The meaning is not a religious ceremony and not a hidden curse. It is a benefit that was not obvious at the start, because it arrived looking like a problem.",
          answer: "<strong>Something good that at first seemed bad.</strong>"
        }
      ]
    ),
    topic(
      "One-word substitution",
      [
        "One-word substitution replaces a definition with the single word the exam expects. Read the definition for the key noun: a person, a place, a book, or a state. “A life history written by the person himself or herself” is an autobiography. A biography is written by someone else.",
        "The same definition is repeated across years with the options shuffled. When you know the word, check that every part of the definition fits. A polyglot knows several languages. A linguist studies language, which is a different idea, and the expected answer for “many languages” is polyglot."
      ],
      [
        "Autobiography: one’s own life story. Biography: someone else’s life story.",
        "Polyglot: a person who speaks many languages.",
        "Mortuary: a place where dead bodies are kept.",
        "Illegible: handwriting that cannot be read. Ineligible: not qualified.",
        "Optimistic: expecting a good result. Pessimistic: expecting a bad one."
      ],
      [
        {
          prompt: "A life history written by oneself is called what?",
          work: "The writer and the subject are the same person, which is what “auto” marks. A biography is written by another person. A novel is invented. A memoir is close, but the standard one-word answer for this definition is autobiography.",
          answer: "<strong>Autobiography.</strong>"
        }
      ]
    ),
    topic(
      "Spelling",
      [
        "Spelling questions ask for the correct spelling, or for the misspelt word in a list. The same words return: accommodation, separate, receive, necessary, occasion, definite, privilege. Learn the doubled letters by writing the word once and noticing which pair doubles.",
        "“I before e except after c” helps receive, but it is not a law for every word. Believe has i before e. Receive has e before i because of the c."
      ],
      [
        "Accommodation: two c’s and two m’s.",
        "Separate: there is “a” in the middle, not “seperate”.",
        "Receive: e then i. Believe: i then e.",
        "Necessary: one c, two s’s.",
        "Occasion: two c’s, one s."
      ],
      [
        {
          prompt: "Which spelling is wrong: Separate, Seperate, Occasion, Necessary?",
          work: "Separate is spelled with “par”, like “part”. Seperate copies the first e and is the common misspelling. Occasion and necessary, as written here, are correct.",
          answer: "<strong>Seperate is wrong. The word is separate.</strong>"
        }
      ]
    ),
    topic(
      "Active and passive voice",
      [
        "In the active voice the doer comes first: “She wrote a letter.” In the passive voice the receiver comes first: “A letter was written by her.” The tense does not change. A simple past active verb becomes a simple past passive verb. The object of the active sentence becomes the subject of the passive sentence.",
        "If the active verb has no object, a passive form is not possible. “She sleeps” has nothing to move to the front."
      ],
      [
        "Simple present: write / writes → is / are written.",
        "Present continuous: is writing → is being written.",
        "Simple past: wrote → was / were written.",
        "Present perfect: has written → has been written.",
        "Modals: can write → can be written. Should write → should be written.",
        "Keep the tense. “Wrote” does not become “is written”."
      ],
      [
        {
          prompt: "Change to the passive: “They are watching a film.”",
          work: "The object “a film” moves to the front. The verb is present continuous, so the passive uses “is being” plus the past participle “watched”. The doer, if kept, follows “by”.",
          answer: "<strong>A film is being watched by them.</strong>"
        }
      ]
    ),
    topic(
      "Direct and indirect speech",
      [
        "Direct speech quotes the words: He said, “I am tired.” Indirect speech reports them: He said that he was tired. The reporting verb “said” is already past, so the spoken verb usually moves one step back in tense. The pronoun changes to match the speaker. Time words change because the report happens later.",
        "If the reporting verb is in the present, the tense inside the quote often stays. A universal truth also stays in the present: He said that the earth moves round the sun."
      ],
      [
        "Present simple becomes past simple. “Am” becomes “was”. “Will” becomes “would”.",
        "Now becomes then. Today becomes that day. Tomorrow becomes the next day. Yesterday becomes the previous day.",
        "This becomes that. These becomes those.",
        "Say takes “that” and no person. Tell takes a person: he told me that…",
        "Questions in indirect speech use if or whether, or the question word, and the word order becomes statement order."
      ],
      [
        {
          prompt: "Report this: She said, “I will come tomorrow.”",
          work: "“I” becomes “she”, because she is the speaker. “Will” becomes “would”. “Tomorrow” becomes “the next day”. The comma and the quotation marks disappear, and “that” joins the clauses.",
          answer: "<strong>She said that she would come the next day.</strong>"
        }
      ]
    ),
    topic(
      "Sentence rearrangement",
      [
        "Para jumbles give sentences, or parts of one sentence, in the wrong order. Find the opening. It is usually the sentence that introduces the people or the place and does not start with “he”, “this”, or “however”. Then look for a sentence that refers back to a noun you have already seen.",
        "For parts of a single sentence, find the subject first, then the verb, then the object, then the time or place phrase."
      ],
      [
        "A sentence starting with a pronoun needs an earlier sentence that names the person.",
        "“However” and “therefore” cannot be the first sentence.",
        "Fixed order inside one clause: subject, verb, object, then phrases of manner, place, and time.",
        "Articles sit with their noun: “an umbrella”, not “umbrella an”."
      ],
      [
        {
          prompt: "Order the parts: (1) umbrella (2) an (3) She (4) carries.",
          work: "The subject is “She”. The verb is “carries”. The object is “an umbrella”, and the article comes before the noun. So the order is 3, 4, 2, 1.",
          answer: "<strong>She carries an umbrella.</strong>"
        }
      ]
    )
  ],
  7: [
    topic(
      "Polity and the Constitution",
      [
        "Tier 1 polity is the structure of the Constitution, not case law. India is a union of states with a parliamentary system. The Lok Sabha is elected for five years unless it is dissolved sooner. The Rajya Sabha is permanent; one-third of its members retire every second year. The President is the constitutional head and appoints the Prime Minister, who must have the confidence of the Lok Sabha.",
        "Fundamental Rights are in Part III. Article 32 lets a person move the Supreme Court to enforce them. Dr B. R. Ambedkar called Article 32 the heart and soul of the Constitution. Fundamental duties are in Article 51A. They were added by the 42nd Amendment, which changed so much of the Constitution that it is called the Mini Constitution."
      ],
      [
        "Lok Sabha term: 5 years. Rajya Sabha: permanent, one-third retire every two years.",
        "Article 32: constitutional remedies. Article 14: equality before law. Article 19: freedoms such as speech. Article 21: life and personal liberty.",
        "Article 110 defines a Money Bill. It is introduced only in the Lok Sabha.",
        "Article 112 is the Annual Financial Statement, the Budget.",
        "Article 279A: the GST Council.",
        "Article 368: the amendment procedure.",
        "NITI Aayog replaced the Planning Commission on 1 January 2015."
      ],
      [
        {
          prompt: "Which article is the right to constitutional remedies, and which amendment added the fundamental duties?",
          work: "Remedies sit in Article 32, which is why it is called the heart and soul of the Constitution. The duties were not in the original text. They entered as Article 51A through the 42nd Amendment.",
          answer: "<strong>Article 32. The 42nd Amendment.</strong>"
        }
      ]
    ),
    topic(
      "Modern Indian history",
      [
        "Modern history in this paper runs from the coming of the European companies to independence. The dates that decide questions are few, and they should be fixed in order so that a later movement is not placed before an earlier one.",
        "The Battle of Plassey in 1757 gave the British control over Bengal after Robert Clive defeated Siraj-ud-Daulah. The Revolt of 1857 began at Meerut. The non-cooperation years, the Dandi March of 1930 against the salt tax, and the Quit India Movement of 1942 are the national-movement dates asked most often."
      ],
      [
        "Plassey: 1757. Buxar: 1764.",
        "Revolt of 1857, also called the First War of Independence: started at Meerut.",
        "Indian National Congress founded: 1885.",
        "Jallianwala Bagh: 1919. Non-Cooperation: 1920. Dandi March: 1930. Quit India: 8 August 1942.",
        "The Discovery of India: Jawaharlal Nehru. Vande Mataram: Bankim Chandra Chatterjee, in the novel Anandamath."
      ],
      [
        {
          prompt: "Put these in order: Quit India, Plassey, Dandi March, the Revolt of 1857.",
          work: "Plassey is in the eighteenth century, 1757. The revolt is 1857. Dandi is 1930. Quit India is 1942. The order is the order of those years.",
          answer: "<strong>Plassey, 1857, Dandi March, Quit India.</strong>"
        }
      ]
    ),
    topic(
      "Geography",
      [
        "Physical geography in Tier 1 is the shape of the earth’s features and a few lines on the globe. The Tropic of Cancer, 23.5° N, passes through the middle of India. Indian Standard Time is taken from 82.5° E, which is 5 hours 30 minutes ahead of Greenwich.",
        "Indian geography questions name rivers, neighbours, and passes. The Ganga is the longest river in India. The Godavari is the longest river of peninsular India, which is a different claim. India’s land neighbours include Pakistan, Afghanistan, China, Nepal, Bhutan, Bangladesh, and Myanmar."
      ],
      [
        "IST: 82°30′ E, GMT + 5:30.",
        "Tropic of Cancer passes through India. The Equator does not.",
        "Longest river in India: Ganga. Longest peninsular river: Godavari.",
        "Highest peak in India: Kangchenjunga among peaks fully treated in the usual school list; the higher Karakoram peaks are claimed in a wider sense. For SSC, Kanchenjunga is the standard answer for the highest peak in India.",
        "Capital is not always the largest city. Canberra is the capital of Australia. Sydney is not."
      ],
      [
        {
          prompt: "Which meridian is the basis of Indian Standard Time, and is the Tropic of Cancer inside India?",
          work: "82.5 degrees east runs near Mirzapur and is the IST meridian. The Tropic of Cancer crosses states from Gujarat across to Mizoram, so it does pass through India.",
          answer: "<strong>82.5° E. Yes, the Tropic of Cancer passes through India.</strong>"
        }
      ]
    ),
    topic(
      "General science",
      [
        "The science questions sit at school level. Physics asks for units and simple laws. Chemistry asks for the nature of acids, bases, and everyday substances. Biology asks for the job of a part of the body, or for the disease caused by a missing vitamin.",
        "Force is measured in newtons. One newton is the force that gives a mass of 1 kg an acceleration of 1 m/s². The pH scale runs from acidic, below 7, through neutral at 7, to basic above 7. Haemoglobin is the pigment in red blood cells that carries oxygen."
      ],
      [
        "SI unit of force: newton. Of work and energy: joule. Of power: watt. Of pressure: pascal.",
        "Speed = distance / time. Acceleration is the change in velocity per unit time.",
        "pH below 7: acid. pH 7: neutral. pH above 7: base.",
        "Vitamin C deficiency: scurvy. Vitamin D: rickets. Vitamin B1: beriberi. Vitamin A: night blindness. Iodine deficiency: goitre.",
        "Red blood cells carry haemoglobin. White blood cells fight infection. Platelets help clotting."
      ],
      [
        {
          prompt: "A solution has pH 3. A child has scurvy. What does the pH say, and which vitamin is missing?",
          work: "3 is below 7, so the solution is acidic. Scurvy is the deficiency disease of vitamin C. Rickets would have been vitamin D, and beriberi vitamin B1.",
          answer: "<strong>The solution is acidic. The missing vitamin is C.</strong>"
        }
      ]
    ),
    topic(
      "Economy and schemes",
      [
        "Basic economy in this paper is the Budget, the difference between a direct and an indirect tax, and the bodies that manage money. The Budget is the Annual Financial Statement under Article 112. A direct tax such as income tax is paid by the person on whom it is levied. GST is an indirect tax on supply, and the GST Council under Article 279A recommends the rates.",
        "NITI Aayog, set up in 2015, is the policy body that replaced the Planning Commission. It does not allocate plan funds the way the old commission did."
      ],
      [
        "Article 112: the Budget. Article 110: Money Bill. Article 279A: GST Council.",
        "Direct tax: the burden stays with the payer, as with income tax. Indirect tax: the burden can be passed on, as with GST.",
        "RBI is the central bank. It issues currency other than the one-rupee note and coins, which are issued by the Government of India.",
        "NITI Aayog: 1 January 2015, replacing the Planning Commission."
      ],
      [
        {
          prompt: "Which article deals with the GST Council, and what did NITI Aayog replace?",
          work: "The council is a constitutional body under Article 279A. NITI Aayog took the place of the Planning Commission in 2015. It did not replace the Finance Commission, which still recommends how tax revenue is shared.",
          answer: "<strong>Article 279A. The Planning Commission.</strong>"
        }
      ]
    ),
    topic(
      "Current affairs for this paper",
      [
        "Use events from the months leading to October 2026, and only the facts you can state in one sentence. Two Cabinet and diplomatic items are enough to revise properly rather than a long list of headlines.",
        "The Union Cabinet approved Green Energy Corridor Phase-III, presented as PM DHARA, with an outlay of ₹1,86,405 crore. It is meant to evacuate up to 135 GW of renewable energy through intra-state transmission, and to deploy 50 GWh of battery storage, with the scheme targeted by FY 2032–33. The 900 GW figure is a wider non-fossil capacity aim for 2035. It is not the evacuation target of this corridor.",
        "On 30 September 2026, Prime Minister Narendra Modi spoke by telephone with the President of the United States, Donald Trump. They reviewed the India–US Comprehensive Global Strategic Partnership, including trade, defence, energy, and critical technologies."
      ],
      [
        "GEC-III / PM DHARA outlay: ₹1,86,405 crore.",
        "Evacuation target: up to 135 GW. Battery storage: 50 GWh. Horizon: FY 2032–33.",
        "30 September 2026: Modi–Trump call on the Comprehensive Global Strategic Partnership.",
        "Do not swap 135 GW with 50 GWh. One is power capacity. The other is stored energy."
      ],
      [
        {
          prompt: "PM DHARA is approved at ₹1,86,405 crore. Which number is the renewable-energy evacuation target, and which is the battery target?",
          work: "The corridor is built to carry power, so the 135 figure is in gigawatts of renewable energy. The batteries store energy, so the 50 figure is in gigawatt-hours. The rupee figure is the outlay, not a capacity.",
          answer: "<strong>135 GW evacuation. 50 GWh of batteries.</strong>"
        }
      ]
    ),
    topic(
      "Static GK for a last pass",
      [
        "Static GK is the fixed list: books, capitals, days, and organisations. It is lower yield than polity and modern history in the time you have, so keep a short set and do not open a new book for it.",
        "Capitals are the usual trap, because the largest city is often not the capital. Books are matched to authors you already met in the history note. Organisations are matched to the one job they exist to do."
      ],
      [
        "Canberra: capital of Australia. Sydney is the largest city.",
        "The Discovery of India: Nehru. Vande Mataram: Bankim Chandra Chatterjee.",
        "RBI: central bank. ISRO: space. WHO: world health, headquarters Geneva. UNO headquarters: New York.",
        "National Voters’ Day: 25 January. Republic Day: 26 January. Independence Day: 15 August. Gandhi Jayanti: 2 October.",
        "Rabi crops in the MSP list include wheat, barley, gram, lentil, rapeseed-mustard, and safflower."
      ],
      [
        {
          prompt: "Name the capital of Australia and the author of Vande Mataram.",
          work: "The capital was planned at Canberra, inland, rather than at Sydney or Melbourne. Vande Mataram is Bankim Chandra Chatterjee’s song, later the national song, from Anandamath. Tagore wrote the national anthem, Jana Gana Mana, which is a different work.",
          answer: "<strong>Canberra. Bankim Chandra Chatterjee.</strong>"
        }
      ]
    )
  ]
};

function topic(title, body, formulas, examples) {
  return { title, body, formulas, examples };
}
