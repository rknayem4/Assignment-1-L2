# Combining Union and Intersection Types in TypeScript

## Introduction

TypeScript provides several advanced features for creating flexible and reusable types. Two important features are Union (`|`) and Intersection (`&`) types. Union types allow a variable to accept multiple possible types, while intersection types combine multiple types into one. Using them together helps developers create more flexible and structured applications.

## Detailed Explanation

### 1. Union Types (`|`)

A Union type allows a variable to hold a value from two or more specified types. For example, an employee ID might be either a number or a string.

```ts
type EmployeeID = number | string;

const employeeOne: EmployeeID = 101;
const employeeTwo: EmployeeID = "EMP-102";
```

Here, both values are valid because the Union type accepts either `number` or `string`.

### 2. Intersection Types (`&`)

An Intersection type combines multiple types into a single type. The resulting object must contain all the required properties from each combined type.

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  salary: number;
  department: string;
};

type Staff = Person & Employee;
```

Now, a `Staff` object must contain all four properties.

### 3. Combining Union and Intersection

We can combine both operators to create more practical data structures.

```ts
type Admin = {
  role: "admin";
  permissions: string[];
};

type Customer = {
  role: "customer";
  purchaseHistory: number;
};

type UserInfo = {
  name: string;
  email: string;
};

type User = UserInfo & (Admin | Customer);
```

In this example, every user must have `name` and `email`, but they can have either admin permissions or customer purchase history. This approach is useful for role-based applications.

## Conclusion

Union and Intersection types make TypeScript more powerful and flexible. Union defines alternative possibilities, whereas Intersection combines multiple requirements. Understanding how to use them together helps developers build scalable, maintainable, and type-safe applications.