# B. F-score
- time limit per test: 1.0 s
- memory limit per test: 256 MB
- input: standard input
- output: standard output

In an experiment on classifying `K` classes, a confusion matrix `CM` was obtained, where `CM[c,t]` is the number of objects of class `c` that were classified as `t`. Using this confusion matrix, calculate the macro and micro F-measures weighted averaged over the classes.

## Input
The first line contains an integer `K` — the number of classes (`1≤K≤20`). Next comes the K lines — a description of the confusion matrix. Each row of `c` contains `K` integers — the `c`-th row of the confusion matrix. `∀c,t:0≤CM[c,t]≤100 and ∃c,t:CM[c,t]≥1`.

## Output
Print two real floating-point numbers — a weighted average averaged over the classes of macro and micro F-measure. The absolute error of the answer should not exceed `10^−6`.

## Examples
- input 1
    ```
    2
    0 1
    1 3
    ```
- output 1
    ```
    0.6
    0.6
    ```
- input 2
    ```
    3
    3 1 1
    3 1 1
    1 3 1
    ```
- output 2
    ```
    0.326860841
    0.316666667
    ```

## Note
In the first example, classes are distributed as 1:4. Precision, recall, and the F-measure of the first class are 0, and the second is 0.75. Moreover, the average accuracy, completeness and F-measure are 0.6.