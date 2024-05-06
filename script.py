# This function adds two numbers
def add (x,y):
    return 
# This function subtracts two numbers
def subtract (x,y):
    return 
# This function multiplies two numbers
def multiply (x,y):
    return x * y
# This function divides two numbers
def divide (x,y):
    return x / y

print("Select any operation.")
print("1.Add")
print("2.Subtract") 
print("3.Multiply")
print("4.Divide")

while True:
   # take input from the user
   choice = input("Enter choice(1/2/3/4):")
   # check if choice is one of the four options
   if choice in ('1','2','3','4'):
    try:
      num1 = float(input("Enter first number:"))
      num2 = float(input("Enter second number:")) 
    except ValueError:
      print("Invalid put, please enter a number you dumbass.")
      continue
    if choice == '1':
       print("I don't know how to add.")
    elif choice == '2':
       print("I've never been to school, actually.")
    elif choice == '3':
       print("Now you're getting on my nerves.")
    elif choice == '4':
       print("Stop playing with me just use a calculator.")

    # check if user wants another calculation
    # stop the loop if answer is no
    next_calculation = input ("Do you want me to do another one?")
    if next_calculation == "no":
      break
else:
    print("Ok, goodbye bully.") 
