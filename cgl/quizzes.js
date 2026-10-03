window.CGL_QUIZ = {};

function add(title, items) {
  window.CGL_QUIZ[title] = items;
}

function Q(text, options, answer, why) {
  return { text, options, answer, why };
}

add("Number system", [
  Q("Which of the following numbers is divisible by 11?", ["2806", "3072", "3146", "2987"], 0, "Alternate sum 2−8+0−6 = −12, a multiple of 11, so 2806 is divisible by 11. Repeated SSC divisibility item."),
  Q("The smallest number which when divided by 20, 25, 35 and 40 leaves remainders 14, 19, 29 and 34 respectively is", ["1394", "1406", "1664", "1400"], 0, "Each remainder is 6 less than the divisor. The number is LCM(20, 25, 35, 40) − 6 = 1400 − 6 = 1394. Standard SSC question."),
  Q("A number when divided by 3 leaves a remainder of 1. The same number divided by 4 leaves a remainder of 2, and divided by 5 leaves a remainder of 3. The number is", ["22", "58", "34", "46"], 1, "Remainder is 2 less than each divisor in the usual form of this question. Here remainder = divisor − 2, so the number is LCM(3,4,5) − 2 = 60 − 2 = 58. 58 ÷ 3 = 19 remainder 1."),
  Q("The unit digit of 7^43 is", ["1", "3", "7", "9"], 1, "Units of powers of 7 cycle 7, 9, 3, 1 every 4. 43 = 4×10 + 3, so the third place in the cycle, which is 3."),
  Q("How many prime numbers are there between 50 and 70?", ["3", "4", "5", "6"], 1, "53, 59, 61 and 67. Four primes. 51, 55, 57, 63, 65 and 69 are composite.")
]);

add("HCF and LCM", [
  Q("The LCM of two numbers is 864 and their HCF is 144. If one number is 288, the other number is", ["576", "1296", "432", "144"], 2, "Other number = LCM × HCF / given number = 864 × 144 / 288 = 432. SSC previous paper."),
  Q("LCM of two numbers is 225 and their HCF is 5. If one number is 25, the other number is", ["5", "25", "45", "225"], 2, "225 × 5 / 25 = 45. SSC previous paper."),
  Q("The HCF of two numbers is 8. Which of the following can never be their LCM?", ["24", "48", "56", "60"], 3, "The LCM must be a multiple of the HCF. 60 is not a multiple of 8. SSC previous paper."),
  Q("The LCM of two numbers is 1820 and their HCF is 26. If one number is 130, the other is", ["70", "1690", "364", "1264"], 2, "1820 × 26 / 130 = 364. SSC previous paper."),
  Q("The least number which when divided by 4, 6, 8, 12 and 16 leaves a remainder of 2 in each case is", ["46", "48", "50", "56"], 2, "LCM of 4, 6, 8, 12 and 16 is 48. The number is 48 + 2 = 50. SSC previous paper.")
]);

add("Fractions and decimals", [
  Q("0.125 as a fraction in lowest terms is", ["1/4", "1/8", "1/6", "2/5"], 1, "0.125 = 125/1000 = 1/8."),
  Q("2/5 of 3/4 of 80 is", ["24", "30", "32", "48"], 0, "(2/5) × (3/4) × 80 = (2/5) × 60 = 24."),
  Q("Which is the largest?", ["3/5", "5/8", "7/10", "2/3"], 3, "3/5 = 0.6, 5/8 = 0.625, 7/10 = 0.7, 2/3 ≈ 0.667. Largest is 7/10."),
  Q("3/4 of 1/2 of 64 is", ["16", "24", "32", "48"], 1, "Half of 64 is 32. Three-quarters of 32 is 24."),
  Q("1.5 × 0.4 equals", ["0.6", "6", "0.06", "1.9"], 0, "15 × 4 = 60, and there are two decimal places in total, so 0.60.")
]);

add("Square roots", [
  Q("√0.0196 equals", ["0.14", "0.014", "1.4", "0.41"], 0, "14² = 196, and 0.0196 has four decimal places, so the root has two: 0.14."),
  Q("√(1.44) equals", ["0.12", "1.2", "12", "0.012"], 1, "12² = 144, so √1.44 = 1.2."),
  Q("The square root of 0.000441 is", ["0.021", "0.21", "0.0021", "0.00021"], 0, "21² = 441. Six decimal places in the square means three in the root: 0.021."),
  Q("Which of the following is a perfect square?", ["1225", "1280", "1368", "1448"], 0, "35² = 1225. The others do not end in a square pattern that fits a whole square as closely, and 35×35 is exact."),
  Q("√(48) simplified is", ["4√3", "3√4", "16√3", "2√12"], 0, "48 = 16 × 3, so √48 = 4√3.")
]);

add("Simplification and BODMAS", [
  Q("The value of 8 + 4 ÷ 2 × 3 − 6 is", ["8", "5", "11", "14"], 0, "Division and multiplication left to right: 4 ÷ 2 = 2, then 2 × 3 = 6. Then 8 + 6 − 6 = 8."),
  Q("25 − [16 − {4 + (18 ÷ 6 × 2)}] equals", ["15", "19", "21", "17"], 1, "18 ÷ 6 × 2 = 3 × 2 = 6. Then 4 + 6 = 10. Then 16 − 10 = 6. Then 25 − 6 = 19."),
  Q("1/2 + 1/4 + 1/8 equals", ["7/8", "3/4", "5/8", "1"], 0, "4/8 + 2/8 + 1/8 = 7/8."),
  Q("(0.2 × 0.2 × 0.2) / (0.02 × 0.02 × 0.02) equals", ["10", "100", "1000", "1"], 2, "0.008 / 0.000008 = 1000."),
  Q("The value of 100 ÷ 4 × 5 is", ["5", "125", "80", "20"], 1, "Division and multiplication go left to right. 100 ÷ 4 = 25, then 25 × 5 = 125. It is not 100 ÷ 20.")
]);

add("Percentage", [
  Q("If the price of a commodity is increased by 20% and then decreased by 20%, the net change is", ["No change", "4% decrease", "4% increase", "2% decrease"], 1, "Successive +20 and −20 give 20 − 20 − (20×20)/100 = −4. A 4% decrease. Repeated SSC result."),
  Q("A number is increased by 20% and then decreased by 20%. If the original number is 500, the final number is", ["500", "480", "520", "400"], 1, "500 × 1.2 = 600. 600 × 0.8 = 480."),
  Q("What percent of 80 is 20?", ["20%", "25%", "40%", "16%"], 1, "20/80 × 100 = 25%."),
  Q("If 40% of a number is 120, the number is", ["300", "480", "240", "360"], 0, "Number = 120 × 100 / 40 = 300."),
  Q("A student scores 72 out of 80. The percentage is", ["80%", "85%", "90%", "92%"], 2, "72/80 × 100 = 90%.")
]);

add("Profit and loss", [
  Q("A man buys an article for ₹27.50 and sells it for ₹28.60. His gain percent is", ["3.5%", "4%", "5%", "6%"], 1, "Gain = 1.10 on 27.50. 1.10/27.50 × 100 = 4%. A standard textbook SSC item."),
  Q("By selling an article for ₹900 a man loses 10%. The cost price is", ["810", "990", "1000", "1100"], 2, "SP is 90% of CP, so CP = 900 × 100/90 = 1000."),
  Q("A dealer sells two watches for ₹1200 each. On one he gains 20% and on the other he loses 20%. In the whole transaction he", ["gains 4%", "loses 4%", "gains 1%", "neither gains nor loses"], 1, "Equal SP with +r% and −r% gives a loss of (r/10)² percent. Here r = 20, so loss = 4%."),
  Q("The cost price of 20 articles is equal to the selling price of 16 articles. The gain percent is", ["20%", "25%", "30%", "16%"], 1, "Let CP of 1 be ₹1. CP of 20 is 20, which is SP of 16, so SP of 1 is 20/16 = 1.25. Gain = 25%."),
  Q("An article is sold at a profit of 25% of the cost price. If the cost price is ₹400, the selling price is", ["450", "500", "425", "480"], 1, "25% of 400 is 100. SP = 500.")
]);

add("Discount", [
  Q("The marked price of an article is ₹500. After successive discounts of 20% and 10%, the selling price is", ["350", "360", "370", "400"], 1, "500 × 0.8 = 400, then 400 × 0.9 = 360. Equivalent discount 28%."),
  Q("A shopkeeper allows a discount of 10% on the marked price and still gains 20%. If the cost price is ₹450, the marked price is", ["540", "600", "500", "480"], 1, "SP must be 450 × 1.2 = 540. SP is 90% of MP, so MP = 540 × 100/90 = 600."),
  Q("A single discount equivalent to successive discounts of 10% and 20% is", ["30%", "28%", "32%", "25%"], 1, "10 + 20 − 2 = 28%."),
  Q("Marked price ₹800, discount 15%. The selling price is", ["680", "720", "650", "700"], 0, "15% of 800 is 120. SP = 680."),
  Q("If the selling price after a discount of 25% is ₹600, the marked price is", ["750", "800", "700", "900"], 1, "75% of MP = 600, so MP = 600 × 100/75 = 800.")
]);

add("Ratio and proportion", [
  Q("₹640 is divided among A, B and C in the ratio 2:3:5. C’s share is", ["128", "192", "320", "256"], 2, "Total parts 10. One part is 64. C has 5 parts: 320."),
  Q("If a:b = 2:3 and b:c = 3:4, then a:c is", ["2:4", "1:2", "3:4", "2:3"], 1, "a:b:c = 2:3:4, so a:c = 2:4 = 1:2."),
  Q("The ratio of two numbers is 3:4 and their sum is 84. The larger number is", ["36", "48", "42", "56"], 1, "4/7 × 84 = 48."),
  Q("If 2A = 3B = 4C, then A:B:C is", ["2:3:4", "4:3:2", "6:4:3", "3:4:6"], 2, "Let 2A = 3B = 4C = 12. Then A = 6, B = 4, C = 3."),
  Q("A sum of money is divided between A and B in the ratio 5:7. If B’s share is ₹350, the total is", ["250", "600", "700", "500"], 1, "7 parts = 350, so 1 part = 50. Total 12 parts = 600.")
]);

add("Average", [
  Q("The average of 5 numbers is 18. Their sum is", ["80", "90", "72", "108"], 1, "18 × 5 = 90."),
  Q("The average of 10 numbers is 40. If one number 25 is replaced by 55, the new average is", ["43", "42", "45", "40"], 0, "The sum rises by 30. New average = 40 + 30/10 = 43."),
  Q("The average of the first five odd numbers is", ["5", "6", "4", "9"], 0, "1, 3, 5, 7, 9. Sum 25. Average 5."),
  Q("A batsman’s scores are 40, 50, 60 and 70. His average is", ["50", "55", "60", "45"], 1, "Sum 220. Average 220/4 = 55."),
  Q("The average age of 3 boys is 15. If their ages are in the ratio 2:3:4, the age of the oldest is", ["12", "18", "20", "24"], 2, "Sum of ages = 45. Parts 2+3+4 = 9. One part = 5. Oldest = 4 × 5 = 20.")
]);

add("Mixture and alligation", [
  Q("In 40 litres of a mixture, the ratio of milk to water is 3:1. The quantity of milk is", ["10 litres", "20 litres", "30 litres", "35 litres"], 2, "Milk is 3/4 of 40 = 30 litres."),
  Q("In what ratio must water be mixed with milk costing ₹20 per litre so that the mixture is worth ₹15 per litre? Water is free.", ["1:3", "1:4", "3:1", "4:1"], 0, "Alligation: water : milk = (20 − 15) : (15 − 0) = 5:15 = 1:3."),
  Q("A mixture of 20 litres contains milk and water in the ratio 3:2. How much water should be added to make the ratio 1:1?", ["2 litres", "4 litres", "5 litres", "6 litres"], 1, "Milk is 12 litres and water is 8 litres. For 1:1, water must also be 12, so add 4 litres."),
  Q("Tea at ₹40 per kg is mixed with tea at ₹60 per kg in the ratio 2:3. The price of the mixture per kg is", ["48", "50", "52", "54"], 2, "(2×40 + 3×60) / 5 = (80+180)/5 = 52."),
  Q("8 litres are drawn from a can full of milk and replaced by water. If the can holds 40 litres, the fraction of milk left is", ["4/5", "3/5", "1/5", "2/5"], 0, "Milk left = 1 − 8/40 = 4/5 after one replacement.")
]);

add("Partnership", [
  Q("A and B invest ₹20,000 and ₹30,000. They share profit in the ratio", ["2:3", "3:2", "4:5", "1:1"], 0, "Same time, so the ratio is the capital ratio 2:3."),
  Q("A invests ₹20,000 for 12 months and B invests ₹30,000 for 8 months. The profit ratio A:B is", ["2:3", "3:2", "1:1", "4:3"], 2, "20000×12 = 30000×8. The ratio is 1:1."),
  Q("A, B and C invest in the ratio 2:3:5. A profit of ₹2000 is shared. C’s share is", ["400", "600", "1000", "800"], 2, "5/10 × 2000 = 1000."),
  Q("A starts a business with ₹5000. After 4 months B joins with ₹8000. The ratio of their profits at the end of the year is", ["15:16", "5:8", "3:4", "5:4"], 0, "A’s months: 12. Capital-time 5000×12 = 60000. B’s months: 8. Capital-time 8000×8 = 64000. Ratio 60:64 = 15:16."),
  Q("Three partners invest ₹10,000, ₹15,000 and ₹25,000 for the same time. The first partner’s share of a ₹5000 profit is", ["1000", "1500", "2500", "2000"], 0, "Ratio 2:3:5. First share is 2/10 × 5000 = 1000.")
]);

add("Simple interest", [
  Q("Simple interest on ₹1000 at 10% per annum for 2 years is", ["100", "200", "210", "120"], 1, "1000 × 10 × 2 / 100 = 200."),
  Q("In how many years will ₹800 amount to ₹920 at 5% simple interest?", ["2", "3", "4", "5"], 1, "Interest = 120. Time = 120 × 100 / (800 × 5) = 3 years."),
  Q("The simple interest on a sum for 4 years at 8% is ₹640. The sum is", ["1600", "2000", "2400", "1800"], 1, "P = 640 × 100 / (8 × 4) = 2000."),
  Q("At what rate percent will ₹500 become ₹600 in 4 years at simple interest?", ["4%", "5%", "6%", "8%"], 1, "Interest 100. Rate = 100 × 100 / (500 × 4) = 5%."),
  Q("A sum of money doubles itself in 8 years at simple interest. The rate is", ["10%", "12.5%", "15%", "8%"], 1, "Interest equals principal in 8 years. Rate = 100/8 = 12.5%.")
]);

add("Compound interest", [
  Q("Compound interest on ₹1000 at 10% per annum for 2 years is", ["200", "210", "220", "121"], 1, "Interest is 100 in the first year and 110 in the second. Total 210."),
  Q("The difference between compound and simple interest on ₹5000 for 2 years at 4% is", ["8", "16", "32", "4"], 0, "Difference = P(R/100)² = 5000 × 16/10000 = 8."),
  Q("A sum becomes ₹4840 in 2 years at 10% compound interest. The sum is", ["4000", "4400", "4200", "3600"], 0, "P × (11/10)² = 4840. P × 121/100 = 4840. P = 4000."),
  Q("₹8000 at 5% compound interest for 2 years amounts to", ["8800", "8820", "8400", "9000"], 1, "First year interest 400, second year interest 420. Amount 8820."),
  Q("The compound interest on ₹2000 for 1 year at 10% per annum compounded half-yearly is", ["200", "205", "210", "220"], 1, "Half-yearly rate 5%, two periods. Amount = 2000 × 1.05 × 1.05 = 2205. Interest = 205.")
]);

add("Time and work, including pipes", [
  Q("A can do a piece of work in 10 days and B in 15 days. Together they finish it in", ["5 days", "6 days", "8 days", "12 days"], 1, "1/10 + 1/15 = 1/6, so 6 days."),
  Q("A tap fills a tank in 6 hours and a leak empties it in 12 hours. If both are open, the tank fills in", ["4 hours", "8 hours", "12 hours", "18 hours"], 2, "1/6 − 1/12 = 1/12. Time is 12 hours."),
  Q("A is twice as good a workman as B. Together they finish a work in 14 days. A alone takes", ["21 days", "28 days", "42 days", "7 days"], 0, "Rates 2 and 1. Combined rate 3 parts, and they take 14 days, so 1 part takes 42 days. A does 2 parts, so A takes 21 days."),
  Q("12 men can complete a work in 10 days. 10 men will complete it in", ["8 days", "12 days", "14 days", "15 days"], 1, "12 × 10 = 120 man-days. 120/10 = 12 days."),
  Q("A pipe can fill a tank in 4 hours and another in 6 hours. Both together fill it in", ["2 hours 24 minutes", "2 hours", "5 hours", "3 hours"], 0, "1/4 + 1/6 = 5/12. Time = 12/5 hours = 2 hours 24 minutes.")
]);

add("Time, speed, and distance", [
  Q("A train 150 m long running at 54 km/h crosses a pole in", ["8 seconds", "10 seconds", "12 seconds", "15 seconds"], 1, "54 km/h = 54 × 5/18 = 15 m/s. Time = 150/15 = 10 seconds."),
  Q("A car covers 150 km in 2 hours 30 minutes. Its speed is", ["50 km/h", "60 km/h", "75 km/h", "45 km/h"], 1, "2.5 hours. 150/2.5 = 60 km/h."),
  Q("Walking at 4 km/h a man reaches his office 10 minutes late. Walking at 5 km/h he reaches 5 minutes early. The distance is", ["4 km", "5 km", "6 km", "8 km"], 1, "Time difference between the two speeds is 15 minutes, which is 1/4 hour. Distance = (4×5)/(5−4) × 1/4 = 5 km."),
  Q("Two trains 100 m and 120 m long run in opposite directions at 40 km/h and 50 km/h. They cross each other in", ["8 seconds", "8.8 seconds", "10 seconds", "12 seconds"], 1, "Relative speed 90 km/h = 25 m/s. Total length 220 m. Time = 220/25 = 8.8 seconds."),
  Q("A man covers half a journey at 30 km/h and the other half at 60 km/h. His average speed is", ["40 km/h", "45 km/h", "50 km/h", "36 km/h"], 0, "Equal distances: 2×30×60 / (30+60) = 40 km/h.")
]);

add("Basic algebra", [
  Q("If x + 1/x = 3, then x² + 1/x² is", ["7", "9", "11", "5"], 0, "Square both sides: x² + 2 + 1/x² = 9, so the required value is 7."),
  Q("(a + b)² − (a − b)² equals", ["2ab", "4ab", "a² − b²", "2(a² + b²)"], 1, "Expand: (a² + 2ab + b²) − (a² − 2ab + b²) = 4ab."),
  Q("If a² − b² = 48 and a − b = 4, then a + b is", ["8", "12", "16", "24"], 1, "a² − b² = (a − b)(a + b). So 4(a + b) = 48 and a + b = 12."),
  Q("√12 + √27 equals", ["5√3", "3√5", "√39", "6√3"], 0, "√12 = 2√3 and √27 = 3√3. Sum is 5√3."),
  Q("If 3x − 4 = 11, then x is", ["3", "5", "7", "4"], 1, "3x = 15, so x = 5.")
]);

add("Linear equations and their graphs", [
  Q("The solution of x + y = 5 and x − y = 1 is", ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"], 1, "Adding gives 2x = 6, so x = 3 and y = 2."),
  Q("The line y = 2x + 1 passes through", ["(1, 3)", "(1, 2)", "(0, 0)", "(2, 1)"], 0, "When x = 1, y = 3."),
  Q("The point where y = 3x − 2 cuts the y-axis is", ["(0, −2)", "(2, 0)", "(0, 3)", "(−2, 0)"], 0, "On the y-axis, x = 0, so y = −2."),
  Q("If 2x + y = 7 and x + y = 4, then x is", ["1", "2", "3", "4"], 2, "Subtract: x = 3. Then y = 1."),
  Q("Two lines x + y = 4 and 2x + 2y = 8 have", ["one solution", "no solution", "infinitely many solutions", "two solutions"], 2, "The second equation is exactly twice the first. They are the same line.")
]);

add("Triangles and centres", [
  Q("The angles of a triangle are in the ratio 1:2:3. The largest angle is", ["60°", "90°", "120°", "80°"], 1, "Parts sum to 6, and 180/6 = 30. Largest is 3 × 30 = 90°."),
  Q("In a right triangle the two smaller sides are 6 cm and 8 cm. The hypotenuse is", ["9 cm", "10 cm", "12 cm", "14 cm"], 1, "√(36 + 64) = √100 = 10. A 6-8-10 triangle."),
  Q("The centroid divides each median in the ratio", ["1:1", "2:1", "3:1", "1:2 with the longer part toward the midpoint"], 1, "The longer part, twice the shorter, is toward the vertex. The ratio is 2:1."),
  Q("An exterior angle of a triangle is 110°. One remote interior angle is 40°. The other remote interior angle is", ["70°", "80°", "60°", "50°"], 0, "An exterior angle equals the sum of the two remote interior angles. 110 − 40 = 70."),
  Q("The sum of the interior angles of a triangle is", ["90°", "180°", "270°", "360°"], 1, "Always 180°.")
]);

add("Circles, chords, and tangents", [
  Q("The angle in a semicircle is", ["45°", "60°", "90°", "180°"], 2, "The angle subtended by the diameter at a point on the circle is 90°."),
  Q("A tangent is drawn to a circle of radius 5 cm from a point 13 cm from the centre. The length of the tangent is", ["8 cm", "10 cm", "12 cm", "18 cm"], 2, "√(13² − 5²) = √144 = 12 cm."),
  Q("Two tangents are drawn from an external point to a circle. They are", ["equal", "perpendicular", "parallel", "in the ratio 2:1"], 0, "Tangents from an external point are equal in length."),
  Q("A chord 8 cm long is at a distance of 3 cm from the centre. The radius is", ["4 cm", "5 cm", "6 cm", "8 cm"], 1, "The perpendicular bisects the chord into 4 cm. Radius = √(4² + 3²) = 5 cm."),
  Q("The angle at the centre is 80° on an arc. The angle at the circumference on the same arc is", ["40°", "80°", "160°", "20°"], 0, "The angle at the centre is twice the angle at the circumference. Half of 80° is 40°.")
]);

add("Trigonometry", [
  Q("sin 30° + cos 60° equals", ["0", "1/2", "1", "√3/2"], 2, "Each value is 1/2. The sum is 1."),
  Q("If sin θ = 3/5, and θ is acute, cos θ is", ["4/5", "3/4", "5/4", "5/3"], 0, "cos θ = √(1 − 9/25) = √(16/25) = 4/5."),
  Q("tan 45° × cot 45° equals", ["0", "1", "2", "1/2"], 1, "Both values are 1, and their product is 1."),
  Q("The value of sin²45° + cos²45° is", ["0", "1/2", "1", "2"], 2, "The identity sin²θ + cos²θ = 1 holds for every angle, including 45°."),
  Q("cos(90° − 30°) equals", ["sin 30°", "cos 30°", "tan 30°", "0"], 0, "cos(90° − θ) = sin θ, so this is sin 30°, which is 1/2.")
]);

add("Heights and distances", [
  Q("The angle of elevation of the top of a tower from a point 30 m away is 30°. The height of the tower is", ["10 m", "10√3 m", "30 m", "30√3 m"], 1, "Height = 30 × tan 30° = 30 × 1/√3 = 10√3 m."),
  Q("From a point on the ground the angle of elevation of a tower is 45°. If the distance from the foot is 20 m, the height is", ["10 m", "20 m", "20√3 m", "40 m"], 1, "tan 45° = 1, so height equals the distance, 20 m."),
  Q("A kite is flying at a height of 50√3 m. The string makes 60° with the ground. The length of the string is", ["50 m", "75 m", "100 m", "150 m"], 2, "sin 60° = height / string. (√3/2) × string = 50√3, so string = 100 m."),
  Q("The angle of depression of a boat from the top of a 30 m cliff is 30°. The distance of the boat from the foot of the cliff is", ["30 m", "30√3 m", "10√3 m", "60 m"], 1, "tan 30° = 30 / distance, so distance = 30√3 m."),
  Q("If the shadow of a pole is equal to its height, the elevation of the sun is", ["30°", "45°", "60°", "90°"], 1, "tan θ = height/shadow = 1, so θ = 45°.")
]);

add("Mensuration: plane figures", [
  Q("The area of a circle of radius 7 cm is (take π = 22/7)", ["44 cm²", "154 cm²", "308 cm²", "49 cm²"], 1, "πr² = 22/7 × 49 = 154."),
  Q("The circumference of a circle of radius 7 cm is (take π = 22/7)", ["22 cm", "44 cm", "154 cm", "88 cm"], 1, "2πr = 44 cm."),
  Q("The area of a rectangle 12 cm by 5 cm is", ["34 cm²", "60 cm²", "17 cm²", "30 cm²"], 1, "12 × 5 = 60."),
  Q("The diagonal of a square of side 8 cm is", ["8 cm", "8√2 cm", "16 cm", "4√2 cm"], 1, "Diagonal = side × √2 = 8√2 cm."),
  Q("The area of an equilateral triangle of side 2 cm is", ["√3 cm²", "√3/2 cm²", "4 cm²", "2√3 cm²"], 0, "Area = (√3/4) × side² = (√3/4) × 4 = √3.")
]);

add("Mensuration: solids", [
  Q("The volume of a cylinder of radius 7 cm and height 10 cm is (take π = 22/7)", ["440 cm³", "1540 cm³", "220 cm³", "770 cm³"], 1, "πr²h = 154 × 10 = 1540."),
  Q("The volume of a cube of side 4 cm is", ["16 cm³", "32 cm³", "64 cm³", "48 cm³"], 2, "4³ = 64."),
  Q("The total surface area of a cube of side 3 cm is", ["27 cm²", "36 cm²", "54 cm²", "18 cm²"], 2, "6 × 9 = 54."),
  Q("The volume of a cone of radius 3 cm and height 7 cm is (take π = 22/7)", ["66 cm³", "198 cm³", "22 cm³", "44 cm³"], 0, "(1/3) × 22/7 × 9 × 7 = (1/3) × 22 × 9 = 66."),
  Q("The volume of a sphere of radius 3 cm is (take π = 22/7)", ["88 cm³", "113 1/7 cm³", "36 cm³", "108 cm³"], 1, "(4/3) × 22/7 × 27 = 4 × 22/7 × 9 = 792/7 = 113 1/7 cm³.")
]);

add("Data interpretation", [
  Q("In a pie chart, a category is 20% of the total. Its angle is", ["20°", "36°", "72°", "90°"], 2, "20% of 360° is 72°."),
  Q("A pie chart sector of 90° represents what percent of the total?", ["20%", "25%", "30%", "50%"], 1, "90/360 = 1/4 = 25%."),
  Q("A family’s monthly income is ₹36,000 and rent takes a 60° sector. The rent is", ["₹4,000", "₹6,000", "₹9,000", "₹12,000"], 1, "60/360 = 1/6. Rent = 36000/6 = 6000."),
  Q("In a bar graph, sales were 200 in 2023 and 250 in 2024. The percent increase is", ["20%", "25%", "50%", "15%"], 1, "(50/200) × 100 = 25%."),
  Q("The midpoint of the class interval 10–20, used for a frequency polygon, is", ["10", "15", "20", "30"], 1, "Midpoint = (10 + 20) / 2 = 15.")
]);

add("Analogy", [
  Q("Book : Read :: Pen : ?", ["Ink", "Write", "Paper", "Nib"], 1, "A book is used to read. A pen is used to write. SSC analogy of purpose."),
  Q("Doctor : Hospital :: Teacher : ?", ["Book", "School", "Student", "Chalk"], 1, "The workplace of a doctor is a hospital. The workplace of a teacher is a school."),
  Q("Hand : Glove :: Foot : ?", ["Shoe", "Walk", "Toe", "Leg"], 0, "A glove covers the hand. A shoe covers the foot."),
  Q("5 : 25 :: 6 : ?", ["30", "36", "12", "18"], 1, "The second number is the square of the first. 6² = 36."),
  Q("AZ : BY :: CX : ?", ["DW", "DV", "EW", "DU"], 0, "The first letter moves forward and the second moves backward. D and W.")
]);

add("Classification", [
  Q("Find the odd one: 8, 27, 64, 100", ["8", "27", "64", "100"], 3, "8, 27 and 64 are cubes. 100 is not."),
  Q("Find the odd one: Apple, Mango, Potato, Banana", ["Apple", "Mango", "Potato", "Banana"], 2, "Potato is a vegetable. The others are fruits."),
  Q("Find the odd one: 2, 3, 5, 9", ["2", "3", "5", "9"], 3, "2, 3 and 5 are prime. 9 is not."),
  Q("Find the odd one: Ear, Eye, Nose, Hand", ["Ear", "Eye", "Nose", "Hand"], 3, "Ear, eye and nose are sense organs on the face. The hand is not."),
  Q("Find the odd number: 16, 36, 64, 50", ["16", "36", "64", "50"], 3, "16, 36 and 64 are perfect squares. 50 is not.")
]);

add("Series", [
  Q("3, 8, 15, 24, ?", ["33", "35", "36", "32"], 1, "Differences +5, +7, +9, so the next difference is +11. 24 + 11 = 35."),
  Q("2, 6, 12, 20, 30, ?", ["40", "42", "36", "48"], 1, "Differences +4, +6, +8, +10, so next +12. 30 + 12 = 42."),
  Q("5, 11, 23, 47, ?", ["94", "95", "90", "99"], 1, "Each term is twice the previous term plus 1. 47 × 2 + 1 = 95."),
  Q("AZ, BY, CX, ?", ["DW", "DV", "EW", "YD"], 0, "First letter +1, second letter −1."),
  Q("1, 4, 9, 16, 25, ?", ["30", "36", "49", "35"], 1, "These are the squares of 1, 2, 3, 4, 5 and then 6. 6² = 36.")
]);

add("Coding and decoding", [
  Q("If CAT is coded as DBU, then DOG is coded as", ["EPH", "CPF", "ENH", "EOH"], 0, "Each letter moves forward by 1. D→E, O→P, G→H."),
  Q("If ROAD is written as URDG, the pattern is +3. MAIL is written as", ["PDLO", "QDLO", "PDLN", "QDLP"], 0, "M+3=P, A+3=D, I+3=L, L+3=O."),
  Q("In a code, A is written as Z, B as Y, and C as X. How is BOY written?", ["YLB", "YBL", "XLB", "YLC"], 0, "Opposite letters: B→Y, O→L, Y→B. Positions add to 27."),
  Q("If PEN is coded as QFO, then INK is coded as", ["JOL", "HOL", "JOM", "IML"], 0, "Each letter +1: I→J, N→O, K→L."),
  Q("If in a code TABLE is written as UBCMF, the pattern is +1. CHAIR is written as", ["DIBJS", "BGFZQ", "DIBJR", "CIBJS"], 0, "Each letter moves one step forward.")
]);

add("Blood relations", [
  Q("Pointing to a woman, Ravi said, “She is the daughter of the only son of my grandfather.” The woman is Ravi’s", ["Aunt", "Sister", "Cousin", "Mother"], 1, "The only son of Ravi’s grandfather is Ravi’s father. That man’s daughter is Ravi’s sister."),
  Q("A woman says of a man, “His mother is the only daughter of my mother.” The man is her", ["Brother", "Son", "Husband", "Uncle"], 1, "The only daughter of her mother is herself. She is the man’s mother, so he is her son."),
  Q("A is the brother of B. B is the sister of C. C is the son of D. A is D’s", ["Daughter", "Son", "Father", "Uncle"], 1, "A is male and a child of D, so A is D’s son."),
  Q("P is the father of Q. R is the brother of P. S is the mother of R. Q is S’s", ["Son", "Grandchild", "Brother", "Uncle"], 1, "S is the parent of R and also of P, so S is Q’s grandparent. Q is S’s grandchild."),
  Q("M is the mother of N. N is the sister of O. O is the son of P. How is M related to P?", ["Sister", "Wife", "Mother", "Daughter"], 1, "M and P are the parents of N and O. M is female, so M is P’s wife.")
]);

add("Direction sense", [
  Q("A man walks 4 km north and then 3 km east. His distance from the start is", ["5 km", "7 km", "1 km", "12 km"], 0, "√(3² + 4²) = 5 km."),
  Q("A man walks 6 km east and then 8 km north. His distance from the start is", ["10 km", "14 km", "2 km", "12 km"], 0, "A 6-8-10 triangle."),
  Q("Facing north, you turn right, then right again, then left. You face", ["North", "East", "South", "West"], 1, "Right to east, right to south, left to east."),
  Q("Facing south, a person turns left. He now faces", ["East", "West", "North", "South"], 0, "Left from south is east."),
  Q("Ravi walks 5 km south, turns left and walks 3 km, then turns left and walks 5 km. He is", ["3 km east of the start", "3 km west of the start", "5 km south of the start", "8 km from the start"], 0, "The two south-north legs cancel. He is 3 km to the east of the start, because the left turn from south faces east.")
]);

add("Word building", [
  Q("Which word cannot be formed from the letters of QUARRELSOME?", ["AIR", "SOME", "QUARREL", "LOAM"], 0, "QUARRELSOME has no I, so AIR cannot be formed. SSC CGL Tier 1, 16 September 2025, Shift 3."),
  Q("Which word cannot be formed from the letters of INTELLIGENCE?", ["CANCEL", "NEGLECT", "GENTLE", "INCITE"], 0, "INTELLIGENCE has no A, and only one C. CANCEL needs an A and two C’s. SSC CGL Tier 1, 12 September 2025, Shift 3."),
  Q("Which word cannot be formed from the letters of ADMINISTRATION, using each letter only once?", ["SITUATION", "TRADITION", "RATION", "STRAIN"], 0, "ADMINISTRATION has no U. SSC CGL Tier 1, 21 September 2025, Shift 3."),
  Q("Which word cannot be formed from the letters of DICTIONARY?", ["RATION", "NOTARY", "DAINTY", "TRADE"], 3, "DICTIONARY has no E, so TRADE cannot be formed. The others use only letters that are present. SSC objective paper."),
  Q("Which word cannot be formed from the letters of CONVERSATION?", ["NATION", "VERSION", "STATION", "REASON"], 2, "CONVERSATION has only one T. STATION needs two. SSC objective paper."),
  Q("Which of these words can be formed from the letters of IMMEDIATELY?", ["DIAMETER", "DICTATE", "LIMITED", "DIALECT"], 2, "LIMITED uses I, M, I, T, E, D, L, all present. DIAMETER needs R, and DICTATE and DIALECT need C, which IMMEDIATELY does not have. SSC objective paper.")
]);

add("Syllogism", [
  Q("Statements: All pens are books. All books are papers. Conclusion: All pens are papers.", ["Follows", "Does not follow", "Follows only if some papers are pens", "The statements contradict"], 0, "Pens lie inside books, and books lie inside papers, so every pen is a paper."),
  Q("Statements: Some cats are dogs. All dogs are animals. Conclusion: Some cats are animals.", ["Follows", "Does not follow", "Only all cats are animals follows", "Neither statement can be drawn"], 0, "The cats that are dogs are animals, so some cats are animals."),
  Q("Statements: No apple is a mango. Some mangoes are fruits. Conclusion: No apple is a fruit.", ["Follows", "Does not follow", "All apples are fruits", "Some apples are mangoes"], 1, "Apples can still be fruits that are not mangoes. The conclusion is not forced."),
  Q("Statements: All roses are flowers. Some flowers fade. Conclusion: Some roses fade.", ["Follows", "Does not follow", "All flowers are roses", "No rose is a flower"], 1, "The flowers that fade need not be the roses."),
  Q("Statements: Some A are B. No B is C. Conclusion: Some A are not C.", ["Follows", "Does not follow", "All A are C", "No A is B"], 0, "The part of A that is inside B cannot be C, so some A are not C.")
]);

add("Venn diagrams", [
  Q("In a group of 40, 18 like tea, 16 like coffee and 8 like both. How many like only tea?", ["8", "10", "18", "26"], 1, "Only tea = 18 − 8 = 10."),
  Q("Using the same group, how many like neither?", ["14", "12", "6", "22"], 0, "Only coffee = 8. Union = 10 + 8 + 8 = 26. Neither = 40 − 26 = 14."),
  Q("In a class of 50, 30 play cricket and 25 play football. If 10 play both, how many play neither?", ["5", "15", "10", "0"], 0, "Union = 30 + 25 − 10 = 45. Neither = 5."),
  Q("Of 100 students, 60 study Hindi and 45 study English. If 20 study both, how many study only Hindi?", ["40", "25", "20", "60"], 0, "Only Hindi = 60 − 20 = 40."),
  Q("In a survey, 15 people like only A, 10 like only B, and 5 like both. How many like A or B?", ["20", "25", "30", "15"], 2, "15 + 10 + 5 = 30.")
]);

add("Missing number and wrong number", [
  Q("Find the wrong number: 4, 9, 16, 25, 35, 49", ["9", "35", "49", "16"], 1, "These should be squares. 6² is 36, not 35."),
  Q("Find the wrong number: 2, 6, 12, 20, 30, 42, 58", ["12", "42", "58", "20"], 2, "Differences should be +4, +6, +8, +10, +12, +14. After 42 the term should be 56, not 58."),
  Q("A completed cell uses 2 × 3 = 6. The cell 4, 5, ? uses the same rule. The missing number is", ["9", "20", "1", "45"], 1, "4 × 5 = 20."),
  Q("4, 9, 16, 25, ?", ["30", "36", "49", "32"], 1, "Squares of 2, 3, 4, 5 and then 6. Next is 36."),
  Q("7, 14, 28, 56, ?", ["84", "112", "100", "70"], 1, "Each term is double the one before it. 56 × 2 = 112.")
]);

add("Embedded figures and figural series", [
  Q("A dot at the top-left corner of a square moves one corner clockwise each step. After one step it is at the", ["Top-right", "Bottom-left", "Bottom-right", "Centre"], 0, "Clockwise order from top-left is top-right."),
  Q("A shape rotates 90° clockwise each step. After four steps it has turned", ["90°", "180°", "270°", "360°"], 3, "Four right angles make a full turn, so the shape looks as it did at the start."),
  Q("Which figure can contain a smaller square with sides parallel to its own?", ["A larger square", "A triangle with no right angle", "A circle only", "A single straight line"], 0, "A smaller square with parallel sides sits inside a larger square. That is an embedded figure."),
  Q("In a series, one line is added to a figure at each step. After three steps a figure that started with 2 lines has", ["3 lines", "4 lines", "5 lines", "6 lines"], 2, "Three added lines make 2 + 3 = 5."),
  Q("A pointer facing up turns 45° clockwise twice. It now points", ["Right", "Down-right", "Down", "Up-right"], 0, "45° + 45° = 90° clockwise from up, which is right. The halfway point after one turn is up-right.")
]);

add("Paper folding and punched holes", [
  Q("A square paper is folded once. A hole is punched away from the crease. When the paper is opened, the number of holes is", ["1", "2", "3", "4"], 1, "One fold makes two layers, so the punch appears twice, mirrored across the crease."),
  Q("A hole is punched exactly on the crease of a once-folded paper. When opened, the number of holes is", ["1", "2", "4", "8"], 0, "A punch on the crease is not copied to a second place."),
  Q("A paper is folded twice and a hole is punched away from both creases. When opened, the number of holes is", ["2", "3", "4", "8"], 2, "Two folds make four layers, so one punch opens into four holes."),
  Q("The opened pattern of a folded punch is", ["Random", "Symmetric across each crease that was used", "Always a single hole", "Always on the corner only"], 1, "Each crease acts as a mirror line."),
  Q("A transparent square with a figure on the right is folded along the vertical midline onto the left. The figure now appears", ["Unchanged", "Reversed left to right", "Upside down only", "Twice as large"], 1, "A vertical fold reverses left and right.")
]);

add("Reading comprehension", [
  Q("A passage says the city added 40 buses, and that morning crowds did not thin. Which statement is supported?", ["The city bought no buses", "Adding buses did not reduce the morning crowds", "The buses were all late", "Crowds disappeared in the evening"], 1, "Only the second statement is forced by the two sentences. The others add facts the passage does not give."),
  Q("“Inference” in a comprehension question means", ["Any true fact you know", "A conclusion the passage forces", "The title of the passage", "A synonym"], 1, "The inference still has to rest on the passage."),
  Q("A detail question is answered by", ["The sentence that states the fact", "Your own opinion", "The longest option", "A dictionary"], 0, "Find the sentence with the same names and numbers."),
  Q("A good title for a passage must", ["Cover only the first example", "Cover the whole passage", "Be a proverb", "Repeat the first word"], 1, "A title that fits one example and ignores the rest is too narrow."),
  Q("The meaning of a word in a passage is decided by", ["The first dictionary sense only", "The sentence around it", "Its length", "The option that is hardest"], 1, "Context can select a sense that is not the first one you think of.")
]);

add("Cloze test and fill in the blanks", [
  Q("He has lived in Delhi ____ 2019.", ["for", "since", "from", "by"], 1, "Since is used with a point in time. SSC repeatedly tests since/for."),
  Q("One of the boys ____ absent.", ["are", "were", "is", "have"], 2, "The subject is “one”, which is singular."),
  Q("Neither of the two answers ____ correct.", ["are", "were", "was", "have"], 2, "Neither is singular."),
  Q("She is good ____ mathematics.", ["in", "at", "on", "for"], 1, "The phrase is “good at”."),
  Q("He has been waiting ____ two hours.", ["since", "for", "from", "by"], 1, "For is used with a length of time.")
]);

add("Error detection and sentence improvement", [
  Q("Choose the improved form of “He is senior than me.”", ["He is senior to me.", "He is senior from me.", "He is more senior than me in all cases.", "No improvement"], 0, "Senior, junior, superior and inferior take “to”, not “than”."),
  Q("Find the error in “She do not like coffee.”", ["She", "do", "not like", "coffee"], 1, "With “she” the auxiliary is “does”."),
  Q("Improve: “He returned back from school.”", ["He returned from school.", "He returned back to school yesterday only.", "He had returned back.", "No improvement"], 0, "Return already means come back."),
  Q("The quality of the apples ____ good.", ["are", "were", "is", "have"], 2, "The subject is “quality”, not “apples”."),
  Q("Choose the correct sentence.", ["One of the boy are tall.", "One of the boys is tall.", "One of the boys are tall.", "One of boys are tall."], 1, "“One of the boys” takes a singular verb.")
]);

add("Synonyms and antonyms", [
  Q("The synonym of “abundant” is", ["Scarce", "Plentiful", "Tiny", "Empty"], 1, "Abundant means present in a large amount."),
  Q("The antonym of “ancient” is", ["Old", "Historic", "Modern", "Early"], 2, "Ancient and modern are opposites."),
  Q("The antonym of “expand” is", ["Grow", "Swell", "Contract", "Open"], 2, "To expand is to become larger. To contract is to become smaller."),
  Q("The synonym of “brief” is", ["Long", "Short", "Late", "Loud"], 1, "Brief means lasting a short time, or using few words."),
  Q("The antonym of “scarce” is", ["Rare", "Plentiful", "Little", "Thin"], 1, "Scarce means in short supply. Plentiful is the opposite.")
]);

add("Idioms and phrases", [
  Q("“Once in a blue moon” means", ["Every month", "Very rarely", "At night", "On Monday"], 1, "The idiom means very seldom."),
  Q("“A blessing in disguise” means", ["A hidden curse", "Something good that first seemed bad", "A religious ceremony", "Bad weather"], 1, "The benefit is not obvious at the start."),
  Q("“To call a spade a spade” means", ["To dig", "To speak plainly", "To gamble", "To delay"], 1, "It means to say something as it is."),
  Q("“To beat about the bush” means", ["To avoid the main point", "To win a fight", "To plant trees", "To hurry"], 0, "The speaker does not come to the point."),
  Q("“To turn a deaf ear” means", ["To listen carefully", "To ignore", "To shout", "To agree"], 1, "It means to refuse to listen.")
]);

add("One-word substitution", [
  Q("A life history written by the person himself or herself is", ["A biography", "An autobiography", "A novel", "A diary of another person"], 1, "Autobiography. A biography is written by someone else."),
  Q("A person who knows many languages is a", ["Novelist", "Polyglot", "Painter", "Surgeon"], 1, "Polyglot is the one-word answer SSC expects."),
  Q("Handwriting that cannot be read is", ["Illegal", "Illegible", "Ineligible", "Illiterate"], 1, "Illegible. Ineligible means not qualified. Illegal means against the law."),
  Q("A place where dead bodies are kept is a", ["Mortuary", "Granary", "Orphanage", "Apiary"], 0, "Mortuary. A granary stores grain. An apiary keeps bees."),
  Q("A person who looks on the bright side is", ["A pessimist", "An optimist", "A fatalist", "A sceptic"], 1, "An optimist expects a good result.")
]);

add("Spelling", [
  Q("Which spelling is correct: accommodation?", ["Accomodation", "Acommodation", "Accommodation", "Acomodation"], 2, "Accommodation has two c’s and two m’s."),
  Q("Which spelling is wrong?", ["Separate", "Seperate", "Occasion", "Necessary"], 1, "The word is separate, with an a in the middle."),
  Q("Which spelling is correct: receive?", ["Recieve", "Receive", "Receeve", "Recive"], 1, "Receive has e before i."),
  Q("Which spelling is correct: definitely?", ["Definately", "Definitely", "Definatly", "Definitley"], 1, "Definitely keeps the finite stem and ends in -itely."),
  Q("Which spelling is correct: occasion?", ["Occassion", "Ocassion", "Occasion", "Occation"], 2, "Occasion has two c’s and one s.")
]);

add("Active and passive voice", [
  Q("The passive form of “She wrote a letter” is", ["A letter is written by her.", "A letter was written by her.", "A letter wrote by her.", "A letter is wrote by her."], 1, "Simple past stays past: was written."),
  Q("The passive form of “They are watching a film” is", ["A film watched by them.", "A film is being watched by them.", "A film was watched by them.", "A film is watched them."], 1, "Present continuous passive uses “is being” plus the past participle."),
  Q("The passive form of “Someone has stolen my pen” is", ["My pen has been stolen.", "My pen is stolen by someone yesterday.", "My pen stole.", "My pen was steal."], 0, "Present perfect passive: has been stolen. The doer need not be kept."),
  Q("“Can you lift this box?” in the passive starts", ["Can this box be lifted by you?", "Can this box lifted by you?", "This box can lift?", "Could this box lifts?"], 0, "A modal keeps its form, and the passive uses “be” plus the past participle."),
  Q("Which sentence is already in the passive?", ["The cat chased the mouse.", "The mouse was chased by the cat.", "The cat is chasing.", "Chase the mouse."], 1, "The receiver, the mouse, is the subject, and the verb is “was chased”.")
]);

add("Direct and indirect speech", [
  Q("He said, “I am tired.” The indirect form is", ["He said that I am tired.", "He said that he was tired.", "He said that he is tired now.", "He told that he tired."], 1, "“Am” becomes “was”, and “I” becomes “he”."),
  Q("She said, “I will come tomorrow.” The indirect form is", ["She said that she would come the next day.", "She said that I will come tomorrow.", "She said she will come tomorrow.", "She told that she comes tomorrow."], 0, "Will becomes would, and tomorrow becomes the next day."),
  Q("He said, “I saw her yesterday.” The indirect form uses", ["yesterday", "the previous day", "tomorrow", "now"], 1, "Yesterday becomes the previous day, or the day before."),
  Q("Which reporting verb needs a listener?", ["said that", "told me that", "says that", "will say that"], 1, "Tell takes a person. Say does not."),
  Q("The teacher said, “The earth moves round the sun.” The indirect form keeps", ["moved", "moves", "had moved", "will move"], 1, "A general truth stays in the present tense.")
]);

add("Sentence rearrangement", [
  Q("Order: (1) umbrella (2) an (3) She (4) carries", ["3-4-2-1", "3-2-4-1", "1-2-3-4", "3-4-1-2"], 0, "She carries an umbrella."),
  Q("Order: (1) the match (2) They (3) won (4) yesterday", ["2-3-1-4", "2-1-3-4", "1-2-3-4", "4-2-3-1"], 0, "They won the match yesterday."),
  Q("Which part should open a paragraph about a named city?", ["However, it grew.", "This made it famous.", "Jaipur was planned as a new city.", "He then left."], 2, "The opener names the subject. “However”, “this” and “he” need an earlier sentence."),
  Q("“An” is used before", ["a university", "an hour", "a one-rupee note", "a European"], 1, "An is used before a vowel sound. Hour begins with a vowel sound. University and European begin with a “y” sound."),
  Q("In “She carefully wrote the letter yesterday”, the verb is", ["She", "carefully", "wrote", "yesterday"], 2, "Wrote is the verb. Carefully tells how, and yesterday tells when.")
]);

add("Polity and the Constitution", [
  Q("The normal term of the Lok Sabha is", ["4 years", "5 years", "6 years", "2 years"], 1, "Five years, unless the House is dissolved sooner. Article 83."),
  Q("The right to constitutional remedies is in", ["Article 14", "Article 19", "Article 21", "Article 32"], 3, "Article 32. Dr Ambedkar called it the heart and soul of the Constitution."),
  Q("A Money Bill is defined in", ["Article 110", "Article 112", "Article 108", "Article 123"], 0, "Article 110. It can be introduced only in the Lok Sabha."),
  Q("Fundamental duties are in", ["Article 32", "Article 51A", "Article 368", "Article 356"], 1, "Article 51A, added by the 42nd Amendment."),
  Q("The GST Council is provided under", ["Article 280", "Article 279A", "Article 324", "Article 148"], 1, "Article 279A."),
  Q("Who appoints the Prime Minister of India?", ["The Chief Justice", "The President", "The Speaker", "The Vice President"], 1, "The President appoints the Prime Minister.")
]);

add("Modern Indian history", [
  Q("The Battle of Plassey was fought in", ["1757", "1764", "1857", "1526"], 0, "1757. Clive defeated Siraj-ud-Daulah."),
  Q("The Revolt of 1857 began at", ["Delhi", "Meerut", "Jhansi", "Kanpur"], 1, "The rising of the sepoys began at Meerut."),
  Q("The Dandi March took place in", ["1920", "1930", "1942", "1919"], 1, "1930, against the salt tax."),
  Q("The Quit India Movement was launched in", ["1930", "1942", "1920", "1947"], 1, "8 August 1942."),
  Q("The Discovery of India was written by", ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rabindranath Tagore"], 1, "Nehru wrote it in prison."),
  Q("Vande Mataram was composed by", ["Tagore", "Bankim Chandra Chatterjee", "Iqbal", "Premchand"], 1, "It appears in Anandamath. Tagore wrote Jana Gana Mana, which is a different work.")
]);

add("Geography", [
  Q("Indian Standard Time is based on the meridian", ["68.5° E", "82.5° E", "90° E", "75° E"], 1, "82°30′ E, which is 5 hours 30 minutes ahead of GMT."),
  Q("The Tropic of Cancer", ["Does not pass through India", "Passes through India", "Passes only through Kanyakumari", "Is the same line as the Equator"], 1, "It crosses India from Gujarat toward Mizoram."),
  Q("The longest river of India is", ["Godavari", "Yamuna", "Ganga", "Krishna"], 2, "The Ganga. The Godavari is the longest peninsular river, which is a different fact."),
  Q("The capital of Australia is", ["Sydney", "Melbourne", "Canberra", "Perth"], 2, "Canberra. Sydney is the largest city."),
  Q("Which of these is a land neighbour of India?", ["Sri Lanka", "Nepal", "Maldives", "Mauritius"], 1, "Nepal shares a land border. Sri Lanka is separated by the sea.")
]);

add("General science", [
  Q("The SI unit of force is the", ["Joule", "Watt", "Pascal", "Newton"], 3, "One newton gives a mass of 1 kg an acceleration of 1 m/s²."),
  Q("A solution of pH 3 is", ["Neutral", "Acidic", "Basic", "A salt only"], 1, "pH below 7 is acidic."),
  Q("Deficiency of vitamin C causes", ["Rickets", "Scurvy", "Beriberi", "Goitre"], 1, "Scurvy. Rickets is vitamin D. Beriberi is vitamin B1. Goitre is linked to iodine."),
  Q("Haemoglobin is present in", ["White blood cells", "Platelets", "Plasma only", "Red blood cells"], 3, "It carries oxygen in the red blood cells."),
  Q("The SI unit of power is the", ["Joule", "Newton", "Watt", "Pascal"], 2, "Power is the rate of doing work, measured in watts.")
]);

add("Economy and schemes", [
  Q("The Annual Financial Statement is dealt with in", ["Article 110", "Article 112", "Article 280", "Article 266"], 1, "Article 112 is the Budget."),
  Q("NITI Aayog was established in", ["2014", "2015", "2016", "1950"], 1, "1 January 2015. It replaced the Planning Commission."),
  Q("NITI Aayog replaced the", ["Finance Commission", "Planning Commission", "Reserve Bank", "Election Commission"], 1, "The Planning Commission."),
  Q("Income tax is a", ["Direct tax", "Indirect tax", "Local cess only", "Customs duty"], 0, "The person on whom it is levied pays it. GST is an indirect tax."),
  Q("Currency notes other than the one-rupee note are issued by", ["SEBI", "NITI Aayog", "The Reserve Bank of India", "The Supreme Court"], 2, "The one-rupee note and the coins are issued by the Government of India. Other notes are issued by the RBI.")
]);

add("Current affairs for this paper", [
  Q("The approved outlay of Green Energy Corridor Phase-III (PM DHARA) is", ["₹1,790 crore", "₹90,962 crore", "₹1,86,405 crore", "₹54 crore"], 2, "Cabinet outlay ₹1,86,405 crore. This is a 2026 Cabinet decision, later than published CGL papers, so it is here as a current-affairs item rather than an old question."),
  Q("That scheme’s renewable-energy evacuation target is", ["50 GW", "135 GW", "900 GW", "5 GW"], 1, "Up to 135 GW. The 900 GW figure is a wider non-fossil aim for 2035."),
  Q("The battery storage in that scheme is", ["5 GWh", "50 GWh", "135 GWh", "500 GWh"], 1, "50 GWh. Do not swap it with the 135 GW evacuation target."),
  Q("On 30 September 2026, PM Modi spoke with President Trump about", ["A new capital for India", "The India–US Comprehensive Global Strategic Partnership", "Leaving the United Nations", "Only a sports event"], 1, "They reviewed trade, defence, energy and critical technologies."),
  Q("The corridor scheme is targeted to be set up by", ["2026", "FY 2032–33", "2015", "1950"], 1, "The Cabinet note targets FY 2032–33.")
]);

add("Static GK for a last pass", [
  Q("Republic Day is observed on", ["15 August", "26 January", "2 October", "25 January"], 1, "26 January. 15 August is Independence Day. 2 October is Gandhi Jayanti."),
  Q("The headquarters of the World Health Organization is in", ["New York", "Geneva", "Paris", "London"], 1, "Geneva."),
  Q("Jana Gana Mana was written by", ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Nehru", "Iqbal"], 1, "Tagore. Bankim Chandra Chatterjee wrote Vande Mataram."),
  Q("National Voters’ Day is on", ["25 January", "26 January", "14 April", "5 September"], 0, "25 January."),
  Q("ISRO is concerned with", ["Space", "Railways", "Banking", "Elections"], 0, "The Indian Space Research Organisation.")
]);
