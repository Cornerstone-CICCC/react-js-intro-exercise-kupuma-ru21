export const Info = ({
  firstname,
  lastname,
  age,
  isStudent,
}: {
  firstname: string;
  lastname: string;
  age: number;
  isStudent: boolean;
}) => {
  return (
    <div>{`Name: ${firstname} ${lastname}, Age: ${age}, Is student: ${
      isStudent ? "Yes" : "No"
    }`}</div>
  );
};
