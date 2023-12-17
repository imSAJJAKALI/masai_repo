# Global variables
stock = {
    'beverages': {'tea': 10, 'coffee': 15},
    'snacks': {'samosa': 20, 'sandwich': 25},
    'desserts': {'ice_cream': 30, 'pastry': 35}
}

sales_data = []

# Function to display the main menu
def display_menu(role):
    print("\nMumbai Munchies Plus")
    print("1. View Menu")
    if role == 'admin':
        print("2. Add Item to Stock")
        print("3. Remove Item from Stock")
    if role == 'cashier':
        print("4. Generate Sales Report")
    print("0. Exit")

# Function to view the menu
def view_menu():
    print("\nMenu:")
    for category, items in stock.items():
        print(f"{category.capitalize()} Menu:")
        for item, price in items.items():
            print(f"{item}: {price} INR")
        print()

# Function to add an item to stock
def add_item():
    category = input("Enter the category (e.g., beverages, snacks, desserts): ").lower()
    item_name = input("Enter the item name: ")
    price = float(input("Enter the price: "))
    
    if category in stock:
        stock[category][item_name] = price
        print(f"{item_name} added to {category} menu.")
    else:
        print("Invalid category.")

# Function to remove an item from stock
def remove_item():
    category = input("Enter the category (e.g., beverages, snacks, desserts): ").lower()
    item_name = input("Enter the item name to remove: ")
    
    if category in stock and item_name in stock[category]:
        del stock[category][item_name]
        print(f"{item_name} removed from {category} menu.")
    else:
        print("Item not found.")

# Function to generate a sales report
def generate_report():
    print("\nSales Report:")
    for sale in sales_data:
        print(f"Date: {sale[0]}, Category: {sale[1]}, Item: {sale[2]}, Price: {sale[3]} INR")

# Main loop
while True:
    role = input("Enter your role (admin/cashier): ").lower()
    if role not in ['admin', 'cashier']:
        print("Invalid role. Exiting.")
        break

    while True:
        display_menu(role)
        choice = input("Enter your choice: ")
        if choice == '1':
            view_menu()
        elif choice == '2' and role == 'admin':
            add_item()
        elif choice == '3' and role == 'admin':
            remove_item()
        elif choice == '4' and role == 'cashier':
            generate_report()
        elif choice == '0':
            break
        else:
            print("Invalid choice. Try again.")