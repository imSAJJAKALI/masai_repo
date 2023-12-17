# print("Hello World!")

# my_integer=20;
# my_float=2.55;
# my_String="masai school";
# my_boolean=True;

# my_list=[1,2,3,4,6];
# my_tuple=(20,30,50);
# my_dict={"name":"masai school"}

# print(f"Integer: {my_integer} Type: {type(my_integer)}")

arr=[1,23, 2,66, 3, 4, 5, 6, 7, 8, 9, 10, 20]
# add new number

arr.append(25)
arr.append(30)
arr.remove(20)

arr.sort(reverse=True)

print(arr)

# sum and average

sum=0
for i in range (len(arr)):
    sum+=arr[i]
    
    total=len(arr)
    print(sum/total)