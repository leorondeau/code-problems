def countingValleys(n, s):
    sealevel = 0
    valley = 0

    for step in s:
        if step == "U":
            sealevel += 1
        else:
            sealevel -= 1

        if step == "D" and sealevel == 0:
            valley +=1
    return valley

step_list = ["U","D","D","D","U","D","U","U"]
print(countingValleys(8, step_list)) 