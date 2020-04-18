import { useState, useCallback, useRef, useEffect } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const prevState = useRef()

  useEffect(() => {
    prevState.current = player
  })

  function rotate(matrix, dir) {
    // turn rows to collumns
    const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
    // Reverse each row to get a rotaded matrix
    if (dir > 0) return mtrx.map(row => row.reverse());
    return mtrx.reverse();
  }

  function playerRotate(stage, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }

  useEffect(() => {
    console.log(player, 'PLAYER')
  }, [player])

  const updatePlayerPos = useCallback(({ x, y, collided }) => {
    console.log(prevState.current, 'CURRENT')
    const Obj = { ...prevState.current }
    Obj.pos.y += y
    Obj.pos.x += x
    Obj.collided = collided
    console.log(Obj, 'OBJ')
    setPlayer(Obj)
    // setPlayer(prev => {
    //   // console.log(prev.pos.y, 'PREV Y')
    //   return {
    //     ...prev,
    //     pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
    //     collided,
    //   }
    // });
  }, []);

  const resetPlayer = useCallback(() => {
    // console.log('RESET PLAYER')
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};