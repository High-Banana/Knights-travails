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
      if (currentCoordinate[0] === finalPosition[0] && currentCoordinate[1] === finalPosition[1]) return moves;

      for (const offset of KNIGHT_OFFSETS) {
        const newX = currentCoordinate[0] + offset[0];
        const newY = currentCoordinate[1] + offset[1];
        let string = `${newX}, ${newY}`;

        if (isValid() && !visitedCoordinate.has(string));
        {
          visitedCoordinate.add(string);
          next.push([newX, newY]);
        }
      }
    }
    queue = next;
    moves++;
  }
};

function isValid(x, y) {
  if (x > 0 && x < 8 && y > 0 && y < 8) return true;
  else false;
}

console.log(knightPosition([3, 3], [4, 3]));
