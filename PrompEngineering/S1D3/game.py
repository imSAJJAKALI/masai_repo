import random

def getUserChoice():
    while True:
        useChoice=input("Enter your choice (rock,paper,scissor) or quite to exist").lower()
        if useChoice in ["rock","paper","scissor","quite"]:
            return useChoice
        else: 
            print("Invalid Choice plz select correct option...")
        
        
def getComputerChoice():
    return random.choice(['rock','paper','scissor'])

def getwinner(userChoice,computerChoice):
    if userChoice == computerChoice:
        return "Draw"
    elif userChoice=="rock":
        return "user" if computerChoice=="scissor" else "computer"
    elif userChoice=="scissor":
         return "user" if computerChoice=="paper" else "computer"
    elif userChoice=="paper":
         return "user" if computerChoice=="rock" else "computer"
        
def displayScore(user,computer,draw):
    print(f"use win : {user} | computer win : {computer} | draw : {draw}")     
    
def main():
    user=0
    computer=0
    draw=0
    
    print("welcome sajju game")
    while True: 
        userChoice=getUserChoice()
        if userChoice=="quite":
            print("Thanks for Playing ")
            print(f"final score : ")
            displayScore(user,computer,draw)
            break
        computerChoice=getComputerChoice()
        print(f"Computer chooses {computerChoice.capitalize()}")
        winner=getwinner(userChoice,computerChoice)
        if winner=='user':
            user+=1
            print("you win")
        elif winner=="computer":
            computer+=1
            print("computer win")
        else:
            draw+=1
            print("draw")
        displayScore(user,computer,draw)
if __name__ == "__main__":
  main()
        
        