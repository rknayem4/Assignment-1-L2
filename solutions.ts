const multiplyValue = (a: number, b: number | undefined = undefined) => {
  if (b === undefined) {
    return a * 2;
  }
  return a * b;
};

const processInput = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.toLowerCase().trim();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  if (input === true) {
    return "Active";
  }
  return "Inactive";
};

const formatCoordinate = (
  data: [lat: number, lng: number, location: string],
) => {
  const [lat, lng, location] = data;
  return `Location : ${location} (${lat} , ${lng})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.students >= minStudents && course.isPublished === true,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails() {
    return `Employee Name: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync =async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Age must be 18 or older."));
    }
  });
};
