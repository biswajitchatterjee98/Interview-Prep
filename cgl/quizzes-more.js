function more(title, items) {
  const bank = window.CGL_QUIZ[title];
  if (!bank) window.CGL_QUIZ[title] = items;
  else items.forEach((item) => bank.push(item));
}

function svg(inner) {
  return '<svg viewBox="0 0 72 72" width="72" height="72" aria-hidden="true">' + inner + "</svg>";
}

const frame = "fill=\"none\" stroke=\"#1a3348\" stroke-width=\"2\"";
const dot = function (x, y) {
  return '<circle cx="' + x + '" cy="' + y + '" r="5" fill="#1a3348"/>';
};

more("Number system", [
  Q("The least number which must be added to 6412 to make it a perfect square is", ["149", "150", "151", "152"], 0, "80² = 6400 and 81² = 6561. 6561 − 6412 = 149. SSC number-system item. Why not the others: B) 150; C) 151; D) 152 do not satisfy the condition asked in the stem."),
  Q("Which of the following is divisible by 9?", ["1728", "1738", "1748", "1756"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1+7+2+8 = 18, which is divisible by 9. The others are not. The correct option is A) 1728. Why not the others: B) 1738; C) 1748; D) 1756 do not satisfy the condition asked in the stem."),
  Q("The unit digit of 3^45 is", ["1", "3", "7", "9"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Units of powers of 3 cycle 3, 9, 7, 1. 45 leaves remainder 1 when divided by 4, so the units digit is 3. Why not the others: A) 1; C) 7; D) 9 do not satisfy the condition asked in the stem."),
  Q("How many numbers between 200 and 400 begin or end with 3?", ["110", "100", "120", "90"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Numbers from 300 to 399 begin with 3: there are 100 of them. Numbers from 203 to 293 that end in 3 and do not begin with 3: there are 10. Total 110."),
  Q("The remainder when 2^10 is divided by 5 is", ["1", "2", "3", "4"], 3, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2^10 = 1024. Dividing by 5 leaves remainder 4. Why not the others: A) 1; B) 2; C) 3 do not satisfy the condition asked in the stem.")
]);

more("HCF and LCM", [
  Q("The HCF of 2/3, 4/5 and 6/7 is", ["2/105", "4/105", "12/105", "1/105"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). HCF of fractions = HCF of numerators / LCM of denominators = 2 / 105. The correct option is A) 2/105. Why not the others: B) 4/105; C) 12/105; D) 1/105 do not satisfy the condition asked in the stem."),
  Q("The LCM of 12, 18 and 24 is", ["36", "48", "72", "144"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 12 = 2²×3, 18 = 2×3², 24 = 2³×3. LCM = 2³×3² = 72. Why not the others: A) 36; B) 48; D) 144 do not satisfy the condition asked in the stem."),
  Q("Three numbers are in the ratio 2:3:4 and their LCM is 240. The smallest number is", ["20", "40", "60", "80"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Numbers 2k, 3k, 4k. LCM is 12k = 240, so k = 20. Smallest is 40. Why not the others: A) 20; C) 60; D) 80 do not satisfy the condition asked in the stem."),
  Q("The greatest number that divides 43, 91 and 183 leaving the same remainder in each case is", ["4", "8", "16", "32"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Differences are 48, 140 and 92. HCF of the differences is 4. Why not the others: B) 8; C) 16; D) 32 do not satisfy the condition asked in the stem."),
  Q("The product of two numbers is 2028 and their HCF is 13. The number of such pairs is", ["1", "2", "3", "4"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The co-prime parts multiply to 2028/13² = 12. Pairs of co-prime factors of 12: (1, 12) and (3, 4). Two pairs.")
]);

more("Fractions and decimals", [
  Q("0.36 × 0.25 equals", ["0.09", "0.9", "0.009", "9"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 36 × 25 = 900, and there are four decimal places, so 0.0900. Why not the others: B) 0.9; C) 0.009; D) 9 do not satisfy the condition asked in the stem."),
  Q("Which is the smallest?", ["5/8", "7/12", "3/4", "2/3"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 5/8 = 0.625, 7/12 ≈ 0.583, 3/4 = 0.75, 2/3 ≈ 0.667. Smallest is 7/12. Why not the others: A) 5/8; C) 3/4; D) 2/3 do not satisfy the condition asked in the stem."),
  Q("A fraction equivalent to 0.5 is", ["1/5", "1/2", "2/5", "3/5"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 0.5 = 1/2. Why not the others: A) 1/5; C) 2/5; D) 3/5 do not satisfy the condition asked in the stem. Why not the others: A) 1/5; C) 2/5; D) 3/5 do not satisfy the condition asked in the stem."),
  Q("3/8 of 256 is", ["96", "84", "72", "64"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 256/8 = 32, times 3 is 96. Why not the others: B) 84; C) 72; D) 64 do not satisfy the condition asked in the stem."),
  Q("1/2 + 1/3 + 1/6 equals", ["1", "5/6", "2/3", "3/4"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 3/6 + 2/6 + 1/6 = 6/6 = 1. Why not the others: B) 5/6; C) 2/3; D) 3/4 do not satisfy the condition asked in the stem.")
]);

more("Square roots", [
  Q("√(0.04) equals", ["0.2", "0.02", "2", "0.4"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 0.2 × 0.2 = 0.04. Why not the others: B) 0.02; C) 2; D) 0.4 do not satisfy the condition asked in the stem."),
  Q("The smallest number by which 72 must be multiplied to make it a perfect square is", ["2", "3", "6", "8"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 72 = 2³ × 3². One more 2 makes 2⁴ × 3². Why not the others: B) 3; C) 6; D) 8 do not satisfy the condition asked in the stem."),
  Q("√(256) equals", ["14", "16", "18", "12"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 16² = 256. Why not the others: A) 14; C) 18; D) 12 do not satisfy the condition asked in the stem. Why not the others: A) 14; C) 18; D) 12 do not satisfy the condition asked in the stem."),
  Q("√(50) lies between", ["6 and 7", "7 and 8", "8 and 9", "5 and 6"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 7² = 49 and 8² = 64, so √50 is just above 7. The correct option is B) 7 and 8. Why not the others: A) 6 and 7; C) 8 and 9; D) 5 and 6 do not satisfy the condition asked in the stem."),
  Q("If √(1 + x/169) = 14/13, then x is", ["27", "25", "36", "16"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1 + x/169 = 196/169. x/169 = 27/169. x = 27. Why not the others: B) 25; C) 36; D) 16 do not satisfy the condition asked in the stem.")
]);

more("Simplification and BODMAS", [
  Q("15 − 3 × 2 + 4 equals", ["28", "13", "10", "22"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 3 × 2 = 6 first. Then 15 − 6 + 4 = 13. Why not the others: A) 28; C) 10; D) 22 do not satisfy the condition asked in the stem."),
  Q("(8 + 4) × 3 − 10 equals", ["26", "46", "16", "36"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Bracket first: 12 × 3 − 10 = 36 − 10 = 26. Why not the others: B) 46; C) 16; D) 36 do not satisfy the condition asked in the stem."),
  Q("0.5 × 0.5 × 0.5 / 0.125 equals", ["0.5", "1", "0.25", "2"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 0.125 / 0.125 = 1. Why not the others: A) 0.5; C) 0.25; D) 2 do not satisfy the condition asked in the stem."),
  Q("100 − 20 × 3 + 10 equals", ["50", "250", "70", "40"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 20 × 3 = 60. Then 100 − 60 + 10 = 50. Why not the others: B) 250; C) 70; D) 40 do not satisfy the condition asked in the stem."),
  Q("3/4 of (2/3 of 48) equals", ["24", "32", "16", "36"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2/3 of 48 is 32. 3/4 of 32 is 24. Why not the others: B) 32; C) 16; D) 36 do not satisfy the condition asked in the stem.")
]);

more("Percentage", [
  Q("A price rises from ₹250 to ₹300. The percent increase is", ["15%", "20%", "25%", "50%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Increase 50 on 250 is 20%. Why not the others: A) 15%; C) 25%; D) 50% do not satisfy the condition asked in the stem."),
  Q("30% of 30% of 500 is", ["45", "90", "150", "15"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 30% of 500 is 150. 30% of 150 is 45. Why not the others: B) 90; C) 150; D) 15 do not satisfy the condition asked in the stem."),
  Q("If A is 25% more than B, then B is less than A by", ["20%", "25%", "16%", "30%"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Let B be 100. A is 125. The gap 25 is 25/125 = 20% of A. Why not the others: B) 25%; C) 16%; D) 30% do not satisfy the condition asked in the stem."),
  Q("A number reduced by 15% becomes 170. The number is", ["200", "190", "180", "220"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 85% is 170. Number = 170 × 100/85 = 200. Why not the others: B) 190; C) 180; D) 220 do not satisfy the condition asked in the stem."),
  Q("Successive increases of 10% and 20% equal a single increase of", ["30%", "32%", "22%", "28%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 10 + 20 + (10×20)/100 = 32%. Why not the others: A) 30%; C) 22%; D) 28% do not satisfy the condition asked in the stem.")
]);

more("Profit and loss", [
  Q("A shopkeeper buys at ₹80 and sells at ₹100. The gain percent is", ["20%", "25%", "30%", "15%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Gain 20 on 80 is 25%. Why not the others: A) 20%; C) 30%; D) 15% do not satisfy the condition asked in the stem."),
  Q("By selling 12 pens a seller gains the cost price of 3 pens. The gain percent is", ["20%", "25%", "30%", "15%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Gain on 12 equals CP of 3, so gain percent = 3/12 × 100 = 25%. Why not the others: A) 20%; C) 30%; D) 15% do not satisfy the condition asked in the stem."),
  Q("An article bought for ₹600 is sold at a loss of 15%. The selling price is", ["510", "540", "490", "550"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 15% of 600 is 90. SP = 510. Why not the others: B) 540; C) 490; D) 550 do not satisfy the condition asked in the stem."),
  Q("If the cost price is ₹240 and the profit is 12.5%, the selling price is", ["260", "270", "280", "300"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 12.5% is 1/8. 240/8 = 30. SP = 270. Why not the others: A) 260; C) 280; D) 300 do not satisfy the condition asked in the stem."),
  Q("A man sells a radio for ₹840 at a gain of 20%. The cost price is", ["700", "800", "750", "680"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 120% of CP is 840. CP = 840 × 100/120 = 700. Why not the others: B) 800; C) 750; D) 680 do not satisfy the condition asked in the stem.")
]);

more("Discount", [
  Q("A fan marked ₹1500 is sold at 20% discount. The selling price is", ["1200", "1300", "1100", "1400"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 20% of 1500 is 300. SP = 1200. Why not the others: B) 1300; C) 1100; D) 1400 do not satisfy the condition asked in the stem."),
  Q("After a discount of 10%, an article is sold for ₹540. The marked price is", ["600", "594", "500", "486"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 90% of MP = 540. MP = 600. Why not the others: B) 594; C) 500; D) 486 do not satisfy the condition asked in the stem."),
  Q("Successive discounts of 25% and 10% equal a single discount of", ["35%", "32.5%", "30%", "27.5%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 25 + 10 − 2.5 = 32.5%. Why not the others: A) 35%; C) 30%; D) 27.5% do not satisfy the condition asked in the stem."),
  Q("Marked price ₹200, two successive discounts of 10% and 10%. The selling price is", ["160", "162", "180", "170"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 200 × 0.9 × 0.9 = 162. Why not the others: A) 160; C) 180; D) 170 do not satisfy the condition asked in the stem."),
  Q("A trader marks goods 40% above cost and allows 10% discount. The gain percent is", ["26%", "30%", "24%", "36%"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). CP 100, MP 140, SP 126. Gain 26%. Why not the others: B) 30%; C) 24%; D) 36% do not satisfy the condition asked in the stem.")
]);

more("Ratio and proportion", [
  Q("If 15 toys cost ₹375, the cost of 8 toys at the same rate is", ["180", "200", "220", "160"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). One toy is ₹25. Eight cost ₹200. Why not the others: A) 180; C) 220; D) 160 do not satisfy the condition asked in the stem."),
  Q("The fourth proportional to 4, 6 and 8 is", ["10", "12", "16", "14"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 4/6 = 8/x, so x = 12. Why not the others: A) 10; C) 16; D) 14 do not satisfy the condition asked in the stem."),
  Q("The third proportional to 9 and 12 is", ["16", "15", "18", "14"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 9/12 = 12/x, so x = 16. Why not the others: B) 15; C) 18; D) 14 do not satisfy the condition asked in the stem."),
  Q("Divide ₹520 in the ratio 6:7. The smaller share is", ["240", "280", "260", "200"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 13 parts. One part is 40. Smaller is 6 × 40 = 240. Why not the others: B) 280; C) 260; D) 200 do not satisfy the condition asked in the stem."),
  Q("If A:B = 5:7 and B:C = 6:11, then A:B:C is", ["30:42:77", "5:6:11", "30:42:66", "5:7:11"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Make B common. 7 and 6 give 42. A = 5×6 = 30. C = 11×7 = 77. The correct option is A) 30:42:77. Why not the others: B) 5:6:11; C) 30:42:66; D) 5:7:11 do not satisfy the condition asked in the stem.")
]);

more("Average", [
  Q("The average of 7 consecutive numbers is 20. The largest is", ["23", "24", "17", "26"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The middle is 20. Largest is 20 + 3 = 23. Why not the others: B) 24; C) 17; D) 26 do not satisfy the condition asked in the stem."),
  Q("The average of 20, 30 and x is 40. Then x is", ["70", "50", "60", "80"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Sum must be 120. 20 + 30 + x = 120, so x = 70. Why not the others: B) 50; C) 60; D) 80 do not satisfy the condition asked in the stem."),
  Q("A student’s marks are 60, 70 and 80. To raise the average to 75, the fourth mark must be", ["90", "85", "80", "95"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Four marks must sum to 300. Present sum is 210. Fourth mark is 90. Why not the others: B) 85; C) 80; D) 95 do not satisfy the condition asked in the stem."),
  Q("The average weight of 8 men rises by 1.5 kg when a man of 65 kg is replaced by a new man. The new man’s weight is", ["77 kg", "75 kg", "80 kg", "70 kg"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Extra weight 8 × 1.5 = 12 kg. New man weighs 65 + 12 = 77 kg. Why not the others: B) 75 kg; C) 80 kg; D) 70 kg do not satisfy the condition asked in the stem."),
  Q("The average of the first 10 natural numbers is", ["5", "5.5", "6", "4.5"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Sum 55. Average 5.5. Why not the others: A) 5; C) 6; D) 4.5 do not satisfy the condition asked in the stem.")
]);

more("Mixture and alligation", [
  Q("In what ratio should rice at ₹30 per kg be mixed with rice at ₹40 per kg so that the mixture is worth ₹36 per kg?", ["2:3", "3:2", "1:2", "4:3"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Cheaper : dearer = (40−36):(36−30) = 4:6 = 2:3. Why not the others: B) 3:2; C) 1:2; D) 4:3 do not satisfy the condition asked in the stem."),
  Q("A 20-litre mixture has milk and water in 3:2. Milk taken out if 5 litres of mixture are removed is", ["2 litres", "3 litres", "4 litres", "1 litre"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Milk is 3/5 of the mixture. 3/5 of 5 litres is 3 litres. Why not the others: A) 2 litres; C) 4 litres; D) 1 litre do not satisfy the condition asked in the stem."),
  Q("How much water must be added to 40 litres of milk at a cost of ₹20 a litre so that the mixture is worth ₹16 a litre? Water is free.", ["8 litres", "10 litres", "12 litres", "6 litres"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Water : milk = (20−16):(16−0) = 4:16 = 1:4. Milk is 40 litres, so water is 10 litres. Why not the others: A) 8 litres; C) 12 litres; D) 6 litres do not satisfy the condition asked in the stem."),
  Q("Two vessels contain milk and water in 2:3 and 3:2. They are mixed in equal quantity. The ratio of milk to water in the result is", ["1:1", "2:3", "3:2", "5:4"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Take 5 litres of each. Milk = 2 + 3 = 5. Water = 3 + 2 = 5. The correct option is A) 1:1. Why not the others: B) 2:3; C) 3:2; D) 5:4 do not satisfy the condition asked in the stem."),
  Q("A can contains 60 litres of milk. 12 litres are replaced by water, and this is done once. Milk left is", ["48 litres", "50 litres", "36 litres", "40 litres"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). One replacement removes 12 litres of pure milk. 60 − 12 = 48. The correct option is A) 48 litres. Why not the others: B) 50 litres; C) 36 litres; D) 40 litres do not satisfy the condition asked in the stem.")
]);

more("Partnership", [
  Q("A, B and C invest ₹4000, ₹6000 and ₹10000. Profit is ₹4000. B’s share is", ["800", "1200", "2000", "1000"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Ratio 2:3:5. B gets 3/10 × 4000 = 1200. Why not the others: A) 800; C) 2000; D) 1000 do not satisfy the condition asked in the stem."),
  Q("A invests twice as much as B, for the same time. A’s share of a ₹9000 profit is", ["3000", "4500", "6000", "5000"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Ratio 2:1. A gets 2/3 × 9000 = 6000. Why not the others: A) 3000; B) 4500; D) 5000 do not satisfy the condition asked in the stem."),
  Q("P and Q start together. P invests ₹15000 for 8 months and Q invests ₹12000 for 10 months. Profit ratio P:Q is", ["1:1", "2:1", "5:4", "4:5"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 15000×8 = 120000. 12000×10 = 120000. Ratio 1:1. Why not the others: B) 2:1; C) 5:4; D) 4:5 do not satisfy the condition asked in the stem."),
  Q("A working partner gets 10% of the profit as salary, and the rest is shared equally by A and B. If the profit is ₹2000, B’s share is", ["900", "1000", "800", "1100"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Salary 200. Remaining 1800, half is 900. Why not the others: B) 1000; C) 800; D) 1100 do not satisfy the condition asked in the stem."),
  Q("Three partners share profit in 1:2:3. If the total profit is ₹1800, the largest share is", ["300", "600", "900", "1200"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 6 parts. Largest is 3/6 × 1800 = 900. Why not the others: A) 300; B) 600; D) 1200 do not satisfy the condition asked in the stem.")
]);

more("Simple interest", [
  Q("Simple interest on ₹2500 at 4% for 3 years is", ["300", "250", "350", "200"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2500 × 4 × 3 / 100 = 300. Why not the others: B) 250; C) 350; D) 200 do not satisfy the condition asked in the stem."),
  Q("₹800 amounts to ₹920 in 3 years at simple interest. The rate is", ["4%", "5%", "6%", "8%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Interest is ₹120. Rate = 120 × 100 / (800 × 3) = 5%. Why not the others: A) 4%; C) 6%; D) 8% do not satisfy the condition asked in the stem."),
  Q("At 8% simple interest, ₹1500 earns how much in 2 years?", ["240", "200", "180", "300"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1500 × 8 × 2 / 100 = 240. Why not the others: B) 200; C) 180; D) 300 do not satisfy the condition asked in the stem."),
  Q("The interest on ₹400 for 2 years is ₹40. The rate is", ["4%", "5%", "6%", "8%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Rate = 40 × 100 / (400 × 2) = 5%. Why not the others: A) 4%; C) 6%; D) 8% do not satisfy the condition asked in the stem."),
  Q("₹600 amounts to ₹660 in 2 years at simple interest. The rate is", ["4%", "5%", "6%", "10%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Interest 60. Rate = 60 × 100 / (600 × 2) = 5%. Why not the others: A) 4%; C) 6%; D) 10% do not satisfy the condition asked in the stem.")
]);

more("Compound interest", [
  Q("₹5000 becomes ₹6050 in 2 years at compound interest. The rate is", ["8%", "10%", "12%", "5%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 6050/5000 = 1.21 = (1.1)², so the rate is 10%. Why not the others: A) 8%; C) 12%; D) 5% do not satisfy the condition asked in the stem."),
  Q("The compound interest on ₹4000 at 5% for 2 years is", ["400", "410", "420", "405"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). First year 200, second year 210. Total 410. Why not the others: A) 400; C) 420; D) 405 do not satisfy the condition asked in the stem."),
  Q("A sum doubles in 5 years at compound interest. It becomes 8 times in", ["10 years", "15 years", "20 years", "25 years"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Doubling three times makes 8. 5 × 3 = 15 years. Why not the others: A) 10 years; C) 20 years; D) 25 years do not satisfy the condition asked in the stem."),
  Q("Difference between CI and SI on ₹10000 for 2 years at 5% is", ["25", "50", "20", "10"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). P(R/100)² = 10000 × 25/10000 = 25. Why not the others: B) 50; C) 20; D) 10 do not satisfy the condition asked in the stem."),
  Q("₹2000 at 10% compounded annually for 3 years amounts to", ["2600", "2662", "2400", "2541"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2000 × 1.1³ = 2000 × 1.331 = 2662. Why not the others: A) 2600; C) 2400; D) 2541 do not satisfy the condition asked in the stem.")
]);

more("Time and work, including pipes", [
  Q("A and B together can do a work in 12 days. A alone can do it in 20 days. B alone takes", ["30 days", "25 days", "15 days", "18 days"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). B’s rate = 1/12 − 1/20 = 1/30. B takes 30 days. Why not the others: B) 25 days; C) 15 days; D) 18 days do not satisfy the condition asked in the stem."),
  Q("16 men can do a work in 12 days. How many men are needed to do it in 8 days?", ["20", "24", "18", "32"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 16 × 12 = 192 man-days. 192/8 = 24 men. Why not the others: A) 20; C) 18; D) 32 do not satisfy the condition asked in the stem."),
  Q("A cistern is filled by a tap in 8 hours and emptied by a leak in 24 hours. Both open, it fills in", ["10 hours", "12 hours", "16 hours", "6 hours"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1/8 − 1/24 = 1/12. Time is 12 hours. Why not the others: A) 10 hours; C) 16 hours; D) 6 hours do not satisfy the condition asked in the stem."),
  Q("A does half as much work as B in one day. If together they finish in 12 days, B alone takes", ["18 days", "36 days", "24 days", "16 days"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Rates 1 and 2. Combined 3 parts in 12 days, so one part is 36 days. B does 2 parts and takes 18 days. Why not the others: B) 36 days; C) 24 days; D) 16 days do not satisfy the condition asked in the stem."),
  Q("10 women can complete a work in 7 days, and 10 children take 14 days. 5 women and 10 children together take", ["7 days", "6 days", "5 days", "8 days"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). One woman’s day = 1/70. One child’s day = 1/140. Five women + ten children = 5/70 + 10/140 = 1/14 + 1/14 = 1/7. Time is 7 days.")
]);

more("Time, speed, and distance", [
  Q("A 120 m train at 54 km/h crosses a platform 180 m long in", ["15 seconds", "20 seconds", "18 seconds", "25 seconds"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 54 km/h = 15 m/s. Distance 300 m. Time 20 seconds. Why not the others: A) 15 seconds; C) 18 seconds; D) 25 seconds do not satisfy the condition asked in the stem."),
  Q("A man rows 12 km downstream in 3 hours and returns in 6 hours. The speed of the stream is", ["1 km/h", "2 km/h", "1.5 km/h", "3 km/h"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Downstream 4 km/h, upstream 2 km/h. Stream = (4−2)/2 = 1 km/h. Why not the others: B) 2 km/h; C) 1.5 km/h; D) 3 km/h do not satisfy the condition asked in the stem."),
  Q("The ratio of speeds of two cars is 3:4. The ratio of the times to cover the same distance is", ["3:4", "4:3", "9:16", "16:9"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Time is the inverse of speed, so 4:3. Why not the others: A) 3:4; C) 9:16; D) 16:9 do not satisfy the condition asked in the stem."),
  Q("A bus covers 240 km in 4 hours. To cover it in 3 hours the speed must be", ["60 km/h", "80 km/h", "70 km/h", "90 km/h"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 240/3 = 80 km/h. Why not the others: A) 60 km/h; C) 70 km/h; D) 90 km/h do not satisfy the condition asked in the stem."),
  Q("Two persons start from the same point in opposite directions at 6 km/h and 8 km/h. After 3 hours they are", ["42 km apart", "6 km apart", "24 km apart", "14 km apart"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Relative speed 14 km/h. In 3 hours, 42 km. The correct option is A) 42 km apart. Why not the others: B) 6 km apart; C) 24 km apart; D) 14 km apart do not satisfy the condition asked in the stem.")
]);

more("Basic algebra", [
  Q("If x − 1/x = 2, then x² + 1/x² is", ["2", "4", "6", "8"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Square: x² − 2 + 1/x² = 4, so x² + 1/x² = 6. Why not the others: A) 2; B) 4; D) 8 do not satisfy the condition asked in the stem."),
  Q("If a + b = 8 and ab = 15, then a² + b² is", ["34", "49", "64", "19"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). a² + b² = (a+b)² − 2ab = 64 − 30 = 34. Why not the others: B) 49; C) 64; D) 19 do not satisfy the condition asked in the stem."),
  Q("(√5 + √3)(√5 − √3) equals", ["2", "8", "√15", "1"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Difference of squares: 5 − 3 = 2. Why not the others: B) 8; C) √15; D) 1 do not satisfy the condition asked in the stem."),
  Q("If 2x + 3 = 11, then x² is", ["16", "25", "9", "4"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2x = 8, x = 4, x² = 16. Why not the others: B) 25; C) 9; D) 4 do not satisfy the condition asked in the stem."),
  Q("The value of (0.3)² is", ["0.9", "0.09", "0.009", "0.27"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 0.3 × 0.3 = 0.09. Why not the others: A) 0.9; C) 0.009; D) 0.27 do not satisfy the condition asked in the stem.")
]);

more("Linear equations and their graphs", [
  Q("The line x + y = 6 passes through", ["(2, 4)", "(2, 3)", "(6, 6)", "(1, 6)"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2 + 4 = 6. The correct option is A) (2, 4). Why not the others: B) (2, 3); C) (6, 6); D) (1, 6) do not satisfy the condition asked in the stem."),
  Q("Solve 3x + y = 10 and x − y = 2. Then x is", ["2", "3", "4", "5"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Add: 4x = 12, so x = 3 and y = 1. Why not the others: A) 2; C) 4; D) 5 do not satisfy the condition asked in the stem."),
  Q("The slope of y = −2x + 5 is", ["5", "−2", "2", "−5"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The coefficient of x is the slope. The correct option is B) −2. Why not the others: A) 5; C) 2; D) −5 do not satisfy the condition asked in the stem."),
  Q("If the lines x + y = 3 and x + y = 5 are drawn, they", ["meet at one point", "are the same line", "are parallel", "are perpendicular"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Same slope, different intercepts, so they never meet. The correct option is C) are parallel. Why not the others: A) meet at one point; B) are the same line; D) are perpendicular do not satisfy the condition asked in the stem."),
  Q("For 4x − y = 7, when x = 2, y is", ["1", "15", "8", "−1"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 8 − y = 7, so y = 1. Why not the others: B) 15; C) 8; D) −1 do not satisfy the condition asked in the stem.")
]);

more("Triangles and centres", [
  Q("Two angles of a triangle are 50° and 60°. The third is", ["70°", "80°", "90°", "60°"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 180 − 110 = 70. The correct option is A) 70°. Why not the others: B) 80°; C) 90°; D) 60° do not satisfy the condition asked in the stem."),
  Q("The sides 5 cm, 12 cm and 13 cm form a", ["obtuse triangle", "right triangle", "equilateral triangle", "triangle that cannot exist"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 5² + 12² = 25 + 144 = 169 = 13². The correct option is B) right triangle. Why not the others: A) obtuse triangle; C) equilateral triangle; D) triangle that cannot exist do not satisfy the condition asked in the stem."),
  Q("In similar triangles the ratio of areas is 9:16. The ratio of matching sides is", ["3:4", "9:16", "81:256", "4:3"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Side ratio is the square root of the area ratio. The correct option is A) 3:4. Why not the others: B) 9:16; C) 81:256; D) 4:3 do not satisfy the condition asked in the stem."),
  Q("The incentre is the meeting point of the", ["medians", "altitudes", "angle bisectors", "perpendicular bisectors"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Angle bisectors meet at the incentre. Why not the others: A) medians; B) altitudes; D) perpendicular bisectors do not satisfy the condition asked in the stem."),
  Q("An equilateral triangle has each angle equal to", ["45°", "60°", "90°", "120°"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 180/3 = 60. The correct option is B) 60°. Why not the others: A) 45°; C) 90°; D) 120° do not satisfy the condition asked in the stem.")
]);

more("Circles, chords, and tangents", [
  Q("A radius is 10 cm. A chord is 16 cm long. Its distance from the centre is", ["6 cm", "8 cm", "4 cm", "5 cm"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Half the chord is 8. Distance = √(10² − 8²) = √36 = 6. The correct option is A) 6 cm. Why not the others: B) 8 cm; C) 4 cm; D) 5 cm do not satisfy the condition asked in the stem."),
  Q("The length of the tangent from a point 5 cm from the centre to a circle of radius 3 cm is", ["4 cm", "2 cm", "8 cm", "√34 cm"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). √(25 − 9) = √16 = 4. A 3-4-5 triangle. The correct option is A) 4 cm. Why not the others: B) 2 cm; C) 8 cm; D) √34 cm do not satisfy the condition asked in the stem."),
  Q("Angles in the same segment of a circle are", ["equal", "supplementary", "complementary", "in the ratio 2:1"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). They stand on the same arc, so they are equal. Why not the others: B) supplementary; C) complementary; D) in the ratio 2:1 do not satisfy the condition asked in the stem."),
  Q("If a tangent and a chord meet, the angle between them equals the angle in the alternate segment. This rule is called", ["Pythagoras", "the alternate segment theorem", "the midpoint theorem", "Thales only"], 1, "SSC geometry uses this name for that tangent-chord angle. The correct option is B) the alternate segment theorem. Why not the others: A) Pythagoras; C) the midpoint theorem; D) Thales only do not satisfy the condition asked in the stem."),
  Q("Two circles of radii 3 cm and 5 cm touch externally. The distance between centres is", ["2 cm", "8 cm", "15 cm", "4 cm"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). External touch: sum of radii = 8 cm. Why not the others: A) 2 cm; C) 15 cm; D) 4 cm do not satisfy the condition asked in the stem.")
]);

more("Trigonometry", [
  Q("sin 60° × cos 30° equals", ["1/2", "3/4", "√3/2", "1"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Each factor is √3/2. Product is 3/4. Why not the others: A) 1/2; C) √3/2; D) 1 do not satisfy the condition asked in the stem."),
  Q("If tan θ = 1, and θ is acute, θ is", ["30°", "45°", "60°", "90°"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). tan 45° = 1. Why not the others: A) 30°; C) 60°; D) 90° do not satisfy the condition asked in the stem. Why not the others: A) 30°; C) 60°; D) 90° do not satisfy the condition asked in the stem."),
  Q("sec²θ − tan²θ equals", ["0", "1", "2", "sin θ"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). This is the rearranged form of 1 + tan²θ = sec²θ. Why not the others: A) 0; C) 2; D) sin θ do not satisfy the condition asked in the stem."),
  Q("cos 0° equals", ["0", "1", "1/2", "undefined"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Standard value. The correct option is B) 1. Why not the others: A) 0; C) 1/2; D) undefined do not satisfy the condition asked in the stem."),
  Q("If sin A = 1/2 and A is acute, A is", ["30°", "45°", "60°", "90°"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). sin 30° = 1/2. Why not the others: B) 45°; C) 60°; D) 90° do not satisfy the condition asked in the stem. Why not the others: B) 45°; C) 60°; D) 90° do not satisfy the condition asked in the stem.")
]);

more("Heights and distances", [
  Q("A tower is 50 m high. From a point on the ground the elevation is 45°. The distance of the point from the foot is", ["25 m", "50 m", "50√3 m", "100 m"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). tan 45° = 1, so the distance equals the height. The correct option is B) 50 m. Why not the others: A) 25 m; C) 50√3 m; D) 100 m do not satisfy the condition asked in the stem."),
  Q("The elevation of a building changes from 30° to 60° as a man walks 20√3 m towards it. The height is", ["20 m", "30 m", "40 m", "60 m"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Let the nearer distance be x and the height h. h = x√3 and h = (x+20√3)/√3. Solving gives h = 30 m. Why not the others: A) 20 m; C) 40 m; D) 60 m do not satisfy the condition asked in the stem."),
  Q("A ladder 10 m long reaches a window 6 m above the ground. The foot of the ladder is from the wall by", ["8 m", "6 m", "4 m", "5 m"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). √(100 − 36) = √64 = 8 m. Why not the others: B) 6 m; C) 4 m; D) 5 m do not satisfy the condition asked in the stem."),
  Q("If the angle of elevation is 60° and the distance from the tower is 10 m, the height is", ["10 m", "10√3 m", "20 m", "5√3 m"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Height = 10 × tan 60° = 10√3 m. Why not the others: A) 10 m; C) 20 m; D) 5√3 m do not satisfy the condition asked in the stem."),
  Q("Angle of depression equals the angle of elevation when", ["the lines of sight are alternate angles with the horizontal", "the observer is at the foot", "the sun is overhead", "the distance is zero"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The horizontal at the top is parallel to the ground, so the two angles are equal. The correct option is A) the lines of sight are alternate angles with the horizontal.")
]);

more("Mensuration: plane figures", [
  Q("The area of a rhombus whose diagonals are 8 cm and 6 cm is", ["24 cm²", "48 cm²", "14 cm²", "28 cm²"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). (1/2) × 8 × 6 = 24. The correct option is A) 24 cm². Why not the others: B) 48 cm²; C) 14 cm²; D) 28 cm² do not satisfy the condition asked in the stem."),
  Q("A rectangular field is 40 m by 30 m. Its perimeter is", ["70 m", "120 m", "140 m", "100 m"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2 × (40+30) = 140 m. Why not the others: A) 70 m; B) 120 m; D) 100 m do not satisfy the condition asked in the stem."),
  Q("The area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm is", ["50 cm²", "100 cm²", "40 cm²", "60 cm²"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). (1/2) × (8+12) × 5 = 50. The correct option is A) 50 cm². Why not the others: B) 100 cm²; C) 40 cm²; D) 60 cm² do not satisfy the condition asked in the stem."),
  Q("The circumference of a semicircle of radius 7 cm, including the diameter, is (π = 22/7)", ["22 cm", "36 cm", "44 cm", "18 cm"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Curved part 11, plus diameter 14, is 36? Curved = πr = 22. Plus diameter 14 = 36. Yes. The correct option is B) 36 cm."),
  Q("A square and a rectangle have the same perimeter of 40 cm. The square has the larger area. The side of the square is", ["8 cm", "10 cm", "12 cm", "16 cm"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Perimeter 40, so the side is 10 cm. Why not the others: A) 8 cm; C) 12 cm; D) 16 cm do not satisfy the condition asked in the stem.")
]);

more("Mensuration: solids", [
  Q("The curved surface of a cylinder of radius 7 cm and height 10 cm is (π = 22/7)", ["440 cm²", "154 cm²", "220 cm²", "308 cm²"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2πrh = 2 × 22/7 × 7 × 10 = 440. The correct option is A) 440 cm². Why not the others: B) 154 cm²; C) 220 cm²; D) 308 cm² do not satisfy the condition asked in the stem."),
  Q("A cube has volume 125 cm³. Its side is", ["5 cm", "25 cm", "15 cm", "4 cm"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 5³ = 125. The correct option is A) 5 cm. Why not the others: B) 25 cm; C) 15 cm; D) 4 cm do not satisfy the condition asked in the stem."),
  Q("The volume of a hemisphere of radius 3 cm is (π = 22/7)", ["66 cm³", "99 cm³", "396/7 cm³", "22 cm³"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). (2/3) × 22/7 × 27 = 396/7 cm³. Why not the others: A) 66 cm³; B) 99 cm³; D) 22 cm³ do not satisfy the condition asked in the stem."),
  Q("A rectangular box is 5 cm × 4 cm × 3 cm. Its volume is", ["60 cm³", "12 cm³", "47 cm³", "20 cm³"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 5 × 4 × 3 = 60. The correct option is A) 60 cm³. Why not the others: B) 12 cm³; C) 47 cm³; D) 20 cm³ do not satisfy the condition asked in the stem."),
  Q("The slant height of a cone with radius 3 cm and height 4 cm is", ["5 cm", "7 cm", "12 cm", "6 cm"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). √(9+16) = 5 cm. Why not the others: B) 7 cm; C) 12 cm; D) 6 cm do not satisfy the condition asked in the stem.")
]);

more("Data interpretation", [
  Q("In a bar graph, production is 400 units and export is 100 units. Export as a percent of production is", ["20%", "25%", "40%", "10%"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 100/400 × 100 = 25%. Why not the others: A) 20%; C) 40%; D) 10% do not satisfy the condition asked in the stem."),
  Q("A pie chart has sectors 120°, 90° and the rest. The rest is", ["150°", "180°", "90°", "210°"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 360 − 210 = 150. The correct option is A) 150°. Why not the others: B) 180°; C) 90°; D) 210° do not satisfy the condition asked in the stem."),
  Q("If a histogram class is 0–10 with frequency 5, and 10–20 with frequency 15, the total frequency is", ["10", "20", "15", "5"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 5 + 15 = 20. Why not the others: A) 10; C) 15; D) 5 do not satisfy the condition asked in the stem. Why not the others: A) 10; C) 15; D) 5 do not satisfy the condition asked in the stem."),
  Q("A frequency polygon joins", ["the class limits", "the midpoints of the class tops", "only the highest bar", "the axes only"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). It joins the mid-values of the classes at the height of the frequency. The correct option is B) the midpoints of the class tops."),
  Q("Two bars show 80 and 120. Their ratio is", ["2:3", "3:2", "4:5", "1:2"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 80:120 = 2:3. Why not the others: B) 3:2; C) 4:5; D) 1:2 do not satisfy the condition asked in the stem. Why not the others: B) 3:2; C) 4:5; D) 1:2 do not satisfy the condition asked in the stem.")
]);

more("Analogy", [
  Q("Knife : Cut :: Pen : ?", ["Ink", "Write", "Paper", "Cap"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The purpose of a knife is to cut. The purpose of a pen is to write. Why not the others: A) Ink; C) Paper; D) Cap do not satisfy the condition asked in the stem."),
  Q("Cow : Calf :: Horse : ?", ["Cub", "Foal", "Kid", "Puppy"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The young one of a horse is a foal. Why not the others: A) Cub; C) Kid; D) Puppy do not satisfy the condition asked in the stem."),
  Q("16 : 4 :: 36 : ?", ["5", "6", "9", "18"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Second is the square root of the first. √36 = 6. Why not the others: A) 5; C) 9; D) 18 do not satisfy the condition asked in the stem."),
  Q("Figural: a triangle becomes a square, and a square becomes a pentagon. A pentagon becomes a", ["triangle", "hexagon", "circle", "rectangle"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Each step adds one side. A pentagon is followed by a hexagon. This is the usual side-count analogy in CGL figural sets."),
  Q("Moon : Satellite :: Earth : ?", ["Star", "Planet", "Sun", "Comet"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The moon is a satellite. The earth is a planet. Why not the others: A) Star; C) Sun; D) Comet do not satisfy the condition asked in the stem.")
]);

more("Classification", [
  Q("Find the odd one: January, May, July, November", ["January", "May", "July", "November"], 3, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). January, May and July have 31 days. November has 30. Why not the others: A) January; B) May; C) July do not satisfy the condition asked in the stem."),
  Q("Find the odd one: 121, 144, 169, 196, 225 is not the set. Odd one among 11, 13, 15, 17", ["11", "13", "15", "17"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 15 is the only composite number. Why not the others: A) 11; B) 13; D) 17 do not satisfy the condition asked in the stem."),
  Q("Find the odd one: Chair, Table, Stool, Carpenter", ["Chair", "Table", "Stool", "Carpenter"], 3, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The first three are furniture. A carpenter is a person. Why not the others: A) Chair; B) Table; C) Stool do not satisfy the condition asked in the stem."),
  Q("Find the odd figure type: three shapes with an even number of sides, and one triangle", ["the triangle", "a square", "a hexagon", "an octagon"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A triangle has three sides. The others have an even number. Figural classification uses this count. The correct option is A) the triangle."),
  Q("Find the odd one: BDF, HJL, NPR, QTV", ["BDF", "HJL", "NPR", "QTV"], 3, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). BDF, HJL and NPR move forward by 2 letters each time. Q to T jumps by 3, so QTV is the odd one. Why not the others: A) BDF; B) HJL; C) NPR do not satisfy the condition asked in the stem.")
]);

more("Series", [
  Q("7, 10, 16, 28, ?", ["40", "48", "52", "36"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Differences double: +3, +6, +12, +24. 28 + 24 = 52. Why not the others: A) 40; B) 48; D) 36 do not satisfy the condition asked in the stem."),
  Q("AB, DEF, HIJK, ?", ["MNOPQ", "LMNOP", "NOPQR", "KLMNO"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Groups grow by one letter, and one letter is skipped between groups. After K skip L, then five letters M N O P Q. The correct option is A) MNOPQ."),
  Q("The dot in a square moves clockwise one corner at a time: top-left, top-right, bottom-right. The next position is", ["bottom-left", "centre", "top-left", "top-right"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The next clockwise corner after bottom-right is bottom-left. This is a standard figural series. Why not the others: B) centre; C) top-left; D) top-right do not satisfy the condition asked in the stem."),
  Q("2, 3, 5, 9, 17, ?", ["33", "32", "31", "34"], 0, "Each term is double the previous one minus 1? 2×2−1=3, 3×2−1=5, 5×2−1=9, 9×2−1=17, 17×2−1=33. Why not the others: B) 32; C) 31; D) 34 do not satisfy the condition asked in the stem."),
  Q("Z, X, U, Q, ?", ["L", "M", "K", "N"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Steps back of 2, 3, 4, then 5. Q is 17. Back 5 is L. Why not the others: B) M; C) K; D) N do not satisfy the condition asked in the stem.")
]);

more("Coding and decoding", [
  Q("If FRIEND is coded as HUMJTK, how is CANDLE coded?", ["EDRIRL", "ECPFNG", "EOXFNG", "DCOEMG"], 0, "The jumps are +2, +3, +4, +5, +6, +7? F+2=H, R+3=U, I+4=M, E+5=J, N+6=T, D+7=K. CANDLE: C+2=E, A+3=D, N+4=R, D+5=I, L+6=R, E+7=L. EDRIRL. A known SSC coding item."),
  Q("If DELHI is coded as 73541 and CALCUTTA as 82589662, how is CALICUT coded?", ["5278431", "5978213", "8251896", "8543691"], 2, "From the two words, C=8, A=2, L=5, I=1, U=9 and T=6. CALICUT is 8251896. This is a standard SSC coding item. Why not the others: A) 5278431; B) 5978213; D) 8543691 do not satisfy the condition asked in the stem."),
  Q("In a code, COMPUTER is written as RFUVQNPC. How is MEDICINE written?", ["EOJDJEFM", "MFEDJJOE", "MFEJDJOE", "EOJDEJFM"], 0, "The word is split and the halves are reversed with a +1 shift on one half. The established key for this SSC item is EOJDJEFM. Why not the others: B) MFEDJJOE; C) MFEJDJOE; D) EOJDEJFM do not satisfy the condition asked in the stem."),
  Q("If ‘paper’ is called ‘wood’, ‘wood’ is called ‘straw’, ‘straw’ is called ‘grass’, and ‘grass’ is called ‘rubber’, then what is the furniture made of?", ["paper", "wood", "straw", "grass"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Furniture is made of wood, and wood is called straw. Why not the others: A) paper; B) wood; D) grass do not satisfy the condition asked in the stem."),
  Q("If ‘+’ means ‘×’, ‘×’ means ‘−’, ‘−’ means ‘÷’ and ‘÷’ means ‘+’, then 8 + 6 × 4 − 2 is not the item. Compute 6 × 4 with the code ‘×’ as minus after coding 9 + 3 × 2 where + is × and × is −: 9 × 3 − 2 =", ["25", "29", "15", "7"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Replace the signs first: 9 × 3 − 2 = 27 − 2 = 25. Why not the others: B) 29; C) 15; D) 7 do not satisfy the condition asked in the stem.")
]);

more("Blood relations", [
  Q("A’s mother is the sister of B, and B’s daughter is C. How is A related to C?", ["Cousin", "Brother", "Uncle", "Nephew"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A’s mother and B are siblings, so their children A and C are cousins. Why not the others: B) Brother; C) Uncle; D) Nephew do not satisfy the condition asked in the stem."),
  Q("Pointing to a photograph, a man said, “I have no brother or sister, but that man’s father is my father’s son.” The photograph is of his", ["son", "father", "nephew", "brother"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). “My father’s son” is the man himself, since he has no brother. That man’s father is himself, so the photograph is his son."),
  Q("D is the brother of E. E is the brother of F. F is the daughter of G. D is G’s", ["son", "daughter", "brother", "father"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). D is male and a child of G. The correct option is A) son. Why not the others: B) daughter; C) brother; D) father do not satisfy the condition asked in the stem."),
  Q("X is the husband of Y. Z is the brother of X. W is the sister of Y. W is Z’s", ["sister", "sister-in-law", "daughter", "mother"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). W is the sister of Z’s brother’s wife, so W is Z’s sister-in-law. Why not the others: A) sister; C) daughter; D) mother do not satisfy the condition asked in the stem."),
  Q("P’s father is Q’s son. How is Q related to P if Q is male?", ["Father", "Grandfather", "Uncle", "Brother"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Q’s son is P’s father, so Q is P’s grandfather. Why not the others: A) Father; C) Uncle; D) Brother do not satisfy the condition asked in the stem.")
]);

more("Direction sense", [
  Q("A girl walks 10 m north, turns right and walks 20 m, turns right and walks 10 m. She is from the start", ["20 m east", "20 m west", "10 m east", "30 m north"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The north and south legs cancel. The right turn from north is east, so she is 20 m east. Why not the others: B) 20 m west; C) 10 m east; D) 30 m north do not satisfy the condition asked in the stem."),
  Q("A man facing east turns 270° clockwise. He now faces", ["north", "south", "west", "east"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 270° clockwise from east is north. Why not the others: B) south; C) west; D) east do not satisfy the condition asked in the stem."),
  Q("Sunrise is in the east. At sunrise a man’s shadow falls towards", ["east", "west", "north", "south"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The sun is in the east, so the shadow falls to the west. Why not the others: A) east; C) north; D) south do not satisfy the condition asked in the stem."),
  Q("Kiran walks 2 km south, 3 km west and 2 km north. Distance from the start is", ["2 km", "3 km", "5 km", "7 km"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The south and north cancel. She is 3 km west. Why not the others: A) 2 km; C) 5 km; D) 7 km do not satisfy the condition asked in the stem."),
  Q("From home, Amit goes 4 km east, 3 km north and 4 km west. He is", ["3 km north of home", "4 km east of home", "3 km south of home", "at home"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The east and west cancel. He is 3 km north of home. Why not the others: B) 4 km east of home; C) 3 km south of home; D) at home do not satisfy the condition asked in the stem.")
]);

more("Word building", [
  Q("Which word cannot be formed from BEAUTIFUL?", ["BEAT", "FUTURE", "TABLE", "FABLE"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). BEAUTIFUL has no R, so FUTURE cannot be formed. The other three use only letters that are present. Why not the others: A) BEAT; C) TABLE; D) FABLE do not satisfy the condition asked in the stem."),
  Q("Which word can be formed from the letters of MEASUREMENT?", ["MASTER", "SUMMIT", "MANTLE", "ASSURE"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). MASTER uses M, A, S, T, E, R, each present in MEASUREMENT. SUMMIT needs two M? MEASUREMENT has M,E,A,S,U,R,M,E,N,T — two M, one U. SUMMIT needs U twice? S,U,M,M,I,T — needs I, which is absent. MANTLE needs L, absent. ASSURE needs two S, and there is one S."),
  Q("Which word cannot be formed from ENVIRONMENT?", ["MOVE", "ENTER", "MENTOR", "TOWER"], 3, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). ENVIRONMENT has no W, so TOWER cannot be formed. Why not the others: A) MOVE; B) ENTER; C) MENTOR do not satisfy the condition asked in the stem."),
  Q("Which word cannot be formed from SIGNATURE?", ["NATURE", "SIGHT", "GUEST", "SINGER"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). SIGNATURE has no H, so SIGHT cannot be formed. Why not the others: A) NATURE; C) GUEST; D) SINGER do not satisfy the condition asked in the stem."),
  Q("From the letters of the word ORGANISATION, which cannot be formed?", ["NATION", "GRANT", "ORANGE", "STRONG"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). ORGANISATION has no E, so ORANGE cannot be formed. Why not the others: A) NATION; B) GRANT; D) STRONG do not satisfy the condition asked in the stem.")
]);

more("Syllogism", [
  Q("Statements: All teachers are students. Some students are boys. Conclusion: Some teachers are boys.", ["Follows", "Does not follow", "All boys are teachers", "No teacher is a student"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The boys may be the students who are not teachers. The correct option is B) Does not follow. Why not the others: A) Follows; C) All boys are teachers; D) No teacher is a student do not satisfy the condition asked in the stem."),
  Q("Statements: All cups are plates. No plate is a spoon. Conclusion: No cup is a spoon.", ["Follows", "Does not follow", "Some spoons are cups", "All spoons are plates"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Cups are inside plates, and plates do not meet spoons, so cups do not meet spoons. The correct option is A) Follows."),
  Q("Statements: Some birds are parrots. All parrots are green. Conclusion: Some birds are green.", ["Follows", "Does not follow", "All birds are green", "No bird is green"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The birds that are parrots are green. The correct option is A) Follows. Why not the others: B) Does not follow; C) All birds are green; D) No bird is green do not satisfy the condition asked in the stem."),
  Q("Statements: No man is a lion. All lions are animals. Conclusion: Some animals are not men.", ["Follows", "Does not follow", "All animals are lions", "No animal is a man"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Lions are animals and no lion is a man, so some animals are not men. The correct option is A) Follows. Why not the others: B) Does not follow; C) All animals are lions; D) No animal is a man do not satisfy the condition asked in the stem."),
  Q("Statements: All books are pens. All pens are pencils. Conclusion: Some pencils are books.", ["Follows", "Does not follow", "No pencil is a book", "Some books are not pencils"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). All books are pencils, and “all” implies “some” when books exist, which these statements assume. The correct option is A) Follows.")
]);

more("Venn diagrams", [
  Q("In a class of 60, 35 play football, 30 play cricket and 10 play both. How many play only football?", ["25", "20", "15", "10"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Only football = 35 − 10 = 25. Why not the others: B) 20; C) 15; D) 10 do not satisfy the condition asked in the stem."),
  Q("Using that class, how many play neither game?", ["5", "15", "10", "0"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Union = 25 + 10 + 20 = 55. Neither = 60 − 55 = 5. Only cricket = 20. Why not the others: B) 15; C) 10; D) 0 do not satisfy the condition asked in the stem."),
  Q("20 students take history, 15 take geography, and 8 take both. How many take at least one of the two?", ["27", "35", "43", "23"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 20 + 15 − 8 = 27. Why not the others: B) 35; C) 43; D) 23 do not satisfy the condition asked in the stem. Why not the others: B) 35; C) 43; D) 23 do not satisfy the condition asked in the stem."),
  Q("A diagram shows 12 in only A, 7 in only B and 4 in both. How many are in A?", ["12", "16", "19", "11"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A includes only A and both: 12 + 4 = 16. Why not the others: A) 12; C) 19; D) 11 do not satisfy the condition asked in the stem."),
  Q("If 40 people were surveyed and 28 are inside at least one of two circles, how many are outside both?", ["12", "28", "68", "8"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 40 − 28 = 12. Why not the others: B) 28; C) 68; D) 8 do not satisfy the condition asked in the stem. Why not the others: B) 28; C) 68; D) 8 do not satisfy the condition asked in the stem.")
]);

more("Missing number and wrong number", [
  Q("Find the wrong number: 3, 8, 15, 24, 34, 48", ["8", "34", "48", "15"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Differences should be +5, +7, +9, +11, +13. After 24 the term is 35, not 34. Why not the others: A) 8; C) 48; D) 15 do not satisfy the condition asked in the stem."),
  Q("8, 27, 64, 125, ?", ["196", "216", "250", "175"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Cubes of 2, 3, 4, 5, then 6. 6³ = 216. Why not the others: A) 196; C) 250; D) 175 do not satisfy the condition asked in the stem."),
  Q("5, 10, 20, 40, ?", ["60", "70", "80", "100"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Each term doubles. 40 × 2 = 80. Why not the others: A) 60; B) 70; D) 100 do not satisfy the condition asked in the stem."),
  Q("A row shows 6, 2, 4 because 6 − 2 = 4. The row 9, 4, ? is", ["5", "13", "36", "3"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The same subtraction: 9 − 4 = 5. Why not the others: B) 13; C) 36; D) 3 do not satisfy the condition asked in the stem."),
  Q("Find the wrong number: 5, 10, 17, 26, 37, 50, 64", ["17", "50", "64", "26"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The differences should be +5, +7, +9, +11, +13, +15. After 50 the term is 65, not 64. Why not the others: A) 17; B) 50; D) 26 do not satisfy the condition asked in the stem.")
]);

more("Embedded figures and figural series", [
  Q("A square contains a smaller square with sides parallel to it. The smaller square is", ["an embedded figure", "a mirror image", "a water image", "a dice net"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The same shape, same angles, sitting inside the larger one, is an embedded figure. CGL asks this as a picture."),
  Q("Three figures add one side each: triangle, square, pentagon. The fourth is a", ["circle", "hexagon", "triangle", "line"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The series increases the side count by one. The correct option is B) hexagon. Why not the others: A) circle; C) triangle; D) line do not satisfy the condition asked in the stem."),
  Q("A black dot travels along the corners of a square, one step anticlockwise, starting at the top-right. The next corner is", ["top-left", "bottom-right", "bottom-left", "centre"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Anticlockwise from top-right is top-left. Why not the others: B) bottom-right; C) bottom-left; D) centre do not satisfy the condition asked in the stem."),
  Q("Which of these can hide a circle inside it without cutting the circle?", ["A larger circle", "A straight line", "A single point", "An open angle"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A smaller circle sits inside a larger circle. That is the embedded-circle item. Why not the others: B) A straight line; C) A single point; D) An open angle do not satisfy the condition asked in the stem."),
  Q("A figure rotates 90° anticlockwise each step. A horizontal arrow pointing right next points", ["up", "down", "left", "right"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A quarter turn anticlockwise takes a rightward arrow upward. Why not the others: B) down; C) left; D) right do not satisfy the condition asked in the stem.")
]);

more("Paper folding and punched holes", [
  Q("A square is folded along its vertical midline, right over left. A hole is punched in the top-right of the folded sheet, away from the crease. Opened, the holes are", ["one hole on the crease", "two holes, symmetric left and right, both near the top", "four holes", "three holes in a column"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). One fold copies the hole across the vertical crease. Both holes stay near the top. The correct option is B) two holes, symmetric left and right, both near the top."),
  Q("A paper folded into four equal layers is punched once, off every crease. Opened, you see", ["2 holes", "4 holes", "8 holes", "1 hole"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Four layers produce four holes. The correct option is B) 4 holes. Why not the others: A) 2 holes; C) 8 holes; D) 1 hole do not satisfy the condition asked in the stem."),
  Q("Punching on both creases of a twice-folded sheet, at their crossing, opens into", ["1 hole", "2 holes", "4 holes", "8 holes"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The crossing of the creases is a single point of the open sheet. The correct option is A) 1 hole. Why not the others: B) 2 holes; C) 4 holes; D) 8 holes do not satisfy the condition asked in the stem."),
  Q("A transparent sheet shows the letter L in the left half. Folded on the vertical midline onto the right, the L", ["stays an L in the same sense", "appears as a backwards L", "appears upside down only", "disappears"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A vertical fold reverses left and right. The correct option is B) appears as a backwards L. Why not the others: A) stays an L in the same sense; C) appears upside down only; D) disappears do not satisfy the condition asked in the stem."),
  Q("CGL paper-folding items are", ["only in Tier 2 statistics", "part of Tier 1 non-verbal reasoning", "absent from the syllabus", "only in English"], 1, "The official Tier 1 list names punched hole, pattern folding and unfolding, and figural pattern folding. The correct option is B) part of Tier 1 non-verbal reasoning.")
]);

const panels = function (dots) {
  return (
    '<svg viewBox="0 0 220 70" width="220" height="70">' +
    dots
      .map(function (pos, i) {
        const x = 10 + i * 72;
        return (
          '<rect x="' + x + '" y="8" width="54" height="54" ' + frame + "/>" +
          dot(x + pos[0], 8 + pos[1])
        );
      })
      .join("") +
    "</svg>"
  );
};

more("Mirror image, water image, and counting figures", [
  Q("A mirror is placed on the right of the word QUANT. The mirror image reads, from left to right in the mirror,", ["TNAUQ reversed in shape", "the left-right reverse of QUANT", "QUANT unchanged", "Q only"], 1, "A vertical mirror reverses the order and the shape of each letter. SSC asks this with a printed word. The correct option is B) the left-right reverse of QUANT. Why not the others: A) TNAUQ reversed in shape; C) QUANT unchanged; D) Q only do not satisfy the condition asked in the stem."),
  Q("The water image of the letter M is", ["M unchanged in outline", "W", "a backwards M that is still upright", "N"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A water image turns the figure over the horizontal, so M becomes W. Why not the others: A) M unchanged in outline; C) a backwards M that is still upright; D) N do not satisfy the condition asked in the stem."),
  Q("How many squares are there in a 2 by 2 grid?", ["4", "5", "6", "8"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Four small squares and one large square. The correct option is B) 5. Why not the others: A) 4; C) 6; D) 8 do not satisfy the condition asked in the stem."),
  Q("How many squares are there in a 3 by 3 grid of equal squares?", ["9", "14", "10", "16"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 9 of size 1, 4 of size 2, and 1 of size 3. Total 14. Why not the others: A) 9; C) 10; D) 16 do not satisfy the condition asked in the stem."),
  Q("A figure is made of a large triangle divided by joining the midpoints. The number of smallest upward triangles is what you count first. In a triangle split by one line from a vertex to the opposite side, the number of triangles is", ["1", "2", "3", "4"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The line makes two small triangles, and the outer triangle is the third. The correct option is C) 3. Why not the others: A) 1; B) 2; D) 4 do not satisfy the condition asked in the stem."),
  Q("The mirror image of 3, with the mirror on the right, looks most like", ["a backwards 3", "E", "8", "3 unchanged"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Left and right are reversed. The flat side of 3, which was on the left, moves toward the mirror. The correct option is A) a backwards 3."),
  Q("A water image reverses", ["left and right", "top and bottom", "both, like a 180° turn", "nothing"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The figure is reflected in a horizontal line. The correct option is B) top and bottom. Why not the others: A) left and right; C) both, like a 180° turn; D) nothing do not satisfy the condition asked in the stem."),
  Q("How many triangles are in a square divided by both diagonals?", ["4", "6", "8", "2"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Four small triangles, and four triangles each made of two small ones. Total 8. Why not the others: A) 4; B) 6; D) 2 do not satisfy the condition asked in the stem."),
  Q("Which figure type does CGL print for these items?", ["A passage", "A line drawing of the figure, its mirror, or a design to be counted", "A pie chart only", "A map of rivers"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The question booklet shows the drawing. The options are four drawings. The correct option is B) A line drawing of the figure, its mirror, or a design to be counted."),
  Q("Squares in a 1 by 1 grid number", ["0", "1", "2", "4"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A single square is one square. The correct option is B) 1. Why not the others: A) 0; C) 2; D) 4 do not satisfy the condition asked in the stem.")
]);

more("Dice and ranking", [
  Q("On a standard dice, the face opposite 3 is", ["2", "4", "5", "6"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Opposite faces add to 7. Opposite 3 is 4. Why not the others: A) 2; C) 5; D) 6 do not satisfy the condition asked in the stem."),
  Q("On a standard dice, the face opposite 1 is", ["2", "5", "6", "4"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1 + 6 = 7. Why not the others: A) 2; B) 5; D) 4 do not satisfy the condition asked in the stem. Why not the others: A) 2; B) 5; D) 4 do not satisfy the condition asked in the stem."),
  Q("Two positions of a dice show 1 and 2 on top in turn, with 3 common on the front. This is used to fix the remaining faces. Opposite faces on a normal dice never", ["add to 7", "appear together on one view as opposites", "include 6", "are numbered"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Opposite faces cannot both be seen on one view. The correct option is B) appear together on one view as opposites."),
  Q("A boy is 12th from the left and 8th from the right. The number of boys is", ["19", "20", "18", "21"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 12 + 8 − 1 = 19. He is counted in both ranks, so subtract 1. Why not the others: B) 20; C) 18; D) 21 do not satisfy the condition asked in the stem."),
  Q("In a row of 31 students, a girl is 12th from the left. Her position from the right is", ["20th", "19th", "21st", "18th"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 31 − 12 + 1 = 20. The correct option is A) 20th. Why not the others: B) 19th; C) 21st; D) 18th do not satisfy the condition asked in the stem."),
  Q("Ramesh is 7th from the top and 28th from the bottom. The class has", ["34 students", "35 students", "36 students", "33 students"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 7 + 28 − 1 = 34. The correct option is A) 34 students. Why not the others: B) 35 students; C) 36 students; D) 33 students do not satisfy the condition asked in the stem."),
  Q("If three positions of a dice are shown and two faces are common, the third view’s remaining face is found by", ["rotation about the common edge", "adding all faces", "ignoring 6", "using the water image"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). CGL dice items rotate the cube so the shared faces stay matched. The correct option is A) rotation about the common edge."),
  Q("A standard dice cannot show 2 and 5 together as adjacent faces because they are", ["opposite faces", "the same face", "both even only on a blank dice", "always on the top"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). On a normal dice, 2 is opposite 5, so those two faces never share an edge. The correct option is A) opposite faces."),
  Q("From the left, ranks 1, 2, 3 are the first three. The middle of 11 people is rank", ["5", "6", "7", "4"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The 6th person is in the middle of 11. Why not the others: A) 5; C) 7; D) 4 do not satisfy the condition asked in the stem."),
  Q("Opposite of 5 on a standard dice is", ["1", "2", "3", "4"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 5 + 2 = 7. Why not the others: A) 1; C) 3; D) 4 do not satisfy the condition asked in the stem. Why not the others: A) 1; C) 3; D) 4 do not satisfy the condition asked in the stem.")
]);

window.CGL_QUIZ["Series"].push({
  text: "The dot moves one corner clockwise in each figure. Which corner comes next?",
  options: ["Bottom-left", "Top-left", "Centre", "Top-right"],
  answer: 0,
  why: "The three figures place the dot at the top-left, then the top-right, then the bottom-right. The next clockwise corner is the bottom-left. SSC CGL figural series uses this movement; the booklet prints the squares, and this is the same movement redrawn.",
  figure: panels([[8, 8], [46, 8], [46, 46]])
});

more("Reading comprehension", [
  Q("A passage says exports rose, but the trade gap widened. Which idea is supported?", ["Exports fell", "A higher export figure did not close the gap", "The gap disappeared", "Imports were banned"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The passage gives both facts. It does not say exports fell or that imports were banned. The correct option is B) A higher export figure did not close the gap."),
  Q("“The author is concerned about groundwater.” A supported title would mention", ["only a festival", "groundwater", "a cricket score", "a film review"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The title has to match what the passage is about. The correct option is B) groundwater. Why not the others: A) only a festival; C) a cricket score; D) a film review do not satisfy the condition asked in the stem."),
  Q("A fact question that asks for a year is answered by", ["the year written in the passage", "the current year", "the first option", "a guess"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Use the year the passage states. The correct option is A) the year written in the passage. Why not the others: B) the current year; C) the first option; D) a guess do not satisfy the condition asked in the stem."),
  Q("If every option adds a fact the passage never states, the right choice is", ["the one the passage does support", "the longest option", "the first option", "any true news item"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Outside truth is not enough. The passage has to support the option. The correct option is A) the one the passage does support."),
  Q("Two paragraphs, one on buses and one on fares, are best titled", ["Buses and fares in the city", "Only bus colours", "A recipe", "A sports result"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The title has to cover both paragraphs. The correct option is A) Buses and fares in the city. Why not the others: B) Only bus colours; C) A recipe; D) A sports result do not satisfy the condition asked in the stem.")
]);

more("Cloze test and fill in the blanks", [
  Q("She has been absent ____ Monday.", ["for", "since", "from", "by"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Since is used with the day the absence began. Why not the others: A) for; C) from; D) by do not satisfy the condition asked in the stem."),
  Q("The patient has been waiting ____ an hour.", ["since", "for", "from", "on"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). For is used with a length of time. Why not the others: A) since; C) from; D) on do not satisfy the condition asked in the stem."),
  Q("He is interested ____ music.", ["on", "at", "in", "for"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The phrase is interested in. Why not the others: A) on; B) at; D) for do not satisfy the condition asked in the stem."),
  Q("____ hour ago he left.", ["A", "An", "The", "No article"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Hour begins with a vowel sound, so the article is an. Why not the others: A) A; C) The; D) No article do not satisfy the condition asked in the stem."),
  Q("Each of the girls ____ a prize.", ["have", "are", "has", "were"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Each is singular, so the verb is has. Why not the others: A) have; B) are; D) were do not satisfy the condition asked in the stem.")
]);

more("Error detection and sentence improvement", [
  Q("Improve: “He did not went to school.”", ["He did not go to school.", "He did not gone to school.", "He did not going to school.", "No improvement"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). After did, the verb stays in the base form: go. The correct option is A) He did not go to school.. Why not the others: B) He did not gone to school.; C) He did not going to school.; D) No improvement do not satisfy the condition asked in the stem."),
  Q("Find the error: “One of my friend is a doctor.”", ["One of", "my friend", "is", "a doctor"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). After one of, the noun is plural: friends. The correct option is B) my friend. Why not the others: A) One of; C) is; D) a doctor do not satisfy the condition asked in the stem."),
  Q("Improve: “She is married with a doctor.”", ["She is married to a doctor.", "She is married by a doctor.", "She married with a doctor.", "No improvement"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Married takes to, not with. The correct option is A) She is married to a doctor.. Why not the others: B) She is married by a doctor.; C) She married with a doctor.; D) No improvement do not satisfy the condition asked in the stem."),
  Q("The news ____ true.", ["are", "were", "is", "have"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). News is singular. Why not the others: A) are; B) were; D) have do not satisfy the condition asked in the stem."),
  Q("Improve: “I prefer tea than coffee.”", ["I prefer tea to coffee.", "I prefer tea from coffee.", "I prefer tea then coffee.", "No improvement"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Prefer takes to, not than. The correct option is A) I prefer tea to coffee.. Why not the others: B) I prefer tea from coffee.; C) I prefer tea then coffee.; D) No improvement do not satisfy the condition asked in the stem.")
]);

more("Synonyms and antonyms", [
  Q("The synonym of “cautious” is", ["Careless", "Careful", "Quick", "Loud"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Cautious means careful. Why not the others: A) Careless; C) Quick; D) Loud do not satisfy the condition asked in the stem."),
  Q("The antonym of “artificial” is", ["Fake", "Natural", "Plastic", "False"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Artificial and natural are opposites. Why not the others: A) Fake; C) Plastic; D) False do not satisfy the condition asked in the stem."),
  Q("The synonym of “enormous” is", ["Tiny", "Huge", "Weak", "Slow"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Enormous means huge. Why not the others: A) Tiny; C) Weak; D) Slow do not satisfy the condition asked in the stem."),
  Q("The antonym of “victory” is", ["Success", "Win", "Defeat", "Prize"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Victory and defeat are opposites. Why not the others: A) Success; B) Win; D) Prize do not satisfy the condition asked in the stem."),
  Q("The synonym of “rapid” is", ["Slow", "Fast", "Late", "Weak"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Rapid means fast. Why not the others: A) Slow; C) Late; D) Weak do not satisfy the condition asked in the stem.")
]);

more("Idioms and phrases", [
  Q("“To hit the nail on the head” means", ["To hammer a wall", "To say exactly the right thing", "To miss the point", "To start a fight"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The idiom means to be exactly right. The correct option is B) To say exactly the right thing. Why not the others: A) To hammer a wall; C) To miss the point; D) To start a fight do not satisfy the condition asked in the stem."),
  Q("“A piece of cake” means", ["A bakery item only", "Something very easy", "A celebration", "A secret"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The idiom means an easy task. The correct option is B) Something very easy. Why not the others: A) A bakery item only; C) A celebration; D) A secret do not satisfy the condition asked in the stem."),
  Q("“To burn the midnight oil” means", ["To waste fuel", "To work late into the night", "To cook", "To sleep early"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). It means to study or work late. The correct option is B) To work late into the night. Why not the others: A) To waste fuel; C) To cook; D) To sleep early do not satisfy the condition asked in the stem."),
  Q("“To spill the beans” means", ["To cook", "To reveal a secret", "To waste food", "To stay silent"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). It means to give away a secret. The correct option is B) To reveal a secret. Why not the others: A) To cook; C) To waste food; D) To stay silent do not satisfy the condition asked in the stem."),
  Q("“In black and white” means", ["In a photograph only", "In writing", "In the dark", "In two colours of paint"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). It means clearly written down. The correct option is B) In writing. Why not the others: A) In a photograph only; C) In the dark; D) In two colours of paint do not satisfy the condition asked in the stem.")
]);

more("One-word substitution", [
  Q("A person who cannot read or write is", ["illegible", "illiterate", "ineligible", "illegal"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Illiterate. Illegible describes writing that cannot be read. Why not the others: A) illegible; C) ineligible; D) illegal do not satisfy the condition asked in the stem."),
  Q("A government by the people is a", ["monarchy", "democracy", "anarchy", "plutocracy"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Democracy. Why not the others: A) monarchy; C) anarchy; D) plutocracy do not satisfy the condition asked in the stem."),
  Q("A life history written by someone else is a", ["autobiography", "biography", "novel", "diary"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Biography. An autobiography is written by the subject. Why not the others: A) autobiography; C) novel; D) diary do not satisfy the condition asked in the stem."),
  Q("Animals that live in water are", ["terrestrial", "aquatic", "aerial", "arboreal"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Aquatic. Why not the others: A) terrestrial; C) aerial; D) arboreal do not satisfy the condition asked in the stem."),
  Q("A place where bees are kept is an", ["aviary", "apiary", "aquarium", "orphanage"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Apiary. An aviary is for birds. Why not the others: A) aviary; C) aquarium; D) orphanage do not satisfy the condition asked in the stem.")
]);

more("Spelling", [
  Q("Which spelling is correct: privilege?", ["Priviledge", "Privilege", "Privelege", "Privillage"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Privilege has no d, and it ends in -ege. Why not the others: A) Priviledge; C) Privelege; D) Privillage do not satisfy the condition asked in the stem."),
  Q("Which spelling is correct: calendar?", ["Calender", "Calendar", "Calander", "Callendar"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Calendar ends in -ar. A calender is a machine. Why not the others: A) Calender; C) Calander; D) Callendar do not satisfy the condition asked in the stem."),
  Q("Which spelling is correct: beginning?", ["Begining", "Beginning", "Beggining", "Beginin"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Beginning doubles the n. Why not the others: A) Begining; C) Beggining; D) Beginin do not satisfy the condition asked in the stem."),
  Q("Which spelling is correct: occurrence?", ["Occurence", "Ocurrence", "Occurrence", "Occurance"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Occurrence doubles the c and the r. Why not the others: A) Occurence; B) Ocurrence; D) Occurance do not satisfy the condition asked in the stem."),
  Q("Which spelling is correct: embarrass?", ["Embarass", "Embarrass", "Embaras", "Embarras"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Embarrass has two r’s and two s’s. Why not the others: A) Embarass; C) Embaras; D) Embarras do not satisfy the condition asked in the stem.")
]);

more("Active and passive voice", [
  Q("Passive of “The chef cooked the meal” is", ["The meal cooked the chef.", "The meal was cooked by the chef.", "The meal is cooked the chef.", "The meal cooks by the chef."], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Simple past becomes was cooked. The correct option is B) The meal was cooked by the chef.. Why not the others: A) The meal cooked the chef.; C) The meal is cooked the chef.; D) The meal cooks by the chef. do not satisfy the condition asked in the stem."),
  Q("Passive of “People speak English here” is", ["English is spoken here.", "English spoken here.", "English was spoke here.", "Here speaks English."], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Simple present passive: is spoken. The doer can be dropped. The correct option is A) English is spoken here.."),
  Q("Passive of “She will finish the work” is", ["The work will finished by her.", "The work will be finished by her.", "The work is finished by her.", "The work would finish by her."], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Will stays, and the passive adds be plus the past participle. The correct option is B) The work will be finished by her.."),
  Q("Active of “A song was sung by Lata” is", ["Lata was sung a song.", "Lata sang a song.", "Lata is sing a song.", "A song sang Lata."], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The doer returns to the front, and the tense stays simple past. The correct option is B) Lata sang a song.."),
  Q("Which cannot be made passive?", ["She wrote a letter.", "They built a bridge.", "The baby sleeps.", "He opened the door."], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Sleeps has no object to move to the front. The correct option is C) The baby sleeps.. Why not the others: A) She wrote a letter.; B) They built a bridge.; D) He opened the door. do not satisfy the condition asked in the stem.")
]);

more("Direct and indirect speech", [
  Q("He said, “I have finished.” The indirect form is", ["He said that he has finished.", "He said that he had finished.", "He said that I have finished.", "He told he finished."], 1, "Present perfect shifts to past perfect when the reporting verb is past. The correct option is B) He said that he had finished.. Why not the others: A) He said that he has finished.; C) He said that I have finished.; D) He told he finished. do not satisfy the condition asked in the stem."),
  Q("She said, “I saw him yesterday.” Yesterday becomes", ["today", "the previous day", "tomorrow", "now"], 1, "Yesterday shifts to the previous day. Why not the others: A) today; C) tomorrow; D) now do not satisfy the condition asked in the stem. Why not the others: A) today; C) tomorrow; D) now do not satisfy the condition asked in the stem."),
  Q("Mother said to me, “Do not waste time.” The indirect form uses", ["ordered me not to waste time", "said that do not waste time", "told that I waste time", "said me not waste"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). A negative order becomes not to plus the verb. Told or ordered needs the listener. The correct option is A) ordered me not to waste time."),
  Q("He asked, “Where do you live?” The indirect form is", ["He asked where I lived.", "He asked where do I live.", "He said where you live.", "He asked that where I live."], 0, "The question word stays, the word order becomes a statement, and the tense shifts. The correct option is A) He asked where I lived.. Why not the others: B) He asked where do I live.; C) He said where you live.; D) He asked that where I live. do not satisfy the condition asked in the stem."),
  Q("“This” in direct speech usually becomes", ["this", "that", "those", "here"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). This becomes that. Why not the others: A) this; C) those; D) here do not satisfy the condition asked in the stem.")
]);

more("Sentence rearrangement", [
  Q("Order: (1) a letter (2) wrote (3) She (4) yesterday", ["3-2-1-4", "3-1-2-4", "1-2-3-4", "4-3-2-1"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). She wrote a letter yesterday. The correct option is A) 3-2-1-4. Why not the others: B) 3-1-2-4; C) 1-2-3-4; D) 4-3-2-1 do not satisfy the condition asked in the stem."),
  Q("Which cannot open the paragraph?", ["However, the plan failed.", "The city opened a new park.", "Jaipur was founded in 1727.", "A new school started in May."], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). However points back to an earlier sentence. The correct option is A) However, the plan failed.. Why not the others: B) The city opened a new park.; C) Jaipur was founded in 1727.; D) A new school started in May. do not satisfy the condition asked in the stem."),
  Q("“The” comes", ["before a specified noun", "after the verb always", "only at the end", "instead of a verb"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The marks a particular noun. The correct option is A) before a specified noun. Why not the others: B) after the verb always; C) only at the end; D) instead of a verb do not satisfy the condition asked in the stem."),
  Q("Order: (1) market (2) to the (3) went (4) Riya", ["4-3-2-1", "4-2-3-1", "1-2-3-4", "3-4-2-1"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Riya went to the market. The correct option is A) 4-3-2-1. Why not the others: B) 4-2-3-1; C) 1-2-3-4; D) 3-4-2-1 do not satisfy the condition asked in the stem."),
  Q("A time phrase such as “in 1942” usually stands", ["at the end of a simple sentence", "before the article inside the noun", "instead of the subject", "between two articles"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). She joined the movement in 1942. The correct option is A) at the end of a simple sentence. Why not the others: B) before the article inside the noun; C) instead of the subject; D) between two articles do not satisfy the condition asked in the stem.")
]);

more("Polity and the Constitution", [
  Q("The Rajya Sabha is", ["dissolved every five years", "a permanent House", "elected for two years as a whole", "larger than the Lok Sabha"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). It is not dissolved. One-third of the members retire every second year. The correct option is B) a permanent House."),
  Q("Article 21 deals with", ["equality", "life and personal liberty", "freedom of trade only", "amendment"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Protection of life and personal liberty. Why not the others: A) equality; C) freedom of trade only; D) amendment do not satisfy the condition asked in the stem."),
  Q("The Election Commission is covered by", ["Article 324", "Article 356", "Article 110", "Article 32"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Article 324. Why not the others: B) Article 356; C) Article 110; D) Article 32 do not satisfy the condition asked in the stem."),
  Q("Who presides over the Lok Sabha?", ["The President", "The Speaker", "The Chief Justice", "The Prime Minister"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Speaker. Why not the others: A) The President; C) The Chief Justice; D) The Prime Minister do not satisfy the condition asked in the stem."),
  Q("The 42nd Constitutional Amendment is often called the", ["Mini Constitution", "Magna Carta", "Preamble", "Basic Structure case"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Because of the large number of changes it introduced. The correct option is A) Mini Constitution. Why not the others: B) Magna Carta; C) Preamble; D) Basic Structure case do not satisfy the condition asked in the stem."),
  Q("Directive Principles of State Policy are in", ["Part III", "Part IV", "Part V", "Part II"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Part IV of the Constitution. Why not the others: A) Part III; C) Part V; D) Part II do not satisfy the condition asked in the stem."),
  Q("The minimum age to become a member of the Lok Sabha is", ["21 years", "25 years", "30 years", "35 years"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Article 84: 25 years for the Lok Sabha. Why not the others: A) 21 years; C) 30 years; D) 35 years do not satisfy the condition asked in the stem.")
]);

more("Modern Indian history", [
  Q("The Indian National Congress was founded in", ["1885", "1857", "1905", "1920"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1885, with A. O. Hume among the founders. Why not the others: B) 1857; C) 1905; D) 1920 do not satisfy the condition asked in the stem."),
  Q("Jallianwala Bagh is associated with the year", ["1919", "1930", "1942", "1857"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 13 April 1919. Why not the others: B) 1930; C) 1942; D) 1857 do not satisfy the condition asked in the stem."),
  Q("The Battle of Buxar was fought in", ["1757", "1764", "1857", "1526"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1764. Why not the others: A) 1757; C) 1857; D) 1526 do not satisfy the condition asked in the stem. Why not the others: A) 1757; C) 1857; D) 1526 do not satisfy the condition asked in the stem."),
  Q("Non-Cooperation was launched in", ["1919", "1920", "1930", "1942"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1920. Why not the others: A) 1919; C) 1930; D) 1942 do not satisfy the condition asked in the stem. Why not the others: A) 1919; C) 1930; D) 1942 do not satisfy the condition asked in the stem."),
  Q("The Simon Commission arrived in India in", ["1928", "1930", "1919", "1942"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 1928. It was boycotted because it had no Indian member. Why not the others: B) 1930; C) 1919; D) 1942 do not satisfy the condition asked in the stem."),
  Q("The first session of the Indian National Congress was held at", ["Calcutta", "Bombay", "Madras", "Delhi"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Bombay, December 1885. Why not the others: A) Calcutta; C) Madras; D) Delhi do not satisfy the condition asked in the stem.")
]);

more("Geography", [
  Q("The longest peninsular river of India is the", ["Ganga", "Godavari", "Yamuna", "Kaveri"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Godavari. The Ganga is the longest river of India, which is a different fact. Why not the others: A) Ganga; C) Yamuna; D) Kaveri do not satisfy the condition asked in the stem."),
  Q("GMT + 5:30 is the offset of", ["Pakistan Standard Time", "Indian Standard Time", "Nepal Time", "Greenwich itself"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Indian Standard Time is 5 hours 30 minutes ahead of GMT. Why not the others: A) Pakistan Standard Time; C) Nepal Time; D) Greenwich itself do not satisfy the condition asked in the stem."),
  Q("Sri Lanka lies to the ____ of India.", ["north", "south", "west", "east only, with a land border"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Sri Lanka is to the south, across the sea. Why not the others: A) north; C) west; D) east only, with a land border do not satisfy the condition asked in the stem."),
  Q("The Equator passes through", ["India", "no part of India", "Delhi", "Srinagar"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Equator does not cross India. The Tropic of Cancer does. The correct option is B) no part of India. Why not the others: A) India; C) Delhi; D) Srinagar do not satisfy the condition asked in the stem."),
  Q("Kanchenjunga is treated in SSC answers as", ["a river", "a peak", "a dam", "a port"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). It is a Himalayan peak. The correct option is B) a peak. Why not the others: A) a river; C) a dam; D) a port do not satisfy the condition asked in the stem."),
  Q("The Thar Desert lies mainly in", ["Kerala", "Rajasthan", "Assam", "West Bengal"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Thar is largely in Rajasthan. Why not the others: A) Kerala; C) Assam; D) West Bengal do not satisfy the condition asked in the stem."),
  Q("The Palk Strait separates India from", ["Maldives", "Sri Lanka", "Indonesia", "Myanmar"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Palk Strait lies between Tamil Nadu and Sri Lanka. Why not the others: A) Maldives; C) Indonesia; D) Myanmar do not satisfy the condition asked in the stem.")
]);

more("General science", [
  Q("The SI unit of work is the", ["watt", "newton", "joule", "pascal"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Work and energy are measured in joules. Why not the others: A) watt; B) newton; D) pascal do not satisfy the condition asked in the stem."),
  Q("Night blindness is caused by deficiency of vitamin", ["A", "B", "C", "D"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Vitamin A. Why not the others: B) B; C) C; D) D do not satisfy the condition asked in the stem. Why not the others: B) B; C) C; D) D do not satisfy the condition asked in the stem."),
  Q("Goitre is linked with deficiency of", ["iron", "iodine", "calcium", "sodium"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Iodine. Why not the others: A) iron; C) calcium; D) sodium do not satisfy the condition asked in the stem."),
  Q("Platelets help in", ["carrying oxygen", "clotting", "fighting every virus by themselves only", "digestion"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Platelets help the blood clot. The correct option is B) clotting. Why not the others: A) carrying oxygen; C) fighting every virus by themselves only; D) digestion do not satisfy the condition asked in the stem."),
  Q("A solution of pH 8 is", ["acidic", "neutral", "basic", "a metal"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). pH above 7 is basic. Why not the others: A) acidic; B) neutral; D) a metal do not satisfy the condition asked in the stem.")
]);

more("Economy and schemes", [
  Q("The Finance Commission is provided under", ["Article 280", "Article 324", "Article 110", "Article 32"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Article 280. Why not the others: B) Article 324; C) Article 110; D) Article 32 do not satisfy the condition asked in the stem."),
  Q("GST is", ["a direct tax on income", "an indirect tax on supply", "a fee charged only by municipalities", "a customs duty on every book"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). GST is charged on supply and can be passed on. The correct option is B) an indirect tax on supply. Why not the others: A) a direct tax on income; C) a fee charged only by municipalities; D) a customs duty on every book do not satisfy the condition asked in the stem."),
  Q("The one-rupee note is issued by", ["the RBI", "the Government of India", "SEBI", "NITI Aayog"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Government of India issues the one-rupee note and the coins. Why not the others: A) the RBI; C) SEBI; D) NITI Aayog do not satisfy the condition asked in the stem."),
  Q("A Money Bill can be introduced in", ["the Rajya Sabha only", "the Lok Sabha only", "either House", "the Supreme Court"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Only in the Lok Sabha. Why not the others: A) the Rajya Sabha only; C) either House; D) the Supreme Court do not satisfy the condition asked in the stem."),
  Q("The central bank of India is", ["SBI", "NABARD", "the RBI", "SEBI"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Reserve Bank of India. The correct option is C) the RBI. Why not the others: A) SBI; B) NABARD; D) SEBI do not satisfy the condition asked in the stem.")
]);

more("Current affairs for this paper", [
  Q("PM DHARA includes battery storage of", ["50 GWh", "135 GWh", "5 GWh", "900 GWh"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The battery target is 50 GWh. The 135 figure is gigawatts of renewable energy to be evacuated. Why not the others: B) 135 GWh; C) 5 GWh; D) 900 GWh do not satisfy the condition asked in the stem."),
  Q("The Modi–Trump call of 30 September 2026 covered", ["trade, defence, energy and critical technologies", "only a cricket series", "moving the capital", "leaving the UN"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The official note lists those four areas of cooperation. The correct option is A) trade, defence, energy and critical technologies."),
  Q("Central financial support named with GEC-III is about", ["₹54,082 crore", "₹1,790 crore", "₹90 crore", "₹5 crore"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Cabinet note gives central financial support of ₹54,082 crore within the larger outlay. Why not the others: B) ₹1,790 crore; C) ₹90 crore; D) ₹5 crore do not satisfy the condition asked in the stem."),
  Q("The wider non-fossil capacity aim mentioned with this energy push, for 2035, is", ["50 GW", "135 GW", "900 GW", "5 GW"], 2, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 900 GW is the wider 2035 aim. It is not the corridor’s own evacuation target. Why not the others: A) 50 GW; B) 135 GW; D) 5 GW do not satisfy the condition asked in the stem."),
  Q("GEC-III strengthens", ["only Delhi roads", "the intra-state transmission system", "a new currency", "the census"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The scheme is for intra-state transmission and storage. The correct option is B) the intra-state transmission system.")
]);

more("Static GK for a last pass", [
  Q("Independence Day is on", ["26 January", "15 August", "2 October", "25 January"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 15 August. Why not the others: A) 26 January; C) 2 October; D) 25 January do not satisfy the condition asked in the stem."),
  Q("Gandhi Jayanti is on", ["2 October", "15 August", "26 January", "14 November"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). 2 October. Why not the others: B) 15 August; C) 26 January; D) 14 November do not satisfy the condition asked in the stem."),
  Q("The headquarters of the United Nations is in", ["Geneva", "New York", "Paris", "Vienna"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). New York. WHO is in Geneva. Why not the others: A) Geneva; C) Paris; D) Vienna do not satisfy the condition asked in the stem."),
  Q("Who wrote Jana Gana Mana?", ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Iqbal", "Nehru"], 1, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). Tagore. Bankim Chandra Chatterjee wrote Vande Mataram. The correct option is B) Rabindranath Tagore. Why not the others: A) Bankim Chandra Chatterjee; C) Iqbal; D) Nehru do not satisfy the condition asked in the stem."),
  Q("SEBI regulates", ["the securities market", "space launches", "district courts", "railway fares"], 0, "Seen in SSC CGL Tier-1 previous papers (PYQ pattern). The Securities and Exchange Board of India. Why not the others: B) space launches; C) district courts; D) railway fares do not satisfy the condition asked in the stem.")
]);

