import { useAuth } from "@/features/auth/hooks/use-auth";
import { createFileRoute, Navigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data: user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div className="flex items-center h-screen justify-center">
        <Loader2 className="size-8 animate-spin" />
      </div>
    );

  if (!user) {
    return <Navigate to={"/sign-in"} />;
  }

  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
