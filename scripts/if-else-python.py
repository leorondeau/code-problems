#Task
# Given an integer, , perform the following conditional actions:

# If  is odd, print Weird
# If  is even and in the inclusive range of  to , print Not Weird
# If  is even and in the inclusive range of  to , print Weird
# If  is even and greater than , print Not Weird


if __name__ == '__main__':
    n = int(input().strip())
    if n%2!=0:
        print("Weird")
    elif 2<=n<5:
        print("Not weird")
    elif 6<n<10:
        print("Weird")
    elif n>20:
        print("Not Weird")
        