---
title: Floating-Point Representation
---

In computer science, floating-point numbers are used to represent real numbers that require a wide range of values and precision. Unlike fixed-point representations, floating-point numbers use a scientific notation-like approach to encode values. This allows them to represent very large or very small numbers efficiently.

## IEEE 754 Double Precision Format

The IEEE 754 standard defines how floating-point numbers are represented in binary. The double precision format uses 64 bits and is divided into three main components:

1. **Sign Bit (s)**
2. **Exponent (e)**
3. **Fraction (f)**

### 1. Sign Bit (1 bit)

- The sign bit determines whether the number is positive or negative.
- `0` indicates a positive number.
- `1` indicates a negative number.

### 2. Exponent (11 bits)

- The exponent determines the range of the number by specifying the power of 2 by which the fraction is multiplied.
- In IEEE 754 double precision, 11 bits are used for the exponent.
- The exponent value is stored with a **bias**. For double precision, the bias is 1023. This means the actual exponent value is calculated by subtracting the bias from the stored exponent value.

  **Exponent Value Calculation:**

  - If the stored exponent value is `e`, the actual exponent used in the calculation is \(e - 1023\).

  This allows the representation of both very large and very small numbers, including fractions between 0 and 1.

### 3. Fraction (52 bits)

- The fraction, or significand, represents the precision of the number.
- It encodes the digits of the number in binary.
- The fraction is assumed to have a leading 1 (known as the implicit leading bit) before the binary point. Because this leading 1 is always present, it is not stored explicitly, thus saving space.

## Putting It All Together

The floating-point number is represented as:

$$\text{Value} = (-1)^s \times 1.f \times 2^{(e - \text{bias})}$$

Where:

- \(s\) is the sign bit.
- \(f\) is the fraction, interpreted as a binary fraction starting with an implicit leading 1.
- \(e\) is the exponent.

### Example

Let’s say we have a floating-point number with the following parts:

- **Sign Bit (s):** 0 (positive)
- **Exponent (e):** 10000000001 (binary), which is 1025 in decimal. Subtracting the bias of 1023 gives an exponent of 2.
- **Fraction (f):** 0100000000000000000000000000000000000000000000000000 (binary)

To compute the number:

1. **Convert the fraction:**

   - The binary fraction `1.010000...` has an implicit leading `1`.
   - In decimal, this binary fraction represents approximately 1.25.

2. **Apply the exponent:**
   - The exponent is \(2\), so we compute:
     $$
     1.25 \times 2^2 = 1.25 \times 4 = 5.0
     $$

So, the floating-point representation would be approximately 5.0.

## Summary

- **Sign Bit:** Indicates the sign of the number.
- **Exponent:** Determines the range and is adjusted by a bias (1023 for double precision) to accommodate both large and small numbers.
- **Fraction:** Represents the precision and is assumed to have an implicit leading 1.

This representation allows for a wide range of values and precision but does have limitations, such as precision loss in very small or very large numbers due to the finite number of bits available.

```matlab
% Script: calculate_errors.m

% Define the values in scientific notation and convert to standard form
p = 0.3000 * 10^1;    % 3.000 (value in standard form)
p_star = 0.3100 * 10^1; % 3.100 (value in standard form)

% Calculate the absolute error
absolute_error = abs(p - p_star); % Suppress output

% Calculate the relative error
relative_error = absolute_error / abs(p); % Suppress output

% Display the results
fprintf('True Value (p) = %.4f\n', p);
fprintf('Approximate Value (p*) = %.4f\n', p_star);
fprintf('Absolute Error = %.4f\n', absolute_error);
fprintf('Relative Error = %.4f\n', relative_error);
```
