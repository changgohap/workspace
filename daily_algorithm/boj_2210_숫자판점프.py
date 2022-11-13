# 창근

import sys
sys.setrecursionlimit(10000)


def jump(array, idx1, idx2, cnt, num):
    if len(num) == 6:
        if num not in check:
            cnt += 1
            check.append(num)

    num.append(array[idx1][idx2])

    for direct in range(4):
        idx1 += dx[direct]
        idx2 += dy[direct]

    if 0 <= idx1 < 4 and 0 <= idx2 < 4:
        jump(array, idx1, idx2, cnt, num)


dx = [1, 0, -1, 0]
dy = [0, 1 ,0, -1]


arr = [list(map(int, input().split())) for _ in range(5)]
# print(arr)

numbers = []
check = []
count = 0
for i in range(5):
    for j in range(5):
        check.append(jump(arr, i, j, count, numbers))

print(len(check))