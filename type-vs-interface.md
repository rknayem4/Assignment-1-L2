# Type vs Interface in TypeScript: Core Differences and When to Use Them

## Introduction

TypeScript provides two powerful ways to define data structures: `type` aliases and `interface`. Both help developers describe the shape of objects and improve code safety through static type checking. Although they look similar, they have some important differences. Understanding these differences helps developers write cleaner, more maintainable, and reusable code.

## Detailed Explanation

### 1. Type Alias

A `type` alias allows developers to create custom names for different types, including objects, primitive values, unions, and tuples.

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

One major advantage of `type` is that it supports union (`|`) and intersection (`&`) types.

### 2. Interface

An `interface` is mainly used to define the structure of objects. It describes which properties an object should contain and their respective data types.

```ts
interface Employee {
  name: string;
  salary: number;
}

interface Manager extends Employee {
  department: string;
}
```

Interfaces support inheritance through the `extends` keyword, making them useful for building reusable object structures.

### 3. Core Differences

The most important difference is that `type` supports primitive types, unions, intersections, and tuples, while `interface` primarily describes object structures. Another important feature of interfaces is declaration merging, which allows multiple interfaces with the same name to combine automatically. Type aliases do not support declaration merging.

### 4. When Should You Choose One?

Choose `interface` when defining object structures, API models, class contracts, or extensible properties. Choose `type` when working with union types, primitive aliases, tuples, or complex type combinations. Both can also be used together in the same project.

## Conclusion

In conclusion, neither `type` nor `interface` is universally better. Both are essential TypeScript features with different strengths. Developers should select the appropriate option based on their requirements, project structure, and code readability.