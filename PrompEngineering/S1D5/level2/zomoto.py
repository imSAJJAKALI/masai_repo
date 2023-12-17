import json
menu={}

menu_file_path="menu.json"

# Initialize menu and orders as empty lists
menu = []
orders = []

# Load menu and orders data from files (if available)
try:
    with open("menu.json", "r") as menu_file:
        menu = json.load(menu_file)
except FileNotFoundError:
    menu = []

try:
    with open("orders.json", "r") as orders_file:
        orders = json.load(orders_file)
except FileNotFoundError:
    orders = []

# Function to display the menu
def display_menu():
    print("----- Menu -----")
    for dish in menu:
        print(f"{dish['dish_id']}: {dish['dish_name']} - Price: {dish['price']} - Available: {dish['availability']}")
    print("----------------")

# Function to add a new dish to the menu
def add_dish():
    dish_id = input("Enter Dish ID: ")
    dish_name = input("Enter Dish Name: ")
    price = float(input("Enter Price: "))
    availability = input("Is it available? (yes/no): ").lower()

    dish = {
        "dish_id": dish_id,
        "dish_name": dish_name,
        "price": price,
        "availability": availability == "yes"
    }

    menu.append(dish)
    save_menu()

    print(f"{dish_name} has been added to the menu.")

# Function to remove a dish from the menu
def remove_dish():
    display_menu()
    dish_id = input("Enter Dish ID to remove: ")

    for dish in menu:
        if dish["dish_id"] == dish_id:
            menu.remove(dish)
            save_menu()
            print(f"{dish['dish_name']} has been removed from the menu.")
            return

    print("Dish not found in the menu.")

# Function to update the availability of a dish
def update_availability():
    display_menu()
    dish_id = input("Enter Dish ID to update availability: ")
    availability = input("Is it available now? (yes/no): ").lower()

    for dish in menu:
        if dish["dish_id"] == dish_id:
            dish["availability"] = availability == "yes"
            save_menu()
            print(f"Availability of {dish['dish_name']} updated.")
            return

    print("Dish not found in the menu.")

# Function to take a new order
def take_order():
    display_menu()
    customer_name = input("Enter Customer Name: ")
    order_items = input("Enter Dish IDs (comma-separated): ").split(",")
    order_items = [item.strip() for item in order_items]

    order = {
        "order_id": len(orders) + 1,
        "customer_name": customer_name,
        "order_items": order_items,
        "status": "received"
    }

    for item in order_items:
        for dish in menu:
            if dish["dish_id"] == item and dish["availability"] is False:
                print(f"{dish['dish_name']} is not available. Order cannot be placed.")
                return

    orders.append(order)
    save_orders()

    print(f"Order for {customer_name} has been placed with Order ID: {order['order_id']}.")

# Function to update the status of an order
def update_order_status():
    order_id = int(input("Enter Order ID to update status: "))
    new_status = input("Enter New Status: ")

    for order in orders:
        if order["order_id"] == order_id:
            order["status"] = new_status
            save_orders()
            print(f"Status of Order ID {order_id} updated to {new_status}.")
            return

    print("Order not found with the specified Order ID.")

# Function to save the menu data to a file
def save_menu():
    with open("menu.json", "w") as menu_file:
        json.dump(menu, menu_file, indent=2)

# Function to save the orders data to a file
def save_orders():
    with open("orders.json", "w") as orders_file:
        json.dump(orders, orders_file, indent=2)

# Main loop for the program
while True:
    print("\nZesty Zomato - Food Delivery System")
    print("1. Display Menu")
    print("2. Add Dish to Menu")
    print("3. Remove Dish from Menu")
    print("4. Update Dish Availability")
    print("5. Take New Order")
    print("6. Update Order Status")
    print("7. Exit")
    
    choice = input("Enter your choice: ")

    if choice == "1":
        display_menu()
    elif choice == "2":
        add_dish()
    elif choice == "3":
        remove_dish()
    elif choice == "4":
        update_availability()
    elif choice == "5":
        take_order()
    elif choice == "6":
        update_order_status()
    elif choice == "7":
        print("Exiting Zesty Zomato - Food Delivery System. Have a great day!")
        break
    else:
        print("Invalid choice. Please try again.")

