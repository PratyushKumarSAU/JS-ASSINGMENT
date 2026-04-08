# JS-Assignment

## Question 1: Digit Gatekeeper (`digit_gatekeeper.js`)
**Approach:** `for` loop for iterating numbers from `L` up to `R`. For every number check if it divides by `K` agar karta h, then change it into a string to check if there is a '0' in it. If no zeros, loop through the string and add all the digits.Put sum into a function described to check if it is a prime number. If yes then increment counter.

**Time Complexity:** **O(DIFF * NOD)**, where `DIFF` is difference between `R` and `L`, and `NOD` is number of digits in the number.

## Question 2: Roll-Seed Lock (`roll-seed_lock.js`)
**Approach:** `for` loop that runs exactly 3 times. In the loop, check if `N` even or odd, and then use the math formula given in question accordingly. After the loop finishes all 3 steps, check if the final number is exactly 3 digits long (bw 100 and 999). To check the middle digit for seed turn the number into a str and check the index 1. If yes, alert "YES", else alert "NO".

**Time Complexity:** **O(1)**. The loop runs exactly 3 times regardless of the input size.

## Question 3: Mirror Corridor (`mirror_corridor.js`)
**Approach:** `for` loop to test every number for `X` from 0 to 100,000(given in question its too much agar mujse pucho). check if `(N + X)` divides by `K` remainder 0. If yes, convert number into string to check if it is a palindrome. I use true/false `flag` variable to remember if the letters matched. if it is a valid palindrome, update `X` and use `break` to stop the loop immediately to get the smallest possible answer.

**Time Complexity:** **O(Max * NOD)**, where `Max` is the maximum value checked for `X` and `NOD` is the number of digits in `(N + X)`. 

## Question 4: Fare Calculator (`fare_calculator.js`)
**Approach:** check conditions using `if` statements.For final answer round up to the nearest 5, divide  fare by 5, use `Math.ceil()` to round the decimal up, and multiplied by 5 again.

**Time Complexity:** **O(1)**. The script consists entirely of fixed mathematical operations and sequential conditional checks.

## Question 5: Skipping Numbers (`skipping_numbers.js`)
**Approach:** `while` loop ; until sum = `N`. Inside the loop, `m`++.  If `m` is not a multiple of `(seed + 2)`, sum=sum+`m`. Once the total sum is equal to or greater than `N`, the `while` loop stops on its own alert the results.

**Time Complexity:** **O(√N)**. Because when accumulating a sum, the sum reaches `N` in `√2N` steps.

## Question 6: Contest Score Judge (`contest_score_judge.js`)
**Approach:** `if` statements to change the score = 0 if score<0 negative, and minus 10 if a+b+c>50. At the very end, an `if/else` statement checks if the score>=60 to decide if the output "PASS" or "FAIL".

**Time Complexity:** **O(1)**. fixed set of constant-time conditions aka ek hi baar run krega.