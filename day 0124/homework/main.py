def remove_smallest(numbers):
    if not numbers:
        return []
    
    min_value = min(numbers)
    index_to_remove = numbers.index(min_value)
    
    return numbers[:index_to_remove] + numbers[index_to_remove + 1:]