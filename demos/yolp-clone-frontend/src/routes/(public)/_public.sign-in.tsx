import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/_public/sign-in")({
  component: SignInPage,
});

function SignInPage() {
  return <div>Hello "/(public)/_public/sign-in"!</div>;
}
