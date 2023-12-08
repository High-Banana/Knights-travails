const knightPosition = (intialPosition, finalPosition) => {
  const KNIGHT_DIRECTION = [
    [2, -1],
    [2, 1],
    [-2, -1],
    [-2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
  ];

  const queue = [[intialPosition]];
  const visitedCoordinate = [[...intialPosition]];

  while (queue.length) {
    const path = queue.shift();

    const currentPosition = path[path.length - 1];

    if (currentPosition[0] === finalPosition[0] && currentPosition[1] === finalPosition[1]) return path;

    for (const direction of KNIGHT_DIRECTION) {
      const nextPosition = [currentPosition[0] + direction[0], currentPosition[1] + direction[1]];

      if (
        nextPosition[0] >= 0 &&
        nextPosition[0] < 8 &&
        nextPosition[1] >= 0 &&
        nextPosition[1] < 8 &&
        nextPosition !== visitedCoordinate
      ) {
        queue.push([...path, nextPosition]);
        visitedCoordinate.push(nextPosition);
      }
    }
  }
};

function printPathArray(path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

  path.forEach((array) => {
    console.log(array);
  });
}

printPathArray(knightPosition([3, 3], [4, 3]));
