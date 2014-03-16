# alien-language-kata

Alien language coding challenge.

## Instructions

After years of study, people of earth have discovered an alien language transmitted from a faraway planet. The alien language is very unique in that every word consists of exactly _L_ lowercase letters. Also, there are exactly _D_ words in this language.

Once the dictionary of all the words in the alien language was built, the next breakthrough was to discover that the aliens have been transmitting messages to Earth for the past decade. Unfortunately, these signals are weakened due to the distance between our two planets and some of the words may be misinterpreted. In order to help them decipher these messages, the scientists have asked you to devise an algorithm that will determine the number of possible interpretations for a given pattern.

A pattern consists of exactly _L_ tokens. Each token is either a single lowercase letter (the scientists are very sure that this is the letter) or a group of unique lowercase letters surrounded by parenthesis `(` and `)`. For example: `(ab)d(dc)` means the first letter is either `a` or `b`, the second letter is definitely `d` and the last letter is either `d` or `c`. 

Therefore, the pattern `(ab)d(dc)` can stand for either one of these 4 possibilities: `add`, `adc`, `bdd`, `bdc`.

### Input

The first line of input contains 3 integers, _L_, _D_ and _N_ separated by a space. _D_ lines follow, each containing one word of length _L_. These are the words that are known to exist in the alien language. _N_ test cases then follow, each on its own line and each consisting of a pattern as described above. You may assume that all known words provided are unique.

### Output

For each test case, output

```
Case #X: K
```

where _X_ is the test case number, starting from 1, and _K_ indicates how many words in the alien language match the pattern.

###Limits

 * 1 ≤ L ≤ 10
 * 1 ≤ D ≤ 25
 * 1 ≤ N ≤ 10

### Example 

#### Input

```
3 5 4
abc
bca
dac
dbc
cba
(ab)(bc)(ca)
abc
(abc)(abc)(abc)
(zyx)bc
```

#### Output

```
Case #1: 2
Case #2: 1
Case #3: 3
Case #4: 0
```
## Data input

```
3 5 5
abc
aca
dac
dbc
ccd
abc
a(bc)(ca)
(abc)(abc)(abc)
d(azy)c
(abc)c(cd)
```