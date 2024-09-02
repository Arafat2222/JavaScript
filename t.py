try:
    my_numbers = [1, 2, 3]
    print(my_numbers[10])  # Accessing an out-of-bounds index
except Exception as e:
    print("Something went wrong:", e)