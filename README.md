# Unhandled Operators in TypeScript Calculator Function

This repository demonstrates a common error in TypeScript: incomplete handling of all possible cases within a switch statement. The `operate` function is intended to perform basic arithmetic operations (+, -, *, /), but it lacks handling for other operators like the modulo operator ("% "). This results in an error if the user tries to use an unhandled operator.

The `bug.ts` file contains the original buggy code. The `bugSolution.ts` demonstrates a solution using a more comprehensive approach.