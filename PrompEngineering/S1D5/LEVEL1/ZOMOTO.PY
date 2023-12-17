import os
import json

# Define global variables
menu = []
orders = []
order_id_counter = 1

# Function to display the menu
def display_menu():
    print("\nMenu:")
    for dish in menu:
        print(f"{dish['id']}. {dish['name']} - Rs. {dish['price']} ({'Available' if dish['available'] else 'Not Available'})")

# Function to add a new dish to the menu
def add_dish():
    dish_id = len(menu) + 1
    dish_name = input("Enter the name of the new dish: ")
    dish_price = float(input("Enter the price of the dish: "))
    available = input("Is the dish available? (yes/no): ").lower() == "yes"

    menu.append({
        "id": dish_id,
        "name": dish_name,
        "price": dish_price,
        "available": available
    })
    print(f"{dish_name} has been added to the menu.")

# Function to remove a dish from the menu
def remove_dish():
    display_menu()
    dish_id = int(input("Enter the ID of the dish to remove: "))
    for dish in menu:
        if dish['id'] == dish_id:
            menu.remove(dish)
            print(f"Dish {dish['name']} has been removed from the menu.")
            return
    print("Invalid dish ID. No dish removed.")

# Function to update dish availability
def update_dish_availability():
    display_menu()
    dish_id = int(input("Enter the ID of the dish to update availability: "))
    for dish in menu:
        if dish['id'] == dish_id:
            dish['available'] = not dish['available']
            print(f"Availability of {dish['name']} has been updated to {'Available' if dish['available'] else 'Not Available'}.")
            return
    print("Invalid dish ID. No availability updated.")

# Function to take a new order
def take_order():
    display_menu()
    customer_name = input("Enter the customer's name: ")
    order_items = input("Enter dish IDs (comma-separated) for the order: ").split(',')
    order_items = [int(item) for item in order_items]

    for item in order_items:
        dish = next((d for d in menu if d['id'] == item), None)
        if not dish or not dish['available']:
            print(f"Dish with ID {item} is either unavailable or doesn't exist.")
            return

    order_id = order_id_counter
    order_id_counter += 1
    order = {
        "id": order_id,
        "customer_name": customer_name,
        "items": order_items,
        "status": "received"
    }
    orders.append(order)
    print(f"Order for {customer_name} has been placed with order ID: {order_id}.")

# Function to update order status
def update_order_status():
    order_id = int(input("Enter the order ID to update status: "))
    for order in orders:
        if order['id'] == order_id:
            print(f"Current status of order ID {order_id}: {order['status']}")
            new_status = input("Enter the new status (preparing/ready for pickup/delivered): ")
            order['status'] = new_status
            print(f"Status of order ID {order_id} has been updated to {new_status}.")
            return
    print("Invalid order ID. No status updated.")

# Function to review all orders
def review_orders():
    print("\nOrders:")
    for order in orders:
        print(f"Order ID: {order['id']}, Customer: {order['customer_name']}, Status: {order['status']}, Items: {', '.join([dish['name'] for dish in menu if dish['id'] in order['items']])}")

# Function to save menu and order data to a file
def save_data():
    with open("zomato_data.json", "w") as file:
        data = {
            "menu": menu,
            "orders": orders
        }
        json.dump(data, file)

# Function to load menu and order data from a file
def load_data():
    global menu, orders
    if os.path.exists("zomato_data.json"):
        with open("zomato_data.json", "r") as file:
            data = json.load(file)
            menu = data["menu"]
            orders = data["orders"]

# Main program loop
if __name__ == "__main__":
    load_data()
    
    while True:
        print("\nZesty Zomato - Food Delivery System")
        print("1. Display Menu")
        print("2. Add Dish to Menu")
        print("3. Remove Dish from Menu")
        print("4. Update Dish Availability")
        print("5. Take New Order")
        print("6. Update Order Status")
        print("7. Review Orders")
        print("8. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            display_menu()
        elif choice == "2":
            add_dish()
        elif choice == "3":
            remove_dish()
        elif choice == "4":
            update_dish_availability()
        elif choice == "5":
            take_order()
        elif choice == "6":
            update_order_status()
        elif choice == "7":
            review_orders()
        elif choice == "8":
            save_data()
            print("Exiting Zesty Zomato. Have a great day!")
            break
        else:
            print("Invalid choice. Please select a valid option.")
