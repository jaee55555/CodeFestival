#크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다.
#그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다ㅏ.
#온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다.
#하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.

n = int(input())
# n = 5
for i in range(n):
    half = n - i
    print(" " * half, end="")
    print("*" * (i * 2 + 1))