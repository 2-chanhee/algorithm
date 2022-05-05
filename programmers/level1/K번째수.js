function solution(array, commands) {
  var answer = [];

  /** 방법 1 */
  commands.foreach((each) => {
    answer.push(array.slice(each[0] - 1, each[1]).sort()[each[2] - 1]);
  });

  return answer;
  /**  */

  /** 방법 2 */
  for (let i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return answer;
  /**  */

  /** 방법 3 */
  return commands.map((command) => {
    return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
      command[2] - 1
    ];
  });
  /**  */
}
