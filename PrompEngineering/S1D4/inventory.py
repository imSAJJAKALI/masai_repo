snack_inventory = {}
sales_inventory = {}

def add_snack():
    snack_id = input("Enter Snack ID: ")
    snack_name = input("Enter Snack Name: ")
    snack_price = float(input("Enter Snack Price: "))
    available = input("Is it available (yes or no): ").lower()

    snack_inventory[snack_id] = {
        "name": snack_name,
        "price": snack_price,
        "available": available
    }
    print(f"{snack_name} has been added to the inventory.")

def remove_snack():
    snack_id = input("Enter Snack ID to remove: ")
    if snack_id in snack_inventory:
        del snack_inventory[snack_id]
        print("Snack removed from inventory.")
    else:
        print("Snack not found in inventory.")

def update_availability():
    snack_id = input("Enter Snack ID to update availability: ")
    if snack_id in snack_inventory:
        available = input("Is it available now (yes or no): ").lower()
        snack_inventory[snack_id]["available"] = available
        print("Availability updated.")
    else:
        print("Snack not found in inventory.")

def make_sale():
    snack_id = input("Enter Snack ID sold: ")
    if snack_id in snack_inventory:
        if snack_inventory[snack_id]["available"] == "yes":
            try:
                quantity = int(input(f"Enter quantity of {snack_inventory[snack_id]['name']} sold: "))
                total_price = snack_inventory[snack_id]["price"] * quantity
                print(f"Total price: {total_price}")

                if snack_id in sales_inventory:
                    sales_inventory[snack_id]["quantity"] += quantity
                    sales_inventory[snack_id]["total_sales"] += total_price
                else:
                    sales_inventory[snack_id] = {
                        "name": snack_inventory[snack_id]["name"],
                        "quantity": quantity,
                        "total_sales": total_price
                    }

                print("Sale recorded.")
            except ValueError:
                print("Invalid quantity. Please enter a valid number.")
        else:
            print("Sorry, this snack is not available.")
    else:
        print("Snack not found in inventory.")

def display_inventory():
    print("\nCurrent Snack Inventory:")
    for snack_id, snack_info in snack_inventory.items():
        print(f"ID: {snack_id}, Name: {snack_info['name']}, Price: {snack_info['price']}, Available: {snack_info['available']}")



while True:
    print("\nMumbai Munchies Canteen Management System")
    print("1. Add Snack to Inventory")
    print("2. Remove Snack from Inventory")
    print("3. Update Snack Availability")
    print("4. Make a Sale")
    print("5. Display Snack Inventory")
    print("6. Display Sales Snack")
    
    print("7. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        add_snack()
    elif choice == "2":
        remove_snack()
    elif choice == "3":
        update_availability()
    elif choice == "4":
        make_sale()
    elif choice == "5":
        display_inventory()
    elif choice=="6":
        print(sales_inventory)
    elif choice == "7":
        break
    else:
        print("Invalid choice. Please choose a valid option.")
