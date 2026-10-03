window.CGL_NOTES[5].push(
  {
    title: "Mirror image, water image, and counting figures",
    body: [
      "SSC CGL reasoning includes a mirror image, a water image, and often a counting-figures item. A mirror kept on the right reverses left and right. A water image, as if the figure stands on a still lake, reverses top and bottom. Letters and numbers are tested the same way.",
      "Counting figures asks how many triangles, squares, or straight lines are in a drawing. Count the smallest shapes first, then the ones made by joining them, and do not count the same shape twice."
    ],
    formulas: [
      "Mirror on the right: left and right swap. Top and bottom stay.",
      "Water image: top and bottom swap. Left and right stay.",
      "A triangle divided by joining a point inside to the three vertices makes 3 small triangles, and the outer one is not extra if you already counted only the small ones. Count every closed triangle.",
      "Number of squares in an n×n grid is 1² + 2² + … + n²."
    ],
    examples: [
      {
        prompt: "How many squares are in a 2×2 grid of equal squares?",
        work: "Four small squares, plus one square made by all four together.",
        answer: "<strong>5 squares.</strong>"
      }
    ]
  },
  {
    title: "Dice and ranking",
    body: [
      "A standard dice question shows two or three views. Opposite faces add to 7 on a normal dice: 1 opposite 6, 2 opposite 5, 3 opposite 4. If two views share two faces, the remaining faces are fixed by the rotation.",
      "Ranking: if a person is 8th from the left and 5th from the right, the row has 8 + 5 − 1 = 12 people. The −1 stops the person being counted twice."
    ],
    formulas: [
      "Normal dice: opposite faces sum to 7.",
      "Total in a row = rank from left + rank from right − 1.",
      "Rank from the other end = total − rank from this end + 1."
    ],
    examples: [
      {
        prompt: "Ravi is 8th from the left and 5th from the right. How many people are in the row?",
        work: "8 + 5 − 1 = 12. He is counted in both ranks, so subtract 1.",
        answer: "<strong>12.</strong>"
      }
    ]
  }
);
