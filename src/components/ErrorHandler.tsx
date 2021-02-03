import { ApolloError } from "@apollo/client";

interface ErrorProp {
  error?: ApolloError;
}
const ErrorHandler = ({ error }: ErrorProp) => {
  if (!error) return null;
  return (
    <div>
      {error && (
        <pre className="text-xs text-red-500">
          {error.graphQLErrors.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))}
        </pre>
      )}
    </div>
  );
};

export default ErrorHandler;
