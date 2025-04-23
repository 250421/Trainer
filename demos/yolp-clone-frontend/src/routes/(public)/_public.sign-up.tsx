import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(public)/_public/sign-up")({
  component: SignUpPage,
});

function SignUpPage() {
  return <div>Hello "/(public)/_public/sign-up"!</div>;
}
