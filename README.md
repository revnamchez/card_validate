# Regex Pattern Description
### The regex pattern used is: ^4[0-9]{12}(?:[0-9]{3})?$. 

- ^4: Ensures the number starts with 4, which is the unique identifier for all Visa cards.
- [0-9]{12}: Matches the next 12 digits (ensuring at least 13 digits total).
- (?:[0-9]{3})?: A non-capturing group that matches exactly 3 additional digits. The ? makes this group optional, allowing the pattern to accept either 13 or 16 digits.
- $: Marks the end of the string, ensuring no extra characters follow the
