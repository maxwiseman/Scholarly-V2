import { Card, Input, Label } from "@/src/components/ui";

export function AccountSettings() {
  return (
    <>
      <p>Account Settings Placeholder</p>
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input placeholder="" id="firstName" />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input placeholder="" id="lastName" />
      </div>
      <Input placeholder="" id="email" />
    </>
  );
}
