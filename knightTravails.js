const knightPosition = (intialPosition, finalPosition) => {
  const KNIGHT_OFFSETS = [
    [2, -1],
    [2, 1],
    [-2, -1],
    [-2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
  ];

  const visitedCoordinate = new Set();
  let queue = [intialPosition];
  let moves = 0;

  while (queue.length) {
    const next = [];
    while (queue.length) {
      const currentCoordinate = queue.shift();
      const currentX = currentCoordinate[0];
      const currentY = currentCoordinate[1];
      if (currentX === finalPosition[0] && currentY === finalPosition[1]) return moves;

      for (const offset of KNIGHT_OFFSETS) {
        const nextX = currentX + offset[0];
        const nextY = currentY + offset[1];
        let string = `${nextX}, ${nextY}`;

        if (isValid(nextX, nextY) && !visitedCoordinate.has(string)) {
          visitedCoordinate.add(string);
          next.push([nextX, nextY]);
        }
      }
    }
    queue = next;
    moves++;
  }
};

function isValid(x, y) {
  if (x >= 0 && x < 8 && y >= 0 && y < 8) return true;
  else false;
}

console.log(knightPosition([3, 3], [4, 3]));
